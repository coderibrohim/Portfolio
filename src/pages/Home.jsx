import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/photo_2025-10-08_07-27-26.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-4 bg-gradient-to-br from-[#0d0d19] via-[#111122] to-[#0a0a14] text-white">
      {/* Yengil fon effekti */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_70%)] pointer-events-none"></div>

      {/* Avatar */}
      <motion.div
        className="relative mb-8 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(236,72,153,0.5)] transition-all duration-500 hover:scale-105">
          <img
            src={myPhoto}
            alt="Ibrohimjon Mamayusupov"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Ism */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold   bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400  "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Ibrohimjon Mamayusupov
      </motion.h1>

      {/* Kasb nomi */}
     

      {/* Tavsif */}
      <motion.p
        className="max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed mt-6 z-10 px-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        Men zamonaviy, tezkor va intuitiv foydalanuvchi interfeyslarini
        yaratishga ishtiyoqli dasturchiman. Har bir loyiha orqali dizayn va
        funksionallik o‘rtasidagi mukammal muvozanatni topishga intilaman.
      </motion.p>

      {/* Tugmalar */}
      <motion.div
        className="mt-10 flex gap-5 flex-wrap justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
      >
        <Link to={'/projects'}
          className="cursor-pointer px-7 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_45px_rgba(236,72,153,0.5)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
        >
          Loyihalarimni Ko‘rish
        </Link>

        <Link
          to="/contact"
          className="cursor-pointer px-7 py-3 rounded-lg border border-indigo-400/60 font-semibold text-indigo-300 hover:bg-indigo-500/20 hover:border-pink-400/70 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]"
        >
          Bog‘lanish
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
