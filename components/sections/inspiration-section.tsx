import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function InspirationSection() {
  const inspirations = [
    {
      quote: "Se você quer encontrar os segredos do universo, pense em termos de energia, frequência e vibração.",
      author: "Nikola Tesla",
      role: "Inventor e Engenheiro"
    },
    {
      quote: "A simplicidade é a sofisticação suprema.",
      author: "Leonardo da Vinci",
      role: "Polímata",
    },
    {
      quote: "A razão não pode produzir a verdade, ela apenas pode dizer onde a verdade não está.",
      author: "Baruch Espinoza",
      role: "Filósofo"
    },
    {
      quote: "Você é especial.",
      author: "Carla da Rocha",
      role: "Minha mãe",
    },
    {
      quote: "A criatividade é a inteligência se divertindo.",
      author: "Albert Einstein",
      role: "Físico",
    },
    {
      quote: "Estou orgulhoso de você.",
      author: "Edivaldo da Cruz",
      role: "Meu pai",
    },
  ]

  return (
    <section className="min-h-screen py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Inspiração</h2>
          <p className="text-muted-foreground">
            Estas são algumas das citações e pensamentos que me inspiram diariamente em minha jornada criativa,
            profissional e pessoal.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {inspirations.map((inspiration, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-2">
                <Quote className="h-6 w-6 text-primary/60" />
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-medium italic">"{inspiration.quote}"</p>
                <div>
                  <CardTitle className="text-sm font-medium">{inspiration.author}</CardTitle>
                  <CardDescription>{inspiration.role}</CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

