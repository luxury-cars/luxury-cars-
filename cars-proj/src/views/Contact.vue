<template>
    <h1>Contact vue</h1>
</template>


<!-- <script>

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

router.beforeEach((to, from, next) => {
  const requiresSeller = to.matched.some(record => record.meta.requiresSeller)
  
  const currentUser = firebase.auth().currentUser

  if (requiresSeller && currentUser) {
    firebase.firestore().collection('users').doc(currentUser.uid)
      .get()
      .then(doc => {
        const userType = doc.data().userType
        if (userType === 'seller') {
          next()
        } else {
          next("/login")
        }
      })
  } 
      

})




</script> -->