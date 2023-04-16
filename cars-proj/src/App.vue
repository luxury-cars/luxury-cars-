<script >
import NavBar from './components/NavBar.vue';
import MainCar from './components/MainCar.vue';
import CarsNews from './components/CarsNews.vue';
import BrandCar from "./components/BrandCar.vue"
import Footer from './components/Footer.vue';
import HomAll from './components/HomeALL.vue'



export default {
  name:"app",
  components:{
    NavBar,
    Footer,
    
    
},

}

</script>


<template>

   <NavBar/>

<router-view  />
<Footer/>

</template>