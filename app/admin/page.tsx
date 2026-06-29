"use client";

import { useState } from "react";
import DashboardCards from "@/components/admin/DashboardCards";
import ParticipantsTable from "@/components/admin/ParticipantsTable";
import ExportExcelButton from "@/components/admin/ExportExcelButton";
import WinnerButton from "@/components/admin/WinnerButton";
import StatsChart from "@/components/admin/StatsChart";
import TopReferrals from "@/components/admin/TopReferrals";
import RecentParticipants from "@/components/admin/RecentParticipants";
import SystemStatus from "@/components/admin/SystemStatus";
import WinnersHistory from "@/components/admin/WinnersHistory";
import AdminSettings from "@/components/admin/AdminSettings";
import QuickActions from "@/components/admin/QuickActions";
import DatabaseTools from "@/components/admin/DatabaseTools";
import BackupDatabase from "@/components/admin/BackupDatabase";
import SystemLogs from "@/components/admin/SystemLogs";
import GiveawaySettings from "@/components/admin/GiveawaySettings";
import LiveCounter from "@/components/admin/LiveCounter";
import ContestStatus from "@/components/admin/ContestStatus";
import RecentActivity from "@/components/admin/RecentActivity";
import AdminFooter from "@/components/admin/AdminFooter";

export default function AdminPage() {
  const [logged, setLogged] = useState(false);
  const [password, setPassword] = useState("");

  function login() {
    if (password === "Eiifinai2026") {
      setLogged(true);
    } else {
      alert("Contraseña incorrecta");
    }
  }

  if (!logged) {
    return (
      <main className="min-h-screen bg-[#090014] flex items-center justify-center px-6">

        <div className="bg-zinc-900 border border-pink-500/20 rounded-3xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-black text-white text-center mb-8">
            🔒 Panel Administrador
          </h1>

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-800 rounded-xl p-4 text-white mb-6"
          />

          <button
            onClick={login}
            className="w-full bg-pink-600 hover:bg-pink-500 py-4 rounded-xl text-white font-bold"
          >
            Entrar
          </button>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090014] text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-5xl font-black">
          🎮 Dashboard
        </h1>

        <p className="text-zinc-400 mt-2 mb-10">
          Giveaway GTA VI Ultimate Edition
        </p>

        <DashboardCards />

        <div className="flex flex-wrap gap-4 justify-between items-center my-8">

          <WinnerButton />

          <ExportExcelButton />

        </div>

        <StatsChart />

        <ParticipantsTable />
            <TopReferrals />
                <RecentParticipants />
                    <SystemStatus />
                        <WinnersHistory />
                            <AdminSettings />
                                    <QuickActions reload={() => window.location.reload()} />
                                    <DatabaseTools />
                                        <BackupDatabase />
                                            <SystemLogs />
                                                <GiveawaySettings />
                                                        <ContestStatus />
                                                        <RecentActivity />
                                                    <LiveCounter />
                                                        <AdminFooter />
      </div>

    </main>
  );
    }