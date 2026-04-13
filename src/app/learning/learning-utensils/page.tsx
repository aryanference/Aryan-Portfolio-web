'use client'

import { motion } from "framer-motion"
import { Navbar } from "@/components/ui/navbar/Navbar"
import { Footer } from "@/components/layout/footer/Footer"
import Link from "next/link"

const utensils = [
    { label: "Keyboard", value: "Nuphy Air75 V2", link: "https://nuphy.com/products/air75-v2" },
    { label: "Notebook (physical)", value: "Normal notebook from Muji Japan" },
    { label: "Pen", value: "0.5 black ink ballpoint pen from Muji Japan" },
    { label: "Monitor", value: "Dell U2520DR", link: "https://www.amazon.co.jp/gp/product/B08CDGS83Y/" },
    { label: "Math website I use", value: "Math Academy", link: "https://mathacademy.com" }
]

export default function LearningUtensils() {
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
                    <Link href="/learning" className="font-body text-[13px] font-medium uppercase tracking-wider text-framer-blue mb-4 flex items-center hover:opacity-80 transition-opacity w-fit">
                        ← Back to Learning
                    </Link>
                    <h1 className="font-display text-display-heading mb-4">
                        Learning Utensils
                    </h1>
                    <p className="font-body text-body-lg max-w-[560px]">
                        All my learning utensils for people that might be interested (idk why you'd be interested but here you go)
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="card-framer p-8 flex flex-col gap-6">
                        {utensils.map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b pb-4 last:border-0 last:pb-0" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                                <span className="font-body text-[14px] font-medium text-white/50 w-48 shrink-0">
                                    {item.label}
                                </span>
                                {item.link ? (
                                    <Link href={item.link} target="_blank" className="font-body text-[15px] text-framer-blue hover:text-white transition-colors">
                                        {item.value}
                                    </Link>
                                ) : (
                                    <span className="font-body text-[15px] text-white">
                                        {item.value}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}