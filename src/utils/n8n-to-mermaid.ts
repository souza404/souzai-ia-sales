interface N8nNode {
  id: string;
  name: string;
  type: string;
  position: [number, number];
  parameters?: any;
}

interface N8nConnection {
  main?: Array<Array<{ node: string; type: string; index: number }>>;
}

interface N8nWorkflow {
  nodes: N8nNode[];
  connections: Record<string, N8nConnection>;
}

export function convertN8nToMermaid(workflow: N8nWorkflow): string {
  const { nodes, connections } = workflow;
  
  // Create a mapping of node names to simplified IDs for Mermaid
  const nodeMap = new Map<string, string>();
  nodes.forEach((node, index) => {
    nodeMap.set(node.name, `N${index}`);
  });

  // Start building the Mermaid flowchart
  let mermaid = 'flowchart TD\n';
  
  // Add nodes with simplified names and shapes based on type
  nodes.forEach((node, index) => {
    const nodeId = `N${index}`;
    const simplifiedName = simplifyNodeName(node.name, node.type);
    const shape = getNodeShape(node.type);
    
    mermaid += `    ${nodeId}${shape.start}"${simplifiedName}"${shape.end}\n`;
    
    // Add styling based on node type
    const styling = getNodeStyling(node.type);
    if (styling) {
      mermaid += `    ${nodeId} --> ${nodeId}:::${styling}\n`;
    }
  });

  // Add connections
  Object.entries(connections).forEach(([sourceNodeName, connection]) => {
    if (connection.main) {
      connection.main.forEach((outputs) => {
        outputs.forEach((output) => {
          const sourceId = nodeMap.get(sourceNodeName);
          const targetId = nodeMap.get(output.node);
          
          if (sourceId && targetId) {
            mermaid += `    ${sourceId} --> ${targetId}\n`;
          }
        });
      });
    }
  });

  // Add class definitions for styling
  mermaid += '\n';
  mermaid += '    classDef webhook fill:#e1f5fe,stroke:#01579b,stroke-width:2px\n';
  mermaid += '    classDef ai fill:#f3e5f5,stroke:#4a148c,stroke-width:2px\n';
  mermaid += '    classDef api fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px\n';
  mermaid += '    classDef logic fill:#fff3e0,stroke:#e65100,stroke-width:2px\n';
  mermaid += '    classDef data fill:#fce4ec,stroke:#880e4f,stroke-width:2px\n';

  return mermaid;
}

function simplifyNodeName(name: string, type: string): string {
  // Simplify common node names for better readability
  const nameMap: Record<string, string> = {
    'Webhook': 'Recebe Mensagem',
    'HTTP Request': 'Envia WhatsApp',
    'HTTP Request2': 'Envia Áudio',
    'OpenAI Chat Model': 'IA Chat',
    'OpenAI Chat Model1': 'IA Vector',
    'OpenAI Chat Model5': 'IA Imagem',
    'Image Explainer': 'Explica Imagem',
    'OpenAI1': 'Prepara Fala',
    'OpenAI2': 'Gera Áudio',
    'Segmenta o tipo de mensagem': 'Tipo Mensagem',
    'A mensagem foi enviada pelo chatbot?': 'É do Bot?',
    'Gera mensagem': 'Gera Resposta',
    'Transcreve o áudio': 'Áudio → Texto',
    'Postgres Chat Memory': 'Memória',
    'Vector Store Tool': 'Base Conhecimento',
    'Supabase Vector Store': 'Vector DB',
    'If1': 'É Áudio?',
    'Edit Fields3': 'Divide Texto',
    'Split Out1': 'Separa Msgs',
    'Loop Over Items': 'Para Cada',
    'Wait': 'Aguarda 3s'
  };

  return nameMap[name] || name.replace(/[0-9]+$/, '').trim() || 'Nó';
}

function getNodeShape(type: string): { start: string; end: string } {
  // Different shapes for different node types
  if (type.includes('webhook')) return { start: '([', end: '])' };
  if (type.includes('if') || type.includes('switch')) return { start: '{', end: '}' };
  if (type.includes('openAi') || type.includes('langchain')) return { start: '((', end: '))' };
  if (type.includes('httpRequest')) return { start: '[', end: ']' };
  return { start: '(', end: ')' };
}

function getNodeStyling(type: string): string | null {
  if (type.includes('webhook')) return 'webhook';
  if (type.includes('openAi') || type.includes('langchain')) return 'ai';
  if (type.includes('httpRequest')) return 'api';
  if (type.includes('if') || type.includes('switch') || type.includes('set')) return 'logic';
  if (type.includes('postgres') || type.includes('supabase')) return 'data';
  return null;
}