import { Card, CardContent } from "@/components/ui/card";
import { Heart, Scale, Brain, Target, Lightbulb } from "lucide-react";

const specialties = [
  {
    icon: Scale,
    title: "Obesidade e emagrecimento",
    description: "Estratégias sustentáveis para uma relação saudável com o peso"
  },
  {
    icon: Heart,
    title: "Compulsão alimentar, anorexia e bulimia", 
    description: "Tratamento especializado para transtornos alimentares"
  },
  {
    icon: Brain,
    title: "Comer emocional",
    description: "Compreenda e transforme os gatilhos emocionais da alimentação"
  },
  {
    icon: Target,
    title: "Manutenção de hábitos saudáveis",
    description: "Construa rotinas que realmente funcionam a longo prazo"
  },
  {
    icon: Lightbulb,
    title: "Pensamentos sabotadores",
    description: "Identifique e modifique padrões mentais limitantes sobre dieta"
  }
];

const Specialties = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Especialista no tratamento de
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Áreas de expertise desenvolvidas através de anos de estudo e prática clínica
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => {
            const IconComponent = specialty.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {specialty.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {specialty.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialties;