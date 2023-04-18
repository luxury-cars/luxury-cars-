<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Create an Account</h2>
      <div class="mb-4">
        <label for="username" class="block text-gray-700 font-medium mb-2">Username:</label>
        <input type="text" id="username" v-model="username" class="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-medium mb-2">Email:</label>
        <input type="email" id="email" v-model="email" class="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-medium mb-2">Password:</label>
        <input type="password" id="password" v-model="password" class="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>
      <div class="mb-4">
        <label for="userType" class="block text-gray-700 font-medium mb-2">User Type:</label>
        <select id="userType" v-model="userType" class="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
      </div>
      <div v-if="userType === 'seller'" class="mb-4">
        <label for="businessName" class="block text-gray-700 font-medium mb-2">Business Name:</label>
        <input type="text" id="businessName" v-model="businessName" class="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>
      <button @click="register" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        Sign Up
      </button>
    </div>
    <div v-if="errMsg" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 w-full max-w-md" role="alert">
      <span class="block sm:inline">{{ errMsg }}</span>
    </div>
  </div>
</template>

  
  <script setup>
  import { ref } from "vue";
  import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
  import { getFirestore, collection, addDoc } from "firebase/firestore";
  import { useRouter } from "vue-router";
  
import router from "../routes/routes";
// const db = getFirestore(app);
 const email = ref("")
 const password = ref ("")
 const username =ref("")
 const userType = ref("buyer")
 const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) => {
    const user = data.user;
console.log(user)
let userData = {
  id: user.uid,
  email: email.value,
  password: password.value,
  username: username.value,
  userType: userType.value,
};
if (userType.value === "seller") {
  userData.businessName = businessName.value;
}
    // Add user data to Firestore collection
    const db = getFirestore();
    const userCollection = collection(db, "users");
    addDoc(userCollection,userData)
    .then((docRef) => {
      console.log("User data added to Firestore:", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding user data to Firestore:", error);
    });

    // Continue with user authentication and routing
    console.log('successfully registered', userType.value);
    console.log('user uid:', user.uid);
    user.getIdToken().then((token) => {
      console.log('user token:', token,"user type =>",userType.value);
    });
    if (userType.value === 'seller') {
      router.push('/')
    } else {
      router.push('/AllCars')
    }
  })
  .catch((error) => console.log(error))
}


const signInwithGoogle = ()=>{
console.log('hello');
const provider = new GoogleAuthProvider();
signInWithPopup(getAuth(),provider)
.then((result)=>{console.log(result.user)
router.push('/cars')
})
.catch((error)=>console.log(error))
}

  </script>
  