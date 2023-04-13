<template>
  <div>
    <h1>Sig in!</h1>
    
      <label>
        Email:
        <input type="email" v-model="email" required>
      </label>
      <label>
        Password:
        <input type="password" v-model="password" required>
      </label>
      <p v-if="errMsg">{{ errMsg }}</p>
      <button type="submit" @click="logIn">Sign in</button>
     
    
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import router from "../router/Router";
const email = ref("")
const password = ref ("")
const errMsg = ref() 
const logIn = ()=>{
signInWithEmailAndPassword(getAuth(),email.value,password.value)
.then((data)=>{console.log('succesfully sgn in');
router.push('/cars')
})
.catch((error)=>{console.log(error)
switch(error.code){
  case "auth/invalid-email":
  errMsg.value="Invalid Email"
  break;
  case "auth/user-not-found":
  errMsg.value="No such an account"
  break;
  case "auth/wrong-password":
  errMsg.value="Invalid Password"
  break;
  default : 
  errMsg.value="Email or password invalid"
  break;
}
})

}

const signInwithGoogle = ()=>{
console.log('hello');
}
</script>
