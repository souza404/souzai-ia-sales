import hero from "@/assets/hero-souzai.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, MessageCircle, Shield, Zap, Send, Instagram, Globe, Mail, Bot, TrendingUp, LineChart } from "lucide-react";
import { LeadForm } from "@/components/souzai/LeadForm";
import { FloatingWhatsApp } from "@/components/souzai/FloatingWhatsApp";
import { ExitIntent } from "@/components/souzai/ExitIntent";
import { AutomationsCarousel } from "@/components/souzai/AutomationsCarousel";
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
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs bg-secondary text-muted-foreground border">
                <Shield className="w-4 h-4 text-primary" /> Conformidade LGPD • Implantações rápidas em dias
              </span>
              <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-gradient-primary">Agentes de IA que vendem e atendem por você — 24/7</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                A SouzAI implementa e treina agentes de IA sob medida para captar leads, qualificar, fechar vendas e dar suporte — integrados aos seus canais e CRM.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero">
                  <a href="#contato">Quero uma demonstração</a>
                </Button>
                <Button asChild variant="whatsapp">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-1" /> Falar no WhatsApp
                  </a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="uppercase tracking-wide">Integra com</span>
                <div className="flex items-center gap-3 opacity-90">
                  <MessageCircle className="text-primary" aria-label="WhatsApp" />
                  <Instagram className="text-primary" aria-label="Instagram" />
                  <Mail className="text-primary" aria-label="E-mail" />
                  <Globe className="text-primary" aria-label="Site" />
                  <Send className="text-primary" aria-label="CRM" />
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                Outras opções de headline: “Transforme conversas em receita com agentes de IA treinados para seu negócio” • “Automatize vendas e suporte com IA que fala a língua do seu cliente”.
              </div>
            </div>

            <Card className="glass shadow-soft">
              <CardContent className="p-6">
                <h2 className="font-heading text-xl mb-2">Comece agora</h2>
                <p className="text-sm text-muted-foreground mb-4">Receba um diagnóstico gratuito e um plano claro para o seu funil.</p>
                <LeadForm id="contato" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problema -> Solução */}
      <section id="beneficios" className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-heading text-3xl mb-3">Equipes sobrecarregadas, respostas lentas e leads frios.</h2>
            <p className="text-muted-foreground">Esses gargalos custam oportunidades todos os dias.</p>
          </div>
          <div>
            <h3 className="font-heading text-2xl mb-3">A solução SouzAI</h3>
            <p className="text-muted-foreground mb-5">Agentes de IA atendem em segundos, qualificam automaticamente e direcionam oportunidades quentes para o seu time.</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Resposta imediata 24/7",
                "Qualificação e roteamento automáticos",
                "Aumento de conversão no funil",
                "Redução de custos operacionais",
                "Escala sem aumentar headcount",
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
              <Card key={i} className="shadow-soft">
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
            <Card key={c.title} className="shadow-soft">
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

      {/* Demo */}
      <section className="bg-secondary/60 border-y">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-3xl mb-3">Ver o agente em ação</h2>
              <p className="text-muted-foreground mb-6">Confira uma simulação de conversa e veja como qualificamos e encaminhamos oportunidades em tempo real.</p>
              <div className="flex gap-3">
                <Button variant="hero">Ver o agente em ação</Button>
                <Button asChild variant="outline">
                  <a href="#contato">Agendar diagnóstico gratuito</a>
                </Button>
              </div>
            </div>
            <Card className="glass shadow-soft">
              <CardContent className="p-6">
                <div className="h-64 md:h-72 rounded-lg bg-gradient-primary animate-gradient-slow flex items-center justify-center text-primary-foreground">
                  <span className="font-semibold">Prévia interativa em breve</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

      {/* Planos & Preços */}
      <section id="planos" className="bg-secondary/60 border-y">
        <div className="container mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl text-center mb-10">Planos & Preços</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {name:"START", features:["1 agente de IA","1 canal + 1 integração de CRM","Base de conhecimento essencial","Relatórios mensais"], cta:"Começar agora"},
              {name:"PRO", features:["Até 3 agentes","Multicanais (WhatsApp, Instagram, site)","Integrações avançadas (n8n/Zapier/Make)","Treinamento contínuo + A/B de prompts","Relatórios semanais"], cta:"Agendar demo PRO"},
              {name:"ENTERPRISE", features:["Agentes ilimitados","SSO, segurança avançada, SLA","Integração com ERPs/CRMs legados e APIs","Suporte dedicado e governança"], cta:"Falar com especialista"},
            ].map((p, idx) => (
              <Card key={p.name} className={`shadow-soft ${idx===1 ? 'border-primary' : ''}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl mb-3">{p.name}</h3>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 text-primary" /> {f}</li>
                    ))}
                  </ul>
                  <Button asChild variant={idx===1 ? 'hero' : 'outline'} className="w-full">
                    <a href="#contato">{p.cta}</a>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">Valores sob consulta. Implantação típica: dias, não meses.</p>
                </CardContent>
              </Card>
            ))}
          </div>
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

      {/* CTA Final */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl mb-3">Pronto para crescer com IA que vende e atende por você?</h2>
            <p className="text-muted-foreground mb-6">Receba um diagnóstico gratuito e um plano claro para o seu funil.</p>
            <div className="flex gap-3">
              <Button asChild variant="hero">
                <a href="#contato">Agendar diagnóstico</a>
              </Button>
              <Button asChild variant="whatsapp">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
              </Button>
            </div>
          </div>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <LeadForm id="contato-rodape" variant="compact" />
            </CardContent>
          </Card>
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
