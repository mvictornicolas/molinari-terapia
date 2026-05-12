# Documento de Requisitos — Website de Hipnoterapia

## Introdução

Website profissional para um consultório individual de hipnoterapia com abordagem humanista. O terapeuta utiliza como base a psicologia humanista, filosofia rogeriana, visão de Marshall Rosenberg (Comunicação Não-Violenta) e hipnose ericksoniana como ferramenta facilitadora. O público-alvo inclui adultos, crianças e casais, com especialidade em neurodivergentes e adultos com diagnóstico tardio de autismo. O site deve apresentar a abordagem terapêutica, permitir agendamento online integrado com serviço externo, e facilitar o contato via WhatsApp.

**Restrição de Infraestrutura:** O site será hospedado no GitHub Pages (conteúdo estático). Funcionalidades dinâmicas serão implementadas via integrações com serviços externos gratuitos (ex: Calendly, Cal.com, Google Calendar) ou soluções client-side.

## Glossário

- **Website**: A aplicação web estática hospedada no GitHub Pages
- **Visitante**: Pessoa que acessa o site sem estar autenticada
- **Paciente**: Pessoa que agenda ou já realizou sessões de terapia
- **Terapeuta**: O profissional proprietário do consultório que administra o sistema
- **Widget_de_Agendamento**: Componente embarcado de serviço externo (ex: Calendly, Cal.com) que permite agendamento com confirmação pelo Terapeuta
- **Formulário_de_Contato**: Componente que coleta dados do Visitante e redireciona para o WhatsApp
- **Página_Institucional**: Seções do site que apresentam o terapeuta, a abordagem e os serviços
- **GitHub_Pages**: Serviço de hospedagem gratuito do GitHub para sites estáticos

## Requisitos

### Requisito 1: Hospedagem no GitHub Pages

**User Story:** Como Terapeuta, quero hospedar meu site no GitHub Pages, para que eu não tenha custos de hospedagem e possa gerenciar o site diretamente no meu repositório GitHub.

#### Critérios de Aceitação

1. THE Website SHALL ser composto exclusivamente por arquivos estáticos (HTML, CSS, JavaScript) compatíveis com GitHub_Pages
2. THE Website SHALL funcionar corretamente quando servido a partir de um repositório GitHub Pages sem necessidade de servidor backend
3. THE Website SHALL incluir documentação de deploy explicando como publicar no GitHub_Pages
4. THE Website SHALL permitir configuração de domínio personalizado via arquivo CNAME, caso o Terapeuta deseje utilizar um domínio próprio no futuro

### Requisito 2: Página Institucional — Apresentação do Terapeuta

**User Story:** Como Visitante, quero conhecer o terapeuta e sua formação, para que eu possa avaliar se me identifico com a abordagem antes de agendar.

#### Critérios de Aceitação

1. THE Website SHALL exibir uma seção "Sobre Mim" com informações sobre o Terapeuta, incluindo formação em hipnose ericksoniana, abordagem humanista e especialidade com neurodivergentes
2. THE Website SHALL exibir informações sobre a experiência do Terapeuta com adultos de diagnóstico tardio de autismo
3. THE Website SHALL apresentar o conteúdo da Página_Institucional de forma responsiva em dispositivos móveis e desktop

### Requisito 3: Página Institucional — Apresentação da Hipnoterapia

**User Story:** Como Visitante, quero entender o que é hipnoterapia no modelo utilizado pelo terapeuta, para que eu possa compreender como funciona o processo terapêutico.

#### Critérios de Aceitação

1. THE Website SHALL exibir uma seção explicativa sobre hipnoterapia ericksoniana e sua aplicação como ferramenta facilitadora
2. THE Website SHALL apresentar os fundamentos da abordagem: psicologia humanista, filosofia rogeriana e visão de Marshall Rosenberg
3. THE Website SHALL listar as áreas e condições que podem ser tratadas com a hipnoterapia oferecida
4. THE Website SHALL apresentar o conteúdo em linguagem acessível, evitando jargões técnicos sem explicação

### Requisito 4: Página Institucional — Público Atendido

**User Story:** Como Visitante, quero saber quais públicos o terapeuta atende, para que eu possa verificar se o serviço é adequado para mim ou minha família.

#### Critérios de Aceitação

1. THE Website SHALL exibir as categorias de público atendido: adultos, crianças e casais
2. THE Website SHALL destacar a especialidade do Terapeuta em atendimento a neurodivergentes
3. THE Website SHALL informar sobre o atendimento especializado para adultos com diagnóstico tardio de autismo

### Requisito 5: Agendamento Online via Serviço Externo

**User Story:** Como Visitante, quero agendar uma consulta diretamente pelo site, para que eu possa escolher um horário disponível de forma prática.

#### Critérios de Aceitação

1. THE Website SHALL incorporar um Widget_de_Agendamento de serviço externo gratuito (Calendly, Cal.com ou equivalente) na página de agendamento
2. THE Widget_de_Agendamento SHALL exibir apenas os horários que o Terapeuta definiu como disponíveis no serviço externo
3. WHEN o Visitante selecionar um horário no Widget_de_Agendamento, THE Widget_de_Agendamento SHALL solicitar nome, e-mail e telefone do Visitante
4. WHEN o Visitante confirmar o agendamento, THE Widget_de_Agendamento SHALL enviar notificação ao Terapeuta para aprovação
5. THE Website SHALL exibir instruções claras sobre como funciona o processo de agendamento e confirmação

### Requisito 6: Gestão de Agenda pelo Terapeuta

**User Story:** Como Terapeuta, quero gerenciar minha disponibilidade de horários no serviço externo, para que eu possa controlar quando estou disponível para atendimento.

#### Critérios de Aceitação

1. THE Website SHALL documentar como o Terapeuta pode configurar horários disponíveis no serviço externo de agendamento
2. THE Widget_de_Agendamento SHALL suportar confirmação manual pelo Terapeuta antes de efetivar o agendamento
3. WHEN o Terapeuta confirmar um agendamento no serviço externo, THE Widget_de_Agendamento SHALL enviar confirmação automática ao Paciente por e-mail
4. WHEN o Terapeuta recusar um agendamento no serviço externo, THE Widget_de_Agendamento SHALL notificar o Visitante por e-mail

### Requisito 7: Consultas Remotas

**User Story:** Como Paciente, quero realizar consultas por videochamada, para que eu possa ter atendimento sem precisar me deslocar.

#### Critérios de Aceitação

1. THE Website SHALL informar na página de agendamento que as consultas podem ser realizadas de forma remota
2. WHEN uma sessão remota for confirmada, THE Widget_de_Agendamento SHALL incluir um link de videochamada (Google Meet ou equivalente) no e-mail de confirmação
3. THE Website SHALL exibir uma seção com orientações para o Paciente sobre como se preparar para uma sessão remota

### Requisito 8: Formulário de Contato com Redirecionamento para WhatsApp

**User Story:** Como Visitante, quero enviar uma mensagem de contato de forma rápida, para que eu possa tirar dúvidas antes de agendar.

#### Critérios de Aceitação

1. THE Formulário_de_Contato SHALL solicitar nome e mensagem do Visitante
2. WHEN o Visitante submeter o Formulário_de_Contato, THE Website SHALL redirecionar o Visitante para o WhatsApp do Terapeuta com a mensagem pré-preenchida
3. THE Formulário_de_Contato SHALL utilizar a API do WhatsApp (wa.me) para gerar o link de redirecionamento com a mensagem formatada incluindo o nome do Visitante
4. IF o Visitante submeter o Formulário_de_Contato sem preencher o campo de mensagem, THEN THE Website SHALL exibir uma mensagem de validação solicitando o preenchimento

### Requisito 9: Design e Experiência do Usuário

**User Story:** Como Visitante, quero navegar em um site com design profissional e acolhedor, para que eu me sinta confortável e confiante no serviço oferecido.

#### Critérios de Aceitação

1. THE Website SHALL utilizar uma paleta de cores que transmita calma e profissionalismo (tons suaves, naturais)
2. THE Website SHALL ser totalmente responsivo, adaptando-se a telas de smartphones, tablets e desktops
3. THE Website SHALL carregar a página inicial em no máximo 3 segundos em conexões de banda larga
4. THE Website SHALL seguir as diretrizes de acessibilidade WCAG 2.1 nível AA
5. THE Website SHALL incluir navegação clara com menu fixo contendo links para todas as seções principais
6. THE Website SHALL utilizar tipografia legível com tamanho mínimo de 16px para texto corrido

### Requisito 10: SEO e Metadados

**User Story:** Como Terapeuta, quero que meu site seja encontrado em buscas por hipnoterapia na minha região, para que eu possa atrair novos pacientes organicamente.

#### Critérios de Aceitação

1. THE Website SHALL incluir meta tags de título, descrição e palavras-chave relevantes em cada página
2. THE Website SHALL incluir dados estruturados (Schema.org) do tipo "LocalBusiness" e "HealthAndBeautyBusiness"
3. THE Website SHALL incluir um arquivo sitemap.xml para indexação por mecanismos de busca
4. THE Website SHALL incluir meta tags Open Graph para compartilhamento em redes sociais

### Requisito 11: Estrutura de Página Única (Single Page)

**User Story:** Como Visitante, quero acessar todas as informações em uma navegação fluida, para que eu não precise carregar múltiplas páginas.

#### Critérios de Aceitação

1. THE Website SHALL ser estruturado como uma página única (single-page) com seções navegáveis por âncoras
2. WHEN o Visitante clicar em um item do menu de navegação, THE Website SHALL rolar suavemente até a seção correspondente
3. THE Website SHALL organizar as seções na seguinte ordem: Hero/Início, Sobre a Hipnoterapia, Sobre o Terapeuta, Público Atendido, Agendamento, Contato
4. THE Website SHALL destacar no menu de navegação a seção atualmente visível na tela
