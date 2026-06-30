"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const target = new Date("2026-05-26T20:00:00").getTime();

  const [time, setTime] = useState(target - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(target - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  if (time <= 0) {
    return (
      <h2 className="text-4xl font-black text-red-500">
        ¡EL GIVEAWAY TERMINÓ!
      </h2>
    );
  }

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  return (
    <div className="flex gap-6 justify-center text-center mt-8 flex-wrap">
      <Box label="Días" value={days} />
      <Box label="Horas" value={hours} />
      <Box label="Minutos" value={minutes} />
      <Box label="Segundos" value={seconds} />
    </div>
  );
}

function Box({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 w-28">
      <div className="text-4xl font-black">{value}</div>
      <div className="text-zinc-400">{label}</div>
    </div>
  );
  }