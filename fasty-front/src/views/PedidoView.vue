<template>
  <div class="carrito-page">
    <!-- Fondo -->
    <div class="background"></div>

    <div class="carrito-container">
      <!-- Sección izquierda: Detalle de pedido -->
      <div class="detalle-pedido">
        <h2 class="titulo">DETALLE DE PEDIDO 🛒</h2>

        <div
          class="item"
          v-for="(producto, index) in productos"
          :key="index"
        >
          <div class="nombre">{{ producto.nombre }}</div>
          <div class="cantidad">{{ producto.cantidad }} Unidades</div>
        </div>
      </div>

      <!-- Sección derecha: Dirección y pago -->
      <div class="pago-container">
        <h3 class="subtitulo">DIRECCIÓN</h3>

        <select v-model="direccionSeleccionada" class="select-direccion">
          <option disabled value="">Selecciona una dirección</option>
          <option v-for="(direccion, i) in direcciones" :key="i" :value="direccion">
            {{ direccion }}
          </option>
        </select>

        <button class="btn-pagar" @click="pagar">PAGAR</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const productos = ref([
  { nombre: "ENSALADA", cantidad: 2 },
  { nombre: "PLATO COMPLETO", cantidad: 1 },
  { nombre: "YOGURT CON FRUTAS", cantidad: 1 },
]);

const direcciones = ref([
  "Av. Siempre Viva 742",
  "Calle Falsa 123",
  "Belgrano 1000",
]);

const direccionSeleccionada = ref("");

const pagar = () => {
  if (!direccionSeleccionada.value) {
    alert("Por favor seleccioná una dirección antes de pagar.");
    return;
  }
  alert(`Pedido confirmado. Envío a: ${direccionSeleccionada.value}`);
};
</script>

<style>
/* Fondo tipo tablero */
.background {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: repeating-linear-gradient(
      90deg,
      #ff0012 0,
      #ff0012 50px,
      #ffffff 50px,
      #ffffff 100px
    ),
    repeating-linear-gradient(
      #ff0012 0,
      #ff0012 50px,
      #ffffff 50px,
      #ffffff 100px
    );
  background-size: 100px 100px;
}

/* Layout principal */
.carrito-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  padding: 20px;
}

.carrito-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 90%;
  max-width: 900px;
  gap: 2rem;
  flex-wrap: wrap;
}

/* Detalle de pedido */
.detalle-pedido {
  flex: 1;
  background-color: white;
  color: black;
  border-radius: 15px;
  padding: 1.5rem;
  min-width: 300px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
}

.titulo {
  color: #ff0012;
  font-weight: bold;
  margin-bottom: 1rem;
}

.item {
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Panel de pago */
.pago-container {
  flex: 0.8;
  background-color: #0a561c;
  border-radius: 15px;
  padding: 2rem;
  color: white;
  text-align: center;
  min-width: 280px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.subtitulo {
  font-weight: 600;
  margin-bottom: 1rem;
}

.select-direccion {
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #333;
}

.btn-pagar {
  background-color: #ff0012;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.9rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 100%;
}

.btn-pagar:hover {
  background-color: #c60010;
}

/* Responsive */
@media (max-width: 768px) {
  .carrito-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
