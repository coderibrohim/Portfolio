import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/photo_2025-10-08_07-27-26.jpg";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, Code2, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b14] text-white flex items-center px-5 sm:px-8 lg:px-16">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-10">
        {/* Left content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-indigo-200 font-medium">
              Available for opportunities
            </span>
            <Sparkles size={15} className="text-indigo-400" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-indigo-400 font-semibold tracking-[0.25em] uppercase text-sm mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            Ibrohimjon
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Mamayusupov
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start gap-3 mt-7"
          >
            <div className="h-px w-10 bg-indigo-500" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-300">
              Frontend Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-xl text-gray-400 text-base sm:text-lg leading-8 mt-7 mx-auto lg:mx-0"
          >
            Men zamonaviy, tezkor va intuitiv foydalanuvchi interfeyslarini
            yaratishga ishtiyoqli dasturchiman. Har bir loyiha orqali dizayn va
            funksionallik o‘rtasidagi mukammal muvozanatni topishga intilaman.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-9"
          >
            <Link
              to="/projects"
              className="group flex items-center gap-2 px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              Loyihalarim
              <ArrowUpRight
                size={19}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>

            <Link
              to="/contact"
              className="group flex items-center gap-2 px-7 py-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-indigo-400/40 font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Bog‘lanish
              <ArrowUpRight
                size={19}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
              Technologies I work with
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {["React", "JavaScript", "Tailwind CSS", "Next.js"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg border border-white/[0.07] bg-white/[0.03] text-sm text-gray-400 hover:text-indigo-300 hover:border-indigo-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
            {/* Decorative rings */}
            <div className="absolute inset-[-20px] rounded-full border border-indigo-500/20" />
            <div className="absolute inset-[-40px] rounded-full border border-violet-500/10" />

            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-violet-600 to-purple-700 blur-[50px] opacity-25" />

            <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-indigo-400 via-violet-500 to-purple-600 shadow-[0_0_80px_rgba(99,102,241,0.2)]">
              <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-[#080b14]">
                <img
                  src={myPhoto}
                  alt="Ibrohimjon Mamayusupov"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-10 sm:-left-12 flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-[#111827]/90 backdrop-blur-xl shadow-2xl"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-500/15 flex items-center justify-center">
                <Code2 className="text-indigo-400" size={23} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Frontend</p>
                <p className="text-xs text-gray-400">Developer</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
