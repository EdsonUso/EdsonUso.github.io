import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function InspirationSection() {
  const inspirations = [
    {
      quote: "Design não é apenas como parece e como se sente. Design é como funciona.",
      author: "Steve Jobs",
      role: "Co-fundador da Apple",
    },
    {
      quote: "A simplicidade é a sofisticação suprema.",
      author: "Leonardo da Vinci",
      role: "Polímata",
    },
    {
      quote: "A inovação distingue entre um líder e um seguidor.",
      author: "Steve Jobs",
      role: "Co-fundador da Apple",
    },
    {
      quote: "Bom design é óbvio. Ótimo design é transparente.",
      author: "Joe Sparano",
      role: "Designer",
    },
    {
      quote: "A criatividade é a inteligência se divertindo.",
      author: "Albert Einstein",
      role: "Físico",
    },
    {
      quote: "O verdadeiro progresso é aquele que coloca a tecnologia ao alcance de todos.",
      author: "Henry Ford",
      role: "Fundador da Ford Motor Company",
    },
  ]

  return (
    <section className="min-h-screen py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Inspiração</h2>
          <p className="text-muted-foreground">
            Estas são algumas das citações e pensamentos que me inspiram diariamente em minha jornada criativa e
            profissional.
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

