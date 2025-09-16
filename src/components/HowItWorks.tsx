import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Video, MessageCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "1",
    title: "Agendamento e dúvidas",
    description: "Do primeiro contato ao plano terapêutico feito sob medida. Definimos um dia e horário fixos para os encontros."
  },
  {
    icon: Video,
    step: "2", 
    title: "Consulta presencial/online",
    description: "Sessões via Google Meet, 50 minutos, sigilo e privacidade garantidos."
  },
  {
    icon: MessageCircle,
    step: "3",
    title: "Acompanhamento",
    description: "Estamos juntas(os) além dos 50 minutos. Dúvidas breves podem ser alinhadas pelo WhatsApp."
  },
  {
    icon: TrendingUp,
    step: "4",
    title: "Tratamento contínuo",
    description: "Plano personalizado, com monitoramento da evolução e ajustes quando necessário."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Como funciona a consulta?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Um processo cuidadoso e personalizado para seu bem-estar
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 relative overflow-hidden"
              >
                <CardContent className="p-6 text-center space-y-4">
                  {/* Step number background */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary/30">{step.step}</span>
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
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

export default HowItWorks;