      "use client";

      import { useEffect, useState } from "react";
      import { Users, Share2, Trophy } from "lucide-react";
      import { supabase } from "../lib/supabase";

      export default function Stats() {
        const [participants, setParticipants] = useState(0);
        const [referrals, setReferrals] = useState(0);

        async function loadStats() {
          const { data, error } = await supabase
            .from("participants")
            .select("referrals");

          if (error) {
            console.log(error);
            return;
          }

          setParticipants(data.length);

          const total = data.reduce(
            (sum, item) => sum + (item.referrals || 0),
            0
          );

          setReferrals(total);
        }

        useEffect(() => {
      loadStats();

      const interval = setInterval(() => {
        loadStats();
      }, 2000);

      return () => clearInterval(interval);
        }, []);

        return (
          <section className="max-w-7xl mx-auto px-6 py-20">

            <div className="grid md:grid-cols-3 gap-6">

              <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
                <Users size={42} className="text-pink-400 mb-5" />

                <p className="text-5xl font-black">
                  {participants}
                </p>

                <p className="text-zinc-300 mt-2">
                  Participantes registrados
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
                <Share2 size={42} className="text-orange-400 mb-5" />

                <p className="text-5xl font-black">
                  {referrals}
                </p>

                <p className="text-zinc-300 mt-2">
                  Referidos conseguidos
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
                <Trophy size={42} className="text-yellow-400 mb-5" />

                <p className="text-3xl font-black">
                  GTA VI
                </p>

                <p className="text-zinc-300 mt-2">
                  Ultimate Edition
                </p>
              </div>

            </div>

          </section>
        );
          }