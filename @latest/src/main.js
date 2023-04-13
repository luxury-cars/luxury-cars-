import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Router';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD0RlBtiHt9P426sda7mkM-MCO8Pc9GVgQ",
  authDomain: "cars-clone.firebaseapp.com",
  projectId: "cars-clone",
  storageBucket: "cars-clone.appspot.com",
  messagingSenderId: "72504149143",
  appId: "1:72504149143:web:cc87664272a82a5caad5d2"
};

initializeApp(firebaseConfig);
const app = createApp(App);
app.use(router);
app.mount('#app');
