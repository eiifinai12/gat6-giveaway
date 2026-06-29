"use client";

import { Database, Wifi } from "lucide-react";

export default function SystemStatus() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-black mb-6">
        ⚙ Estado del Sistema
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between items-center bg-zinc-800 rounded-xl p-4">
          <span className="flex items-center gap-2">
            <Database size={20} />
            Supabase
          </span>

          <span className="text-green-400 font-bold">
            ● Conectado
          </span>
        </div>

        <div className="flex justify-between items-center bg-zinc-800 rounded-xl p-4">
          <span className="flex items-center gap-2">
            <Wifi size={20} />
            Realtime
          </span>

          <span className="text-green-400 font-bold">
            ● Activo
          </span>
        </div>

      </div>

    </div>
  );
    }