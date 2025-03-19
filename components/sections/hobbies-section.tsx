import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Book, Camera, Plane, Code, Coffee } from "lucide-react"

export function HobbiesSection() {
  const hobbies = [
    {
      title: "Música",
      description: "Tocar violão e piano nas horas vagas, explorando diferentes gêneros musicais.",
      icon: Music,
    },
    {
      title: "Leitura",
      description: "Ler livros de ficção científica, desenvolvimento pessoal e biografias inspiradoras.",
      icon: Book,
    },
    {
      title: "Fotografia",
      description: "Capturar momentos especiais e explorar a fotografia de paisagem e urbana.",
      icon: Camera,
    },
    {
      title: "Viagens",
      description: "Conhecer novos lugares, culturas e experiências ao redor do mundo.",
      icon: Plane,
    },
    {
      title: "Programação",
      description: "Desenvolver projetos pessoais e explorar novas tecnologias e linguagens.",
      icon: Code,
    },
    {
      title: "Café",
      description: "Explorar diferentes métodos de preparo e origens de café especial.",
      icon: Coffee,
    },
  ]

  return (
    <section className="min-h-screen py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Hobbies</h2>
          <p className="text-muted-foreground">
            Além do desenvolvimento web, tenho diversas paixões e interesses que me ajudam a manter o equilíbrio e a
            criatividade.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <hobby.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{hobby.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{hobby.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

