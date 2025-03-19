import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section className="min-h-screen py-20">
      <div className="space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h1 className="text-4xl font-bold">João Pedro</h1>
            <p className="text-xl text-muted-foreground">Desenvolvedor Web</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Sobre Mim</h2>
          <p className="text-muted-foreground">
            Olá! Sou um desenvolvedor web apaixonado por criar experiências digitais intuitivas e atraentes. Com mais de
            5 anos de experiência no desenvolvimento de aplicações web, tenho trabalhado com as mais recentes
            tecnologias para entregar soluções de alta qualidade.
          </p>
          <p className="text-muted-foreground">
            Minha jornada na programação começou durante a faculdade, onde descobri minha paixão por resolver problemas
            complexos e transformar ideias em realidade através do código. Desde então, tenho me dedicado a aprimorar
            minhas habilidades e acompanhar as tendências do mercado.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Habilidades</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Node.js</Badge>
            <Badge>Tailwind CSS</Badge>
            <Badge>UI/UX Design</Badge>
            <Badge>Responsive Design</Badge>
            <Badge>API Development</Badge>
            <Badge>Git</Badge>
            <Badge>Docker</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

