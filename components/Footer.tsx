"use client";

import { Heart, Camera, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              GTA VI Giveaway
            </h2>

            <p className="text-zinc-400 mt-4 leading-7">
              Participa gratis, comparte tu enlace de referidos y
              consigue la mayor cantidad de invitados para ganar
              GTA VI Ultimate Edition.
            </p>

          </div>

          {/* Enlaces */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Navegación
            </h3>

            <div className="flex flex-col gap-3 text-zinc-400">

              <a href="#inicio" className="hover:text-pink-400 transition">
                Inicio
              </a>

              <a href="#ranking" className="hover:text-pink-400 transition">
                Ranking
              </a>

              <a href="#premio" className="hover:text-pink-400 transition">
                Premio
              </a>

            </div>

          </div>

          {/* Redes */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Sígueme
            </h3>

            <div className="flex gap-4">

              <a
                href="https://www.tiktok.com/@eifinai12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-pink-600 hover:scale-110 transition flex items-center justify-center"
              >
                <Music2 size={22} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-110 transition flex items-center justify-center"
              >
                        <Camera size={22} />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-sm">
            © 2026 Eiifinai Giveaway. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2 text-zinc-500 text-sm">

            Hecho con

            <Heart
              size={16}
              className="text-pink-500 fill-pink-500"
            />

            para la comunidad de GTA VI.

          </div>

        </div>

      </div>

    </footer>
  );
    }