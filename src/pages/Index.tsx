import hero from "@/assets/hero-souzai.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check,Shield, Zap, Send, Instagram, Globe, Mail, Bot, TrendingUp, LineChart } from "lucide-react";
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { LeadForm } from "@/components/souzai/LeadForm";
import { FloatingWhatsApp } from "@/components/souzai/FloatingWhatsApp";
import { ExitIntent } from "@/components/souzai/ExitIntent";
import { AutomationsCarousel } from "@/components/souzai/AutomationsCarousel";
import { ProjectsCarousel } from "@/components/souzai/ProjectsCarousel";
import { useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá%20SouzAI!%20Quero%20uma%20demonstração.";

const Index = () => {
  useEffect(() => {
    // Structured data: Organization + FAQ
    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "SouzAI",
      url: "https://souzai.lovable.app/",
      logo: "/favicon.ico",
      sameAs: [
        "https://www.instagram.com/",
        "https://www.linkedin.com/"
      ]
    };

    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {"@type":"Question","name":"O agente substitui meu time?","acceptedAnswer":{"@type":"Answer","text":"Não. Ele acelera e qualifica; seu time foca no que fecha."}},
        {"@type":"Question","name":"Em quanto tempo vejo resultado?","acceptedAnswer":{"@type":"Answer","text":"Normalmente nas primeiras semanas, variando por canal e volume."}},
        {"@type":"Question","name":"Quais integrações vocês suportam?","acceptedAnswer":{"@type":"Answer","text":"Principais CRMs, ERPs e automações via API, webhooks, n8n/Make/Zapier."}},
        {"@type":"Question","name":"Como funciona a LGPD?","acceptedAnswer":{"@type":"Answer","text":"Governança de dados, consentimento e controle de retenção."}},
        {"@type":"Question","name":"Posso usar meu próprio provedor de IA?","acceptedAnswer":{"@type":"Answer","text":"Sim (OpenAI e alternativos)."}},
        {"@type":"Question","name":"Tenho fluxos complexos, dá certo?","acceptedAnswer":{"@type":"Answer","text":"Mapeamos e modularizamos por etapas."}}
      ]
    };

    const scriptOrg = document.createElement('script');
    scriptOrg.type = 'application/ld+json';
    scriptOrg.innerHTML = JSON.stringify(org);
    document.head.appendChild(scriptOrg);

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.innerHTML = JSON.stringify(faq);
    document.head.appendChild(scriptFaq);

    return () => {
      document.head.removeChild(scriptOrg);
      document.head.removeChild(scriptFaq);
    };
  }, []);

  return (
    <div>
      {/* Header sticky */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:glass border-b">
        <div className="container mx-auto flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-2">
            <Bot className="text-primary" />
            <span className="font-heading text-lg">SouzAI</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Como funciona</a>
            <a href="#casos" className="hover:text-primary transition-colors">Casos de uso</a>
            <a href="#planos" className="hover:text-primary transition-colors">Planos</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </nav>
          <div className="hidden md:block">
            <Button asChild variant="hero">
              <a href="#contato">Agendar demo</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-20 animate-gradient-slow" aria-hidden="true" />
        <img src={hero} alt="Fundo tecnológico em gradiente roxo com glassmorphism" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="relative container mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs bg-secondary text-muted-foreground border">
              <Shield className="w-4 h-4 text-primary" /> Conformidade com a LGPD
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight text-white">
              <span>Agentes de IA que vendem e atendem por você 24/7</span>
            </h1>

            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto text-white">
              A SouzAI implementa e treina agentes de IA sob medida para captar leads, qualificar, fechar vendas e dar suporte — integrados aos seus canais e CRM.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-white">
              <Button asChild variant="hero" size="lg">
                <a href="#contato">Quero uma demonstração</a>
              </Button>
              <Button asChild variant="whatsapp" size="lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="mr-2 h-4 w-4" /> Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problema -> Solução */}
      <section id="beneficios" className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-heading text-3xl mb-3">Equipes sobrecarregadas, respostas lentas e leads frios?</h2>
            <p className="text-muted-foreground">Esses gargalos não só atrasam processos, eles drenam vendas, esfriam leads prontos para comprar e deixam dinheiro na mesa todos os dias.</p>
          </div>
          <div>
            <h3 className="font-heading text-2xl mb-3">A solução SouzAI</h3>
            <p className="text-muted-foreground mb-5">Agentes de IA atendem em segundos, qualificam automaticamente e direcionam oportunidades quentes para o seu time.</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Resposta imediata 24/7",
                "Qualificação de leads",
                "Aumento de conversão",
                "Redução de custos operacionais",
                "Escalabilidade",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check className="mt-0.5 text-primary" /> <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="bg-secondary/60 border-y">
        <div className="container mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl text-center mb-10">Como funciona em 3 passos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {t:"Mapeamos seus fluxos e integrações (canais, CRM, ofertas).", icon: Zap},
              {t:"Treinamos o agente com sua base (produtos, políticas, tom de voz).", icon: LineChart},
              {t:"Implantamos, monitoramos e otimizamos para performance.", icon: Shield},
            ].map((s, i) => (
              <Card key={i} className="shadow-soft transform transition-transform duration-300 hover:scale-105 hover:bg-secondaryS">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">{i+1}</div>
                    <s.icon className="text-primary" />
                  </div>
                  <p className="text-muted-foreground">{s.t}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section id="casos" className="container mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl text-center mb-10">Casos de uso</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {title:"Vendas", items:["Captação", "Qualificação", "Follow-ups", "Agendamento de demos"]},
            {title:"Suporte", items:["FAQ", "Status de pedidos", "Triagem de tickets"]},
            {title:"Marketing", items:["Nutrição", "Recuperações", "Reativações"]},
            {title:"Operações", items:["Onboarding", "Lembretes", "Pesquisas NPS"]},
          ].map((c) => (
            <Card key={c.title} className="shadow-soft transform transition-transform duration-300 hover:scale-105 hover:bg-secondary">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2">{c.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-2"><Check className="mt-0.5 text-primary" /> {it}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Carousel */}
      <ProjectsCarousel />

      {/* Provas sociais */}
      <section id="depoimentos" className="container mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl text-center mb-10">Resultados que geram confiança</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {q:"A SouzAI triplicou nossa velocidade de atendimento e aumentou as conversões.", a:"Maria S., Gerente de Vendas"},
            {q:"O agente qualificou leads com precisão e liberou nosso time para fechar negócios.", a:"Bruno A., Diretor Comercial"},
            {q:"Integração rápida ao CRM e relatórios que mostram evolução semana a semana.", a:"Camila R., Head de Growth"},
          ].map((t) => (
            <Card key={t.a} className="shadow-soft">
              <CardContent className="p-6">
                <p className="mb-3">“{t.q}”</p>
                <p className="text-sm text-muted-foreground">— {t.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "+37% conversões em 60 dias",
            "−42% no tempo médio de resposta",
            "+28% reuniões agendadas",
          ].map((m) => (
            <Card key={m} className="shadow-soft">
              <CardContent className="p-6 flex items-center gap-3">
                <TrendingUp className="text-primary" />
                <span className="font-semibold">{m}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl text-center mb-10">Por que a SouzAI</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Treinamos no seu tom de voz e regras de negócio.",
            "Integra com seu stack (WhatsApp Business/Cloud API, Instagram, Telegram, e-mail, site, CRMs, ERPs, webhooks, n8n/Make/Zapier).",
            "Monitoramento humano + melhoria contínua.",
            "LGPD, segurança e privacidade by design.",
          ].map((d) => (
            <Card key={d} className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2"><Shield className="text-primary" /> <h3 className="font-semibold">Diferencial</h3></div>
                <p className="text-muted-foreground text-sm">{d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cronograma de Implementação */}
      <section className="bg-secondary/60 border-y">
        <div className="container mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl text-center mb-10">Cronograma de implementação</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {week: "Semana 1", title: "Descoberta", desc: "Mapeamento dos fluxos, integrações e definição da personalidade do agente"},
                {week: "Semana 2", title: "Treinamento", desc: "Configuração da base de conhecimento e treinamento com dados do cliente"},
                {week: "Semana 3", title: "Testes", desc: "Ambiente de homologação, testes A/B e ajustes finos nos prompts"},
                {week: "Semana 4", title: "Go-live", desc: "Implementação em produção, monitoramento e otimizações iniciais"},
              ].map((step, idx) => (
                <div key={step.week} className="relative">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-3">
                      {idx + 1}
                    </div>
                    <h3 className="font-heading text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{step.week}</p>
                    <p className="text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Suporte contínuo e otimizações durante os primeiros 90 dias</p>
              <Button asChild variant="hero">
                <a href="#contato">Começar implementação</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/60 border-y">
        <div className="container mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl text-center mb-10">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {[
              {q:"O agente substitui meu time?", a:"Não. Ele acelera e qualifica; seu time foca no que fecha."},
              {q:"Em quanto tempo vejo resultado?", a:"Normalmente nas primeiras semanas, variando por canal e volume."},
              {q:"Quais integrações vocês suportam?", a:"Principais CRMs, ERPs e automações via API, webhooks, n8n/Make/Zapier."},
              {q:"Como funciona a LGPD?", a:"Governança de dados, consentimento e controle de retenção."},
              {q:"Posso usar meu próprio provedor de IA?", a:"Sim (OpenAI e alternativos)."},
              {q:"Tenho fluxos complexos, dá certo?", a:"Mapeamos e modularizamos por etapas."},
            ].map((f, idx) => (
              <AccordionItem key={f.q} value={`item-${idx}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-secondary/60 border-y">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl mb-4">Entre em contato</h2>
            <p className="text-muted-foreground mb-10">Pronto para transformar seu atendimento com IA? Vamos conversar sobre suas necessidades.</p>
            
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl mb-6">Solicite uma demonstração</h3>
                  <LeadForm id="contato-principal" />
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <div className="text-left">
                  <h3 className="font-heading text-xl mb-4">Outras formas de contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Mail className="text-primary" />
                      <div>
                        <p className="font-medium">E-mail</p>
                        <p className="text-sm text-muted-foreground">contato@souzai.com.br</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted p-6 rounded-lg text-left">
                  <h4 className="font-semibold mb-3">O que esperar da nossa conversa:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 text-primary" />
                      <span>Análise gratuita do seu funil atual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 text-primary" />
                      <span>Demonstração personalizada da solução</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 text-primary" />
                      <span>Proposta sob medida para suas necessidades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 text-primary" />
                      <span>Cronograma de implementação</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-6 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SouzAI. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary">Política de Privacidade</a>
            <a href="#" className="hover:text-primary">Termos de Uso</a>
          </div>
        </div>
      </footer>

      <ExitIntent />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
