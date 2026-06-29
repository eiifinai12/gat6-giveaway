"use client";

import { Settings } from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-black flex items-center gap-3 mb-6">
        <Settings className="text-cyan-400" />
        Configuración
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between bg-zinc-800 rounded-xl p-4">
          <span>Realtime</span>
          <span className="text-green-400 font-bold">
            Activo
          </span>
        </div>

        <div className="flex justify-between bg-zinc-800 rounded-xl p-4">
          <span>Supabase</span>
          <span className="text-green-400 font-bold">
            Conectado
          </span>
        </div>

        <div className="flex justify-between bg-zinc-800 rounded-xl p-4">
          <span>Versión</span>
          <span className="text-cyan-400 font-bold">
            v1.0
          </span>
        </div>

      </div>

    </div>
  );
    }