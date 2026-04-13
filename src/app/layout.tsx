import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/utils'
import { Analytics } from "@vercel/analytics/react"
import { displayFont, bodyFont, monoFont } from '@/styles/fonts/fonts'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Aryan Gahlot | ML & AI Researcher · Data Scientist',
  description: 'ML & AI Researcher specializing in deep learning, LLM systems, and data science. Building intelligent systems, publishing research, and engineering ML pipelines.',
  keywords: ['Machine Learning', 'AI Research', 'Data Science', 'Deep Learning', 'LLM', 'NLP', 'Portfolio'],
  authors: [{ name: 'Aryan Gahlot' }],
  openGraph: {
    title: 'Aryan Gahlot | ML & AI Researcher · Data Scientist',
    description: 'ML & AI Researcher specializing in deep learning, LLM systems, and data science.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Gahlot | ML & AI Researcher · Data Scientist',
    description: 'ML & AI Researcher specializing in deep learning, LLM systems, and data science.',
    creator: '@indeedlemonpie',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
      "h-full",
      displayFont.variable,
      bodyFont.variable,
      monoFont.variable
    )} suppressHydrationWarning>
      <body className="h-full bg-black text-white" style={{ backgroundColor: '#000000' }}>
        <div className="flex flex-col min-h-screen relative">
          <div className="flex-1 flex flex-col">
            <main className="flex-1">
              {children}
              <Analytics />
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
