"use client"

import { motion } from "framer-motion"

export default function Introduction() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 via-amber-200 to-amber-100">
      {/* Sunrise background */}
      <div className="absolute inset-0 z-0">
        {/* Morning glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-200 to-transparent" />

        {/* Early morning sky */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-900 to-transparent" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Every day, every payment tells a story.
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-md">
          Join us on a journey through the everyday financial responsibilities that shape our lives.
        </p>
      </motion.div>
    </div>
  )
}

