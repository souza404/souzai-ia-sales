import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface LeadFormProps {
  id?: string;
  variant?: "compact" | "full";
}

export const LeadForm = ({ id, variant = "full" }: LeadFormProps) => {
  const [interest, setInterest] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");

    toast({
      title: "Obrigado!",
      description: "Em breve entraremos em contato.",
    });

    form.reset();
    setInterest("");
  };

  return (
    <form id={id} onSubmit={handleSubmit} className={`w-full ${variant === "compact" ? "grid grid-cols-1 gap-3" : "grid grid-cols-1 md:grid-cols-2 gap-4"}`} aria-label="Formulário de contato SouzAI">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" name="name" placeholder="Seu nome" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" name="email" placeholder="voce@empresa.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Empresa</Label>
        <Input id="company" name="company" placeholder="Nome da empresa" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="whatsapp">WhatsApp</Label>
        <Input id="whatsapp" name="whatsapp" placeholder="(11) 90000-0000" required />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label>Interesse</Label>
        <Select value={interest} onValueChange={setInterest} name="interest" required>
          <SelectTrigger aria-label="Selecione seu interesse">
            <SelectValue placeholder="Escolha: Vendas, Atendimento ou Outro" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vendas">Vendas</SelectItem>
            <SelectItem value="atendimento">Atendimento</SelectItem>
            <SelectItem value="outro">Outro</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-x-2 md:col-span-2">
        <Checkbox id="lgpd" required />
        <Label htmlFor="lgpd" className="text-sm text-muted-foreground">
          Autorizo contato e tratamento conforme a Política de Privacidade.
        </Label>
      </div>
      <div className="md:col-span-2 flex flex-col sm:flex-row gap-3">
        <Button type="submit" variant="hero" className="w-full sm:w-auto">Quero uma demonstração</Button>
        <Button asChild variant="whatsapp" className="w-full sm:w-auto">
          <a href="https://wa.me/5500000000000?text=Olá%20SouzAI!%20Quero%20um%20diagnóstico%20gratuito." target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </form>
  );
};
