import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import HomeAll from '../components/HomeAll.vue'
import AllCars from '../views/AllCars.vue'
import FormCard from '../views/FormCard.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Crud from '../components/Crud.vue'
import Sellerdash from '../components/Sellerdash.vue'
import { getAuth,onAuthStateChanged} from "firebase/auth";
import swal from 'sweetalert';


const routes = [
  { path: '/AllCars', component: AllCars },
  { path: '/', component: HomeAll },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/onecard', component: FormCard },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup},
  // { path: '/Sell', component: Crud},
  { path: '/onecard', name:"FormCard" ,component: FormCard ,props: true },
  { path: '/selldash', component: Sellerdash,
  meta :{
    requiresSeller: true,} },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
const getCurrentUser=()=>{
  return new Promise((resolve,reject)=>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user)=>{
        removeListener();
        resolve(user)
      },
      reject
    )
  })
  
  }
  
  router.beforeEach(async (to,from,next)=>{
    if(to.matched.some((record)=> record.meta.requiresSeller)){
      if(await getCurrentUser()){
        next();
      }else{
        swal({
          title: "Access Denied",
          text: "You should be logged in!",
          icon: "error",
          button: "OK",
        });
       
        next("/login")
      }
    }
    else{
      next()
    }
  })

export default router