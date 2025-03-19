import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Gamepad, Book, Camera, Code, Coffee, Cake } from "lucide-react"

export function HobbiesSection() {
  const hobbies = [
    {
      title: "Música",
      description: "Tocar violão, ouvir albuns de generos músicais que gosto.",
      icon: Music,
    },
    {
      title: "Jogos",
      description: "Jogos indies, imersivos, desenvolvendo mini jogos por hobbie",
      icon: Gamepad,
    },
    {
      title: "Filmes e serie",
      description: "Assistir filmes novos, indpendente do genero, tenho um gosto bastante ecletico.",
      icon: Camera,
    },
    {
      title: "Estudos",
      description: "Estudar coisas novas, desde tecnologia a ciencia no geral.",
      icon: Book,
    },
    {
      title: "Programação",
      description: "Desenvolver projetos pessoais e explorar novas tecnologias, linguagens e tendências.",
      icon: Code,
    },
    {
      title: "Cozinhar",
      description: "Cozinhar e ver receitas por hobbie, visando um dia quem sabe, sair do basico arroz e feijão.",
      icon: Cake,
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

