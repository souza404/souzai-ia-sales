import hero from "@/assets/hero-souzai.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check,Shield, Zap, Globe, Mail, Bot, TrendingUp, LineChart, Smartphone, Monitor, ShoppingCart, Building, Palette, Code, Rocket, Clock, Star, ExternalLink, ArrowRight, Brain, AppWindow, BrainCircuit, Box, Badge, CodeXml, ShieldCheck, Workflow, Network, DatabaseZapIcon, DatabaseZap } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import { FloatingWhatsApp } from "@/components/souzai/FloatingWhatsApp";
import { ExitIntent } from "@/components/souzai/ExitIntent";
import { ProjectsCarousel } from "@/components/souzai/ProjectsCarousel";
import { useEffect, useState } from "react";



const Index = () => {
  const [activeTab, setActiveTab] = useState("agentes");

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
        {"@type":"Question","name":"Tenho fluxos complexos, dá certo?","acceptedAnswer":{"@type":"Answer","text":"Mapeamos e modularizamos por etapas."}},
        {"@type":"Question","name":"Qual é o prazo médio para entrega de sites?","acceptedAnswer":{"@type":"Answer","text":"Projetos simples em 1-2 semanas; sites institucionais em 2-3 semanas; e-commerce pode levar um pouco mais."}},
        {"@type":"Question","name":"Vocês hospedam o site?","acceptedAnswer":{"@type":"Answer","text":"Podemos indicar provedores confiáveis e fazer a publicação por você."}},
        {"@type":"Question","name":"Integram com WhatsApp, CRM, Pixel e GTM?","acceptedAnswer":{"@type":"Answer","text":"Sim, fazemos todas as integrações essenciais para tracking e conversão."}}
      ]
    };

    const services = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "SouzAI | Agentes de IA e Criação de Sites",
      provider: {
        "@type": "Organization",
        name: "SouzAI"
      },
      description: "Agentes de IA e desenvolvimento de sites para captar leads, vender mais e escalar atendimento",
      serviceType: ["Agentes de IA", "Criação de Sites", "Landing Pages", "E-commerce"]
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
    document.title = "SouzAI | Agentes e Sites";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'IA que vende e sites que convertem. Landing pages, sites institucionais e e-commerce, integrados a WhatsApp/CRM e métricas. Agende seu diagnóstico.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'IA que vende e sites que convertem. Landing pages, sites institucionais e e-commerce, integrados a WhatsApp/CRM e métricas. Agende seu diagnóstico.';
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
            <a href="#criacao-sites" className="hover:text-primary transition-colors">Criação de Sites</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a>
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
              <span>Agentes de IA + Sites de alta performance: gere leads e vendas 24/7</span>
            </h1>

            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto text-white">
              A SouzAI implementa agentes de IA e desenvolve sites (landing pages, institucionais e lojas virtuais) para captar leads, vender mais e escalar seu atendimento, integrados aos seus canais, CRM e métricas.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" />
                <span>Agentes de IA escaláveis</span>
              </div>
              <div className="flex items-center gap-2">
                <AppWindow className="w-4 h-4" />
                <span>Sites que convertem</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Toggle */}
      <section className="container mx-auto px-6 py-8">
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl mb-4">
            Conheça nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navegue entre os nossos serviços e descubra como podemos ajudar a sua empresa a crescer.
          </p>
        </div>
        <div className="flex justify-center">

        <div className="flex bg-secondary rounded-xl p-1 shadow-xl shadow-black/15 dark:shadow-black/40 transition-shadow">
          <button
            onClick={() => setActiveTab("agentes")}
            className={`px-6 py-3 rounded-md text-sm font-medium will-change-transform transition-[box-shadow,transform,background-color,color] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:translate-y-[1px] active:shadow-md ${
              activeTab === "agentes"
                ? "bg-primary text-primary-foreground shadow-2xl shadow-black/25 hover:-translate-y-0.5"
                : "text-muted-foreground hover:text-foreground hover:bg-primary/5 hover:-translate-y-0.5"
            }`}
            aria-pressed={activeTab === "agentes"}
          >
            <Bot className="w-4 h-4 inline-block mr-2 drop-shadow" />
            Agentes de IA
          </button>

          <button
            onClick={() => setActiveTab("sites")}
            className={`px-6 py-3 rounded-md text-sm font-medium will-change-transform transition-[box-shadow,transform,background-color,color] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:translate-y-[1px] active:shadow-md ${
              activeTab === "sites"
                ? "bg-primary text-primary-foreground shadow-2xl shadow-black/25 hover:-translate-y-0.5"
                : "text-muted-foreground hover:text-foreground hover:bg-primary/5 hover:-translate-y-0.5"
            }`}
            aria-pressed={activeTab === "sites"}
          >
            <CodeXml className="w-4 h-4 inline-block mr-2 drop-shadow" />
            Criação de Sites
          </button>
        </div>
      </div>

      </section>

      {/* Conteúdo dos Agentes de IA */}
      <div className={activeTab === "agentes" ? "block" : "hidden"}>
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

    <div className="grid md:grid-cols-3 gap-6">
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
          className="shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition-transform duration-300 hover:scale-105 hover:bg-secondary"
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-2">
              <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                {i + 1}
              </div>

              <s.icon className="text-primary w-5 h-5 mt-1" aria-hidden="true" />

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
      <section className="container mx-auto px-6 py-16">
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
      </div>

      {/* Conteúdo de Criação de Sites */}
      <div className={activeTab === "sites" ? "block" : "hidden"}>
        {/* Por que ter um site com a SouzAI */}
        <section id="criacao-sites" className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-3xl mb-6">Sites projetados para vender, não só para "estar no ar"</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desenvolvemos sites que convertem visitantes em clientes, com arquitetura focada em performance e resultados.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: TrendingUp, title: "Arquitetura de conversão", desc: "UX + SEO técnico" },
              { icon: Zap, title: "Velocidade e performance", desc: "Core Web Vitals otimizados" },
              { icon: Globe, title: "Integração total", desc: "WhatsApp, CRM, Pixel, GTM" },
              { icon: ShoppingCart, title: "E-commerce escalável", desc: "Checkout, frete, pagamentos" },
              { icon: Palette, title: "Design alinhado", desc: "Posicionamento e identidade" }
            ].map((benefit, idx) => (
              <Card key={idx} className="shadow-soft hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Como funciona: Websites em 4 etapas */}
        <section className="bg-secondary/60 border-y">
          <div className="container mx-auto px-6 py-16">
            <h2 className="font-heading text-3xl text-center mb-10">Como funciona: Websites em 4 etapas</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Briefing guiado", desc: "Objetivos, público, diferenciais e mapa de páginas", icon: Building },
                { step: 2, title: "Protótipo e design", desc: "Layout responsivo, copy de conversão e aprovação rápida", icon: Palette },
                { step: 3, title: "Desenvolvimento", desc: "Publicação + integrações (WhatsApp, CRM, Pixel, GTM, e-commerce)", icon: Code },
                { step: 4, title: "Lançamento", desc: "Testes, métricas, ajustes e plano de evolução", icon: Rocket }
              ].map((step) => (
                <Card key={step.step} className="shadow-soft transform transition-transform duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      <step.icon className="text-primary" />
                    </div>
                    <h3 className="font-heading text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="hero" size="lg" className="transform transition-transform duration-300 hover:scale-105">
                <a href="#contato">Quero meu site de alta conversão</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Portfólio/Mostruário */}
        <section id="portfolio" className="container mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl text-center mb-10">Portfólio de sites que convertem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { sector: "Saúde", result: "+32% leads em 45 dias", image: "/placeholder.svg" },
              { sector: "Educação", result: "+28% matrículas online", image: "/placeholder.svg" },
              { sector: "Serviços", result: "+45% conversões", image: "/placeholder.svg" },
              { sector: "E-commerce", result: "+38% vendas online", image: "/placeholder.svg" },
              { sector: "Tecnologia", result: "+52% demos agendadas", image: "/placeholder.svg" },
              { sector: "Imobiliário", result: "+41% leads qualificados", image: "/placeholder.svg" }
            ].map((project, idx) => (
              <Card key={idx} className="shadow-soft hover:shadow-glow transition-all duration-300 group overflow-hidden">
                <div className="aspect-video bg-gradient-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-sm">
                      {project.sector}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary">{project.result}</p>
                      <p className="text-sm text-muted-foreground">Resultado comprovado</p>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center space-x-4">
            <Button variant="outline" size="lg">
              Ver portfólio completo
            </Button>
            <Button variant="hero" size="lg">
              Solicitar análise do meu caso
            </Button>
          </div>
        </section>

        {/* Planos & Preços */}
        <section id="planos" className="bg-secondary/60 border-y">
          <div className="container mx-auto px-6 py-16">
            <h2 className="font-heading text-3xl text-center mb-10">Planos & Preços - Criação de Sites</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: "LANDING START",
                  subtitle: "Para campanhas e validação",
                  features: [
                    "1 página (seções modulares)",
                    "Copy de conversão + 1 formulário",
                    "Integração WhatsApp/CRM + Pixel/GTM",
                    "Publicação + otimização inicial"
                  ],
                  cta: "Orçar minha landing",
                  popular: false
                },
                {
                  name: "INSTITUCIONAL PRO",
                  subtitle: "Autoridade e captação",
                  features: [
                    "Até 6 páginas (Home, Sobre, Serviços, etc.)",
                    "Blog pronto + SEO técnico base",
                    "Integrações (WhatsApp, CRM, newsletter)",
                    "Migração de conteúdo essencial"
                  ],
                  cta: "Quero meu site institucional",
                  popular: true
                },
                {
                  name: "LOJA VIRTUAL",
                  subtitle: "Venda online",
                  features: [
                    "Catálogo + carrinho + checkout",
                    "Pagamentos (Pix, cartão) e frete",
                    "Abandono de carrinho + Pixel/GTM",
                    "Integrações (ERP/Hub, quando aplicável)"
                  ],
                  cta: "Orçar minha loja virtual",
                  popular: false
                }
              ].map((plan) => (
                <Card key={plan.name} className={`shadow-soft hover:shadow-glow transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                  <CardContent className="p-6">
                    {plan.popular && (
                      <div className="text-center mb-4">
                        <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                          Mais Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="font-heading text-xl mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
                      <div className="mt-4">
                        <span className="text-2xl font-bold">Sob consulta</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={plan.popular ? "hero" : "outline"}>
                      <a href="#contato">{plan.cta}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Prazo típico: dias, não meses. Escopo exato e integrações podem variar conforme necessidade.
            </p>
          </div>
        </section>

        {/* Combos: Site + Agente de IA */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl text-center mb-4">Combos: Site + Agente de IA</h2>
          <p className="text-xl text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            Maximize seus resultados combinando um site de alta conversão com agentes de IA inteligentes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Landing + Agente de Qualificação",
                desc: "Capta, qualifica e agenda automaticamente",
                features: ["Landing page otimizada", "Chatbot de qualificação", "Integração CRM", "Follow-up automático"],
                icon: TrendingUp
              },
              {
                title: "Institucional + Suporte 24/7",
                desc: "FAQ, status de pedidos e NPS automatizado",
                features: ["Site institucional completo", "Agente de suporte", "Base de conhecimento", "Pesquisas NPS"],
                icon: Bot
              },
              {
                title: "E-commerce + Recuperação de Carrinho",
                desc: "Follow-ups automáticos para carrinhos abandonados",
                features: ["Loja virtual completa", "Agente de vendas", "Recuperação de carrinho", "Cross-sell/upsell"],
                icon: ShoppingCart
              }
            ].map((combo, idx) => (
              <Card key={idx} className="shadow-soft hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <combo.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading text-xl mb-2">{combo.title}</h3>
                    <p className="text-muted-foreground text-sm">{combo.desc}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {combo.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <a href="#contato">Ver detalhes</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="hero" size="lg" className="transform transition-transform duration-300 hover:scale-105">
              <a href="#contato">Quero um combo para acelerar resultados</a>
            </Button>
          </div>
        </section>

        {/* FAQ - Websites */}
        <section className="bg-secondary/60 border-y">
          <div className="container mx-auto px-6 py-16">
            <h2 className="font-heading text-3xl text-center mb-10">FAQ - Criação de Sites</h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {[
                {q:"Qual é o prazo médio para entrega?", a:"Projetos simples (landing pages) em 1-2 semanas; sites institucionais em 2-3 semanas; e-commerce pode levar um pouco mais, dependendo da complexidade."},
                {q:"Vocês hospedam o site?", a:"Podemos indicar provedores confiáveis e fazer a publicação por você, garantindo performance e segurança."},
                {q:"Já tenho domínio .com.br e e-mail profissional, dá para usar?", a:"Sim, utilizamos sua infraestrutura existente e fazemos as configurações necessárias."},
                {q:"Integram com WhatsApp, CRM, Pixel e GTM?", a:"Sim, fazemos todas as integrações essenciais para tracking e conversão."},
                {q:"E-commerce: quais pagamentos e fretes vocês suportam?", a:"Pix, cartão de crédito, boleto; cálculo de frete via Correios e transportadoras através de integrações compatíveis."},
                {q:"Vocês criam o conteúdo (texto/imagens)?", a:"Podemos apoiar com copywriting focado em conversão e diretrizes para fotos/imagens."},
                {q:"Suporte e manutenção depois do lançamento?", a:"Oferecemos planos de manutenção sob medida para atualizações e melhorias contínuas."}
              ].map((f, idx) => (
                <AccordionItem key={f.q} value={`site-item-${idx}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>

      {/* Contato */}
      <section id="contato" className="bg-secondary/60 border-y">
        <div className="container mx-auto px-6 py-16">
          {/* Informações de contato */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="font-heading text-3xl text-center mb-4">Pronto para um site que converte com IA trabalhando por você?</h2>
            <p className="text-muted-foreground text-center mb-10">Receba um diagnóstico gratuito e um plano claro para seu funil e sua presença digital.</p>
            
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
