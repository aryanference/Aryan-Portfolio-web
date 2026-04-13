'use client'

import { motion } from "framer-motion"
import { Navbar } from "@/components/ui/navbar/Navbar"
import { Footer } from "@/components/layout/footer/Footer"
import { StickyNote } from "lucide-react"

export default function NotesPage() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-8 max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="font-body text-[13px] font-medium uppercase tracking-wider text-framer-blue mb-4 block">
                        Documentation
                    </span>
                    <h1 className="font-display text-display-heading mb-4">
                        Notes
                    </h1>
                    <p className="font-body text-body-lg max-w-[560px]">
                        A collection of unstructured thoughts, code snippets, and scattered learnings.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="card-framer p-8 md:p-12 text-center max-w-2xl mx-auto mt-24">
                        <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6" style={{ background: 'rgba(0,153,255,0.08)' }}>
                            <StickyNote className="w-8 h-8 text-framer-blue" />
                        </div>
                        <h3 className="font-display text-[24px] font-medium text-white mb-3" style={{ letterSpacing: '-0.5px' }}>
                            Formatting notes
                        </h3>
                        <p className="font-body text-body text-white/50">
                            The archive of notes is currently undergoing reorganization.
                        </p>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}