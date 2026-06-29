"use client";

import { useEffect, useState } from "react";
import { Trophy, Users, Target } from "lucide-react";
import { supabase } from "../lib/supabase";

type Participant = {
  id: string;
  name: string;
  referral_code: string;
  referrals: number;
};

export default function MyPosition() {
  const [me, setMe] = useState<Participant | null>(null);
  const [position, setPosition] = useState(0);
  const [leader, setLeader] = useState(0);

  async function loadMyPosition() {
    const referralCode = localStorage.getItem("myReferralCode");

    if (!referralCode) return;

    const { data } = await supabase
      .from("participants")
      .select("*")
      .order("referrals", { ascending: false });

    if (!data) return;

    const index = data.findIndex(
      (p) => p.referral_code === referralCode
    );

    if (index === -1) return;

    setMe(data[index]);
    setPosition(index + 1);
    setLeader(data[0]?.referrals ?? 0);
  }

  useEffect(() => {
    loadMyPosition();

    const channel = supabase
      .channel("my-position")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "participants",
        },
        () => loadMyPosition()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (!me) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="rounded-[32px] border border-yellow-500/30 bg-white/5 backdrop-blur-xl p-8">

        <h2 className="text-3xl font-black mb-8">
          Tu progreso
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-2xl p-6">
            <Trophy className="text-yellow-400 mb-3" size={36} />
            <p className="text-4xl font-black">
              #{position}
            </p>
            <p className="text-zinc-400 mt-2">
              Posición actual
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <Users className="text-pink-400 mb-3" size={36} />
            <p className="text-4xl font-black">
              {me.referrals}
            </p>
            <p className="text-zinc-400 mt-2">
              Referidos
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <Target className="text-green-400 mb-3" size={36} />
            <p className="text-4xl font-black">
              {Math.max(leader - me.referrals, 0)}
            </p>
            <p className="text-zinc-400 mt-2">
              Para alcanzar al líder
            </p>
          </div>

        </div>

      </div>
    </section>
  );
    }