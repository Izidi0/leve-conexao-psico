import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Desde nossa última sessão não tenho sentido culpa nem medo de perder o controle. Aprendi a confiar no meu corpo e a fazer melhores escolhas, priorizando o equilíbrio — sem sofrer.",
    author: "Maria S."
  },
  {
    text: "Eu já tentei mil dietas e sempre desistia. Na terapia com a Ju, entendi os gatilhos que me faziam perder o controle e enfim estou conseguindo manter hábitos que antes eu não sustentava, sem me sentir presa a regras rígidas.",
    author: "Ana P."
  },
  {
    text: "A terapia com a Juliana mudou como eu enxergo meu corpo. Antes eu vivia me comparando e me sentia insuficiente. Hoje respeito meus processos e tenho mais amor comigo mesma.",
    author: "Carolina M."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          O que meus pacientes dizem
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Depoimentos reais de pessoas que transformaram sua relação com a comida e o corpo
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary mx-auto" />
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="text-center">
                  <cite className="text-sm font-semibold text-foreground not-italic">
                    — {testimonial.author}
                  </cite>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;