import { Button } from "@/components/ui/button";
import { FaWhatsapp } from 'react-icons/fa';

export const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button
        asChild
        variant="whatsapp"
        size="lg"
        className="h-14 w-14 aspect-square rounded-full p-0 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-[1px] focus-visible:ring-4 focus-visible:ring-emerald-500/40"
      >
        <a
          href="https://wa.me/5531992510973?text=Olá%20SouzAI!%20Quero%20falar%20com%20um%20especialista."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp agora"
        >
          <FaWhatsapp className="text-4xl drop-shadow-sm" />
        </a>
      </Button>
    </div>
  );
};

