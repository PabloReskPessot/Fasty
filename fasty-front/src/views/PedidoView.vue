<template>
  <div class="carrito-page">

    <div class="carrito-container">

      <!-- IZQUIERDA: DETALLE DEL CARRITO -->
      <div class="detalle-pedido">
        <h2 class="titulo">DETALLE DE PEDIDO 🛒</h2>

        <div 
          class="item"
          v-for="item in carrito"
          :key="item.platoID"
        >
          <div class="nombre">{{ item.nombre }}</div>

          <!-- CantidadPicker editable -->
          <CantidadPicker :plato="item" @cambio="actualizarCarrito" />

          <div class="precio">$ {{ item.total * item.cantidad }}</div>
        </div>

        <div class="total-final">
          TOTAL: $ {{ total }}
        </div>
      </div>

      <!-- DERECHA: DIRECCIONES Y PAGO -->
      <div class="pago-container">
        <h3 class="subtitulo">DIRECCIÓN DE ENTREGA</h3>

        <select v-model="direccionSeleccionada" class="select-direccion">
          <option disabled value="">Selecciona una dirección</option>

          <option 
            v-for="dir in direcciones" 
            :key="dir.direccionID"
            :value="dir"
          >
            {{ formatearDireccion(dir) }}
          </option>
        </select>

        <button class="btn-pagar" @click="pagar">
          PAGAR
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import CantidadPicker from "@/components/CantidadPicker.vue";
import { carritoService } from "@/services/carrito";
import { eventBus } from "@/eventBus";

export default {
  components: { CantidadPicker },

  data() {
    return {
      carrito: [],
      total: 0,

      usuarioID: null,
      direcciones: [],
      direccionSeleccionada: ""
    };
  },

 async mounted() {
  this.cargar();

  // escuchar cambios del carrito
  eventBus.onCarritoCambio(() => {
    this.cargar();
  });

  // cargar direcciones del usuario
  this.usuarioID = localStorage.getItem("usuarioID");

  const res = await fetch(`http://localhost:3000/usuarios/${this.usuarioID}`);
  const data = await res.json();

  this.direcciones = data.direcciones || [];
},

methods: {
  cargar() {
    this.carrito = carritoService.obtener();
    this.total = carritoService.total();
  },

  formatearDireccion(d) {
    return `${d.calle} ${d.altura} ${d.pisoDepartamento || ""} - ${d.ciudad}`;
  }
}

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

.carrito-page {
  padding: 2rem;
}







.total-final {
  margin-top: 1.5rem;
  font-weight: bold;
  font-size: 20px;
  text-align: right;
}

.btn-pagar {
  margin-top: 1.5rem;
  background: #d42027;
  color: white;
  padding: 12px;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
}

.select-direccion {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
}



</style>

<!-- 
.item {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
.carrito-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
.detalle-pedido, .pago-container {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  width: 50%;
}





} -->