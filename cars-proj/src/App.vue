<template>
  <div>
    <NavBar class="navbar" style="color: #fff;">
      <button class="logout-button" @click="handleLogOut" v-if="isLoggedIn">Sign out!</button>
      <!-- other navigation links/buttons -->
    </NavBar>
    <button type="button" @click="handleClick" v-if="show"
      class="flex  text-white text-l  absolute top-3 left-[1350px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      id="user-menu-button" aria-expanded="false" aria-haspopup="true">
      <p 
        class="bg-red-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition-colors duration-300">
        Login </p>
    </button>
    <button type="button" @click="handleLogOut" v-if="isLoggedIn"
      class="flex  text-white text-l  absolute top-3 left-[1350px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      id="user-menu-button" aria-expanded="false" aria-haspopup="true">
      <p 
        class="bg-red-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition-colors duration-300">
        Log out! </p>
    </button>
    <router-view />
  </div>
  <Footer/>
</template>

<style scoped>

</style> 
<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

import { onMounted,ref } from 'vue';
 import { getAuth, onAuthStateChanged,signOut } from '@firebase/auth';
import router from './routes/routes';
import swal from 'sweetalert';
const show = ref(true);
 const isLoggedIn = ref(false)
 let auth;
 onMounted(()=>{
  auth = getAuth();
  onAuthStateChanged(auth , (user)=>{
    if(user){
    isLoggedIn.value=true
  }
    else {
      isLoggedIn.value=false
    }
  })
 })
const handleLogOut = ()=>{
signOut(auth).then(()=>{
  isLoggedIn.value = false
  show.value=true
  swal({
  title: "Logged Out",
  text: "You have successfully logged out.",
  icon: "info",
  button: "OK",
});
  router.push("/")
})
}


const handleClick = ()=>{
console.log("hello");
 router.push("/login")
 show.value = false;
}

</script>


