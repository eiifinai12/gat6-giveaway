        "use client";

        import { useEffect, useState } from "react";
        import { supabase } from "../lib/supabase";

        type Participant = {
        id: string;
        name: string;
        referrals: number;
        };

        export default function Ranking() {
        const [participants, setParticipants] = useState<Participant[]>([]);
        const [loading, setLoading] = useState(true);

        async function loadRanking() {

            const { data, error } = await supabase
            .from("participants")
            .select("*")
            .order("referrals", { ascending: false })
            .limit(10);

            console.log("ERROR:", error);
            console.log("DATA:", data);

            if (!error && data) {
  setParticipants(data);
}

if (loading) {
  setLoading(false);
    }
        }

        useEffect(() => {
        loadRanking();

        const interval = setInterval(() => {
            loadRanking();
        }, 2000);

        return () => clearInterval(interval);
                }, []);

        if (loading) {
            return (
            <div className="max-w-2xl mx-auto mt-12 bg-zinc-900 rounded-xl p-6 border border-yellow-500">
                <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
                🏆 Top 10 Participantes
                </h2>

                <p className="text-center text-gray-400">
                Cargando participantes...
                </p>
            </div>
            );
        }

        return (
            <div className="max-w-2xl mx-auto mt-12 bg-zinc-900 rounded-xl p-6 border border-yellow-500">
            <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
                🏆 Top 10 Participantes
            </h2>

            {participants.length === 0 ? (
                <p className="text-center text-gray-400">
                Aún no hay participantes.
                </p>
            ) : (
                <div className="space-y-3">
                {participants.map((participant, index) => (
                    <div
                    key={participant.id}
                    className="flex justify-between items-center bg-zinc-800 rounded-lg p-4"
                    >
                    <div className="flex items-center gap-3">
                        <span className="text-yellow-400 font-bold text-xl">
                        #{index + 1}
                        </span>

                        <span className="text-white font-semibold">
                        {participant.name}
                        </span>
                    </div>

                    <span className="text-pink-400 font-bold">
                        {participant.referrals} referidos
                    </span>
                    </div>
                ))}
                </div>
            )}
            </div>
        );
            }