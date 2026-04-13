'use client'

import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

interface FeaturedProject {
    id: number
    title: string
    description: string
    tags: string[]
    repo: string
    icon: string
}

const featuredProjects: FeaturedProject[] = [
    {
        id: 1,
        title: "Heisenberg",
        description: "Autonomous financial research agent with hedge fund intelligence. Multi-step reasoning, SEC filing analysis, and strategy lenses from the world's top 8 funds.",
        tags: ["TypeScript", "LLM Agents", "Finance", "Autonomous AI"],
        repo: "https://github.com/aryanference/Heisenberg-",
        icon: "⚗️"
    },
    {
        id: 2,
        title: "Evolving Deeper LLM Thinking",
        description: "Evolutionary algorithm framework for LLM inference scaling. Island-model genetic search with Refinement through Critical Conversation, inspired by DeepMind's research.",
        tags: ["Python", "Evolutionary AI", "LLM", "Research Impl."],
        repo: "https://github.com/aryanference/Evolving-Deeper-LLM-Thinking-impl",
        icon: "🧬"
    },
    {
        id: 3,
        title: "Brain Tumor Detection",
        description: "Deep learning model for medical imaging analysis using CNNs for brain tumor classification and detection from MRI scans.",
        tags: ["Deep Learning", "Medical AI", "CNN", "Python"],
        repo: "https://github.com/usergotnewexp/brain-tumor-res",
        icon: "🧠"
    },
    {
        id: 4,
        title: "Bayesian Modeling",
        description: "Statistical modeling experiments implementing Bayesian inference techniques for probabilistic predictions and uncertainty quantification.",
        tags: ["Bayesian", "Statistics", "Python", "Inference"],
        repo: "https://github.com/usergotnewexp/Bayesian-Model-re",
        icon: "📊"
    },
    {
        id: 5,
        title: "PySpark Data Pipeline",
        description: "End-to-end distributed data processing pipeline with feature engineering, ETL workflows, and scalable data transformations.",
        tags: ["PySpark", "Big Data", "ETL", "Data Engineering"],
        repo: "https://github.com/usergotnewexp/Pyspark-pipeline-implementation",
        icon: "⚡"
    }
]

function ProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
        >
            <Link
                href={project.repo}
                target="_blank"
                className="block card-framer p-6 md:p-8 h-full group cursor-pointer"
            >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">{project.icon}</span>
                        <h3
                            className="font-display text-[20px] md:text-[22px] font-medium text-white group-hover:text-framer-blue transition-colors duration-300"
                            style={{ letterSpacing: '-0.8px' }}
                        >
                            {project.title}
                        </h3>
                    </div>
                    <div className="p-2 rounded-lg transition-colors duration-200"
                         style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                        <Github className="w-4 h-4 text-white/40 group-hover:text-framer-blue transition-colors" />
                    </div>
                </div>

                {/* Description */}
                <p
                    className="font-body text-[14px] leading-[1.6] text-white/50 mb-6"
                    style={{ fontFeatureSettings: "'cv11'" }}
                >
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
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

                {/* Link */}
                <div className="flex items-center gap-2 font-body text-[13px] font-medium text-white/30 group-hover:text-framer-blue transition-colors">
                    View on GitHub
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
            </Link>
        </motion.div>
    )
}

export function FeaturedProjects() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section id="projects" className="py-24 md:py-32" style={{ background: '#000000' }}>
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                {/* Section Header */}
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
                >
                    <div>
                        <span className="font-body text-[13px] font-medium uppercase tracking-wider text-framer-blue mb-4 block">
                            Work
                        </span>
                        <h2 className="font-display text-display-heading mb-4">
                            Featured Projects
                        </h2>
                        <p className="font-body text-body-lg max-w-[560px]">
                            Research implementations, autonomous agents, and ML systems.
                        </p>
                    </div>
                    <Link
                        href="/projects"
                        className="btn-pill-frosted text-[14px] py-2.5 px-5 group self-start md:self-auto"
                    >
                        All projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
