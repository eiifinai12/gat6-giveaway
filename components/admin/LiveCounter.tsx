"use client";

import { useEffect, useState } from "react";
import { Activity } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function LiveCounter() {
  const [participants, setParticipants] = useState(0);

  async function load() {
    const { count } = await supabase
      .from("participants")
      .select("*", {
        count: "exact",
        head: true,
      });

    setParticipants(count || 0);
  }

  useEffect(() => {
    load();

    const channel = supabase
      .channel("live-counter")
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
    <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 mt-8">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-lg opacity-90">
            Participantes en vivo
          </p>

          <h2 className="text-6xl font-black">
            {participants}
          </h2>

        </div>

        <Activity
          size={70}
          className="animate-pulse"
        />

      </div>

    </div>
  );
    }