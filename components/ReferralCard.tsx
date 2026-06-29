"use client";

type Props = {
  link: string;
};

export default function ReferralCard({ link }: Props) {
  if (!link) return null;

  async function copyLink() {
    await navigator.clipboard.writeText(link);
    alert("✅ Enlace copiado");
  }

  return (
    <div className="mt-6 rounded-2xl border border-pink-500 bg-zinc-900 p-6">
      <h3 className="text-xl font-bold text-pink-400 mb-3">
        🎉 Tu enlace de referido
      </h3>

      <input
        readOnly
        value={link}
        className="w-full rounded-lg bg-zinc-800 p-3 text-white"
      />

      <button
        onClick={copyLink}
        className="mt-4 w-full rounded-lg bg-pink-500 py-3 font-bold text-white hover:bg-pink-400"
      >
        Copiar enlace
      </button>
    </div>
  );
    }