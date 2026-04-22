import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span className="text-sm">
              Entièrement conçu et développé avec <strong className="text-white">Claude AI</strong>
            </span>
          </div>

          <div className="text-slate-400 text-sm">
            © 2026 Mohamed Gueye - Tous droits réservés
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Made with</span>
            <span className="text-red-400">❤️</span>
            <span>& React + Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
