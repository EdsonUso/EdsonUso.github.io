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
            <h1 className="text-4xl font-bold">Edson Cruz</h1>
            <p className="text-xl text-muted-foreground">Desenvolvedor FullStack</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Sobre Mim</h2>
          <p className="text-muted-foreground">
          Sou um desenvolvedor apaixonado por criar soluções inovadoras, desde aplicações simples até sistemas mais complexos. Meu foco está no desenvolvimento Full Stack, garantindo eficiência tanto no backend quanto no frontend.

Tenho experiência com diversas tecnologias, incluindo Java (Spring Boot),Kotlin(Android Native), JavaScript e TypeScript (Node.js, React) e PHP. Além disso, utilizo ferramentas e serviços de automação como Power Apps, GitHub Actions e Power Automate para otimizar processos e fluxos de trabalho.
          </p>
          <p className="text-muted-foreground">
          Minha jornada com a tecnologia começou em um projeto chamado CCA, voltado para benefícios comunitários, onde participei de uma feira de robótica. Nesse evento, desenvolvi um aspirador de pó utilizando sucatas e lixo eletrônico, com a ajuda de um Arduino e o pouco que conseguia aplicar de C++.

Foi nesse momento que me encantei ao ver os responsáveis pela limpeza do CCA usando o aspirador simples que criei apenas para a apresentação. Foi uma experiência marcante, pois percebi o impacto real que a tecnologia pode ter e soube, naquele instante, que era isso que eu queria fazer: criar soluções que fazem a diferença.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Habilidades</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>React Native</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Node.js</Badge>
            <Badge>UI/UX Design</Badge>
            <Badge>API Development</Badge>
            <Badge>Git</Badge>
            <Badge>Java</Badge>
            <Badge>Spring Boot</Badge>
            <Badge>Kotlin</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

