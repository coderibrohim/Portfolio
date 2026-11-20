import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Code2, Layers3 } from "lucide-react";

const projects = [
  {
    name: "MovieZone",
    desc: "Filmlarni kashf qilish uchun yaratilgan web ilova. Trending va mashhur filmlarni ko'rish, filmlarni qidirish, sahifalash orqali ko'rib chiqish hamda har bir film haqida batafsil ma'lumot olish imkoniyatlarini taqdim etadi.",
    tech: "React, JavaScript, Tailwind CSS, React Router, API",
    link: "https://movies-app-neon-seven.vercel.app",
    number: "06",
    category: "Movie Discovery",
    accent: "from-rose-500/20 to-pink-500/5",
    icon: "🎬",
  },
  {
    name: "Nova Shop",
    desc: "Online do'kon bo'lib, mahsulotlarni ko'rish, qidirish, kategoriyalar bo'yicha filterlash, batafsil ma'lumotlarni ko'rish va savatchaga mahsulot qo'shish imkoniyatlarini taqdim etadi.",
    tech: "React, JavaScript, Tailwind CSS, Shadcn UI, React Router,Context",
    link: "https://nova-shop-cyan.vercel.app",
    number: "05",
    category: "E-Commerce",
    accent: "from-violet-500/20 to-purple-500/5",
    icon: "🛍️",
  },
  {
    name: "Kitchen App",
    desc: "Foydalanuvchilarni ro‘yxatdan o‘tkazish va tizimga kirish imkoniyatlariga ega hamda taomlar retseplarini qo'shish, tayyor retseptlarni olish.",
    tech: "React, Authentication",
    link: "https://authentication-one-pied.vercel.app/",
    number: "01",
    category: "Web Application",
    accent: "from-orange-500/20 to-amber-500/5",
    icon: "🍳",
  },
  {
    name: "Random User",
    desc: "Tasodifiy foydalanuvchilar ma’lumotlarini ko‘rsatadigan interaktiv loyiha.",
    tech: "React, API",
    link: "https://random-user-six-delta.vercel.app/",
    number: "02",
    category: "API Integration",
    accent: "from-cyan-500/20 to-blue-500/5",
    icon: "👤",
  },
  {
    name: "Weather App",
    desc: "Dunyonig istalgan joyidagi ob-havni aniqlash va ko'rish uchun yaratilgan loyiha.",
    tech: "JavaScript, Html, Css",
    link: "https://weatherapps-omega.vercel.app",
    number: "04",
    category: "Weather Application",
    accent: "from-sky-500/20 to-indigo-500/5",
    icon: "🌤️",
  },
  {
    name: "Tennis Shot Counter",
    desc: "Tennis o‘yinidagi zarbalarni hisoblash uchun yaratilgan interaktiv counter ilovasi.",
    tech: "React, JavaScript",
    link: "https://tennis-shot-counter.vercel.app/",
    number: "03",
    category: "Interactive App",
    accent: "from-emerald-500/20 to-green-500/5",
    icon: "🎾",
  },
];

const Projects = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b14] text-white px-5 sm:px-8 lg:px-16 py-24 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 mb-7"
            >
              <Code2 size={15} className="text-indigo-400" />
              <span className="text-sm text-indigo-200">My Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Selected
              <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Projects.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg max-w-xl mt-6 leading-8"
            >
              Men yaratgan loyihalar bilan tanishing. Har bir loyiha yangi
              bilimlar, tajriba va dasturlash mahoratimni rivojlantirish
              yo‘lidagi qadamdir.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 lg:mb-3"
          >
            <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center">
              <Layers3 size={24} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">
                0{projects.length}
              </p>
              <p className="text-sm text-gray-500">Completed Projects</p>
            </div>
          </motion.div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111827]/70 backdrop-blur-xl hover:border-indigo-500/30 transition-colors duration-500"
            >
              {/* Preview */}
              <div
                className={`relative h-52 overflow-hidden bg-gradient-to-br ${p.accent} flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-[#0c1020]/50" />

                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-300 px-3 py-1.5 rounded-full bg-black/30 border border-white/10 backdrop-blur-md">
                    {p.category}
                  </span>
                </div>

                <span className="absolute top-5 right-5 text-sm font-semibold text-white/30">
                  / {p.number}
                </span>

                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-24 h-24 rounded-3xl border border-white/10 bg-white/[0.07] backdrop-blur-xl flex items-center justify-center text-5xl shadow-2xl"
                >
                  {p.icon}
                </motion.div>

                <div className="absolute -bottom-20 -right-10 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    {p.name}
                  </h2>

                  <span className="text-gray-600 group-hover:text-indigo-400 transition-colors">
                    <ArrowUpRight size={22} />
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-7 mt-4 flex-1">
                  {p.desc}
                </p>

                {/* Technologies */}
                <div className="mt-6 pt-5 border-t border-white/[0.07]">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tech.split(",").map((t) => (
                      <span
                        key={t}
                        className="text-xs text-indigo-200/80 px-3 py-1.5 rounded-lg border border-indigo-400/10 bg-indigo-500/[0.07]"
                      >
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Demo link */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-indigo-600 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-300 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500">
            More projects and ideas coming soon.
            <span className="text-indigo-400 ml-2">✦</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
