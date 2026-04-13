'use client'

import Link from 'next/link'

const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
]

const socialLinks = [
    { href: 'https://github.com/aryanference', label: 'GitHub' },
    { href: 'https://x.com/indeedlemonpie', label: 'X / Twitter' },
    { href: 'mailto:aryangahlot50@gmail.com', label: 'Email' },
]

export function Footer() {
    return (
        <footer
            className="border-t"
            style={{
                background: '#000000',
                borderColor: 'rgba(255,255,255,0.06)',
            }}
        >
            <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="font-display text-[20px] font-medium text-white inline-block mb-3"
                            style={{ letterSpacing: '-0.8px' }}
                        >
                            aryan.
                        </Link>
                        <p className="font-body text-[14px] text-white/40 leading-[1.6] max-w-[280px]">
                            ML &amp; AI Researcher building intelligent systems 
                            and pushing the boundaries of machine learning.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-body text-[12px] font-medium uppercase tracking-wider text-white/30 mb-4">
                            Navigation
                        </h4>
                        <div className="flex flex-col gap-2.5">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-body text-[14px] text-white/50 hover:text-white transition-colors duration-200 w-fit"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-body text-[12px] font-medium uppercase tracking-wider text-white/30 mb-4">
                            Connect
                        </h4>
                        <div className="flex flex-col gap-2.5">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    target={link.label !== 'Email' ? '_blank' : undefined}
                                    className="font-body text-[14px] text-white/50 hover:text-framer-blue transition-colors duration-200 w-fit"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                    <p className="font-body text-[12px] text-white/25">
                        © {new Date().getFullYear()} Aryan Gahlot. All rights reserved.
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-body text-[12px] text-white/25 hover:text-white/50 transition-colors cursor-pointer"
                    >
                        Back to top ↑
                    </button>
                </div>
            </div>
        </footer>
    )
}
