"use client";

import { useState } from "react";
import { Settings2 } from "lucide-react";

export default function GiveawaySettings() {
  const [weighted, setWeighted] = useState(true);
  const [allowRepeatWinner, setAllowRepeatWinner] = useState(false);

  return (
    <div className="bg-zinc-900 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-black flex items-center gap-3 mb-6">
        <Settings2 className="text-orange-400" />
        Configuración del Giveaway
      </h2>

      <div className="space-y-5">

        <label className="flex justify-between items-center bg-zinc-800 rounded-xl p-4 cursor-pointer">

          <div>
            <p className="font-bold">
              Más oportunidades por referidos
            </p>

            <p className="text-sm text-zinc-400">
              Cada referido suma un boleto adicional.
            </p>
          </div>

          <input
            type="checkbox"
            checked={weighted}
            onChange={() => setWeighted(!weighted)}
            className="w-5 h-5"
          />

        </label>

        <label className="flex justify-between items-center bg-zinc-800 rounded-xl p-4 cursor-pointer">

          <div>
            <p className="font-bold">
              Permitir ganadores repetidos
            </p>

            <p className="text-sm text-zinc-400">
              Si está desactivado, un ganador no podrá volver a salir.
            </p>
          </div>

          <input
            type="checkbox"
            checked={allowRepeatWinner}
            onChange={() =>
              setAllowRepeatWinner(!allowRepeatWinner)
            }
            className="w-5 h-5"
          />

        </label>

      </div>

    </div>
  );
    }