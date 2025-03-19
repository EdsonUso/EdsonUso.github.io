import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Uma plataforma de e-commerce completa com sistema de pagamento, gerenciamento de produtos e painel administrativo.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real, notificações e análise de produtividade.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "Site de portfólio moderno e responsivo com animações suaves e design minimalista.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ]

  return (
    <section className="min-h-screen py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Projetos</h2>
          <p className="text-muted-foreground">
            Aqui estão alguns dos projetos que desenvolvi recentemente. Cada projeto representa um desafio único que me
            ajudou a crescer como desenvolvedor.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

