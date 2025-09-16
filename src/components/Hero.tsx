import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Shield, Users, Video } from "lucide-react";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5573991391372?text=Oi%2C%20Juliana%21%20Vim%20pelo%20site.%20Posso%20tirar%20uma%20d%C3%BAvida%20r%C3%A1pida%20sobre%20o%20atendimento%3F",
      "_blank"
    );
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Eyebrow */}
        <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
          Psicóloga online
        </Badge>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
          Terapia para uma relação{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            leve
          </span>{" "}
          com a comida e o corpo
        </h1>

        {/* Lead paragraph */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Minha missão é te ajudar a viver sem culpa e sem restrições extremas. Com formação em 
          obesidade e emagrecimento, acompanho pessoas que enfrentam compulsão alimentar, 
          efeito sanfona e dificuldades para manter hábitos saudáveis de forma sustentável.
        </p>

        {/* Social proof chips */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">+100 atendimentos</span>
          </div>
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Atendimento sigiloso</span>
          </div>
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
            <Video className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Google Meet</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Button
            onClick={handleWhatsApp}
            size="lg"
            variant="gradient"
            className="hover:scale-105 active:scale-95 transition-all duration-300 ease-bounce text-lg px-8 py-6 rounded-2xl shadow-card hover:shadow-floating"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Agendar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;