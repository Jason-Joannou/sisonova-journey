"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Wifi, Tv, Zap, Droplets } from "lucide-react"

export default function RetailerVisits() {
  const retailers = [
    { name: "uSave", icon: <ShoppingCart className="w-8 h-8" />, color: "bg-green-100" },
    { name: "Shoprite", icon: <ShoppingCart className="w-8 h-8" />, color: "bg-orange-100" },
    { name: "OBC", icon: <ShoppingCart className="w-8 h-8" />, color: "bg-blue-100" },
  ]

  const services = [
    { name: "Electricity", icon: <Zap className="w-6 h-6 text-yellow-500" /> },
    { name: "Water", icon: <Droplets className="w-6 h-6 text-blue-500" /> },
    { name: "DSTV", icon: <Tv className="w-6 h-6 text-slate-700" /> },
    { name: "Data", icon: <Wifi className="w-6 h-6 text-indigo-500" /> },
  ]

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="absolute inset-0 z-0">
        {/* Midday sky */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-blue-100 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          At the heart of the community
        </motion.h2>

        <motion.p
          className="text-xl text-slate-700 mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Paying for essential services that keep life moving forward.
        </motion.p>

        {/* Retailers */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {retailers.map((retailer, index) => (
            <motion.div
              key={retailer.name}
              className={`${retailer.color} p-6 rounded-xl shadow-md flex flex-col items-center`}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
            >
              <div className="bg-white p-4 rounded-full mb-4">{retailer.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900">{retailer.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
            >
              <div className="mb-2">{service.icon}</div>
              <span className="text-sm font-medium text-slate-700">{service.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

