<template>
    <div>
      <input v-model="email" placeholder="Enter your email"> 
      <button @click="handleClick">Mycars</button>
      <ul>
      </ul>
      <h1>Hello </h1>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      handleClick() {
        const data = {
          emailSeller: this.email,
        };
  
        axios.post('http://localhost:5002/api/product/getCars', data)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
  </script>
  