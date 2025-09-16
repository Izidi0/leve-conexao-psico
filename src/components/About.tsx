const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
            Sobre mim
          </h2>
          
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed space-y-6">
            <p>
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
    </section>
  );
};

export default About;