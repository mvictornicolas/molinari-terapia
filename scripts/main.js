/**
 * Website de Hipnoterapia — Main JavaScript
 * Estrutura modular com SITE_CONFIG e módulos funcionais.
 */

'use strict';

// ==========================================================================
// Configuração do Site
// ==========================================================================

const SITE_CONFIG = {
  therapist: {
    name: "Nome do Terapeuta",
    phone: "5511999999999",
    email: "contato@exemplo.com",
    calcomUsername: "terapeuta",
  },
  sections: [
    { id: "hero", label: "Início" },
    { id: "hipnoterapia", label: "Hipnoterapia" },
    { id: "terapeuta", label: "Sobre Mim" },
    { id: "publico", label: "Público" },
    { id: "agendamento", label: "Agendar" },
    { id: "contato", label: "Contato" },
  ],
};

// ==========================================================================
// Módulo de Navegação
// ==========================================================================

const Navigation = {
  /**
   * Inicializa o módulo de navegação.
   */
  init() {
    this.header = document.getElementById('header');
    this.navLinks = document.querySelectorAll('nav a[href^="#"]');
    this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    this.mobileMenu = document.querySelector('.mobile-menu');

    this.bindEvents();
  },

  /**
   * Vincula event listeners de navegação.
   */
  bindEvents() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        this.smoothScrollTo(sectionId);
        this.closeMobileMenu();
      });
    });

    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }
  },

  /**
   * Rola suavemente até a seção especificada.
   * @param {string} sectionId - ID da seção de destino
   */
  smoothScrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  },

  /**
   * Destaca o item de menu correspondente à seção visível.
   * @param {string} sectionId - ID da seção atualmente visível
   */
  highlightActiveSection(sectionId) {
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      link.classList.toggle('active', href === sectionId);
    });
  },

  /**
   * Alterna a visibilidade do menu mobile.
   */
  toggleMobileMenu() {
    if (this.mobileMenu) {
      const isOpen = this.mobileMenu.classList.toggle('open');
      if (this.mobileMenuBtn) {
        this.mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      }
    }
  },

  /**
   * Fecha o menu mobile.
   */
  closeMobileMenu() {
    if (this.mobileMenu) {
      this.mobileMenu.classList.remove('open');
      if (this.mobileMenuBtn) {
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  },
};

// ==========================================================================
// Módulo de Formulário de Contato
// ==========================================================================

const ContactForm = {
  /**
   * Inicializa o módulo de formulário de contato.
   */
  init() {
    this.form = document.getElementById('contact-form');
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.submit(e));
    }
  },

  /**
   * Valida os dados do formulário.
   * @param {object} formData - Dados do formulário { name, message }
   * @returns {object} - { valid: boolean, errors: object }
   */
  validate(formData) {
    const errors = {};

    if (!formData.name || formData.name.trim().length === 0) {
      errors.name = 'Por favor, informe seu nome.';
    }

    if (!formData.message || formData.message.trim().length === 0) {
      errors.message = 'Por favor, escreva uma mensagem.';
    }

    return {
      valid: Object.keys(errors).length === 0,
      errors,
    };
  },

  /**
   * Constrói a URL do WhatsApp com a mensagem pré-formatada.
   * @param {string} phone - Número de telefone (com código do país)
   * @param {string} name - Nome do visitante
   * @param {string} message - Mensagem do visitante
   * @returns {string} - URL completa do WhatsApp
   */
  buildWhatsAppUrl(phone, name, message) {
    const formattedMessage = `Olá! Meu nome é ${name}. ${message}`;
    const encodedMessage = encodeURIComponent(formattedMessage);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  },

  /**
   * Processa o envio do formulário.
   * @param {Event} event - Evento de submit
   */
  submit(event) {
    event.preventDefault();

    const formData = {
      name: this.form.querySelector('[name="name"]')?.value || '',
      message: this.form.querySelector('[name="message"]')?.value || '',
    };

    const { valid, errors } = this.validate(formData);

    // Limpa erros anteriores
    this.clearErrors();

    if (!valid) {
      this.showErrors(errors);
      return;
    }

    const url = this.buildWhatsAppUrl(
      SITE_CONFIG.therapist.phone,
      formData.name.trim(),
      formData.message.trim()
    );

    window.open(url, '_blank');
  },

  /**
   * Exibe mensagens de erro no formulário.
   * @param {object} errors - Objeto com erros por campo
   */
  showErrors(errors) {
    Object.entries(errors).forEach(([field, message]) => {
      const input = this.form.querySelector(`[name="${field}"]`);
      if (input) {
        const errorEl = document.createElement('span');
        errorEl.className = 'error-message';
        errorEl.setAttribute('role', 'alert');
        errorEl.textContent = message;
        input.parentNode.appendChild(errorEl);
        input.setAttribute('aria-invalid', 'true');
      }
    });
  },

  /**
   * Limpa todas as mensagens de erro do formulário.
   */
  clearErrors() {
    if (!this.form) return;
    this.form.querySelectorAll('.error-message').forEach(el => el.remove());
    this.form.querySelectorAll('[aria-invalid]').forEach(el => {
      el.removeAttribute('aria-invalid');
    });
  },
};

// ==========================================================================
// Módulo de Gerenciamento de Scroll
// ==========================================================================

const ScrollManager = {
  /**
   * Inicializa o módulo de scroll.
   */
  init() {
    this.sections = document.querySelectorAll('main > section[id]');
    this.backToTopBtn = document.getElementById('back-to-top');

    this.observeSections();
    this.observeBackToTop();
  },

  /**
   * Configura Intersection Observer para detectar seção visível.
   */
  observeSections() {
    if (!this.sections.length) return;

    const options = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Navigation.highlightActiveSection(entry.target.id);
        }
      });
    }, options);

    this.sections.forEach(section => observer.observe(section));
  },

  /**
   * Controla a visibilidade do botão "voltar ao topo".
   */
  observeBackToTop() {
    if (!this.backToTopBtn) return;

    this.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      const show = window.scrollY > 400;
      this.backToTopBtn.classList.toggle('visible', show);
    });
  },

  /**
   * Aplica animações de fade-in nas seções ao entrar na viewport.
   */
  animateOnScroll() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
  },
};

// ==========================================================================
// Inicialização
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  ContactForm.init();
  ScrollManager.init();
  ScrollManager.animateOnScroll();
});
