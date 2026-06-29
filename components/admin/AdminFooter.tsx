"use client";

import { Github, Globe, Heart } from "lucide-react";

export default function AdminFooter() {
  return (
    <footer className="mt-12 bg-zinc-900 rounded-3xl p-8">

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-2xl font-black">
            GTA VI Giveaway Panel
          </h2>

          <p className="text-zinc-400 mt-2">
            Panel de administración v1.0
          </p>
        </div>

        <div className="flex gap-6">

          <div className="flex items-center gap-2">
            <Globe size={20} />
            <span>Online</span>
          </div>

          <div className="flex items-center gap-2">
            <Github size={20} />
            <span>GitHub Ready</span>
          </div>

          <div className="flex items-center gap-2 text-pink-400">
            <Heart size={20} />
            <span>Made with ❤️</span>
          </div>

        </div>

      </div>

    </footer>
  );
    }