'use client'

import { motion } from "framer-motion"
import { Navbar } from "@/components/ui/navbar/Navbar"
import { Footer } from "@/components/layout/footer/Footer"
import Link from "next/link"
import { ArrowRight, BookOpen, Clock } from "lucide-react"

export default function Learning() {
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
                        Growth
                    </span>
                    <h1 className="font-display text-display-heading mb-4">
                        Learning
                    </h1>
                    <p className="font-body text-body-lg max-w-[560px]">
                        A collection of my learning journey: weekly reflections, learning materials, and insights.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                >
                    <Link
                        href="/learning/weekly-reflections/"
                        className="card-framer flex flex-col p-6 group"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <Clock className="w-5 h-5 text-white/50 group-hover:text-framer-blue transition-colors" />
                            </div>
                            <h3 className="font-display text-[20px] font-medium text-white group-hover:text-framer-blue transition-colors" style={{ letterSpacing: '-0.5px' }}>
                                Weekly Reflections
                            </h3>
                        </div>
                        <p className="font-body text-[14px] leading-[1.6] text-white/50 flex-grow mb-6">
                            My weekly progress logs, challenges faced, and new concepts understood along the way.
                        </p>
                        <div className="font-body text-[13px] font-medium text-white/30 flex items-center gap-2 group-hover:text-framer-blue transition-colors">
                            Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    <Link
                        href="/learning/learning-utensils/"
                        className="card-framer flex flex-col p-6 group"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <BookOpen className="w-5 h-5 text-white/50 group-hover:text-framer-blue transition-colors" />
                            </div>
                            <h3 className="font-display text-[20px] font-medium text-white group-hover:text-framer-blue transition-colors" style={{ letterSpacing: '-0.5px' }}>
                                Learning Utensils
                            </h3>
                        </div>
                        <p className="font-body text-[14px] leading-[1.6] text-white/50 flex-grow mb-6">
                            A curated list of books, courses, papers, and other resources I've found valuable.
                        </p>
                        <div className="font-body text-[13px] font-medium text-white/30 flex items-center gap-2 group-hover:text-framer-blue transition-colors">
                            View <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}