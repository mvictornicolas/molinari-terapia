# Hipnoterapia Humanista — Website

Website profissional para o consultório de hipnoterapia de Victor Nicolas Molinari. Site estático single-page hospedado no GitHub Pages.

## 🌐 Acesso

**URL:** [https://mvictornicolas.github.io/molinari-terapia/](https://mvictornicolas.github.io/molinari-terapia/)

## 📋 Sobre o Projeto

Site institucional com as seguintes seções:
- **Início** — Apresentação e CTA para agendamento
- **Hipnoterapia** — Explicação sobre a abordagem ericksoniana
- **Sobre o Terapeuta** — Formação e especialidades
- **Público Atendido** — Adultos, crianças, casais e neurodivergentes
- **Agendamento** — Link para Google Calendar com horários disponíveis
- **Contato** — Formulário com redirecionamento para WhatsApp

## 🚀 Deploy no GitHub Pages

### Publicação Inicial

1. Crie um repositório no GitHub (ex: `molinari-terapia`)
2. Faça push dos arquivos para a branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Deploy inicial"
   git remote add origin https://github.com/mvictornicolas/molinari-terapia.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings > Pages**
4. Em "Source", selecione **Deploy from a branch**
5. Selecione a branch `main` e a pasta `/ (root)`
6. Clique em **Save**
7. Aguarde alguns minutos — o site estará disponível em `https://mvictornicolas.github.io/molinari-terapia/`

### Atualizações

Para atualizar o site, basta fazer commit e push das alterações:

```bash
git add .
git commit -m "Descrição da alteração"
git push
```

O GitHub Pages fará o deploy automaticamente em 1-2 minutos.

## 🌍 Configuração de Domínio Personalizado

Se desejar usar um domínio próprio (ex: `www.molinari-terapia.com.br`):

1. **No arquivo CNAME:** Edite o arquivo `CNAME` na raiz do projeto e adicione seu domínio:
   ```
   www.molinari-terapia.com.br
   ```

2. **No provedor de DNS:** Configure os registros DNS:
   - Para domínio apex (sem www):
     ```
     Tipo: A
     Host: @
     Valor: 185.199.108.153
     Valor: 185.199.109.153
     Valor: 185.199.110.153
     Valor: 185.199.111.153
     ```
   - Para subdomínio www:
     ```
     Tipo: CNAME
     Host: www
     Valor: mvictornicolas.github.io
     ```

3. **No GitHub:** Vá em Settings > Pages > Custom domain e insira seu domínio

4. **HTTPS:** Marque a opção "Enforce HTTPS" nas configurações do GitHub Pages

## 📅 Configuração de Horários no Google Calendar

O agendamento é feito via Google Calendar Appointment Scheduling.

### Como configurar disponibilidade

1. Acesse [Google Calendar](https://calendar.google.com)
2. Vá em **Configurações > Agendamentos** (ou crie um novo agendamento)
3. Configure os horários disponíveis:
   - **Dia:** Sábados
   - **Horário:** 14:00 às 17:00
   - **Duração da sessão:** 50 minutos (ou conforme preferência)
4. Em "Formulário de reserva", configure os campos que deseja coletar (nome, e-mail, telefone)
5. O link de agendamento gerado é: `https://calendar.app.google/AHS8JkTUfwfoPJH28`

### Como alterar horários

- Para bloquear um horário específico: crie um evento no Google Calendar naquele horário
- Para alterar dias/horários disponíveis: edite as configurações do agendamento
- Para pausar agendamentos temporariamente: desative o link de agendamento nas configurações

### Confirmação de consultas

- Quando alguém agendar, você receberá uma notificação por e-mail
- O paciente receberá um e-mail de confirmação automático com os detalhes

## ✏️ Como Personalizar o Conteúdo

### Alterar textos

Edite o arquivo `index.html`. Os textos estão organizados por seções com IDs claros:
- `#hero` — Título e subtítulo principal
- `#hipnoterapia` — Conteúdo sobre hipnoterapia
- `#terapeuta` — Informações do terapeuta
- `#publico` — Público atendido
- `#agendamento` — Informações de agendamento
- `#contato` — Texto do formulário de contato

### Alterar cores

Edite as Custom Properties no início de `styles/main.css`:
```css
:root {
  --color-primary: #4a7c6f;       /* Cor principal */
  --color-secondary: #7ba4b8;     /* Cor secundária */
  --color-accent: #c4956a;        /* Cor de destaque */
}
```

### Alterar número do WhatsApp

Edite o arquivo `scripts/main.js`, na constante `SITE_CONFIG`:
```javascript
const SITE_CONFIG = {
  therapist: {
    phone: "5512997564777",  // Número com código do país
  }
};
```

### Alterar link de agendamento

No `index.html`, procure o link do Google Calendar e substitua pela nova URL:
```html
<a href="https://calendar.app.google/AHS8JkTUfwfoPJH28" ...>
```

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ (apenas para testes)
- Qualquer servidor HTTP local (opcional)

### Visualizar o site localmente

Abra o `index.html` diretamente no navegador, ou use um servidor local:

```bash
npx serve .
```

### Executar testes

```bash
npm install
npm test
```

## 📁 Estrutura do Projeto

```
/
├── index.html          # Página principal (single-page)
├── styles/
│   └── main.css        # Estilos com Custom Properties
├── scripts/
│   └── main.js         # Navegação, formulário, scroll
├── tests/
│   └── *.test.js       # Testes unitários e de propriedade
├── sitemap.xml         # Mapa do site para SEO
├── robots.txt          # Configuração de crawlers
├── CNAME               # Domínio personalizado
├── package.json        # Dependências de desenvolvimento
└── README.md           # Esta documentação
```

## 📄 Licença

© 2025 Victor Nicolas Molinari. Todos os direitos reservados.
