'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, Github } from 'lucide-react'

const titles = [
    "ML Researcher",
    "AI Engineer",
    "Data Scientist",
]

function TypewriterText() {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentTitle = titles[currentTitleIndex]
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentTitle.length) {
                    setDisplayText(currentTitle.slice(0, displayText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2500)
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
                }
            }
        }, isDeleting ? 40 : 80)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentTitleIndex])

    return (
        <span className="text-framer-blue">
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-framer-blue"
            >
                |
            </motion.span>
        </span>
    )
}

export function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: '#000000' }}
        >
            {/* Subtle blue glow behind hero */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(0,153,255,0.06) 0%, transparent 70%)',
                }}
            />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 w-full">
                <div className="flex flex-col items-center text-center">
                    {/* Micro label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-body font-medium text-white/60"
                              style={{
                                  background: 'rgba(255,255,255,0.05)',
                                  border: '1px solid rgba(255,255,255,0.08)',
                              }}
                        >
                            <span className="w-2 h-2 rounded-full bg-framer-blue animate-pulse" />
                            Available for research collaborations
                        </span>
                    </motion.div>

                    {/* Main heading — extreme negative tracking */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="font-display text-display-hero mb-6"
                    >
                        <span className="block text-white">Aryan Gahlot</span>
                    </motion.h1>

                    {/* Typewriter subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="font-display text-display-heading mb-8"
                    >
                        <TypewriterText />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="font-body text-body-lg max-w-[560px] mb-10"
                        style={{ fontFeatureSettings: "'cv01', 'cv05', 'cv09', 'cv11', 'ss03', 'ss07'" }}
                    >
                        Building intelligent systems at the intersection of machine learning, 
                        AI research, and data science. Turning complex problems into elegant solutions.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link href="/projects" className="btn-pill-solid group">
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="https://github.com/aryanference"
                            target="_blank"
                            className="btn-pill-frosted group"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </Link>
                    </motion.div>

                    {/* Stats bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="mt-16 flex items-center gap-8 md:gap-12"
                    >
                        {[
                            { value: '9+', label: 'Projects' },
                            { value: 'ML', label: 'Focused' },
                            { value: '7+', label: 'Technologies' },
                        ].map((stat, i) => (
                            <div key={stat.label} className="text-center">
                                <div className="font-display text-[28px] md:text-[36px] font-medium text-white" style={{ letterSpacing: '-1.5px' }}>
                                    {stat.value}
                                </div>
                                <div className="font-body text-[12px] text-white/40 uppercase tracking-wider mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent"
                />
            </motion.div>
        </section>
    )
}
