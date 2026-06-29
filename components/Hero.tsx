        "use client";

        import Image from "next/image";
        import { motion } from "framer-motion";
        import { Gift, Trophy, Users, Sparkles } from "lucide-react";

            import RegisterForm from "./RegisterForm";
        import Ranking from "./Ranking";

        export default function Hero() {
        return (
            <main
    id="inicio"
    className="relative min-h-screen overflow-hidden bg-[#090014] text-white pt-32"
    >

                {/* Fondo Vice City */}

        <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-fuchsia-600/30 blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[160px]" />

        <div className="absolute top-20 right-0 h-[450px] w-[450px] rounded-full bg-orange-500/20 blur-[150px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#3b1365]/40 via-[#170326]/70 to-[#090014]" />

        </div>

            {/* HERO */}

                <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">

                <motion.div
                initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
                >

                {/* Imagen */}

                <div>

                    <Image
                    src="/hero.jpg"
                    alt="GTA VI"
                    width={900}
                    height={900}
                    priority
                    className="
    rounded-[32px]
    border
    border-pink-400/30
    shadow-[0_0_80px_rgba(236,72,153,.35)]
    hover:scale-[1.02]
    transition-all
    duration-500
    "
                    />

                </div>

                {/* Texto */}

                <div>

                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500 px-4 py-2 rounded-full mb-6">

                    <Sparkles className="text-yellow-400" size={18} />

                    <span className="text-yellow-300 font-semibold">

                        Giveaway Oficial

                    </span>

                    </div>

                    <h1 className="text-6xl font-black leading-none">

                    GTA VI

                    </h1>

                    <h2 className="text-3xl text-yellow-400 font-bold mt-3">

                    Ultimate Edition

                    </h2>

                    <p className="text-zinc-300 text-lg mt-8 leading-8">

                    Participa totalmente GRATIS.

                    Invita amigos usando tu enlace personal.

                    El participante con más referidos será el ganador.

                    </p>

                    <div className="grid grid-cols-2 gap-5 mt-10">

                    <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">

                        <Gift
                        className="text-yellow-400 mb-3"
                        size={35}
                        />

                        <h3 className="font-bold text-xl">

                        Premio

                        </h3>

                        <p className="text-zinc-400">

                        GANA
                            
                        GTA VI
                        
                        Ultimate Edition

                        </p>

                    </div>

                    <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">

                        <Users
                        className="text-pink-500 mb-3"
                        size={35}
                        />

                        <h3 className="font-bold text-xl">

                        Referidos

                        </h3>

                        <p className="text-zinc-400">

                        Más invitados = más posibilidades

                        </p>

                    </div>

                    </div>
                    
                    <div className="mt-12">

                    <div className="flex flex-wrap gap-4">

                        <a
                            href="https://www.tiktok.com/@eifinai12"
                        target="_blank"
                        className="bg-pink-600 hover:bg-pink-500 transition px-8 py-4 rounded-2xl font-bold text-lg"
                        >
                        Sígueme en TikTok
                        </a>

                       <a
  href="#participar"
  className="bg-yellow-500 hover:bg-yellow-400 transition text-black px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 rounded-2xl"
>
  <Trophy size={22} />
  Participar
    </a>

                    </div>

                    </div>

                </div>

                </motion.div>

            </section>

            
            </main>
        );
                                    }