import { Button } from "@/components/ui/button";
import { FaWhatsapp } from 'react-icons/fa';

export const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button asChild variant="whatsapp" size="lg" className="shadow-glow">
        <a
          href="https://wa.me/5500000000000?text=Olá%20SouzAI!%20Quero%20falar%20com%20um%20especialista."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp agora"
        >
          <FaWhatsapp className="mr-1" /> Falar no WhatsApp
        </a>
      </Button>
    </div>
  );
};
