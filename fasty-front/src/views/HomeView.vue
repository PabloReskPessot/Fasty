<script setup lang="ts">
import BarraBusqueda from '@/components/BarraBusqueda.vue';
import Carrusel from '@/components/Carrusel.vue';

import imgMac from '@/assets/ElementosGraficos/Carrusel/Mac.jpeg';
import imgChina from '@/assets/ElementosGraficos/Carrusel/China.jpeg';
import imgJapon from '@/assets/ElementosGraficos/Carrusel/Japon.jpeg';

const imgs = [imgMac, imgChina, imgJapon];
</script>

<template>
   <div class="home-container">

    <!-- Header -->
    <header class="top-bar">
      <BarraBusqueda />
    </header>
    

    <Carrusel :imagenes="imgs" />


    
    <!-- Action buttons -->
    <section class="action-grid">

      <div class="action-card enespera"> <img src="../assets/ElementosGraficos/estrella.png">Favoritos</div>
      <router-link to="/selectrestaurante">
      <div class="action-card restaurantes"><img src="../assets/ElementosGraficos/restaurante.png"></img> Restaurantes</div>
      </router-link to= "/restaurante">
      
      <div class="action-card enespera"> Pedidos</div>

      <router-link to= "/pedido">
      <div class="action-card seguimiento"><img src="../assets/ElementosGraficos/moto.png"> Mi Pedido</div> 
      </router-link>
      <div class="action-card enespera">placeholder</div>
      <div class="action-card enespera"></div>
    </section>

  </div>
</template>

<style>
.action-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.action-card img {
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
}
</style>