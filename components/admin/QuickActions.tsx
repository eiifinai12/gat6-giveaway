"use client";

import { RefreshCw, Download, Trophy, Users } from "lucide-react";

type Props = {
  reload: () => void;
};

export default function QuickActions({ reload }: Props) {
  return (
    <div className="bg-zinc-900 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-black mb-6">
        ⚡ Acciones rápidas
      </h2>

      <div className="grid md:grid-cols-4 gap-4">

        <button
          onClick={reload}
          className="bg-blue-600 hover:bg-blue-500 rounded-xl p-5 font-bold flex flex-col items-center gap-3"
        >
          <RefreshCw size={30} />
          Actualizar
        </button>

        <button
          onClick={() =>
            document.querySelector("button.bg-cyan-500")?.dispatchEvent(
              new MouseEvent("click", { bubbles: true })
            )
          }
          className="bg-cyan-600 hover:bg-cyan-500 rounded-xl p-5 font-bold flex flex-col items-center gap-3"
        >
          <Download size={30} />
          Exportar
        </button>

        <button
          onClick={() =>
            document.querySelector("button.bg-yellow-500")?.dispatchEvent(
              new MouseEvent("click", { bubbles: true })
            )
          }
          className="bg-yellow-600 hover:bg-yellow-500 rounded-xl p-5 font-bold flex flex-col items-center gap-3"
        >
          <Trophy size={30} />
          Sortear
        </button>

        <button
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          className="bg-pink-600 hover:bg-pink-500 rounded-xl p-5 font-bold flex flex-col items-center gap-3"
        >
          <Users size={30} />
          Participantes
        </button>

      </div>

    </div>
  );
    }