<template>
  <div v-if="cantidad === 0" class="btn-add" @click="sumar">
    Agregar
  </div>

  <div v-else class="cantidad-box">
    <button @click="restar">−</button>
    <span>{{ cantidad }}</span>
    <button @click="sumar">+</button>
  </div>
</template>

<script>
import { carritoService } from "@/services/carrito";
import { eventBus } from "@/eventBus";   // 🔥 IMPORTANTE

export default {
  props: ["plato"],

  data() {
    return {
      cantidad: 0
    };
  },

  mounted() {
    this.syncCantidad();
  },

  methods: {
    syncCantidad() {
      const carrito = carritoService.obtener();
      const item = carrito.find(i => i.platoID === this.plato.platoID);
      this.cantidad = item ? item.cantidad : 0;
    },

    sumar() {
      carritoService.agregar(this.plato);
      this.syncCantidad();
      eventBus.emitirCarritoCambio();  // 🔥 AVISA A TODA LA APP
    },

    restar() {
      carritoService.quitar(this.plato.platoID);
      this.syncCantidad();
      eventBus.emitirCarritoCambio();  // 🔥 AVISA A TODA LA APP
    }
  }
};
</script>

<style>
.cantidad-box {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
}

button {
  background: #0a561c;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 4px 8px;
  cursor: pointer;
}

.btn-add {
  background: #0a561c;
  color: white;
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
  text-align: center;
}
</style>
