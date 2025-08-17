import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  HeadphonesIcon, 
  ShoppingCart,
  TrendingUp,
  Calendar,
  Users
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    improvement: string;
    timeframe: string;
  }[];
  icon: typeof MessageSquare;
  color: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Agente de Vendas WhatsApp para E-commerce",
    client: "TechStore Brasil",
    industry: "E-commerce",
    description: "Implementação de agente de IA para qualificação de leads e vendas via WhatsApp Business.",
    challenge: "Alto volume de mensagens não qualificadas e equipe sobrecarregada com atendimento básico.",
    solution: "Agente de IA treinado para qualificar leads, apresentar produtos, processar pedidos e agendar demonstrações de produtos premium.",
    results: [
      { metric: "Conversões", improvement: "+45%", timeframe: "30 dias" },
      { metric: "Tempo de resposta", improvement: "-80%", timeframe: "imediato" },
      { metric: "Leads qualificados", improvement: "+60%", timeframe: "60 dias" }
    ],
    icon: MessageSquare,
    color: "from-green-500 to-green-600"
  },
  {
    id: "2",
    title: "Suporte Técnico 24/7 SaaS",
    client: "CloudSoft Solutions",
    industry: "SaaS",
    description: "Agente especializado em suporte técnico para plataforma de gestão empresarial.",
    challenge: "Tickets de suporte acumulando durante madrugada e fins de semana, causando insatisfação.",
    solution: "Sistema de IA com base de conhecimento integrada, capaz de resolver 70% dos tickets automaticamente e escalar casos complexos.",
    results: [
      { metric: "Tickets resolvidos", improvement: "+70%", timeframe: "automático" },
      { metric: "Satisfação do cliente", improvement: "+35%", timeframe: "90 dias" },
      { metric: "Tempo de resolução", improvement: "-65%", timeframe: "imediato" }
    ],
    icon: HeadphonesIcon,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "3",
    title: "Nutrição de Leads B2B",
    client: "Consultoria Digital Pro",
    industry: "Consultoria",
    description: "Automatização completa do processo de nutrição e qualificação de leads B2B.",
    challenge: "Leads frios não convertiam e processo manual consumia muito tempo da equipe comercial.",
    solution: "Agente de IA para nutrição personalizada, scoring automático de leads e identificação do momento ideal para abordagem comercial.",
    results: [
      { metric: "Leads qualificados", improvement: "+85%", timeframe: "90 dias" },
      { metric: "Reuniões agendadas", improvement: "+40%", timeframe: "60 dias" },
      { metric: "Ciclo de vendas", improvement: "-30%", timeframe: "120 dias" }
    ],
    icon: TrendingUp,
    color: "from-purple-500 to-purple-600"
  }
];

export function ProjectsCarousel() {
  return (
    <section className="bg-secondary/60 border-y">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Projetos Reais
          </Badge>
          <h2 className="font-heading text-3xl mb-4">
            Veja nossos agentes
            <br />
            <span className="text-gradient-primary">funcionando na prática</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns projetos reais implementados pela SouzAI e os resultados obtidos pelos nossos clientes.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project) => {
                const IconComponent = project.icon;
                
                return (
                  <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="h-full border-0 shadow-soft glass hover:shadow-xl transition-all duration-300 group">
                      <CardHeader className="space-y-4">
                        {/* Icon and Industry */}
                        <div className="flex items-center justify-between">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <Badge variant="secondary">
                            {project.industry}
                          </Badge>
                        </div>

                        {/* Title and Client */}
                        <div>
                          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mb-3">
                            Cliente: <span className="font-semibold">{project.client}</span>
                          </p>
                          <CardDescription className="text-base leading-relaxed">
                            {project.description}
                          </CardDescription>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        {/* Challenge & Solution */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-2 text-red-600 dark:text-red-400">
                              Desafio:
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {project.challenge}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-2 text-primary">
                              Solução:
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        {/* Results */}
                        <div>
                          <h4 className="font-semibold text-sm mb-3 text-green-600 dark:text-green-400">
                            Resultados obtidos:
                          </h4>
                          <div className="grid grid-cols-1 gap-3">
                            {project.results.map((result, index) => (
                              <div key={index} className="p-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-lg border border-green-100 dark:border-green-800">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium">{result.metric}</span>
                                  <span className="text-sm font-bold text-green-700 dark:text-green-300">
                                    {result.improvement}
                                  </span>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  em {result.timeframe}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <Button 
                          variant="outline" 
                          className="w-full border-primary/20 hover:bg-primary/10 hover:border-primary/30"
                        >
                          Ver Caso Completo
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 hover:bg-primary/10" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/20 hover:bg-primary/10" />
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Quer implementar uma solução similar na sua empresa?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero">
              Agendar Diagnóstico Gratuito
            </Button>
            <Button variant="whatsapp" size="lg">
              <FaWhatsapp className="mr-2 h-4 w-4" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}