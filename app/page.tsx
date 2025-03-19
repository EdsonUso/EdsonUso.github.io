"use client"

import { useEffect, useRef, useState } from "react"
import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { InspirationSection } from "@/components/sections/inspiration-section"
import { HobbiesSection } from "@/components/sections/hobbies-section"
import { ContactSection } from "@/components/sections/contact-section"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    inspiration: useRef<HTMLDivElement>(null),
    hobbies: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3

    Object.entries(sectionRefs).forEach(([section, ref]) => {
      if (ref.current) {
        const { offsetTop, offsetHeight } = ref.current

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
        }
      }
    })
  }

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs]
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <AnimatedBackground />
      <div className="flex">
        <LeftSidebar activeSection={activeSection} onSectionClick={scrollToSection} />
        <div className="flex-1 px-4 md:px-0">
          <div className="mx-auto max-w-3xl py-8">
            <div ref={sectionRefs.about}>
              <AboutSection />
            </div>
            <div ref={sectionRefs.projects}>
              <ProjectsSection />
            </div>
            <div ref={sectionRefs.inspiration}>
              <InspirationSection />
            </div>
            <div ref={sectionRefs.hobbies}>
              <HobbiesSection />
            </div>
            <div ref={sectionRefs.contact}>
              <ContactSection />
            </div>
          </div>
        </div>
        <RightSidebar activeSection={activeSection} onSectionClick={scrollToSection} />
      </div>
    </main>
  )
}

