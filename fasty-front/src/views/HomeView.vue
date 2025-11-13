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

      <div class="action-card enespera">⭐ Favoritos</div>
      <router-link to="/selectrestaurante">
      <div class="action-card restaurantes">🏪 Restaurantes</div>
      </router-link to= "/restaurante">
      
      <div class="action-card pedido">🍔 Pedidos</div>
      <router-link to= "/pedido">
      <div class="action-card seguimiento">🛵 Seguimiento de Pedido</div> 
      </router-link>
      <div class="action-card enespera">placeholder</div>
      <div class="action-card enespera"></div>
    </section>

  </div>
</template>