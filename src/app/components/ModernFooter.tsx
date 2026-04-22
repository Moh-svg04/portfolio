import { Sparkles } from "lucide-react";

export function ModernFooter() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white">Mohamed Gueye</div>
                <div className="text-sm text-gray-400">ML Engineer & Data Scientist</div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span>Designed & Built with</span>
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-white">Claude AI</span>
              </div>
              <div className="mt-1">React • TypeScript • Tailwind CSS</div>
            </div>

            <div className="text-gray-400 text-sm">
              © 2026 All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
