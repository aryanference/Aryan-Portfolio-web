import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'

// Primary display font — geometric sans, closest to GT Walsheim on Google Fonts
export const displayFont = Space_Grotesk({
    subsets: ['latin'],
    weight: ['500'],
    variable: '--font-display',
    display: 'swap',
})

// Body/UI font — Inter with OpenType features
export const bodyFont = Inter({
    subsets: ['latin'],
    weight: ['100', '400', '500', '600', '700'],
    variable: '--font-body',
    display: 'swap',
})

// Monospace font for code/technical labels
export const monoFont = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-mono',
    display: 'swap',
})

// Backwards compatibility aliases
export const sansFont = displayFont
export const codeFont = bodyFont