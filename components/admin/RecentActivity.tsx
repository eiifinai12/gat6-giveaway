"use client";

import { History } from "lucide-react";

const activities = [
  {
    id: 1,
    text: "Sistema iniciado correctamente",
  },
  {
    id: 2,
    text: "Realtime conectado",
  },
  {
    id: 3,
    text: "Panel listo para administrar",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-black flex items-center gap-3 mb-6">
        <History className="text-cyan-400" />
        Actividad reciente
      </h2>

      <div className="space-y-4">

        {activities.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-800 rounded-xl p-4 flex justify-between"
          >
            <span>{item.text}</span>

            <span className="text-zinc-500">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
    }