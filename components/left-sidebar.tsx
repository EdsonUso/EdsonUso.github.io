"use client"

import { User, Briefcase, Lightbulb, Heart, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface LeftSidebarProps {
  activeSection: string
  onSectionClick: (section: string) => void
}

export function LeftSidebar({ activeSection, onSectionClick }: LeftSidebarProps) {
  const menuItems = [
    { id: "about", label: "Sobre Mim", icon: User },
    { id: "projects", label: "Projetos", icon: Briefcase },
    { id: "inspiration", label: "Inspiração", icon: Lightbulb },
    { id: "hobbies", label: "Hobbies", icon: Heart },
    { id: "contact", label: "Contato", icon: Mail },
  ]

  return (
    <div className="fixed left-0 top-0 hidden h-screen w-20 flex-col items-center justify-center bg-background/50 backdrop-blur-sm md:flex">
      <div className="flex flex-col items-center space-y-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionClick(item.id)}
            className={cn(
              "group flex flex-col items-center justify-center space-y-1 transition-all duration-300",
              activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-primary",
            )}
          >
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
                activeSection === item.id ? "bg-primary/10" : "bg-transparent group-hover:bg-primary/5",
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 transition-all duration-300",
                  activeSection === item.id ? "scale-110" : "scale-100",
                )}
              />
            </div>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

