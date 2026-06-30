'use client'

import { motion } from "framer-motion"
import ProjectCard from '@/components/blocks/projects/ProjectCard'
import { Navbar } from "@/components/ui/navbar/Navbar"
import { Footer } from "@/components/layout/footer/Footer"

const papers = [
    {
        id: 1,
        title: "Research Papers Archive",
        description: "A centralized repository of academic papers, notes, and research materials I have studied and analyzed. Covering topics across Deep Learning, Reinforcement Learning, and Systems.",
        tags: ["Research", "Deep Learning", "Systems", "RL"],
        repo: "https://github.com/aryanference/Papers"
    },
    {
        id: 2,
        title: "Paper Implementations",
        description: "Implementation of key research papers from scratch to understand their core mechanics. (Add your paper implementation folders to the public/papers directory or link them here).",
        tags: ["PyTorch", "Implementation", "From Scratch"],
        link: "#" // Placeholder link
    }
]

export default function PapersPage() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-8 max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="font-body text-[13px] font-medium uppercase tracking-wider text-framer-blue mb-4 block">
                        Research
                    </span>
                    <h1 className="font-display text-display-heading mb-4">
                        Papers & Implementations
                    </h1>
                    <p className="font-body text-body-lg max-w-[560px]">
                        A collection of research papers I've read, analyzed, and implemented from scratch.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-20"
                >
                    {/* Papers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {papers.map((paper) => (
                            <ProjectCard key={paper.id} project={paper} />
                        ))}
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}
