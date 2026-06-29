"use client";

import { HardDriveDownload } from "lucide-react";
import { supabase } from "@/lib/supabase";
import * as XLSX from "xlsx";

export default function BackupDatabase() {
  async function backup() {
    const { data, error } = await supabase
      .from("participants")
      .select("*");

    if (error) {
      alert(error.message);
      return;
    }

    const workbook = XLSX.utils.book_new();

    const worksheet = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Backup"
    );

    XLSX.writeFile(
      workbook,
      `Backup_${new Date().toISOString().slice(0,10)}.xlsx`
    );
  }

  return (
    <div className="bg-zinc-900 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-black mb-6">
        💾 Respaldo
      </h2>

      <button
        onClick={backup}
        className="bg-green-600 hover:bg-green-500 px-6 py-4 rounded-xl font-bold flex items-center gap-3"
      >
        <HardDriveDownload size={24}/>
        Crear respaldo completo
      </button>

    </div>
  );
    }