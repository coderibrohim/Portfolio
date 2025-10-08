import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-[#0f0f1a] via-[#121224] to-[#0a0a12] text-white overflow-hidden">
      {/* Fon effektlari (past qatlamda turadi) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_70%)] pointer-events-none"></div>

      {/* Kontent (yuqori qatlamda) */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Sarlavha */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text  bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bog‘lanish
        </motion.h2>

        {/* Tavsif */}
        <motion.p
          className="text-gray-400 max-w-xl mb-10 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Menda savolingiz bormi yoki hamkorlikni muhokama qilmoqchimisiz?
          Quyidagi tugma orqali to‘g‘ridan-to‘g‘ri Telegram’da menga yozishingiz
          mumkin 📩
        </motion.p>

        {/* Telegram tugmasi */}
        <motion.a
          href="https://t.me/codewith_ibrohim"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold shadow-lg hover:shadow-pink-500/30 transition-transform duration-300 hover:scale-105 cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Telegram orqali bog‘lanish
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
