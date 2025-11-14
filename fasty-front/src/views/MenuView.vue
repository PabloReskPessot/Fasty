<script>
import CantidadPicker from "@/components/CantidadPicker.vue";
import { carritoService } from "@/services/carrito";

export default {
  components: { CantidadPicker },

  data() {
    return {
      restauranteID: null,
      categoriasMenu: [],
      platosPorCategoria: {}
    };
  },

  async mounted() {
    this.restauranteID = this.$route.params.id;

    const response = await fetch(`http://localhost:3000/restaurante/${this.restauranteID}/menu`);
    const data = await response.json();

    this.categoriasMenu = Object.keys(data.menu);
    this.platosPorCategoria = data.menu;
  },

  methods: {
    actualizarCarrito() {
      console.log("Carrito actualizado →", carritoService.obtener());
      window.dispatchEvent(new Event("carrito-actualizado"));
    },

    irDetallePedido() {
      this.$router.push('/pedido');
    }
  }
};
</script>

<template>
 <div class="menu-container">

  <header class="top-bar">
    <h2 style="color:white; font-weight:600;">Menú</h2>
  </header>

  <div v-for="categoria in categoriasMenu" :key="categoria" class="categoria-bloque">
    <h2 class="categoria-titulo">{{ categoria }}</h2>

    <div class="menu-grid">
      <div v-for="plato in platosPorCategoria[categoria]" :key="plato.platoID" class="menu-card">

        <img :src="`/img/platos/${plato.imagen}`" class="menu-img" />

        <h3 class="menu-title">{{ plato.nombre }}</h3>
        <p class="menu-desc">{{ plato.descripcion }}</p>
        <p class="menu-precio">$ {{ plato.precio }}</p>

        <CantidadPicker :plato="plato" @cambio="actualizarCarrito" />
      </div>
    </div>
  </div>

  <div class="detallePedido-footer">
    <button class="btn-detallePedido" @click="irDetallePedido">IR AL DETALLE PEDIDO</button>
  </div>

</div>
</template>

<style>

/* Grid de platos */
.menu-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 15px;
}

/* Tarjetas del menú */
.menu-card {
  background: var(--vt-c-white);
  border: 2px solid #e0e0e0;
  border-radius: 14px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  transition: 0.2s;
}

.menu-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 14px rgba(0,0,0,0.12);
}

.menu-img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 10px;
}

.menu-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-heading);
}

.menu-desc {
  font-size: 14px;
  color: var(--vt-c-text-light-2);
  min-height: 45px;
  margin-top: 6px;
}

.menu-precio {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  color: #0a561c;
}

.btn-add {
  background: #0a561c;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: auto;
}

.btn-add:hover {
  background: #084315;
}

/* Footer del carrito */
.detallePedido-footer {
  margin-top: 25px;
  display: flex;
  justify-content: center;
}

.btn-detallePedido {
  background: #d42027;
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}

.btn-detallePedido:hover {
  background: #aa171d;
}

</style>
