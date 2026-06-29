"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  participant: any;
  onClose: () => void;
  onSaved: () => void;
};

export default function EditParticipantModal({
  participant,
  onClose,
  onSaved,
}: Props) {
  const [name, setName] = useState(participant.name);
  const [email, setEmail] = useState(participant.email);
  const [tiktok, setTiktok] = useState(participant.tiktok);
  const [loading, setLoading] = useState(false);

  async function save() {
    setLoading(true);

    const { error } = await supabase
      .from("participants")
      .update({
        name,
        email,
        tiktok,
      })
      .eq("id", participant.id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    onSaved();
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-zinc-900 p-8 rounded-3xl w-full max-w-md">

        <h2 className="text-3xl font-black mb-6">
          Editar participante
        </h2>

        <input
          className="w-full p-3 rounded bg-zinc-800 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-zinc-800 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-zinc-800 mb-6"
          value={tiktok}
          onChange={(e) => setTiktok(e.target.value)}
        />

        <div className="flex gap-4">

          <button
            onClick={save}
            disabled={loading}
            className="flex-1 bg-green-600 hover:bg-green-500 py-3 rounded-xl font-bold"
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-red-600 hover:bg-red-500 py-3 rounded-xl font-bold"
          >
            Cancelar
          </button>

        </div>

      </div>

    </div>
  );
    }