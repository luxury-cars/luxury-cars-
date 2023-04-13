import { createRouter, createWebHistory } from 'vue-router';
import Cars from '../components/Cars.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Home from '../views/Home.vue'
import { getAuth,onAuthStateChanged} from "firebase/auth";
import swal from 'sweetalert';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component:Home },
    { path: '/Cars', component:Cars ,
    meta :{
      requiresAuth: true,
    }
  },
    { path: '/Login', component: Login },
    { path: '/Signup', component: Signup },
  ]
});

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
  if(to.matched.some((record)=> record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next();
    }else{
      swal({
        title: "Access Denied",
        text: "You don't have permission to access this route.",
        icon: "error",
        button: "OK",
      });
     
      next("/")
    }
  }
  else{
    next()
  }
})

export default router;
