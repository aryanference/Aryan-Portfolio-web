'use client'

import { motion, useInView } from 'framer-motion'
import { Mail, Github, Twitter, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/aryanference",
        icon: <Github className="w-5 h-5" />,
        username: "@aryanference",
    },
    {
        name: "X (Twitter)",
        href: "https://x.com/indeedlemonpie",
        icon: <Twitter className="w-5 h-5" />,
        username: "@indeedlemonpie",
    },
    {
        name: "Email",
        href: "mailto:aryangahlot50@gmail.com",
        icon: <Mail className="w-5 h-5" />,
        username: "aryangahlot50@gmail.com",
    }
]

export function HomepageSocials() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section id="contact" className="py-24 md:py-32" style={{ background: '#000000' }}>
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                {/* Section Header */}
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="font-body text-[13px] font-medium uppercase tracking-wider text-framer-blue mb-4 block">
                        Connect
                    </span>
                    <h2 className="font-display text-display-heading mb-4">
                        Let's Work Together
                    </h2>
                    <p className="font-body text-body-lg max-w-[560px]">
                        Open to collaborations on ML/AI projects, research opportunities,
                        or conversations about pushing the boundaries of AI.
                    </p>
                </motion.div>

                {/* Social Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    {socialLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                        >
                            <Link
                                href={link.href}
                                target={link.name !== "Email" ? "_blank" : undefined}
                                className="group block card-framer p-6 h-full"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div
                                        className="p-3 rounded-xl transition-colors duration-300"
                                        style={{ background: 'rgba(255,255,255,0.05)' }}
                                    >
                                        <span className="text-white/50 group-hover:text-framer-blue transition-colors duration-300">
                                            {link.icon}
                                        </span>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-framer-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                </div>
                                <h3
                                    className="font-display text-[18px] font-medium text-white mb-1"
                                    style={{ letterSpacing: '-0.5px' }}
                                >
                                    {link.name}
                                </h3>
                                <p className="font-mono text-[12px] text-white/30 truncate">
                                    {link.username}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="mailto:aryangahlot50@gmail.com"
                        className="btn-pill-solid text-[15px] py-3 px-8"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}