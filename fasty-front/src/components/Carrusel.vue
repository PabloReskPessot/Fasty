<template>
  <div id="carrusel" class="carousel slide" data-bs-ride="carousel">
    
    <!-- Bullet indicators -->
    <div class="carousel-indicators">
      <button
        v-for="(item, index) in imagenes"
        :key="index"
        type="button"
        data-bs-target="#carrusel"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        aria-current="true"
      ></button>
    </div>

    <!-- Slides -->
    <div class="carousel-inner">
      <div
        v-for="(img, index) in imagenes"
        :key="index"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <img :src="img" class="d-block w-100 carrusel-img" alt="slide" />
      </div>
    </div>

    <!-- Controls -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carrusel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>

    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carrusel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
    
  </div>
</template>

<script>
export default {
  name: "Carrusel",
  props: {
    imagenes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.carrusel-img {
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
}
</style>
