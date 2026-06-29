"use client";

import { useEffect, useMemo, useState } from "react";
import { Trash2, Search, Pencil } from "lucide-react";
import { supabase } from "@/lib/supabase";
import EditParticipantModal from "./EditParticipantModal";

type Participant = {
  id: string;
  name: string;
  email: string;
  tiktok: string;
  referral_code: string;
  invited_by: string | null;
  referrals: number;
  created_at: string;
};

export default function ParticipantsTable() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Participant | null>(null);

  async function loadParticipants() {
    const { data, error } = await supabase
      .from("participants")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setParticipants(data);
    }

    setLoading(false);
  }

  async function deleteParticipant(id: string) {
    const ok = confirm(
      "¿Seguro que deseas eliminar este participante?"
    );

    if (!ok) return;

    const { error } = await supabase
      .from("participants")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    loadParticipants();
  }

  useEffect(() => {
    loadParticipants();

    const channel = supabase
      .channel("participants-admin")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "participants",
        },
        () => {
          loadParticipants();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const filteredParticipants = useMemo(() => {
    const value = search.toLowerCase();

    return participants.filter((participant) => {
      return (
        participant.name.toLowerCase().includes(value) ||
        participant.email.toLowerCase().includes(value) ||
        participant.tiktok.toLowerCase().includes(value)
      );
    });
  }, [participants, search]);

  if (loading) {
    return (
      <div className="bg-zinc-900 rounded-3xl p-8 mt-8 border border-white/10">
        <p className="text-center text-zinc-400">
          Cargando participantes...
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-zinc-900 rounded-3xl p-8 mt-8 border border-white/10">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-3xl font-black">
            Participantes
          </h2>

          <span className="bg-pink-600 px-4 py-2 rounded-full font-bold">
            {participants.length}
          </span>

        </div>

        <div className="relative mb-6">

          <Search
            className="absolute left-4 top-3.5 text-zinc-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Buscar por nombre, correo o TikTok..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-800 rounded-xl py-3 pl-12 pr-4 text-white"
          />

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-zinc-700 text-zinc-300">

                <th className="text-left py-4">
                  Nombre
                </th>

                <th className="text-left py-4">
                  TikTok
                </th>

                <th className="text-left py-4">
                  Correo
                </th>

                <th className="text-center py-4">
                  Referidos
                </th>

                <th className="text-center py-4">
                  Acciones
                </th>

              </tr>

            </thead>

            <tbody>
                {filteredParticipants.map((participant) => (
                <tr
                  key={participant.id}
                  className="border-b border-zinc-800 hover:bg-zinc-800/40 transition"
                >
                  <td className="py-4 font-semibold">
                    {participant.name}
                  </td>

                  <td className="py-4">
                    @{participant.tiktok}
                  </td>

                  <td className="py-4 text-zinc-300">
                    {participant.email}
                  </td>

                  <td className="py-4 text-center">
                    <span className="bg-pink-600 px-3 py-1 rounded-full font-bold">
                      {participant.referrals}
                    </span>
                  </td>

                  <td className="py-4">

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() => setEditing(participant)}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl font-bold transition"
                      >
                        <Pencil size={18} />
                        Editar
                      </button>

                      <button
                        onClick={() => deleteParticipant(participant.id)}
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl font-bold transition"
                      >
                        <Trash2 size={18} />
                        Eliminar
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

              {filteredParticipants.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-10 text-zinc-500"
                  >
                    No se encontraron participantes.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

      {editing && (
        <EditParticipantModal
          participant={editing}
          onClose={() => setEditing(null)}
          onSaved={loadParticipants}
        />
      )}

    </>
  );
    }