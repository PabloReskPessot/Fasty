<script>
import BarraBusqueda from '@/components/BarraBusqueda.vue';
export default {
  components: {
    BarraBusqueda
  },

  data() {
  return {
    restaurante: {
      restauranteID: 0,
      nombre: "",
      descripcion: "",
      telefono: "",
      horarioApertura: "",
      horarioCierre: "",
      logo: "",
      puntuacion: 0,

      categoria: {
        categoriaRestauranteID: 0,
        nombre: "",
        descripcion: ""
      },

      direccionRestaurante: {
        direccionRestauranteID: 0,
        calle: "",
        altura: "",
        ciudad: "",
        latitud: "",
        longitud: ""
      },

      platos: []
    }
  };
},

  async mounted() {
    const id = this.$route.params.id;

    const response = await fetch(`http://localhost:3000/restaurante/${id}`);
    const data = await response.json();

    this.restaurante = data;
  },

  methods: {
    irAResenias() {
      this.$router.push(`/restaurante/${this.restaurante.restauranteID}/resenias`);
    },

    irAMenu(id) {
      this.$router.push(`/restaurante/${id}/menu`);
    }

  }
};
</script>

<template>
   <div class="home-container">

    <!-- Header -->
    <header class="top-bar">
      <BarraBusqueda />
    </header>
    
    <!-- 🔻 COLUMNA IZQUIERDA (BOX ROJO) -->
      <div class="info-box">
        <img src="../assets/ElementosGraficos/RestauranteFoto.jpg" class="logo" />

        <h2>{{ restaurante.nombre }}</h2>
        <p>{{ restaurante.descripcion }}</p>

        <p><strong>Teléfono:</strong> {{ restaurante.telefono }}</p>
        <p><strong>Horario:</strong> {{ restaurante.horarioApertura }} - {{ restaurante.horarioCierre }}</p>
      </div>

      <!-- 🔹 COLUMNA CENTRAL (RESEÑAS + VALORACIONES) -->
      <div class="middle">
        <div class="reseñas" @click="irAResenias">
          <h3>RESEÑAS</h3>
          <p class="user-name">Rachelle Beaudry</p>
          <p class="texto">
            Absolutely love this store! They always have the latest trends and styles!
          </p>
        </div>

        <div class="valoraciones">
          <h3>VALORACIONES</h3>
          <p class="puntuacion">{{ restaurante.puntuacion }}</p>

          <div class="estrellas">
            <span
              v-for="n in 5"
              :key="n"
              class="estrella"
              :class="{ activa: n <= Math.round(restaurante.puntuacion) }"
            >★</span>
          </div>
        </div>
      </div>

      <!-- 🔹 COLUMNA DERECHA (PLATOS PRINCIPALES + BOTÓN) -->
      <div class="platos-box">
        <h3>PLATOS PRINCIPALES</h3>

        <div class="platos-preview">
          <div
            v-for="plato in restaurante.platos.slice(0, 2)" 
            :key="plato.platoID"
            class="plato-item"
          >
            <img :src="`/img/platos/${plato.imagen}`" class="plato-img" />
            <p>{{ plato.nombre }}</p>
          </div>
        </div>

        <button class="btn-menu" @click="irAMenu(restaurante.restauranteID)">
          VER MENÚ COMPLETO
        </button>
      </div>

  </div>
</template>



<style>
.restaurante-detalle {
  padding: 1.5rem;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
}

/* 🔻 Caja Roja */
.info-box {
  background: #d42027;
  color: white;
  padding: 1.2rem;
  border-radius: 1rem;
}

.logo {
  width: 100%;
  height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
}

/* 🔹 Reseñas y Valoraciones */
.middle {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.reseñas {
  background: #dce4f2;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
}

.reseñas:hover {
  background: #c9d7ee;
}

.user-name {
  font-weight: bold;
}

.valoraciones {
  background: #d42027;
  color: white;
  padding: 1rem;
  border-radius: 1rem;
}

.puntuacion {
  font-size: 2.3rem;
  font-weight: bold;
}

.estrellas {
  margin-top: 0.4rem;
}

.estrella {
  font-size: 1.4rem;
  color: #ffd1a1;
  opacity: 0.4;
}

.estrella.activa {
  opacity: 1;
}

/* 🔹 Platos Principales */
.platos-box {
  background: #eef7ee;
  border: 3px solid #0a561c;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
}

.platos-preview {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.plato-img {
  width: 90px;
  height: 90px;
  object-fit: contain;
}

.btn-menu {
  background: #0a561c;
  color: white;
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.btn-menu:hover {
  background: #084315;
}
</style>