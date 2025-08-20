import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MermaidDiagram } from "@/components/ui/mermaid-diagram";
import { convertN8nToMermaid } from "@/utils/n8n-to-mermaid";
import { 
  MessageSquare, 
  ShoppingCart, 
  HeadphonesIcon, 
  UserPlus, 
  TrendingUp, 
  Calendar,
  Bot,
  Zap,
  Workflow
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
  n8nWorkflow?: any; // JSON do fluxo n8n
}

// JSON do fluxo n8n WhatsApp ChatBot
const whatsappBotWorkflow = {
  "nodes": [
    {
      "id": "2f7d39f3-179a-4e2c-86d5-5bd262373def",
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "position": [-3440, 144]
    },
    {
      "id": "54ca166d-7e5f-45f1-9636-5a61a34b2286",
      "name": "A mensagem foi enviada pelo chatbot?",
      "type": "n8n-nodes-base.if",
      "position": [-3232, 144]
    },
    {
      "id": "dc6160bb-0622-4ffe-9a5e-f06b563619a5",
      "name": "Segmenta o tipo de mensagem",
      "type": "n8n-nodes-base.switch",
      "position": [-3008, 112]
    },
    {
      "id": "f8179f11-3838-4deb-9243-a92c9fae0813",
      "name": "Gera mensagem",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "position": [-1552, 128]
    },
    {
      "id": "b9a635f9-9397-434c-bf22-0889101f5817",
      "name": "Image Explainer",
      "type": "@n8n/n8n-nodes-langchain.chainLlm",
      "position": [-2064, 128]
    },
    {
      "id": "59fafe4d-9438-40fa-ab7f-f5380cf89bd1",
      "name": "Transcreve o áudio",
      "type": "@n8n/n8n-nodes-langchain.openAi",
      "position": [-2032, 368]
    },
    {
      "id": "ae9b1284-0329-4a15-bcd7-e7733b548d42",
      "name": "If1",
      "type": "n8n-nodes-base.if",
      "position": [-1200, 128]
    },
    {
      "id": "cc0d7b69-a577-45e4-aafd-0008be7ccc54",
      "name": "OpenAI1",
      "type": "@n8n/n8n-nodes-langchain.openAi",
      "position": [-992, -64]
    },
    {
      "id": "2bc423e3-b5f6-464a-83ac-2d6f0048b7dd",
      "name": "OpenAI2",
      "type": "@n8n/n8n-nodes-langchain.openAi",
      "position": [-656, -64]
    },
    {
      "id": "bf65b9a2-d2bd-4577-be7a-fc6ac0bac377",
      "name": "HTTP Request2",
      "type": "n8n-nodes-base.httpRequest",
      "position": [-352, -64]
    },
    {
      "id": "ea27fe5e-03cd-4151-bad7-abcbf5d5439f",
      "name": "Edit Fields3",
      "type": "n8n-nodes-base.set",
      "position": [-976, 304]
    },
    {
      "id": "3cead87b-18e8-48b3-98cc-76fa595c3cc0",
      "name": "Split Out1",
      "type": "n8n-nodes-base.splitOut",
      "position": [-816, 304]
    },
    {
      "id": "b0edac2b-41de-4d1b-a56d-ca17e6500cd5",
      "name": "Loop Over Items",
      "type": "n8n-nodes-base.splitInBatches",
      "position": [-640, 304]
    },
    {
      "id": "460335c5-efd5-4319-8534-740bffcd8696",
      "name": "HTTP Request",
      "type": "n8n-nodes-base.httpRequest",
      "position": [-480, 400]
    },
    {
      "id": "3041ec75-2bcb-44cd-9f1e-ccc79671e3de",
      "name": "Wait",
      "type": "n8n-nodes-base.wait",
      "position": [-320, 400]
    },
    {
      "id": "63dc0323-8d87-43c2-b19e-55d2e07dfa80",
      "name": "Vector Store Tool",
      "type": "@n8n/n8n-nodes-langchain.toolVectorStore",
      "position": [-1376, 352]
    },
    {
      "id": "011b4c32-5bac-4e88-a395-085fa48e385b",
      "name": "Postgres Chat Memory",
      "type": "@n8n/n8n-nodes-langchain.memoryPostgresChat",
      "position": [-1488, 288]
    }
  ],
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "A mensagem foi enviada pelo chatbot?",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "A mensagem foi enviada pelo chatbot?": {
      "main": [
        [
          {
            "node": "Segmenta o tipo de mensagem",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Segmenta o tipo de mensagem": {
      "main": [
        [
          {
            "node": "Gera mensagem",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Image Explainer",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Transcreve o áudio",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Image Explainer": {
      "main": [
        [
          {
            "node": "Gera mensagem",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Transcreve o áudio": {
      "main": [
        [
          {
            "node": "Gera mensagem",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Gera mensagem": {
      "main": [
        [
          {
            "node": "If1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If1": {
      "main": [
        [
          {
            "node": "OpenAI1",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Edit Fields3",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI1": {
      "main": [
        [
          {
            "node": "OpenAI2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI2": {
      "main": [
        [
          {
            "node": "HTTP Request2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Edit Fields3": {
      "main": [
        [
          {
            "node": "Split Out1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Split Out1": {
      "main": [
        [
          {
            "node": "Loop Over Items",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Loop Over Items": {
      "main": [
        [],
        [
          {
            "node": "HTTP Request",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "HTTP Request": {
      "main": [
        [
          {
            "node": "Wait",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Wait": {
      "main": [
        [
          {
            "node": "Loop Over Items",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
};

const automations: Automation[] = [
  {
    id: "0",
    title: "ChatBot WhatsApp Inteligente",
    description: "Chatbot avançado que processa texto, imagem e áudio usando IA, com memória conversacional e base de conhecimento",
    category: "Suporte",
    metrics: {
      improvement: "+80% atendimentos automatizados",
      timeframe: "24/7 disponível"
    },
    features: [
      "Processa texto, imagem e áudio",
      "Base de conhecimento RAG",
      "Memória conversacional",
      "Respostas em texto e áudio",
      "Integração WhatsApp Business"
    ],
    icon: Workflow,
    color: "from-indigo-500 to-indigo-600",
    n8nWorkflow: whatsappBotWorkflow
  },
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
                        {/* N8n Workflow Diagram */}
                        {automation.n8nWorkflow && (
                          <div className="mb-4">
                            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                              Fluxo da automação:
                            </h4>
                            <div className="bg-white dark:bg-gray-800 rounded-lg border p-3">
                              <MermaidDiagram
                                chart={convertN8nToMermaid(automation.n8nWorkflow)}
                                className="text-xs"
                              />
                            </div>
                          </div>
                        )}

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