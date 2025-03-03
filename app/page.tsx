import HorizontalScroll from "./horizontal-scroll"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Unseen Journey | Every Payment Tells a Story",
  description: "Follow the journey of everyday financial responsibility through cash payments for essential services.",
}

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-slate-50">
      <HorizontalScroll />
    </main>
  )
}

