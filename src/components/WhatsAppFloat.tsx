import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5573991391372?text=Oi%2C%20Juliana%21%20Vim%20pelo%20site.%20Posso%20tirar%20uma%20d%C3%BAvida%20r%C3%A1pida%20sobre%20o%20atendimento%3F",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp/90 hover:scale-110 active:scale-95 transition-all duration-300 ease-bounce rounded-full p-4 shadow-floating animate-pulse hover:animate-none"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-whatsapp-foreground" />
    </button>
  );
};

export default WhatsAppFloat;