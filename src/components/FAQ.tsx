import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quando procurar um psicólogo?",
    answer: "Quando sua relação com a comida e o corpo gera sofrimento, culpa, compulsão ou dificuldade em manter hábitos saudáveis. A terapia ajuda a quebrar esse ciclo."
  },
  {
    question: "Atende convênio?",
    answer: "O atendimento é particular. Se seu convênio oferecer reembolso, emito recibo para solicitação direta à operadora."
  },
  {
    question: "Como me preparar para a consulta?",
    answer: "Sem preparo específico. Escolha um local tranquilo e, se quiser, tenha papel e caneta por perto."
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer: "Varia conforme desafios, objetivos e evolução. O acompanhamento é contínuo — ajustamos o plano conforme suas necessidades."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Dúvidas frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Esclareça suas principais dúvidas sobre o processo terapêutico
        </p>
        
        <div className="bg-gradient-card rounded-3xl p-8 shadow-card">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-2xl px-6 bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 text-foreground font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;