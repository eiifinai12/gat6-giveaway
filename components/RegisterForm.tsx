    "use client";

    import { useEffect, useState } from "react";
    import { supabase } from "../lib/supabase";
    import ReferralCard from "./ReferralCard";

    export default function RegisterForm() {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [tiktok, setTiktok] = useState("");
      const [loading, setLoading] = useState(false);
      const [invitedBy, setInvitedBy] = useState("");
      const [myLink, setMyLink] = useState("");

      useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const ref = params.get("ref");

        if (ref) {
          setInvitedBy(ref);
        }
      }, []);

      async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (localStorage.getItem("registered")) {
  alert("Ya estás registrado en este dispositivo.");
  return;
}

        setLoading(true);

        const referralCode = crypto
          .randomUUID()
          .replace(/-/g, "")
          .slice(0, 8)
          .toUpperCase();

        const { error } = await supabase
          .from("participants")
          .insert([
            {
              name,
              email,
              tiktok,
              referral_code: referralCode,
              invited_by: invitedBy,
              referrals: 0,
            },
          ]);

        setLoading(false);

        if (error) {
  console.log(error);

  if (error.message.includes("email")) {
    alert("Este correo electrónico ya está registrado.");
  } else if (error.message.includes("tiktok")) {
    alert("Este usuario de TikTok ya está registrado.");
  } else {
    alert("Ocurrió un error al registrarte.");
  }

  return;
  }

        if (invitedBy) {
          const { data } = await supabase
            .from("participants")
            .select("referrals")
            .eq("referral_code", invitedBy)
            .single();

          if (data) {
            await supabase
              .from("participants")
              .update({
                referrals: data.referrals + 1,
              })
              .eq("referral_code", invitedBy);
          }
        }

        const link = window.location.origin + "/?ref=" + referralCode;

        setMyLink(link);

        alert("¡Registro exitoso!");
        localStorage.setItem("registered", "true");
          localStorage.setItem("myReferralCode", referralCode);


        setName("");
        setEmail("");
        setTiktok("");
      }

      return (
            <section id="participar" className="max-w-md mx-auto mt-10 scroll-mt-32">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded bg-zinc-800 text-white"
              required
            />

              <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-zinc-800 text-white"
              required
            />

            <input
              type="text"
              placeholder="Usuario de TikTok"
              value={tiktok}
              onChange={(e) => setTiktok(e.target.value)}
              className="w-full p-3 rounded bg-zinc-800 text-white"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded"
            >
              {loading ? "Registrando..." : "Participar"}
            </button>
          </form>
  
              <ReferralCard link={myLink} />
        </section>
      );
        }