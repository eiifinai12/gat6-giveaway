"use client";

import Link from "next/link";
import { Trophy, Gift, CircleHelp } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 pt-5">

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(236,72,153,.18)]">

          <div className="flex items-center justify-between px-8 py-5">

            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center font-black text-white text-xl shadow-lg">
                VI
              </div>

              <div>
                <h1 className="font-black text-xl leading-none text-white">
                      GTA VI
                </h1>

                <p className="text-sm text-zinc-400">
                  Giveaway
                </p>
                </div>
            </Link>

            {/* Menú */}

            <nav className="hidden md:flex items-center gap-10">

              <a
                href="#inicio"
                className="text-zinc-300 hover:text-white transition"
              >
                Inicio
              </a>

              <a
                href="#ranking"
                className="flex items-center gap-2 text-zinc-300 hover:text-yellow-400 transition"
              >
                <Trophy size={18} />
                Ranking
              </a>

              <a
                href="#premio"
                className="flex items-center gap-2 text-zinc-300 hover:text-yellow-400 transition"
              >
                <Gift size={18} />
                Premio
              </a>

              <a
                href="#como"
                className="flex items-center gap-2 text-zinc-300 hover:text-pink-400 transition"
              >
                <CircleHelp size={18} />
                Cómo participar
              </a>

            </nav>

            {/* Botón */}

            <a
              href="https://www.tiktok.com/@eifinai12"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 px-7 py-3 font-bold text-white shadow-lg hover:scale-105 transition"
            >
              Sígueme en TikTok
            </a>

          </div>

        </div>

      </div>
    </motion.header>
  );
        }