const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="space-y-2">
          <p className="text-foreground font-semibold">
            © Juliana Fernandes – Psicóloga. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground font-medium">
            CRP: 03/28780
          </p>
        </div>
        
        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Este site não oferece atendimento de crise. Em situações de risco, procure ajuda emergencial.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;