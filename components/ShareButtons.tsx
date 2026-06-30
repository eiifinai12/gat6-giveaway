"use client";

import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLink,
} from "react-icons/fa";

export default function ShareButtons() {
 const link = "https://gtavigiveaway.netlify.app";

  const message = encodeURIComponent(
  `🎮 Participa para ganar GTA VI Ultimate Edition.

👉 Regístrate aquí:
${link}`
    );

  function copyLink() {
    navigator.clipboard.writeText(link);
    alert("Enlace copiado");
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">

      <a
        href={`https://wa.me/?text=${message}`}
        target="_blank"
        className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-bold"
      >
        <FaWhatsapp className="inline mr-2" />
        WhatsApp
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
        target="_blank"
        className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-bold"
      >
        <FaFacebook className="inline mr-2" />
        Facebook
      </a>

      <a
        href={`https://twitter.com/intent/tweet?text=${message}`}
        target="_blank"
        className="bg-black hover:bg-zinc-800 px-6 py-3 rounded-xl font-bold"
      >
        <FaTwitter className="inline mr-2" />
            Twitter
      </a>

      <button
        onClick={copyLink}
        className="bg-pink-600 hover:bg-pink-500 px-6 py-3 rounded-xl font-bold"
      >
        <FaLink className="inline mr-2" />
        Copiar enlace
      </button>

    </div>
  );
        }