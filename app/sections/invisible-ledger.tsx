"use client"

import { motion } from "framer-motion"
import { Database, FileText, Lock, Shield } from "lucide-react"

export default function InvisibleLedger() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-orange-200 to-purple-300">
      <div className="absolute inset-0 z-0">
        {/* Late afternoon/sunset effect */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-orange-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-300 to-transparent" />

        {/* Digital grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-indigo-500 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-12 w-full absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-b border-indigo-500 w-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Invisible Ledger
        </motion.h2>

        <motion.p
          className="text-xl text-slate-700 mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Each payment is captured—an unseen record of every sacrifice.
        </motion.p>

        {/* Digital ledger visualization */}
        <motion.div
          className="relative h-64 md:h-80 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Digital ledger */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl w-full max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-indigo-600" />
                  <span className="font-semibold text-slate-900">Transaction Ledger</span>
                </div>
                <Lock className="w-5 h-5 text-slate-600" />
              </div>

              {/* Transaction records */}
              {[1, 2, 3].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-slate-200"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-700">Payment #{item}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-900">R{Math.floor(Math.random() * 500) + 100}</span>
                    <motion.div
                      className="w-2 h-2 rounded-full bg-emerald-500"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                    />
                  </div>
                </motion.div>
              ))}

              <div className="flex items-center justify-center mt-4">
                <motion.div
                  className="flex items-center gap-2 text-sm text-indigo-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  <Shield className="w-4 h-4" />
                  <span>Securely recorded and protected</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

