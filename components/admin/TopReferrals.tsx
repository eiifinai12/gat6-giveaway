"use client";

import { useEffect, useState } from "react";
import { Crown } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Participant = {
  id: string;
  name: string;
  referrals: number;
};

export default function TopReferrals() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  async function load() {
    const { data } = await supabase
      .from("participants")
      .select("id,name,referrals")
      .order("referrals", { ascending: false })
      .limit(5);

    if (data) setParticipants(data);
  }

  useEffect(() => {
    load();

    const channel = supabase
      .channel("top-referrals")
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

  return (
    <div className="bg-zinc-900 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
        <Crown className="text-yellow-400" />
        Top 5 Referidos
      </h2>

      <div className="space-y-4">

        {participants.map((p, index) => (
          <div
            key={p.id}
            className="flex justify-between items-center bg-zinc-800 rounded-xl p-4"
          >
            <span className="font-bold">
              #{index + 1} {p.name}
            </span>

            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
              {p.referrals}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
    }