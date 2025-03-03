"use client"

import { motion } from "framer-motion"
import { Home, Briefcase, Sun } from "lucide-react"

export default function SettingOut() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-100 to-blue-100">
      <div className="absolute inset-0 z-0">
        {/* Morning sky */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-amber-100 to-transparent" />

        {/* Road illustration */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-slate-300" />
        <div className="absolute bottom-1/4 left-0 right-0 h-2 bg-yellow-400" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Illustration */}
        <motion.div
          className="relative h-64 md:h-96"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute left-0 bottom-1/4 bg-white p-4 rounded-full shadow-lg">
            <Home className="w-12 h-12 text-slate-700" />
          </div>

          <motion.div
            className="absolute left-1/3 bottom-1/4 bg-slate-800 p-4 rounded-full shadow-lg"
            animate={{
              x: [0, 100, 100],
              y: [0, 0, -50],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sun className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </motion.div>

          <div className="absolute right-0 bottom-1/4 bg-white p-4 rounded-full shadow-lg">
            <Briefcase className="w-12 h-12 text-slate-700" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The journey begins</h2>
          <p className="text-xl text-slate-700">
            Stepping out to earn every rand. Each day starts with purpose and determination.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

