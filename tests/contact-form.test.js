/**
 * Testes unitários para o módulo ContactForm.
 *
 * Como scripts/main.js não usa ES modules (é carregado via <script> tag),
 * recriamos as funções puras aqui para teste isolado.
 * As funções testadas são cópias fiéis da lógica em scripts/main.js.
 */

import { describe, it, expect } from 'vitest';

// Extraímos as funções puras do ContactForm para teste isolado.
// Estas funções são idênticas às definidas em scripts/main.js.

/**
 * Valida os dados do formulário.
 * @param {object} formData - { name, message }
 * @returns {object} - { valid: boolean, errors: object }
 */
function validate(formData) {
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
}

/**
 * Constrói a URL do WhatsApp com a mensagem pré-formatada.
 * @param {string} phone - Número de telefone (com código do país)
 * @param {string} name - Nome do visitante
 * @param {string} message - Mensagem do visitante
 * @returns {string} - URL completa do WhatsApp
 */
function buildWhatsAppUrl(phone, name, message) {
  const formattedMessage = `Olá! Meu nome é ${name}. ${message}`;
  const encodedMessage = encodeURIComponent(formattedMessage);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

describe('ContactForm.validate', () => {
  it('deve aceitar dados válidos', () => {
    const result = validate({ name: 'Maria', message: 'Gostaria de agendar uma sessão.' });
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it('deve rejeitar nome vazio', () => {
    const result = validate({ name: '', message: 'Mensagem válida' });
    expect(result.valid).toBe(false);
    expect(result.errors.name).toBeDefined();
  });

  it('deve rejeitar mensagem vazia', () => {
    const result = validate({ name: 'João', message: '' });
    expect(result.valid).toBe(false);
    expect(result.errors.message).toBeDefined();
  });

  it('deve rejeitar mensagem composta apenas de espaços', () => {
    const result = validate({ name: 'Ana', message: '   \t\n  ' });
    expect(result.valid).toBe(false);
    expect(result.errors.message).toBeDefined();
  });
});

describe('ContactForm.buildWhatsAppUrl', () => {
  it('deve gerar URL com formato correto', () => {
    const url = buildWhatsAppUrl('5511999999999', 'Carlos', 'Quero agendar');
    expect(url).toMatch(/^https:\/\/wa\.me\/5511999999999\?text=/);
  });

  it('deve incluir nome e mensagem na URL decodificada', () => {
    const url = buildWhatsAppUrl('5511999999999', 'Maria', 'Olá, preciso de ajuda');
    const textParam = new URL(url).searchParams.get('text');
    expect(textParam).toContain('Maria');
    expect(textParam).toContain('Olá, preciso de ajuda');
  });

  it('deve codificar caracteres especiais corretamente', () => {
    const url = buildWhatsAppUrl('5511999999999', 'José', 'Ação & reação!');
    const textParam = new URL(url).searchParams.get('text');
    expect(textParam).toContain('José');
    expect(textParam).toContain('Ação & reação!');
  });
});
