"use client"

import { motion } from "framer-motion"

export default function Conclusion() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900 to-slate-900">
      <div className="absolute inset-0 z-0">
        {/* Night sky with stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Subtle particle effect */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="mb-12"
        >
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-12"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Some Good Financial Behaviours Go Unseen...
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Every cash payment, every transaction, every financial decision builds an invisible record of responsibility.
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-8 py-3 rounded-full transition-colors duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  )
}

