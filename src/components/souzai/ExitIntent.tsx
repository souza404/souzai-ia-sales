import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const ExitIntent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("exit_intent_shown");
    if (shown) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem("exit_intent_shown", "1");
      }
    };
    window.addEventListener("mouseleave", onMouseLeave);
    return () => window.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="glass">
        <DialogHeader>
          <DialogTitle>Guia prático: Como implementar um agente de IA em 7 dias</DialogTitle>
          <DialogDescription>
            Baixe o guia gratuito e receba um checklist para acelerar sua implantação.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3">
          <Button asChild variant="hero">
            <a href="#contato" onClick={() => setOpen(false)}>Quero receber</a>
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>Agora não</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
