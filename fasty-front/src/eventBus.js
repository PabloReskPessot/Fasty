// src/eventBus.js

const listeners = [];

export const eventBus = {
  /**
   * Registrar un callback que se ejecutará cuando cambie el carrito
   */
  onCarritoCambio(callback) {
    listeners.push(callback);
  },

  /**
   * Ejecutar todos los callbacks registrados
   */
  emitirCarritoCambio() {
    listeners.forEach(cb => cb());
  }
};