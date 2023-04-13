<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
    <router-link to="/cars">Cars</router-link>
    <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
    <router-link to="/signup" v-if="!isLoggedIn">Sign Up!</router-link>
    <button @click="handleLogOut" v-if="isLoggedIn">Sign out!</button>
    </nav>
    
    <router-view/>

    
  </div>
</template>
<script setup>
import { onMounted,ref } from 'vue';
 import { getAuth, onAuthStateChanged,signOut } from '@firebase/auth';
import router from './router/Router';
import swal from 'sweetalert';
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
  swal({
  title: "Logged Out",
  text: "You have successfully logged out.",
  icon: "info",
  button: "OK",
});
  router.push("/")
})
}

</script>


