<template>
  <img src="cafeteria.jpg" alt="Imagén de una cafetería">
  <div class="cards__container">
    <CardsContainer></CardsContainer>
  </div>
</template>

<script setup>
  import CardsContainer from './components/CardsContainer.vue';
</script>

<style scoped>
  img{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    aspect-ratio: 12/3;
    z-index: -1;
  }
  .cards__container{
    width: 75%;
    margin: 25px auto;
    background: #1C1D1F;
    padding: 20px;
    border-radius: 5px;
    z-index: 999;
  }
</style>
