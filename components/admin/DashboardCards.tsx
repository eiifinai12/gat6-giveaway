"use client";

import { useEffect, useState } from "react";
import { Users, Share2, Trophy, CalendarDays } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Participant = {
  id: string;
  name: string;
  referrals: number;
  created_at: string;
};

export default function DashboardCards() {
  const [participants, setParticipants] = useState(0);
  const [referrals, setReferrals] = useState(0);
  const [leader, setLeader] = useState("-");
  const [today, setToday] = useState(0);

  async function loadData() {
    const { data, error } = await supabase
      .from("participants")
      .select("*");

    if (error || !data) return;

    setParticipants(data.length);

    const total = data.reduce(
      (sum, p) => sum + (p.referrals || 0),
      0
    );

    setReferrals(total);

    if (data.length > 0) {
      const sorted = [...data].sort(
        (a, b) => b.referrals - a.referrals
      );

      setLeader(sorted[0].name);
    }

    const todayDate = new Date().toISOString().slice(0, 10);

    const todayCount = data.filter(
      (p) => p.created_at?.slice(0, 10) === todayDate
    ).length;

    setToday(todayCount);
  }

  useEffect(() => {
    loadData();

    const channel = supabase
      .channel("dashboard-cards")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "participants",
        },
        () => loadData()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const cards = [
    {
      title: "Participantes",
      value: participants,
      icon: <Users size={32} />,
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "Referidos",
      value: referrals,
      icon: <Share2 size={32} />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Líder",
      value: leader,
      icon: <Trophy size={32} />,
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Hoy",
      value: today,
      icon: <CalendarDays size={32} />,
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-10">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`bg-gradient-to-br ${card.color} rounded-3xl p-6 shadow-xl`}
        >
          <div className="flex justify-between items-center mb-5">
            {card.icon}

            <span className="text-sm opacity-90">
              {card.title}
            </span>
          </div>

          <h2 className="text-4xl font-black break-words">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
    }