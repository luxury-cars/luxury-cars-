<template>
  <div>
    <button 
      class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
      @click="toggleCrud"
    >
      {{ showCrud ? 'Return to the dash' : 'Add a car to sell' }}
    </button>

    <div v-if="showCrud">
      <Crud />
      
    </div>
    <button 
      class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
      @click="toggleCars"
    >
      {{ showCars ? 'Return to the dash' : 'See your cars' }}
    </button>
    <div v-if="showCars">
      <Getcars />
      
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Crud from './Crud.vue';
import Getcars from './Getcars.vue';


export default {
  components: {
    Crud,
    Getcars
},

  setup() {
    const showCrud = ref(false);
    const showCars = ref(false)
const toggleCars = ()=>{
  showCars.value = !showCars.value;
}

    const toggleCrud = () => {
      showCrud.value = !showCrud.value;
    };

    return {
      showCrud,
      toggleCrud,
      showCars,
      toggleCars
    }
  }
}
</script>
