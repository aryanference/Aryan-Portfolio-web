'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SkillCategory {
    title: string
    skills: string[]
}

const skillCategories: SkillCategory[] = [
    {
        title: "Machine Learning & AI",
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Deep Learning", "NLP", "LLMs", "Transformers"]
    },
    {
        title: "Data Engineering",
        skills: ["PySpark", "Pandas", "NumPy", "SQL", "Data Pipelines", "ETL", "Feature Engineering"]
    },
    {
        title: "Development",
        skills: ["Python", "TypeScript", "Next.js", "Django", "Git", "Docker", "MLOps"]
    },
    {
        title: "Research",
        skills: ["Bayesian Methods", "Statistical Modeling", "Evolutionary Algorithms", "Inference Optimization"]
    }
]

const currentlyExploring = ["LLM Reasoning", "Evolutionary Search", "Agent Systems", "Mechanistic Interpretability"]

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            className="card-framer p-6 md:p-8 group"
        >
            <h3
                className="font-display text-[22px] font-medium text-white mb-5"
                style={{ letterSpacing: '-0.8px' }}
            >
                {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1.5 text-[13px] font-body font-medium rounded-full transition-all duration-200"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            color: '#a6a6a6',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}

export function CurrentWork() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section id="skills" className="py-24 md:py-32" style={{ background: '#000000' }}>
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                {/* Section Header */}
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span
                        className="font-body text-[13px] font-medium uppercase tracking-wider text-framer-blue mb-4 block"
                    >
                        Expertise
                    </span>
                    <h2
                        className="font-display text-display-heading mb-4"
                    >
                        Tech Stack &amp; Skills
                    </h2>
                    <p className="font-body text-body-lg max-w-[560px]">
                        Specialized in building end-to-end ML pipelines, from data preprocessing
                        to model deployment. Here's my technical toolkit.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
                    {skillCategories.map((category, index) => (
                        <SkillCard
                            key={category.title}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>

                {/* Currently Exploring */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="card-framer p-6 md:p-8"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <span
                            className="font-body text-[14px] font-medium text-white whitespace-nowrap"
                        >
                            Currently Exploring →
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {currentlyExploring.map((topic) => (
                                <span
                                    key={topic}
                                    className="px-4 py-1.5 text-[13px] font-body font-medium rounded-full text-framer-blue"
                                    style={{
                                        background: 'rgba(0,153,255,0.08)',
                                        border: '1px solid rgba(0,153,255,0.2)',
                                    }}
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}