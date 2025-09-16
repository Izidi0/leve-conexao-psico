import julianaImage from "@/assets/juliana-professional.png";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Sobre mim
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20"></div>
                <img 
                  src={julianaImage}
                  alt="Juliana Fernandes - Psicóloga especializada em compulsão alimentar e relação com o corpo"
                  className="relative rounded-2xl shadow-card w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Sou a <strong className="text-foreground">Juliana, psicóloga</strong>, e uma das minhas paixões é ajudar pessoas a 
                transformarem sua relação com a comida e com o corpo. Sei o quanto é frustrante 
                se sentir presa(o) a ciclos de dietas, culpa e compulsão — sem encontrar um 
                caminho realmente sustentável.
              </p>
              
              <p>
                Com mais de <strong className="text-primary">100 atendimentos na área</strong> e embasamento em 
                <strong className="text-foreground"> Terapia Cognitivo-Comportamental (TCC)</strong>, ajudo meus pacientes a 
                desenvolver hábitos saudáveis sem sofrimento, aprendendo a comer com mais 
                consciência e equilíbrio. Meu compromisso é oferecer um espaço acolhedor, 
                sem julgamentos, onde você possa compreender seus desafios e encontrar 
                soluções práticas para viver em paz com a comida e consigo mesma(o).
              </p>
              
              <p>
                Se você já tentou de tudo e sente que nada funciona a longo prazo, é possível 
                mudar — <strong className="text-primary">sem radicalismos, sem restrições</strong>, com conhecimento e as 
                estratégias certas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;