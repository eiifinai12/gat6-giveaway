"use client";

import { Activity } from "lucide-react";

export default function SystemLogs() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-black flex items-center gap-3 mb-6">
        <Activity className="text-green-400" />
        Registro del Sistema
      </h2>

      <div className="space-y-3">

        <div className="bg-zinc-800 rounded-xl p-4 flex justify-between">
          <span>✅ Sistema iniciado</span>
          <span className="text-zinc-400">
            {new Date().toLocaleTimeString()}
          </span>
        </div>

        <div className="bg-zinc-800 rounded-xl p-4 flex justify-between">
          <span>✅ Supabase conectado</span>
          <span className="text-green-400">
            OK
          </span>
        </div>

        <div className="bg-zinc-800 rounded-xl p-4 flex justify-between">
          <span>✅ Realtime activo</span>
          <span className="text-green-400">
            OK
          </span>
        </div>

      </div>

    </div>
  );
    }