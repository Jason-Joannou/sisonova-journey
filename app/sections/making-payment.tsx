"use client"

import { motion } from "framer-motion"
import { Banknote, Check } from "lucide-react"

export default function MakingPayment() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-100 to-orange-200">
      <div className="absolute inset-0 z-0">
        {/* Afternoon sun effect */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-amber-300 opacity-60 blur-xl" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-orange-300/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          className="text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Every cash payment is a testament
          </motion.h2>
          <motion.p
            className="text-xl text-slate-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A physical exchange that represents hard work, responsibility, and commitment to essential needs.
          </motion.p>
        </motion.div>

        {/* Payment Illustration - Static version */}
        <div className="relative h-64 md:h-80 order-1 md:order-2">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Counter/Table */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-4 bg-slate-300 rounded-t-lg" />

            {/* Cash - Static */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-100 border-2 border-green-600 w-32 h-16 rounded-md flex items-center justify-center shadow-lg z-10">
              <Banknote className="w-8 h-8 text-green-700" />
            </div>

            {/* Checkmarks - Static */}
            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full z-20">
              <Check className="w-6 h-6 text-emerald-600" />
            </div>

            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full z-20">
              <Check className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

