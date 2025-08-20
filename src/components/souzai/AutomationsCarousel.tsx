import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  ShoppingCart, 
  HeadphonesIcon, 
  UserPlus, 
  TrendingUp, 
  Calendar,
  Bot,
  Zap
} from "lucide-react";

interface Automation {
  id: string;
  title: string;
  description: string;
  category: "Vendas" | "Suporte" | "Marketing" | "Operações";
  metrics: {
    improvement: string;
    timeframe: string;
  };
  features: string[];
  icon: typeof MessageSquare;
  color: string;
}

const automations: Automation[] = [
  {
    id: "1",
    title: "Agente de Vendas WhatsApp",
    description: "Qualifica leads, apresenta produtos e agenda demos automaticamente via WhatsApp Business",
    category: "Vendas",
    metrics: {
      improvement: "+45% conversões",
      timeframe: "primeiros 30 dias"
    },
    features: [
      "Qualificação automática de leads",
      "Apresentação de produtos",
      "Agendamento de demos",
      "Follow-up inteligente"
    ],
    icon: MessageSquare,
    color: "from-green-500 to-green-600"
  },
  {
    id: "2", 
    title: "Assistente de E-commerce",
    description: "Recomenda produtos, tira dúvidas sobre pedidos e processa vendas via chat no site",
    category: "Vendas",
    metrics: {
      improvement: "+28% ticket médio",
      timeframe: "60 dias"
    },
    features: [
      "Recomendações personalizadas",
      "Consulta de estoque",
      "Status de pedidos",
      "Cross-sell e upsell"
    ],
    icon: ShoppingCart,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "3",
    title: "Suporte Técnico 24/7",
    description: "Resolve dúvidas frequentes, escalona casos complexos e mantém histórico de atendimentos",
    category: "Suporte", 
    metrics: {
      improvement: "-60% tempo resposta",
      timeframe: "imediato"
    },
    features: [
      "Base de conhecimento integrada",
      "Escalação inteligente",
      "Histórico de conversas",
      "Satisfação automatizada"
    ],
    icon: HeadphonesIcon,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "4",
    title: "Onboarding de Clientes",
    description: "Guia novos usuários através do produto, coleta feedback e acelera time-to-value",
    category: "Operações",
    metrics: {
      improvement: "+35% ativação",
      timeframe: "primeira semana"
    },
    features: [
      "Tours guiados personalizados",
      "Coleta de feedback",
      "Configuração assistida",
      "Lembretes proativos"
    ],
    icon: UserPlus,
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "5",
    title: "Nutrição de Leads",
    description: "Envia conteúdo relevante, identifica momentos de compra e aquece prospects automaticamente",
    category: "Marketing",
    metrics: {
      improvement: "+52% leads qualificados",
      timeframe: "90 dias"
    },
    features: [
      "Segmentação automática",
      "Conteúdo personalizado", 
      "Scoring de leads",
      "Trigger de oportunidades"
    ],
    icon: TrendingUp,
    color: "from-pink-500 to-pink-600"
  },
  {
    id: "6",
    title: "Agendamento Inteligente",
    description: "Coordena calendários, confirma reuniões e envia lembretes para reduzir no-shows",
    category: "Operações",
    metrics: {
      improvement: "-70% no-shows",
      timeframe: "imediato"
    },
    features: [
      "Sincronização de calendários",
      "Confirmações automáticas",
      "Lembretes personalizados", 
      "Reagendamento fácil"
    ],
    icon: Calendar,
    color: "from-teal-500 to-teal-600"
  }
];

const categoryIcons = {
  "Vendas": TrendingUp,
  "Suporte": HeadphonesIcon,
  "Marketing": Zap,
  "Operações": Bot
};

const categoryColors = {
  "Vendas": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "Suporte": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300", 
  "Marketing": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  "Operações": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
};

export function AutomationsCarousel() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-purple-50/30 dark:to-purple-950/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-300">
            Automações em Ação
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-purple-600 bg-clip-text text-transparent">
            Veja Nossas Automações
            <br />
            <span className="text-purple-600">Funcionando na Prática</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada automação é desenvolvida sob medida para resolver desafios específicos do seu negócio. 
            Explore alguns casos reais e seus resultados comprovados.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {automations.map((automation) => {
                const IconComponent = automation.icon;
                const CategoryIcon = categoryIcons[automation.category];
                
                return (
                  <CarouselItem key={automation.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                      <CardHeader className="space-y-4">
                        {/* Icon and Category */}
                        <div className="flex items-center justify-between">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${automation.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <Badge className={categoryColors[automation.category]}>
                            <CategoryIcon className="w-3 h-3 mr-1" />
                            {automation.category}
                          </Badge>
                        </div>

                        {/* Title and Description */}
                        <div>
                          <CardTitle className="text-xl mb-3 group-hover:text-purple-600 transition-colors">
                            {automation.title}
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {automation.description}
                          </CardDescription>
                        </div>

                        {/* Metrics */}
                        <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-lg border border-purple-100 dark:border-purple-800">
                          <div className="text-sm text-muted-foreground mb-1">Resultado típico:</div>
                          <div className="font-semibold text-purple-700 dark:text-purple-300">
                            {automation.metrics.improvement}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            em {automation.metrics.timeframe}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Features */}
                        <div>
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                            Principais funcionalidades:
                          </h4>
                          <ul className="space-y-2">
                            {automation.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <Button 
                          variant="outline" 
                          className="w-full mt-6 border-purple-200 hover:bg-purple-50 hover:border-purple-300 dark:border-purple-800 dark:hover:bg-purple-950"
                        >
                          Ver em Detalhes
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-12 border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950" />
            <CarouselNext className="hidden md:flex -right-12 border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950" />
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Quer ver como essas automações podem transformar seu negócio?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Agendar Demonstração
            </Button>
            <Button variant="outline" size="lg" className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}