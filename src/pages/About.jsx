import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  Code2,
  Layers3,
  Sparkles,
  Monitor,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

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

  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      desc: "Modern va responsive web interfeyslar",
    },
    {
      icon: Layers3,
      title: "React Ecosystem",
      desc: "Component-based application development",
    },
    {
      icon: Monitor,
      title: "UI / UX Focus",
      desc: "Clean design va user experience",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b14] text-white px-5 sm:px-8 lg:px-16 py-24 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 mb-7">
            <Sparkles size={15} className="text-indigo-400" />
            <span className="text-sm text-indigo-200">Get to know me</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            About
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent ml-3">
              Me.
            </span>
          </h1>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/[0.08] bg-[#111827]/60 backdrop-blur-xl p-7 sm:p-10">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-[0.2em] mb-5">
                Who I am
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-7">
                Building digital experiences with{" "}
                <span className="text-indigo-400">passion and purpose.</span>
              </h2>

              <p className="text-gray-400 text-base sm:text-lg leading-8">
                Salom! Men
                <span className="text-white font-semibold">
                  Ibrohimjon Mamayusupov
                </span>
                , Frontend dasturchiman. Zamonaviy texnologiyalar yordamida
                foydalanuvchilarga qulay, chiroyli va samarali web sahifalar
                yarataman. Mening asosiy yo‘nalishim — tezkor va jozibador React
                hamda Next.js ilovalarini ishlab chiqish.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 flex items-center justify-center">
                    <GraduationCap className="text-indigo-400" size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Najot Ta'lim
                    </p>
                    <p className="text-xs text-gray-500 mt-1">IT Education</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/15 flex items-center justify-center">
                    <BriefcaseBusiness className="text-violet-400" size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Frontend Developer
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Professional Focus
                    </p>
                  </div>
                </div>
              </div>

              {/* CV */}
              <motion.a
                href="/Ibrohimjon_CV_yangilangan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 mt-10 px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/20 transition-colors duration-300"
              >
                <ArrowDownToLine size={19} />
                Download My CV
              </motion.a>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Skills */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#111827]/70 backdrop-blur-xl p-7">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/15 flex items-center justify-center">
                  <Code2 className="text-indigo-400" size={22} />
                </div>
                <div>
                  <h2 className="font-bold text-lg">My Skills</h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Technologies I work with
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    whileHover={{ scale: 1.06, y: -3 }}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-indigo-200 bg-indigo-500/[0.08] border border-indigo-400/15 hover:bg-indigo-500/20 hover:border-indigo-400/40 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#111827]/70 backdrop-blur-xl p-7">
              <h2 className="text-lg font-bold mb-6">What I Do</h2>

              <div className="space-y-6">
                {highlights.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.15 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center">
                        <Icon size={19} className="text-indigo-400" />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-gray-200">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 leading-5">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
