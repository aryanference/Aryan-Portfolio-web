'use client'

import { motion } from "framer-motion"
import { GraduationCap, Brain, Code2, Lightbulb, Target, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/ui/navbar/Navbar"
import { Footer } from "@/components/layout/footer/Footer"

const journey = [
    {
        icon: <GraduationCap className="w-5 h-5" />,
        title: "ECE Background",
        description: "Electronics & Communication Engineering undergrad with strong foundations in mathematics and signal processing."
    },
    {
        icon: <Brain className="w-5 h-5" />,
        title: "ML & AI Focus",
        description: "Self-taught machine learning practitioner, fascinated by how algorithms learn from data and make predictions."
    },
    {
        icon: <Code2 className="w-5 h-5" />,
        title: "Full-Stack Skills",
        description: "Building end-to-end solutions from data pipelines to web interfaces with Python, Django, and Next.js."
    },
    {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Research Mindset",
        description: "Curious about the 'why' behind systems, constantly exploring new concepts in statistics and deep learning."
    }
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-8 max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg" style={{ background: 'rgba(0,153,255,0.08)' }}>
                            <Sparkles className="w-6 h-6 text-framer-blue" />
                        </div>
                        <h1 className="font-display text-display-heading">
                            About Me
                        </h1>
                    </div>

                    {/* Intro */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-16"
                    >
                        <p className="font-body text-body-lg mb-6 leading-relaxed">
                            I'm <span className="font-medium text-white">Aryan Gahlot</span>,
                            an ECE undergrad with a deep passion for <span className="text-framer-blue font-medium">data science</span>,
                            <span className="text-framer-blue font-medium"> machine learning</span>, and the
                            mathematics that powers intelligent systems.
                        </p>
                        <p className="font-body text-body leading-relaxed text-muted-silver">
                            While my degree is in electronics, my heart is in algorithms, code, and
                            understanding how raw data transforms into actionable insights. I'm a
                            self-taught practitioner who believes in learning by building.
                        </p>
                    </motion.div>

                    {/* Journey Cards */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-16"
                    >
                        <h2 className="font-display text-feature-heading mb-8 flex items-center gap-3">
                            <Target className="w-6 h-6 text-framer-blue" />
                            My Journey
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {journey.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="card-framer p-6 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-lg shrink-0 transition-colors"
                                             style={{ background: 'rgba(255,255,255,0.05)' }}>
                                            <div className="text-white/50 group-hover:text-framer-blue transition-colors">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-display text-[18px] font-medium text-white mb-2" style={{ letterSpacing: '-0.5px' }}>
                                                {item.title}
                                            </h3>
                                            <p className="font-body text-[14px] leading-[1.6] text-white/50">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Philosophy */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="card-framer p-8 mb-16 relative overflow-hidden"
                    >
                        {/* Blue glow effect */}
                        <div
                            className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
                            style={{ background: 'radial-gradient(circle, rgba(0,153,255,0.1) 0%, transparent 70%)' }}
                        />
                        <h2 className="font-display text-[24px] font-medium text-white mb-4 flex items-center gap-2" style={{ letterSpacing: '-0.8px' }}>
                            <Lightbulb className="w-5 h-5 text-framer-blue" />
                            My Philosophy
                        </h2>
                        <p className="font-body text-body-lg text-white/70 leading-relaxed max-w-[600px]">
                            I believe in understanding the <em className="text-white">"why"</em> behind systems, not just
                            using them. Whether it's implementing regression from scratch or building
                            a neural network, I enjoy diving deep into the fundamentals. Learning isn't
                            a phase for me—it's how I approach everything.
                        </p>
                    </motion.div>

                    {/* What I'm Looking For */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <h2 className="font-display text-feature-heading mb-4">
                            What I'm Looking For
                        </h2>
                        <p className="font-body text-body mb-8 max-w-[600px]">
                            I'm actively seeking opportunities in <span className="text-white font-medium">data science</span>,
                            <span className="text-white font-medium"> ML engineering</span>, or
                            <span className="text-white font-medium"> AI research</span>. I'm excited
                            about roles where I can apply my skills to solve meaningful problems and
                            continue growing as a practitioner.
                        </p>
                        
                        <Link href="mailto:aryangahlot50@gmail.com" className="btn-pill-solid group inline-flex">
                            Let's Talk
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}
