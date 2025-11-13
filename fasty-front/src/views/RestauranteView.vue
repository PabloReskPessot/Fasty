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

      <div class="restaurante-info">Nombre</div>

      <div class="resenia-grid">
        <div class="action-card resenia">🏪 Restaurantes</div>
        <div class="valoracion-info">🍔 Categorías</div>
      </div>
      
      <div class="action-card menurestaurante">🛵 Seguimiento</div>


    </section>

  </div>
</template>

