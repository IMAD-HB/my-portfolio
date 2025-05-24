import React from "react";
import RevealOnScroll from "./../RevealOnScroll.jsx";

const About = () => {
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "Bootstrap"];

  const backendSkills = ["Node.js", "Express.js", "MongoDB", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 bg-clip-text text-transparent to-green-500 text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-3000 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_#22c55e33] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_#22c55e33] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Bachelor’s Degree in Electronics</strong>
                  <br />
                  Djillali Liabés University of Sidi Bel Abbès, Algeria (2022 –
                  2025)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                📜 Certifications & Training
              </h3>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h4 className="font-semibold">
                    WebMaster Training Certificate at El Maâlim Vocational
                    Training School, Sidi Bel Abbès (2024)
                  </h4>
                  <p>
                    El Maâlim Vocational Training School, Sidi Bel Abbès (2024)
                    Trained in web development using HTML, CSS, JavaScript,
                    AJAX, PHP, and databases. Built a university management
                    system as a final project and developed an appointment and
                    store tracking app for ONAAPH, supporting accessibility
                    needs.
                  </p>
                </div>
                <div>
                  <div>
                    <h4 className="font-semibold">
                      Certificate in Computer Science Fundamentals at Dar El
                      Chabab 08 Mai 1945, Sidi Bel Abbès (2023)
                    </h4>
                    <p>
                      Learned basic computer skills, including hardware
                      components, system operation, and Microsoft Office (Word,
                      Excel, PowerPoint), with a focus on practical digital
                      literacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
