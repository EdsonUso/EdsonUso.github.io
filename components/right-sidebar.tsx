"use client"

import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

interface RightSidebarProps {
  activeSection: string
  onSectionClick: (section: string) => void
}

export function RightSidebar({ activeSection, onSectionClick }: RightSidebarProps) {
  const socialLinks = [
    { id: "github", icon: Github, href: "https://github.com" },
    { id: "linkedin", icon: Linkedin, href: "https://linkedin.com" },
    { id: "twitter", icon: Twitter, href: "https://twitter.com" },
    { id: "instagram", icon: Instagram, href: "https://instagram.com" },
  ]

  return (
    <div className="fixed right-0 top-0 hidden h-screen w-20 flex-col items-center justify-center bg-background/50 backdrop-blur-sm md:flex">
      <div className="flex flex-col items-center space-y-8">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center space-y-1 text-muted-foreground transition-all duration-300 hover:text-primary"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-all duration-300 group-hover:bg-primary/5">
              <link.icon className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

