import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0d0d14] text-white overflow-hidden px-6 py-20">
      {/* Yengil gradient fonlar */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_70%)]"></div>

      {/* Kontent */}
      <motion.div
        className="relative z-10 max-w-4xl text-center space-y-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Sarlavha */}
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 drop-shadow-lg">
          About Me 
        </h1>

        {/* Men haqimda */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Salom! Men{" "}
          <span className="text-indigo-400 font-semibold">
            Ibrohimjon Mamayusupov
          </span>
          , Frontend dasturchiman. Zamonaviy texnologiyalar yordamida
          foydalanuvchilarga qulay, chiroyli va samarali web sahifalar
          yarataman. Mening asosiy yo‘nalishim — tezkor va jozibador React hamda
          Next.js ilovalarini ishlab chiqish.
        </p>

        {/* Texnologiyalar */}
        <div>
          <h2 className="text-2xl font-semibold mb-5 text-pink-400">
            Ko‘nikmalarim 
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                className="px-5 py-2 rounded-full text-sm bg-white/10 border border-white/10 backdrop-blur-md hover:bg-indigo-500/20 transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CV tugmasi */}
        <motion.a
          href="#"
          className="inline-block mt-10 px-10 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold text-white shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV 📄
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
