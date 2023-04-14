<script >
import NavBar from './components/NavBar.vue';
import MainCar from './components/MainCar.vue';
import CarsNews from './components/CarsNews.vue';
import BrandCar from "./components/BrandCar.vue"
import Footer from './components/Footer.vue';
export default {
  name:"app",
  components:{
    NavBar,
    MainCar ,
    BrandCar,
    CarsNews,
    Footer
}
}

</script>
<template>
<NavBar/>
<MainCar/>
<BrandCar></BrandCar>
<CarsNews/>
<Footer/>
</template>
