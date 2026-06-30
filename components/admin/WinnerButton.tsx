"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { supabase } from "@/lib/supabase";

type Participant = {
  id: string;
  name: string;
  email: string;
  tiktok: string;
  referral_code: string;
  referrals: number;
  created_at: string;
};

export default function WinnerButton() {
  const [winner, setWinner] = useState<Participant | null>(null);
  const [loading, setLoading] = useState(false);

  async function pickWinner() {
    setLoading(true);

    const { data, error } = await supabase
      .from("participants")
      .select("*");

    if (error || !data || data.length === 0) {
      alert("No hay participantes.");
      setLoading(false);
      return;
    }

    data.sort((a, b) => {
      if (b.referrals !== a.referrals) {
        return b.referrals - a.referrals;
      }

      return (
        new Date(a.created_at).getTime() -
        new Date(b.created_at).getTime()
      );
    });

    const finalWinner = data[0];

    setWinner(finalWinner);

    confetti({
      particleCount: 250,
      spread: 180,
      origin: {
        y: 0.6,
      },
    });

    await supabase
      .from("winners")
      .insert([
        {
          participant_id: finalWinner.id,
          name: finalWinner.name,
          email: finalWinner.email,
          tiktok: finalWinner.tiktok,
          referrals: finalWinner.referrals,
          referral_code: finalWinner.referral_code,
        },
      ]);

    setLoading(false);
  }

  return (
    <div className="my-8">

      <button
        onClick={pickWinner}
        disabled={loading}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl text-xl"
      >
        {loading ? "🏆 Buscando ganador..." : "🏆 Elegir Ganador"}
      </button>
      {winner && (
        <div className="mt-8 rounded-3xl border-2 border-yellow-500 bg-zinc-900 p-8">

          <h2 className="text-4xl font-black text-yellow-400 mb-6">
            🎉 GANADOR 🎉
          </h2>

          <p className="text-2xl mb-2">
            👤 {winner.name}
          </p>

          <p className="mb-2">
            📧 {winner.email}
          </p>

          <p className="mb-2">
            🎵 @{winner.tiktok}
          </p>

          <p className="mb-6">
            👥 {winner.referrals} referidos
          </p>

          <button
            onClick={() =>
              navigator.clipboard.writeText(
`Nombre: ${winner.name}
Correo: ${winner.email}
TikTok: @${winner.tiktok}
Referidos: ${winner.referrals}`
              )
            }
            className="bg-pink-600 hover:bg-pink-500 px-6 py-3 rounded-xl font-bold"
          >
            📋 Copiar datos
          </button>

        </div>
      )}

    </div>
  );
  }