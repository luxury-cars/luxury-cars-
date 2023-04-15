<script>
import BrandCar from './BrandCar.vue';
import CarsNews from './CarsNews.vue';
import MainCar from './MainCar.vue';



export default {
  name: 'HomePage',
  components: {
    MainCar ,
    BrandCar,
    CarsNews,
   
  }
}
</script>


<template>
  <MainCar/>
  <BrandCar/>
  <CarsNews/>
</template>
