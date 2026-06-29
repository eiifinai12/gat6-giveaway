"use client";

import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";

export default function Countdown() {
  const targetDate = new Date("2026-05-26T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) return;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Card = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-[0_0_40px_rgba(236,72,153,.18)]">
      <div className="text-5xl font-black bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
        {value}
      </div>

      <div className="mt-2 text-sm uppercase tracking-[0.25em] text-zinc-300">
        {label}
      </div>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

        <div className="flex items-center justify-center gap-3 mb-10">

          <Clock3 className="text-pink-400" size={32} />

          <h2 className="text-4xl font-black">
            Cuenta Regresiva
          </h2>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          <Card value={timeLeft.days} label="Días" />

          <Card value={timeLeft.hours} label="Horas" />

          <Card value={timeLeft.minutes} label="Minutos" />

          <Card value={timeLeft.seconds} label="Segundos" />

        </div>

      </div>

    </section>
  );
    }