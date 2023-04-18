<template>

<div class="form-container">

     <div class="flex flex-col items-center justify-center h-screen">
  <div class="all" style="margin-top: 20vh">
    <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="make">
          Make
        </label>
        <input v-model="make" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="make" type="text" placeholder="Make">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="model">
          Model
        </label>
        <input v-model="model" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="model" type="text" placeholder="Model">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="year">
          Year
        </label>
        <input v-model="year" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="year" type="number" placeholder="Year">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="description">
          Description
        </label>
        <input v-model="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Description">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email-seller">
          Email seller
        </label>
        <input v-model="emailSeller" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email-seller" type="email" placeholder="Email seller">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="image_url">
          Image URL
        </label>
        <input v-model="image_url" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image_url" type="text" placeholder="Image URL">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">Mileage:</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="mileage" type="number">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">Fuel type:</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="FuelType" type="text">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">Engine:</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="Engine" type="number">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">Gearbox:</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="Gearbox" type="text">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">Drive:</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="Drive" type="text">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">Price:</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="price" type="text">
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add Car</button>
    </form>
  </div>
</div>
</div>
  </template>

<style>
.form-container {
  margin-bottom: 50px;
}
</style>
  
  
  <script>
  import axios from 'axios';
  import { getAuth, onAuthStateChanged } from '@firebase/auth';

  
  export default {
    data() {
      return {
        make: '',
        model: '',
        year: '',
        Drive: '',
        price: '',
        mileage: '',
        description: '',
        emailSeller :'',
        FuelType:'',
        Engine : '',
        Gearbox :'',
        image_url : '',
       
      };
    },

    methods: {
      submitForm() {
        const carDetails = {
          make: this.make,
          model: this.model,
          year: this.year,
          Drive: this.Drive,
          price: this.price,
          mileage: this.mileage,
          Engine: this.Engine,
          Gearbox : this.Gearbox,
          FuelType : this.FuelType,
          emailSeller:this.emailSeller,
        description: this.description,
        image_url: this.image_url
        };
        axios.post('http://localhost:5002/api/product/add', carDetails)
          .then(response => {
            console.log(response.data)
            const data = response.data;
            this.$router.push('/')
            this.make= '';
        this.model= '';
       this.year= '';
        this.Drive= '';
        this.price= '';
        this.mileage= '';
        this.description= '';
        this.emailSeller ='';
        this.FuelType='';
       this.Engine = '';
        this.Gearbox ='';
        this.image_url =''
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
  </script>