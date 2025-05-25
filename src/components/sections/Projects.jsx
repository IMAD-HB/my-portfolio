import React from "react";
import RevealOnScroll from "./../RevealOnScroll.jsx";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 bg-clip-text text-transparent to-green-500 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_#22c55e1a] transition">
              <h3 className="text-xl font-bold mb-2">
                University Management System
              </h3>
              <p className="text-gray-400 mb-4">
                A web-based platform for managing student records, courses, and
                administrative tasks. Designed to streamline operations for
                university staff with a focus on usability and efficiency.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "AJAX", "PHP", "MySQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_#22c55e33] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_#22c55e1a] transition">
              <h3 className="text-xl font-bold mb-2">
                ONAAPH Appointment & Inventory App
              </h3>
              <p className="text-gray-400 mb-4">
                A custom system built for ONAAPH to manage client appointments
                and track inventory. Tailored to support the organization's
                operational needs and improve service delivery.
              </p>
              <div className="flex flex-wrap gap-2  mb-4">
                {["HTML", "CSS", "JavaScript", "AJAX", "PHP", "MySQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_#22c55e33] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_#22c55e1a] transition">
              <h3 className="text-xl font-bold mb-2">
                Vastu Spaze Landing Page
              </h3>
              <p className="text-gray-400 mb-4">
                A professional landing page for a real estate or interior design
                brand. Focused on layout clarity, visual hierarchy, and
                responsiveness across devices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_#22c55e33] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://vastu-spaze-two.vercel.app"
                  target="_blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_#22c55e1a] transition">
              <h3 className="text-xl font-bold mb-2">Assembly Endgame</h3>
              <p className="text-gray-400 mb-4">
                An interactive logic-based game that challenges users to
                complete sequences or solve structured tasks. Emphasizes user
                decision-making and progression.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_#22c55e33] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://assembly-endgame-pink.vercel.app"
                  target="_blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_#22c55e1a] transition">
              <h3 className="text-xl font-bold mb-2">
                Tesla Landing Page Clone
              </h3>
              <p className="text-gray-400 mb-4">
                A modern, responsive clone of the Tesla homepage. Highlights
                include clean design, smooth animations, and a polished layout
                closely matching the original.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_#22c55e33] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://tesla-landing-page-steel.vercel.app"
                  target="_blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_#22c55e1a] transition">
              <h3 className="text-xl font-bold mb-2">Chef Claude</h3>
              <p className="text-gray-400 mb-4">
                An AI-powered recipe generator that creates custom recipes based
                on user-provided ingredients. Designed to offer quick, creative
                meal ideas using Claude AI, with a clean and intuitive interface
                for easy input and output.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_#22c55e33] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://chef-claude-6z0x963qm-habbi-imad-eddines-projects.vercel.app"
                  target="_blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_#22c55e1a] transition">
              <h3 className="text-xl font-bold mb-2">Tenzies Game</h3>
              <p className="text-gray-400 mb-4">
                A simple yet engaging dice game where players roll and hold dice
                to match all values. Designed with an intuitive interface and
                clear visual feedback for each game state.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_#22c55e33] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://tenzies-jade.vercel.app"
                  target="_blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_#22c55e1a] transition">
              <h3 className="text-xl font-bold mb-2">Meme Generator</h3>
              <p className="text-gray-400 mb-4">
                A tool that allows users to create and customize memes by
                selecting images, adding text, and get the result. Focused on
                interactivity and a smooth user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_#22c55e33] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://meme-generator-iota-eosin.vercel.app"
                  target="_blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
