"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Introduction from "./sections/introduction"
import SettingOut from "./sections/setting-out"
import RetailerVisits from "./sections/retailer-visits"
import MakingPayment from "./sections/making-payment"
import InvisibleLedger from "./sections/invisible-ledger"
import Conclusion from "./sections/conclusion"

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState(0)
  const [showScrollHint, setShowScrollHint] = useState(true)

  // Get scroll progress for animations
  const { scrollXProgress } = useScroll({
    container: containerRef,
  })

  const smoothScrollProgress = useSpring(scrollXProgress, {
    damping: 15,
    stiffness: 100,
  })

  // Update window width for responsive calculations
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Hide scroll hint after user starts scrolling
  useEffect(() => {
    const unsubscribe = scrollXProgress.onChange((value) => {
      if (value > 0.01) {
        setShowScrollHint(false)
      }
    })

    return () => unsubscribe()
  }, [scrollXProgress])

  // Enable circular scrolling - when reaching the end, scroll back to start
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10

      if (isAtEnd) {
        // Show a hint to scroll back to start
        setShowScrollHint(true)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate the total width of the horizontal scroll container
  const totalWidth = windowWidth * 6 // 6 sections

  // Calculate sun position based on scroll progress
  const sunTopPosition = useTransform(
    scrollXProgress,
    [0, 0.5, 1],
    ["25%", "10%", "75%"], // Rise and then set
  )

  const sunLeftPosition = useTransform(
    scrollXProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["25%", "35%", "50%", "65%", "75%", "85%"], // Move across the sky
  )

  return (
    <div className="relative h-full w-full">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-200">
        <motion.div className="h-full bg-slate-800" style={{ scaleX: smoothScrollProgress, transformOrigin: "0%" }} />
      </div>

      {/* Sun that moves across the sky */}
      <motion.div
        className="fixed w-24 h-24 rounded-full bg-yellow-400 opacity-70 blur-md z-10"
        style={{
          top: sunTopPosition,
          left: sunLeftPosition,
          opacity: useTransform(scrollXProgress, [0, 0.8, 1], [0.7, 0.7, 0]),
        }}
      />

      {/* Scroll hint - shows at start and when reaching the end */}
      {showScrollHint && (
        <motion.div
          className="fixed right-8 bottom-8 flex items-center gap-2 text-slate-600 z-50 bg-white/80 px-4 py-2 rounded-full shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span>{scrollXProgress.get() > 0.9 ? "Start a new day" : "Scroll right"}</span>
          <ChevronRight className="animate-pulse" />
        </motion.div>
      )}

      {/* Day/night cycle indicator */}
      <div className="fixed top-4 right-4 z-40 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
        <motion.div
          className="w-3 h-3 rounded-full bg-amber-400"
          style={{
            opacity: useTransform(scrollXProgress, [0, 0.5, 1], [1, 0.5, 0]),
          }}
        />
        <motion.div
          className="w-3 h-3 rounded-full bg-indigo-900"
          style={{
            opacity: useTransform(scrollXProgress, [0, 0.5, 1], [0, 0.5, 1]),
          }}
        />
        <motion.span
          className="text-xs font-medium"
          style={{
            color: useTransform(
              scrollXProgress,
              [0, 0.2, 0.4, 0.6, 0.8, 1],
              ["#1e293b", "#1e293b", "#1e293b", "#1e293b", "#f8fafc", "#f8fafc"],
            ),
          }}
        >
          {useTransform(
            scrollXProgress,
            [0, 0.2, 0.4, 0.6, 0.8, 1],
            ["Morning", "Morning", "Midday", "Afternoon", "Evening", "Night"],
          )}
        </motion.span>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="h-full overflow-x-scroll overflow-y-hidden flex snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
      >
        <div className="flex flex-nowrap h-full" style={{ width: `${totalWidth}px` }}>
          {/* Introduction Section */}
          <section className="w-screen h-full flex-shrink-0 snap-start" id="morning">
            <Introduction />
          </section>

          {/* Setting Out Section */}
          <section className="w-screen h-full flex-shrink-0 snap-start">
            <SettingOut />
          </section>

          {/* Retailer Visits Section */}
          <section className="w-screen h-full flex-shrink-0 snap-start">
            <RetailerVisits />
          </section>

          {/* Making Payment Section */}
          <section className="w-screen h-full flex-shrink-0 snap-start" id="making-payment">
            <MakingPayment />
          </section>

          {/* Invisible Ledger Section */}
          <section className="w-screen h-full flex-shrink-0 snap-start">
            <InvisibleLedger />
          </section>

          {/* Conclusion Section */}
          <section className="w-screen h-full flex-shrink-0 snap-start" id="night">
            <Conclusion />
          </section>
        </div>
      </div>

      {/* Button to return to start when at the end */}
      <motion.button
        className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md z-50 flex items-center gap-2 text-slate-700"
        style={{
          opacity: useTransform(scrollXProgress, [0, 0.9, 1], [0, 0, 1]),
        }}
        onClick={() => {
          if (containerRef.current) {
            containerRef.current.scrollTo({ left: 0, behavior: "smooth" })
          }
        }}
      >
        Start a new day
      </motion.button>
    </div>
  )
}

