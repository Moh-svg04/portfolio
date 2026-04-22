import { AnimatedHero } from "./components/AnimatedHero";
import { AnimatedProjects } from "./components/AnimatedProjects";
import { AnimatedSkills } from "./components/AnimatedSkills";
import { AnimatedExperience } from "./components/AnimatedExperience";
import { AnimatedContact } from "./components/AnimatedContact";

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <AnimatedHero />
      <AnimatedExperience />
      <AnimatedProjects />
      <AnimatedSkills />
      <AnimatedContact />

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-500 text-sm">
            © 2026 Mohamed Gueye - All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}