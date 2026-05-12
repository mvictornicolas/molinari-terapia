# Plano de Implementação: Website de Hipnoterapia

## Visão Geral

Implementação de um website estático single-page para consultório de hipnoterapia, usando HTML/CSS/JS puro, hospedado no GitHub Pages. O site integra agendamento via Cal.com e contato via WhatsApp (wa.me). Testes com Vitest e fast-check.

## Tasks

- [ ] 1. Estrutura base do projeto e configuração
  - [x] 1.1 Criar estrutura de diretórios e arquivos base
    - Criar `index.html` com estrutura HTML5 semântica (doctype, lang="pt-BR", meta charset, viewport)
    - Criar `styles/main.css` com reset básico e Custom Properties (paleta de cores, tipografia, espaçamentos)
    - Criar `scripts/main.js` com estrutura modular (SITE_CONFIG, módulos Navigation, ContactForm, ScrollManager)
    - Criar `robots.txt` e `CNAME` (vazio/placeholder)
    - _Requirements: 1.1, 1.2, 1.4_

  - [x] 1.2 Configurar meta tags, SEO e dados estruturados
    - Adicionar meta tags de título, descrição, keywords, Open Graph no `<head>`
    - Adicionar JSON-LD com Schema.org (LocalBusiness + HealthAndBeautyBusiness)
    - Criar `sitemap.xml` com URL do site
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

  - [ ] 1.3 Configurar ambiente de testes (Vitest + fast-check)
    - Criar `package.json` com dependências de dev (vitest, fast-check, jsdom)
    - Criar `vitest.config.js` com environment jsdom
    - Criar estrutura `tests/` para testes unitários e de propriedade
    - _Requirements: 1.1_

- [ ] 2. Implementar seções de conteúdo institucional
  - [ ] 2.1 Implementar seção Hero/Início
    - Criar `<section id="hero">` com título principal, subtítulo e botão CTA (link para agendamento)
    - Estilizar com CSS (background, tipografia, responsividade)
    - _Requirements: 11.3, 9.1, 9.2_

  - [ ] 2.2 Implementar seção "Sobre a Hipnoterapia"
    - Criar `<section id="hipnoterapia">` com explicação sobre hipnose ericksoniana
    - Incluir fundamentos (psicologia humanista, filosofia rogeriana, CNV)
    - Listar áreas/condições tratáveis
    - Usar linguagem acessível sem jargões
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

  - [ ] 2.3 Implementar seção "Sobre o Terapeuta"
    - Criar `<section id="terapeuta">` com informações de formação e abordagem
    - Incluir experiência com neurodivergentes e diagnóstico tardio de autismo
    - _Requirements: 2.1, 2.2, 2.3_

  - [ ] 2.4 Implementar seção "Público Atendido"
    - Criar `<section id="publico">` com categorias (adultos, crianças, casais)
    - Destacar especialidade em neurodivergentes e diagnóstico tardio
    - _Requirements: 4.1, 4.2, 4.3_

- [ ] 3. Implementar navegação e scroll
  - [ ] 3.1 Implementar header com menu de navegação fixo
    - Criar `<header id="header">` com links âncora para todas as seções
    - Implementar menu hamburger para mobile (toggle via JS)
    - Adicionar skip-to-content link para acessibilidade
    - Estilizar menu fixo com CSS (position sticky/fixed, z-index)
    - _Requirements: 9.5, 11.1, 9.4_

  - [ ] 3.2 Implementar scroll suave e destaque de seção ativa
    - Implementar `smoothScrollTo(sectionId)` com `scrollIntoView({ behavior: 'smooth' })`
    - Implementar Intersection Observer para detectar seção visível
    - Atualizar classe ativa no menu conforme seção visível
    - Respeitar `prefers-reduced-motion` desabilitando animações
    - _Requirements: 11.2, 11.4, 9.4_

  - [ ] 3.3 Implementar animações de scroll e botão "voltar ao topo"
    - Adicionar fade-in nas seções ao entrar na viewport (Intersection Observer)
    - Implementar botão "voltar ao topo" com visibilidade condicional
    - _Requirements: 9.1, 11.2_

- [ ] 4. Checkpoint — Verificar estrutura e navegação
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Implementar formulário de contato com WhatsApp
  - [ ] 5.1 Criar formulário de contato (HTML + validação)
    - Criar `<section id="contato">` com formulário (campos: nome, mensagem)
    - Implementar validação client-side (campos obrigatórios, whitespace-only rejection)
    - Exibir mensagens de erro de validação inline
    - Adicionar labels e atributos ARIA para acessibilidade
    - _Requirements: 8.1, 8.4, 9.4_

  - [ ] 5.2 Implementar função `buildWhatsAppUrl` e redirecionamento
    - Implementar `buildWhatsAppUrl(phone, name, message)` que gera URL `https://wa.me/{phone}?text={encoded}`
    - Formatar mensagem incluindo nome do visitante
    - No submit válido, redirecionar para URL gerada (window.open)
    - _Requirements: 8.2, 8.3_

  - [ ]* 5.3 Escrever teste de propriedade — Round-trip da URL do WhatsApp
    - **Property 1: Round-trip da URL do WhatsApp**
    - Gerar nomes e mensagens aleatórios (strings não-vazias com acentos, emojis, caracteres especiais)
    - Verificar que `decodeURIComponent` do parâmetro `text` contém nome e mensagem originais
    - Verificar que URL começa com `https://wa.me/` seguido do número
    - **Validates: Requirements 8.2, 8.3**

  - [ ]* 5.4 Escrever teste de propriedade — Rejeição de mensagem vazia/whitespace
    - **Property 2: Rejeição de mensagem vazia/whitespace**
    - Gerar strings compostas apenas de whitespace (espaços, tabs, `\n`, `\r`)
    - Verificar que a função de validação retorna erro/false para todas elas
    - **Validates: Requirements 8.4**

  - [ ]* 5.5 Escrever testes unitários para formulário de contato
    - Testar validação com campos vazios
    - Testar geração de URL com caracteres especiais
    - Testar formatação da mensagem com nome
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [ ] 6. Implementar integração com Cal.com (agendamento)
  - [ ] 6.1 Incorporar widget Cal.com na seção de agendamento
    - Criar `<section id="agendamento">` com container para embed Cal.com
    - Adicionar script embed do Cal.com (async)
    - Implementar fallback caso script não carregue (link direto para Cal.com)
    - _Requirements: 5.1, 5.5_

  - [ ] 6.2 Adicionar conteúdo informativo sobre agendamento e consultas remotas
    - Incluir instruções sobre processo de agendamento e confirmação
    - Informar sobre modalidade remota (videochamada)
    - Adicionar orientações para sessão remota
    - _Requirements: 5.5, 7.1, 7.3_

- [ ] 7. Implementar estilos responsivos e acessibilidade
  - [ ] 7.1 Implementar design responsivo completo
    - Definir breakpoints (mobile, tablet, desktop) com media queries
    - Ajustar layout de todas as seções para cada breakpoint
    - Garantir tipografia mínima de 16px para texto corrido
    - Testar menu hamburger em mobile
    - _Requirements: 9.2, 9.6, 2.3_

  - [ ] 7.2 Implementar acessibilidade WCAG 2.1 AA
    - Adicionar landmarks ARIA em todas as seções
    - Garantir alt text em todas as imagens
    - Garantir focus visible em todos os elementos interativos
    - Implementar navegação completa por teclado
    - Verificar contraste de cores (mínimo 4.5:1 para texto)
    - _Requirements: 9.4_

- [ ] 8. Implementar footer e documentação
  - [ ] 8.1 Criar footer com informações legais
    - Criar `<footer>` com copyright, links úteis e informações de contato
    - Estilizar de forma consistente com o restante do site
    - _Requirements: 9.1_

  - [ ] 8.2 Criar documentação de deploy (README.md)
    - Documentar como publicar no GitHub Pages
    - Documentar configuração de domínio personalizado
    - Documentar como configurar horários no Cal.com
    - _Requirements: 1.3, 6.1_

- [ ] 9. Otimização de performance
  - [ ] 9.1 Otimizar carregamento e performance
    - Adicionar preconnect para Google Fonts e Cal.com
    - Otimizar imagens (formatos modernos, lazy loading)
    - Minimizar CSS/JS crítico inline se necessário
    - Garantir carregamento < 3 segundos em banda larga
    - _Requirements: 9.3_

- [ ] 10. Checkpoint final — Validação completa
  - Ensure all tests pass, ask the user if questions arise.

## Notas

- Tarefas marcadas com `*` são opcionais e podem ser puladas para um MVP mais rápido
- Cada tarefa referencia requisitos específicos para rastreabilidade
- Checkpoints garantem validação incremental
- Testes de propriedade validam propriedades universais de corretude (WhatsApp URL e validação)
- Testes unitários validam exemplos específicos e casos de borda
- O site não requer build step — deploy direto dos arquivos estáticos
