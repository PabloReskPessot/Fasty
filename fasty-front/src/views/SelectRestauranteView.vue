
<script>
import BarraBusqueda from '@/components/BarraBusqueda.vue';
export default {
  components: {
    BarraBusqueda
  },
  data() {
    return {
      restaurantes: []  // <-- acá guardás lo que trae la API
    };
  },

  mounted() {
    this.cargarRestaurantes();
  },

  methods: {
    async cargarRestaurantes() {
      try {
        const response = await fetch("http://localhost:3000/restaurante");
        const data = await response.json();
        this.restaurantes = data;
      } catch (error) {
        console.error("Error cargando restaurantes", error);
      }
    }
  }
};
</script>


<template>

    <!-- Header -->
    <header class="top-bar">
      <BarraBusqueda />
    </header>

  <div class="select-restaurante">
<h1>Seleccioná tu restaurante</h1>

  <div class="restaurantes-grid">
    <div
      v-for="rest in restaurantes"
      :key="rest.restauranteID"
    >
      <router-link :to="`/restaurante/${rest.restauranteID}`" class="restaurante-card-link">
        <div class="restaurante-card">
          <img src="../assets/ElementosGraficos/RestauranteIMG.jpg"
            class="logo"
          />

          <div class="info">
            <h2>{{ rest.nombre }}</h2>
            <p>{{ rest.descripcion }}</p>

            <div class="extras">
              <span class="categoria">{{ rest.categoria.nombre }}</span>
              <span class="puntuacion">⭐ {{ rest.puntuacion }}</span>
            </div>

          </div>
        </div>
      </router-link>
    </div>
  </div>
</div>
</template>




<style>
.select-restaurante {
  text-align: center;
  padding: 2rem;
}

.restaurantes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.restaurante-card {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.2s;
}

.restaurante-card:hover {
  transform: scale(1.03);
}

.restaurante-card-link {
  text-decoration: none;
  color: inherit;
}
.restaurante-card-link {
  display: block;   /* 🔥 Esto hace el link clickeable */
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}
</style>
