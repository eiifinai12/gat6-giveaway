"use client";

import Image from "next/image";
import { Trophy, Star, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function Prize() {
  return (
    <section
      id="premio"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(236,72,153,.18)]"
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center p-10">

          {/* Imagen */}

          <div className="relative">

            <Image
              src="/hero.jpg"
              alt="GTA VI Ultimate Edition"
              width={700}
              height={700}
              className="rounded-3xl border border-pink-400/20 shadow-[0_0_70px_rgba(236,72,153,.30)]"
            />

          </div>

          {/* Información */}

          <div>

            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6">

              <Gift className="text-yellow-400" size={18} />

              <span className="text-yellow-300 font-semibold">
                Gran Premio
              </span>

            </div>

            <h2 className="text-5xl font-black leading-tight">

              GTA VI

              <br />

              <span className="text-transparent bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text">

                Ultimate Edition

              </span>

            </h2>

            <p className="text-zinc-300 text-lg mt-8 leading-8">

              Invita amigos utilizando tu enlace exclusivo.

              El participante con más referidos válidos será el ganador del
              Giveaway.

            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">

                <Star className="text-pink-400" />

                <span>Participación 100% gratuita.</span>

              </div>

              <div className="flex items-center gap-4">

                <Star className="text-pink-400" />

                <span>Enlace único para cada participante.</span>

              </div>

              <div className="flex items-center gap-4">

                <Star className="text-pink-400" />

                <span>El ranking se actualiza automáticamente.</span>

              </div>

              <div className="flex items-center gap-4">

                <Trophy className="text-yellow-400" />

                <span>El primer lugar gana GTA VI Ultimate Edition.</span>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
        }