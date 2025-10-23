import hero from "@/assets/hero-souzai.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Shield, Bot, TrendingUp, BrainCircuit, ShieldCheck, Workflow, Network, DatabaseZap, Rocket, Mail } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import { FloatingWhatsApp } from "@/components/souzai/FloatingWhatsApp";
import { ExitIntent } from "@/components/souzai/ExitIntent";
import { ProjectsCarousel } from "@/components/souzai/ProjectsCarousel";
import { useEffect } from "react";



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

    const services = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "SouzAI | Agentes de IA Inteligentes",
      provider: {
        "@type": "Organization",
        name: "SouzAI"
      },
      description: "Agentes de IA para captar leads, vender mais e escalar atendimento automatizado",
      serviceType: ["Agentes de IA", "Automação de Atendimento", "Qualificação de Leads"]
    };

    const scriptOrg = document.createElement('script');
    scriptOrg.type = 'application/ld+json';
    scriptOrg.innerHTML = JSON.stringify(org);
    document.head.appendChild(scriptOrg);

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.innerHTML = JSON.stringify(faq);
    document.head.appendChild(scriptFaq);

    const scriptServices = document.createElement('script');
    scriptServices.type = 'application/ld+json';
    scriptServices.innerHTML = JSON.stringify(services);
    document.head.appendChild(scriptServices);

    // Update document title and meta description
    document.title = "SouzAI | Agentes de IA Inteligentes";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Agentes de IA que atendem 24/7, qualificam leads e aumentam suas vendas. Integrados a WhatsApp, CRM e todos os seus canais. Agende seu diagnóstico.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Agentes de IA que atendem 24/7, qualificam leads e aumentam suas vendas. Integrados a WhatsApp, CRM e todos os seus canais. Agende seu diagnóstico.';
      document.head.appendChild(newMetaDesc);
    }

    return () => {
      document.head.removeChild(scriptOrg);
      document.head.removeChild(scriptFaq);
      document.head.removeChild(scriptServices);
    };
  }, []);

  return (
    <div>
      {/* Header sticky */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:glass border-b">
        <div className="container mx-auto flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-2">
            <img src="./././public/SouzAI-logo-roxo.png" alt="SouzAI Logo" className="h-12 text-primary" />
            <span className="font-heading text-lg">SouzAI</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Como funciona</a>
            <a href="#casos" className="hover:text-primary transition-colors">Casos de uso</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </nav>
          <div className="hidden md:block">
            <Button asChild variant="hero">
              <a href="#contato">Agendar diagnóstico</a>
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
              <span>IA que vende por você — atendimento inteligente 24/7</span>
            </h1>

            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto text-white">
              A SouzAI implementa agentes de IA que captam leads, qualificam oportunidades e vendem mais — integrados ao WhatsApp, Instagram, site, CRM e todos os seus canais.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" />
                <span>Resposta imediata em qualquer canal</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Qualificação automática de leads</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Mais vendas, menos custo</span>
              </div>
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
                "Redução de custos",
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

    <div className="grid md:grid-cols-3 gap-6 select-none">
      {[
        {
          h: "Diagnóstico Inteligente",
          sh: "Descobrimos onde a IA gera mais ROI",
          t: "Mapeamos seus fluxos, canais e métricas para priorizar automações de impacto.",
          icon: Network,
        },
        {
          h: "Treino com Seus Dados",
          sh: "Agente alinhado ao seu tom de voz",
          t: "Conectamos CRM, base de conhecimento e políticas para respostas precisas e seguras.",
          icon: DatabaseZap,
        },
        {
          h: "Lançamento & Otimização",
          sh: "Operando 24/7 nos seus canais",
          t: "Publicamos em WhatsApp, site e Instagram, monitoramos KPIs e escalamos o que funciona.",
          icon: Rocket,
        },
      ].map((s, i) => (
        <Card
          key={i}
          className="shadow-soft hover:shadow-glow transition-all duration-300 group"
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-2 select-none">
              <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                {i + 1}
              </div>
              <s.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" aria-hidden="true" />

              <div className="flex-1">
                <h3 className="text-base font-semibold text-foreground leading-none">
                  {s.h}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {s.sh}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">{s.t}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Casos de uso */}
      <section id="casos" className="container mx-auto px-6 py-16 select-none">
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
      <section id="depoimentos" className="container mx-auto px-6 py-16 select-none">
        <h2 className="font-heading text-3xl text-center mb-10">Resultados que geram confiança</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {q:"A SouzAI triplicou nossa velocidade de atendimento e aumentou as conversões.", a:"Maria S., Gerente de Vendas"},
            {q:"O agente qualificou leads com precisão e liberou nosso time para fechar negócios.", a:"Bruno A., Diretor Comercial"},
            {q:"Integração rápida ao CRM e relatórios que mostram evolução semana a semana.", a:"Camila R., Head de Growth"},
          ].map((t) => (
            <Card key={t.a} className="shadow-soft transform transition-transform duration-300 hover:scale-105 hover:bg-secondary">
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
            <Card key={m} className="shadow-soft transform transition-transform duration-300 hover:scale-105 hover:bg-secondary">
              <CardContent className="p-6 flex items-center gap-3">
                <TrendingUp className="text-primary" />
                <span className="font-semibold">{m}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="container mx-auto px-6 py-16 select-none">
        <h2 className="font-heading text-3xl text-center mb-10">Por que a SouzAI?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Treinamos no seu tom de voz e regras de negócio.",
            "Integra com seu stack (WhatsApp Business/Cloud API, Instagram, Telegram, e-mail, site, CRMs, ERPs, webhooks, n8n/Make/Zapier).",
            "Monitoramento humano + melhoria contínua.",
            "LGPD, segurança e privacidade by design.",
          ].map((d) => (
            <Card key={d} className="shadow-soft transform transition-transform duration-300 hover:scale-105 hover:bg-secondary">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2"><ShieldCheck className="text-primary" /> <h3 className="font-semibold">Diferencial</h3></div>
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
              <Button asChild variant="hero" className="transform transition-transform duration-300 hover:scale-105">
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
          {/* Informações de contato */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="font-heading text-3xl text-center mb-4">Pronto para escalar com Agentes de IA?</h2>
            <p className="text-muted-foreground text-center mb-10">Receba um diagnóstico gratuito e um plano claro para automatizar seu atendimento e vender mais.</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <Mail className="text-primary" />
                <div className="text-left">
                  <p className="font-medium">E-mail</p>
                  <p className="text-sm text-muted-foreground">contato@souzai.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <FaWhatsapp className="text-primary" />
                <div className="text-left">
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">(31) 99251-0873</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-semibold mb-3 text-center">O que esperar da nossa conversa:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 text-primary flex-shrink-0" />
                    <span>Análise gratuita do seu funil atual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 text-primary flex-shrink-0" />
                    <span>Demonstração personalizada da solução</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 text-primary flex-shrink-0" />
                    <span>Proposta sob medida para suas necessidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 text-primary flex-shrink-0" />
                    <span>Cronograma de implementação</span>
                  </li>
                </ul>
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
