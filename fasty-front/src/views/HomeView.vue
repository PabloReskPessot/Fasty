<script setup lang="ts">
import BarraBusqueda from '@/components/BarraBusqueda.vue';



</script>

<template>
   <div class="home-container">

    <!-- Header -->
    <header class="top-bar">
      <BarraBusqueda />
    </header>
    


    
    <!-- Action buttons -->
    <section class="action-grid">

      <div class="action-card favoritos">⭐ Favoritos</div>
      <div class="action-card restaurantes">🏪 Restaurantes</div>
      <div class="action-card categoria">🍔 Categorías</div>
      <div class="action-card seguimiento">🛵 Seguimiento</div>
      <div class="action-card menu">🍽️ Menú</div>

      <!-- Resto de placeholders -->
      <div class="action-card placeholder">a</div>
      <div class="action-card placeholder">a</div>

    </section>

  </div>
</template>