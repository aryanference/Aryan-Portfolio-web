'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
]

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [isMenuOpen])

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-black/80 backdrop-blur-md border-b border-white/[0.06]'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-display text-[18px] font-medium text-white tracking-[-0.5px] hover:opacity-80 transition-opacity"
                    >
                        aryan.
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-body text-[15px] text-white/70 hover:text-white transition-colors duration-200"
                                style={{ letterSpacing: '-0.15px' }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="mailto:aryangahlot50@gmail.com"
                            className="btn-pill-frosted text-[14px] py-2 px-5"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative z-[60] w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <motion.div
                            animate={{ rotate: isMenuOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="fixed top-16 left-0 right-0 z-[60] bg-black border-b border-white/[0.06]"
                        >
                            <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col gap-1">
                                {links.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 + 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block py-3 font-body text-[22px] text-white/70 hover:text-white transition-colors"
                                            style={{ letterSpacing: '-0.5px' }}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: links.length * 0.05 + 0.1 }}
                                    className="pt-4"
                                >
                                    <Link
                                        href="mailto:aryangahlot50@gmail.com"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="btn-pill-solid w-full text-center"
                                    >
                                        Get in Touch
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}