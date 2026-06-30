'use client'

import { motion, useInView } from 'framer-motion'
import { FileText, Download } from 'lucide-react'
import { useRef } from 'react'

export function ResumeSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section className="py-24 md:py-32" style={{ background: '#000000' }}>
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="card-framer p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-framer-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="max-w-[600px]">
                            <span className="font-body text-[13px] font-medium uppercase tracking-wider text-framer-blue mb-4 block">
                                Resume
                            </span>
                            <h2 className="font-display text-display-heading mb-4">
                                View My Experience
                            </h2>
                            <p className="font-body text-body-lg text-white/70">
                                Get a detailed look at my academic background, technical skills, and professional experience.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <a
                                href="https://drive.google.com/file/d/1WK_-B1n7LUmYURGNdxpghS02xbI4plqv/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-pill-solid text-[15px] py-3 px-8 flex items-center justify-center gap-2 group"
                            >
                                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span>View Resume</span>
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1WK_-B1n7LUmYURGNdxpghS02xbI4plqv/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-pill-frosted text-[15px] py-3 px-8 flex items-center justify-center gap-2 group"
                            >
                                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                <span>Open Resume</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
