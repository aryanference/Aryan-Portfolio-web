"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar/Navbar";
import { Footer } from "@/components/layout/footer/Footer";
import { getWeeksByMonth } from "./_data/weeks";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion/accordion";
import { cn } from "@/lib/utils/utils";

export default function WeeklyReflections() {
	const monthGroups = getWeeksByMonth();
	// Only the most recent month should be open by default
	const mostRecentMonth = monthGroups[0]?.month;

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
						Weekly Reflections
					</h1>
					<p className="font-body text-body-lg max-w-[560px]">
						My attempt at documenting, reflecting on, and being grateful for
						what I learned each week in my pursuit of knowledge.
					</p>
				</motion.div>

				<motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
					<Accordion 
						type="single" 
						defaultValue={mostRecentMonth}
						className="space-y-4"
					>
						{monthGroups.map((group) => (
							<AccordionItem
								key={group.month}
								value={group.month}
								className="card-framer border-none px-6 py-4"
							>
								<AccordionTrigger className={cn(
									"p-0 hover:no-underline",
									"group flex items-center justify-between",
									"transition-all duration-200"
								)}>
									<span className={cn(
										"font-display text-[20px] font-medium text-white group-hover:text-framer-blue transition-colors",
										"group-data-[state=open]:text-framer-blue"
									)} style={{ letterSpacing: '-0.5px' }}>
										{group.month}
									</span>
								</AccordionTrigger>
								<AccordionContent className="pt-6 pb-2">
									<div className="flex flex-col gap-2">
										{group.weeks.map((week, weekIndex) => (
											<div 
												key={week.href} 
												className={cn(
													"group relative border-l border-white/10 transition-all duration-200 hover:border-framer-blue"
												)}
											>
												<Link 
													href={week.href}
													className={cn(
														"block py-3 pl-6",
														"font-body text-[15px] text-white/50",
														"hover:text-white transition-colors duration-200"
													)}
												>
													{week.title}
												</Link>
											</div>
										))}
									</div>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>
			</main>
			<Footer />
		</div>
	);
}