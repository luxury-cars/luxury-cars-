<script>
import BrandCar from './BrandCar.vue';
import CarsNews from './CarsNews.vue';
import MainCar from './MainCar.vue';
import Crud from './Crud.vue';


export default {
  name: 'HomePage',
  components: {
    MainCar,
    BrandCar,
    CarsNews,
    Crud
}
}
</script>


<template>
  <MainCar/>
  <BrandCar/>
  <CarsNews/>
  <Crud/>
</template>
