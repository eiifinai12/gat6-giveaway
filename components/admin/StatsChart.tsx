"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function StatsChart() {
  const [participants, setParticipants] = useState(0);
  const [referrals, setReferrals] = useState(0);

  async function load() {
    const { data } = await supabase
      .from("participants")
      .select("referrals");

    if (!data) return;

    setParticipants(data.length);

    const total = data.reduce(
      (sum, item) => sum + (item.referrals || 0),
      0
    );

    setReferrals(total);
  }

  useEffect(() => {
    load();

    const channel = supabase
      .channel("admin-stats")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "participants",
        },
        load
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const progress =
    participants === 0
      ? 0
      : Math.min((referrals / participants) * 20, 100);

  return (
    <div className="bg-zinc-900 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-black mb-8">
        📈 Estadísticas
      </h2>

      <div className="mb-6">

        <div className="flex justify-between mb-2">
          <span>Participantes</span>
          <span>{participants}</span>
        </div>

        <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">

          <div
            className="h-full bg-pink-500"
            style={{
              width: "100%",
            }}
          />

        </div>

      </div>

      <div>

        <div className="flex justify-between mb-2">
          <span>Referidos</span>
          <span>{referrals}</span>
        </div>

        <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">

          <div
            className="h-full bg-yellow-400"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
    }