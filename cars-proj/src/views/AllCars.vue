<template>
    <div>
      <BackgroundCar />
      <CarsCard />
    </div>
  </template>
  

  

  <script>
  import BackgroundCar from './BackgroundCar.vue';
import CarsCard from './CarsCard.vue';
  
  export default {
    name: 'AllCars',
    components: {
      BackgroundCar,
      CarsCard,
    },
  };
  </script>