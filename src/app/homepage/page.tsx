'use client'

import { HeroSection } from "@/components/blocks/homepage/HeroSection"
import { CurrentWork } from "@/components/blocks/homepage/CurrentWork"
import { FeaturedProjects } from "@/components/blocks/homepage/FeaturedProjects"
import { ResearchPapers } from "@/components/blocks/homepage/ResearchPapers"
import { ResumeSection } from "@/components/blocks/homepage/ResumeSection"
import { HomepageSocials } from "@/components/blocks/homepage/HomepageSocials"
import { Navbar } from "@/components/ui/navbar/Navbar"
import { Footer } from "@/components/layout/footer/Footer"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <HeroSection />
        <CurrentWork />
        <FeaturedProjects />
        <ResearchPapers />
        <ResumeSection />
        <HomepageSocials />
      </main>
      <Footer />
    </div>
  )
}
