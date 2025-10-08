import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "SweetShop",
    desc: "Shirinliklar sotiladigan onlayn do‘kon. Mahsulotlar ro‘yxatini ko‘rish, savatchaga qo‘shish va narxlarni avtomatik hisoblash imkoniyati mavjud.",
    tech: "React, Context API, CSS",
    link: "https://imtihon-6-oy-orpin.vercel.app/",
  },
  {
    name: "CUUser",
    desc: "Zamonaviy foydalanuvchi interfeysiga ega veb-loyiha. Saytda foydalanuvchilarga qulay navigatsiya, chiroyli kartalar va soddaligi bilan ajralib turadi.",
    tech: "React, CSS",
    link: "https://cuuser.netlify.app/",
  },
  {
    name: "FakeShop",
    desc: "Minimalistik kiyim-kechak onlayn do‘koni. API’dan ma’lumot olib, mahsulotlarni kartalarda ko‘rsatadi. Foydalanuvchi uchun qulay interfeys bilan yaratilgan.",
    tech: "React, JavaScript, Tailwind CSS",
    link: "https://fakeshop-7.netlify.app",
  },
  {
    name: "Country Filter",
    desc: "Dunyo davlatlarini mintaqalar bo‘yicha filtrlash imkonini beruvchi interaktiv sayt.",
    tech: "JavaScript (Vanilla JS), Tailwind CSS",
    link: "https://imtihon-5-oy-5.netlify.app/",
  },
  {
    name: "Todo List App",
    desc: "Vazifalarni qo‘shish, o‘chirish va bajarilgan deb belgilash imkoniyatiga ega oddiy ToDo ilova.",
    tech: "JavaScript, HTML, CSS, localStorage",
    link: "https://ibrohimjon-todos.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#0f0f1a] via-[#121224] to-[#0a0a12] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_60%)]"></div>

      <motion.h1
        className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects 💻
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-md hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-500"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.3 }}
            whileHover={{ scale: 1.04 }}
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-indigo-300">
                  {p.name}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <p className="text-xs text-gray-400">
                  <span className="text-indigo-400 font-semibold">Tech:</span>
                  {p.tech}
                </p>
              </div>
              <div className="mt-6 text-right">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition"
                >
                  View 🔗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
