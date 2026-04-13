'use client'

import { motion } from "framer-motion"
import ProjectCard from '@/components/blocks/projects/ProjectCard'
import { projects } from '@/lib/projects/projects'
import { Navbar } from "@/components/ui/navbar/Navbar"
import { Footer } from "@/components/layout/footer/Footer"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
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
                        Work
                    </span>
                    <h1 className="font-display text-display-heading mb-4">
                        All Projects
                    </h1>
                    <p className="font-body text-body-lg max-w-[560px]">
                        A comprehensive showcase of my implementations, experiments, and ML systems.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-20"
                >
                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}
