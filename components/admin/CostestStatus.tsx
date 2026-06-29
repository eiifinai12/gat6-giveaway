"use client";

import { Trophy, Users, Clock } from "lucide-react";

export default function ContestStatus() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-black mb-6">
        📢 Estado del Giveaway
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-zinc-800 rounded-xl p-5">

          <Users className="text-pink-500 mb-3" size={30} />

          <p className="text-zinc-400">
            Participantes
          </p>

          <h3 className="text-3xl font-black">
            En Vivo
          </h3>

        </div>

        <div className="bg-zinc-800 rounded-xl p-5">

          <Clock className="text-cyan-400 mb-3" size={30} />

          <p className="text-zinc-400">
            Estado
          </p>

          <h3 className="text-3xl font-black text-green-400">
            Activo
          </h3>

        </div>

        <div className="bg-zinc-800 rounded-xl p-5">

          <Trophy className="text-yellow-400 mb-3" size={30} />

          <p className="text-zinc-400">
            Premio
          </p>

          <h3 className="text-2xl font-black">
            GTA VI Ultimate
          </h3>

        </div>

      </div>

    </div>
  );
    }