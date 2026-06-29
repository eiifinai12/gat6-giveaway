"use client";

import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Participant = {
  id: string;
  name: string;
  created_at: string;
};

export default function RecentParticipants() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  async function load() {
    const { data } = await supabase
      .from("participants")
      .select("id,name,created_at")
      .order("created_at", { ascending: false })
      .limit(5);

    if (data) setParticipants(data);
  }

  useEffect(() => {
    load();

    const channel = supabase
      .channel("recent-participants")
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
        <Clock3 className="text-cyan-400" />
        Últimos registros
      </h2>

      <div className="space-y-3">

        {participants.map((p) => (
          <div
            key={p.id}
            className="flex justify-between items-center bg-zinc-800 rounded-xl p-4"
          >
            <span className="font-semibold">{p.name}</span>

            <span className="text-zinc-400 text-sm">
              {new Date(p.created_at).toLocaleDateString()}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
    }