<template>
  <div>
    <Navbar />
    <Cars />
    <!-- rest of your app -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cars from './components/Cars.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Cars
  }
}
</script>


<style scoped>
header {
  line-height: 1.5;
}


nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: #333;
  color: #fff;
}.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
