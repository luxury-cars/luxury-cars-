<template>
    <div>
      <h1>Signup</h1>
      
        <label>
          Email:
          <input type="email" v-model="email" required>
        </label>
        <label>
          Password:
          <input type="password" v-model="password" required>
        </label>
        <button type="submit" @click="register">Sign up</button>
        <button type="submit" @click="signInwithGoogle">Sign in with google</button>
      
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from "vue-router";
import router from "../router/Router";
 const email = ref("")
 const password = ref ("")
const register = ()=>{
createUserWithEmailAndPassword(getAuth(),email.value,password.value)
.then((data)=>{console.log('succesfully');
router.push('/cars')
})
.catch((error)=>console.log(error))

}

const signInwithGoogle = ()=>{
console.log('hello');
}
  </script>
  