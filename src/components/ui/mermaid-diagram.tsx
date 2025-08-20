import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        padding: 10,
        nodeSpacing: 20,
        rankSpacing: 50
      }
    });

    if (mermaidRef.current) {
      mermaidRef.current.innerHTML = '';
      mermaid.render(`mermaid-${Date.now()}`, chart).then(({ svg }) => {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = svg;
        }
      });
    }
  }, [chart]);

  return (
    <div 
      ref={mermaidRef} 
      className={`mermaid-container overflow-auto ${className}`}
      style={{ maxHeight: '400px' }}
    />
  );
}