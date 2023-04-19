<template>


  <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="text-center text-3xl leading-9 font-extrabold text-gray-900">Sign in to your account</h2>
      <p class="mt-2 text-center text-md leading-5 text-gray-600 max-w">
        Or
        <router-link to="/signup" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">create a new account</router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form>
          <div>
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
              Email address
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input id="email" type="email" required v-model="email" class="form-input block w-full sm:text-sm sm:leading-5">
            </div>
          </div>

          <div class="mt-6">
            <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
              Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input id="password" type="password" required v-model="password" class="form-input block w-full sm:text-sm sm:leading-5">
            </div>
          </div>

          <div v-if="errMsg" class="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">{{ errMsg }}</span>
          </div>

         

          <div class="mt-6">
            <button type="submit" class="w-full btn btn-indigo transition duration-150 ease-in-out" @click.prevent="logIn">
              Sign in
            </button>
         
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<script setup>

import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import router from "../routes/routes";
import swal from 'sweetalert';
import { onMounted } from 'vue';
import { getFirestore, collection, getDoc,doc,getDocs,  } from "firebase/firestore";
const email = ref("")
const password = ref ("")
const errMsg = ref("") 
const userItems = ref(null)


const logIn = () => {
  const auth = getAuth();
  const db = getFirestore();
  const userCollection = collection(db, 'users');
  
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(async (userCredential) => {
 
      const user = await getItemByUserId(userCredential.user.uid);
      
      console.log(user, userCredential);
     
      if (user.userType === "buyer") {
        
        router.push('/AllCars')
      } else {
       
        router.push('/selldash')
      }
    })
    .catch((error) => {
      errMsg.value = error.message;
      
    });
}


const signInwithGoogle = ()=>{
console.log('hello');
}


const getItemByUserId = async (userId) => {
  const db = getFirestore();
  const itemsCollection = collection(db, "users");
  const querySnapshot = await getDocs(itemsCollection);
  const items = [];
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    
    items.push(item);
  });
  const userItem = items.find((item) => item.id === userId);
  console.log(items,"items");
  
  
  
  return userItem
};



</script>



const db = getFirestore();
const docRef = doc(db, "users", "USER_ID");
const docSnapshot = await getDoc(docRef);
const docId = docSnapshot.id;



 signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const userDocRef = doc(userCollection, userCredential.user.uid);
    getDoc(userDocRef)
      .then((doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          if (userData.userType === 'seller') {
            // User is a seller
            const businessName = userData.businessName;
            // ... do something with businessName ...
          } else {
            // User is a buyer
            // ... handle buyer login ...
          }
        } else {
          console.log("No such user document");
        }
      })
      .catch((error) => {
        console.log("Error getting user document:", error);
      });
  })
  .catch((error) => {
    console.log("Error signing in:", error);
  });
  
  const logIn = ()=>{
    signInWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((data)=>{
    swal({
      title: "Welcome!",
      text: "You have successfully signed in.",
      icon: "success",
      button: "OK",
    });
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