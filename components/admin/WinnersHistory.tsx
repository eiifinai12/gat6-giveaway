  "use client";

  import { useEffect, useState } from "react";
  import { Trophy } from "lucide-react";
  import { supabase } from "@/lib/supabase";

  type Winner = {
    id: string;
    name: string;
    tiktok: string;
    referrals: number;
    created_at: string;
  };

  export default function WinnersHistory() {
    const [winners, setWinners] = useState<Winner[]>([]);

    async function load() {
      const { data } = await supabase
        .from("winners")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) setWinners(data);
    }

    useEffect(() => {
      load();

      const channel = supabase
        .channel("winners-history")
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "winners",
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
          <Trophy className="text-yellow-400" />
          Historial de Ganadores
        </h2>

        {winners.length === 0 ? (
          <p className="text-zinc-400">
            Aún no hay sorteos realizados.
          </p>
        ) : (
          <div className="space-y-3">

            {winners.map((winner) => (
              <div
                key={winner.id}
                className="bg-zinc-800 rounded-xl p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-bold">{winner.name}</p>
                  <p className="text-sm text-zinc-400">
                    @{winner.tiktok}
                  </p>
                </div>
    
                <div className="text-right">
                  <p className="text-yellow-400 font-bold">
                    {winner.referrals} referidos
                  </p>

                  <p className="text-xs text-zinc-500">
                    {new Date(winner.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    );
        }