"use client";

import { Database, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function DatabaseTools() {
  async function clearWinners() {
    if (!confirm("¿Eliminar todo el historial de ganadores?")) return;

    const { error } = await supabase
      .from("winners")
      .delete()
        .not("id", "is", null);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Historial eliminado.");
    window.location.reload();
  }

  return (
    <div className="bg-zinc-900 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-black flex items-center gap-3 mb-6">
        <Database className="text-green-400" />
        Herramientas
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <button
          onClick={clearWinners}
          className="bg-red-600 hover:bg-red-500 rounded-xl p-5 font-bold flex items-center justify-center gap-3"
        >
          <Trash2 size={24} />
          Borrar historial de ganadores
        </button>

      </div>

    </div>
  );
    }