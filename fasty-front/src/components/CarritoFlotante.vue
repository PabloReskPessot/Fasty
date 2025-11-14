<template>
  <div class="carrito-fijo" v-if="cantidad > 0">
    <p class="total">Total: ${{ total }}</p>

    <button class="btn-ver" @click="$router.push('/pedido')">
      Ver Pedido
    </button>

    <button class="btn-pagar">
      Pagar
    </button>
  </div>
</template>

<script>
import { carritoService } from "@/services/carrito";
import { eventBus } from "@/eventBus";

export default {
  data() {
    return {
      total: 0,
      cantidad: 0
    };
  },

  mounted() {
    this.actualizar(); // carga inicial

    eventBus.onCarritoCambio(() => {
      this.actualizar(); // 🔥 refresca siempre
    });
  },

  methods: {
    actualizar() {
        const carrito = carritoService.obtener();

        this.cantidad = carrito.reduce((acc, p) => acc + p.cantidad, 0);
        this.total = carrito.reduce((acc, p) => acc + p.cantidad * p.precio, 0);
        }

  }
};
</script>

<style>
.carrito-fijo {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #0a561c;
  padding: 12px 20px;
  border-radius: 14px;
  display: flex;
  gap: 10px;
  color: white;
  align-items: center;
}
</style>