"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import { supabase } from "@/lib/supabase";

export default function ExportExcelButton() {
  const [loading, setLoading] = useState(false);

  async function exportExcel() {
    if (loading) return;

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("participants")
        .select("*")
        .order("referrals", { ascending: false });

      if (error) throw error;

      const rows =
        data?.map((p) => ({
          Nombre: p.name,
          Email: p.email,
          TikTok: p.tiktok,
          Codigo: p.referral_code,
          InvitadoPor: p.invited_by || "",
          Referidos: p.referrals,
          Fecha: new Date(p.created_at).toLocaleString(),
        })) || [];

      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(
        wb,
        ws,
        "Participantes"
      );

      XLSX.writeFile(
        wb,
        `Participantes_GTA_VI_${new Date()
          .toISOString()
          .slice(0, 10)}.xlsx`
      );
    } catch (err) {
      console.error(err);
      alert("No se pudo generar el Excel.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      disabled={loading}
      onClick={exportExcel}
      className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-white font-bold px-6 py-3 rounded-xl"
    >
      {loading ? "Generando..." : "📄 Exportar Excel"}
    </button>
  );
    }