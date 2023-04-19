<template>
    <div>
      <input v-model="email" placeholder="Enter your email"> 
      <button @click="handleClick">Mycars</button>
      <div>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
</div>
      </div>
    </div>
    <div class="h-screen flex items-center justify-center">
  
  <card v-if="email" class=" rounded-lg flex flex-col p-5 w-1/3 gap-5">
    
    <header  class="font-semibold text-xl">
      This all your Cars postet
    </header>
    <div v-for=" cars in datasaved">
    <content class="grid grid-cols-6">
      
      <div>
        <img :src="cars.image_url" class="rounded-full"/>
      </div>
      
      <div class="col-span-5 flex flex-col gap-1 pl-3">
        
        <name class="font-semibold">
          {{ cars.make }}
        </name>
        
        <description class="text-gray-500 text-sm">
          {{cars.model}},{{ cars.year }}
        </description>
        
        <div class="mt-1">
          <button @click="deleccar(cars.id)" class="hover:border-gray-900 hover:bg-gray-300 delay-100 duration-100 border border-gray-500 rounded-full text-gray-700 inline-flex px-3 py-1 text-md">
        
            Delete
          </button>
          <button @click="showForm=!showForm " class="hover:border-gray-900 hover:bg-gray-300 delay-100 duration-100 border border-gray-500 rounded-full text-gray-700 inline-flex px-3 py-1 text-md">
        
        update
      </button>
        </div>
        
      </div>
      <div>
    
    <form @submit.prevent="submitForm"   v-if="showForm" class="bg-white shadow-md rounded px-8 psoti pb-8 mb-4 absolute top-24 left-[900px] " style="width: 400px; ">
      <div class="mb-4" >
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
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  ml-40 rounded focus:outline-none focus:shadow-outline" type="submit">update Car</button>
    </form>
  </div>
        
    </content>
  </div>
   
    
    

 
  </card>
</div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        email: '',
        datasaved:[],
        showForm: false
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
            this.datasaved = response.data
            console.log(this.datasaved,"djsdj")
          })
          .catch(error => {
            console.log(error);
          });
      }, deleccar(id){
        axios.delete(`http://localhost:5002/api/rent/delete/${id}`)
      .then(response => {
       
        console.log(response.data);
       
        this.datasaved = this.datasaved.filter(car => car.id !== id);
      })
      .catch(error => {
        //
        console.log(error);
      });

      },update(){
        const carupdate = {
          make: this.make,
          model: this.model,
          year: this.year,
          Drive: this.Drive,
          price: this.price,
          mileage: this.mileage,
          Engine: this.Engine,
          Gearbox : this.Gearbox,
          FuelType : this.FuelType,
        description: this.description,
        image_url: this.image_url
        };
         axios.update("http://localhost:5002/api/rent/update/:id",carupdate ).then(()=>{}).catch(()=>{})
      }
    }
  }
  </script>
  