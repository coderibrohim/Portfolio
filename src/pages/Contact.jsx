import React from "react";
import { motion } from "framer-motion";
import { Send, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b14] text-white flex items-center px-5 sm:px-8 lg:px-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 mb-8"
          >
            <Sparkles size={15} className="text-indigo-400" />
            <span className="text-sm text-indigo-200 font-medium">
              Let's connect
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            Keling,
            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              bog‘lanamiz.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl mx-auto lg:mx-0 text-gray-400 text-base sm:text-lg leading-8 mt-7"
          >
            Menda savolingiz bormi yoki hamkorlikni muhokama qilmoqchimisiz?
            Yangi loyihalar, qiziqarli g‘oyalar va imkoniyatlar haqida
            suhbatlashishdan mamnunman.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-3 mt-9 text-gray-500 text-sm"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to new opportunities
          </motion.div>
        </div>

        {/* Right contact card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full max-w-lg mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-xl opacity-50 group-hover:opacity-100 transition duration-700" />

            <div className="relative rounded-[24px] border border-white/10 bg-[#111827]/80 backdrop-blur-2xl p-7 sm:p-10 shadow-2xl">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 flex items-center justify-center">
                    <MessageCircle className="text-indigo-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Get in touch</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Direct communication
                    </p>
                  </div>
                </div>

                <span className="text-xs px-3 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
                  Available
                </span>
              </div>

              <div className="border-t border-white/[0.07] pt-8">
                <p className="text-sm text-gray-500 mb-2">Preferred contact</p>

                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Telegram
                </h2>

                <p className="text-gray-400 text-sm mt-3 leading-6">
                  Tez va qulay muloqot uchun Telegram orqali menga yozing.
                </p>

                <motion.a
                  href="https://t.me/mahbubiy571i"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 w-full flex items-center justify-between gap-3 px-6 py-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-colors duration-300"
                >
                  <span className="flex items-center gap-3 font-semibold">
                    <Send size={20} />
                    Telegram orqali yozish
                  </span>
                  <ArrowUpRight size={21} />
                </motion.a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.07] flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Let's build something great.
                </span>
                <Sparkles size={17} className="text-indigo-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
