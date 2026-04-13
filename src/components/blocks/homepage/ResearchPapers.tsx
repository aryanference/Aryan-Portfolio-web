'use client'

import { motion, useInView } from 'framer-motion'
import { FileText, ExternalLink, Code2 } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

interface Paper {
    id: number
    title: string
    description: string
    tags: string[]
    status: 'published' | 'in-progress' | 'coming-soon'
    paperUrl?: string
    codeUrl?: string
}

const papers: Paper[] = [
    {
        id: 1,
        title: "Evolving Deeper LLM Thinking — Implementation Study",
        description: "Custom implementation of DeepMind's evolutionary framework for LLM inference-time scaling. Island-model genetic algorithms with Refinement through Critical Conversation (RCC) for superior reasoning.",
        tags: ["Evolutionary AI", "LLM Reasoning", "Inference Scaling"],
        status: 'in-progress',
        codeUrl: "https://github.com/aryanference/Evolving-Deeper-LLM-Thinking-impl",
    },
    {
        id: 2,
        title: "Coming Soon",
        description: "New research paper and implementation will be added here. This section is designed to grow as research progresses.",
        tags: ["Research", "ML"],
        status: 'coming-soon',
    }
]

function StatusBadge({ status }: { status: Paper['status'] }) {
    const styles = {
        'published': {
            bg: 'rgba(0,153,255,0.1)',
            border: 'rgba(0,153,255,0.3)',
            color: '#0099ff',
            text: 'Published'
        },
        'in-progress': {
            bg: 'rgba(255,180,0,0.08)',
            border: 'rgba(255,180,0,0.25)',
            color: '#ffb400',
            text: 'In Progress'
        },
        'coming-soon': {
            bg: 'rgba(255,255,255,0.04)',
            border: 'rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.4)',
            text: 'Coming Soon'
        }
    }

    const s = styles[status]

    return (
        <span
            className="px-3 py-1 text-[11px] font-body font-medium rounded-full"
            style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
        >
            {s.text}
        </span>
    )
}

function PaperCard({ paper, index }: { paper: Paper; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            className={`card-framer p-6 md:p-8 ${paper.status === 'coming-soon' ? 'opacity-50' : ''}`}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div
                        className="p-2 rounded-lg"
                        style={{ background: 'rgba(0,153,255,0.08)' }}
                    >
                        <FileText className="w-4 h-4 text-framer-blue" />
                    </div>
                    <StatusBadge status={paper.status} />
                </div>
            </div>

            {/* Title */}
            <h3
                className="font-display text-[20px] md:text-[22px] font-medium text-white mb-3"
                style={{ letterSpacing: '-0.8px' }}
            >
                {paper.title}
            </h3>

            {/* Description */}
            <p
                className="font-body text-[14px] leading-[1.6] text-white/50 mb-6"
                style={{ fontFeatureSettings: "'cv11'" }}
            >
                {paper.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {paper.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full"
                        style={{
                            background: 'rgba(255,255,255,0.04)',
                            color: 'rgba(255,255,255,0.45)',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Action buttons */}
            {(paper.paperUrl || paper.codeUrl) && (
                <div className="flex items-center gap-3">
                    {paper.paperUrl && (
                        <Link
                            href={paper.paperUrl}
                            target="_blank"
                            className="btn-pill-frosted text-[13px] py-2 px-4 gap-1.5"
                        >
                            <FileText className="w-3.5 h-3.5" />
                            Read Paper
                        </Link>
                    )}
                    {paper.codeUrl && (
                        <Link
                            href={paper.codeUrl}
                            target="_blank"
                            className="btn-pill-frosted text-[13px] py-2 px-4 gap-1.5"
                        >
                            <Code2 className="w-3.5 h-3.5" />
                            View Code
                        </Link>
                    )}
                </div>
            )}
        </motion.div>
    )
}

export function ResearchPapers() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section id="papers" className="py-24 md:py-32" style={{ background: '#000000' }}>
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
                        Research
                    </span>
                    <h2 className="font-display text-display-heading mb-4">
                        Papers &amp; Implementations
                    </h2>
                    <p className="font-body text-body-lg max-w-[560px]">
                        Research papers with accompanying code implementations. 
                        Bridging the gap between theory and practice.
                    </p>
                </motion.div>

                {/* Papers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {papers.map((paper, index) => (
                        <PaperCard
                            key={paper.id}
                            paper={paper}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
