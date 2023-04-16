

<template>
   <div class="text-center">
    <h1 class="text-3xl font-bold mt-5 mb-3">Luxry Cars For Sale</h1>
    <p class=" ml-[490px] mb-10 m max-w-xl">BROWSE HUNDREDS OF VERIFIED PRIVATE SELLER LISTINGS FOR LUXURY CARS, EXOTIC CARS, SUPERCARS, AND CLASSIC CARS. WHETHER YOU ARE BUYING OR SELLING, OUR CAR TRADING TEAM IS HERE TO HELP.</p>
    <form class=" -ml-12 flex justify-center">
    <div class="relative">
        <label for="default-search" class="sr-only">Search</label>
        <div class="absolute inset-y-0 left-0  flex items-center  pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-72 p-3 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search cars..." required>
        <button type="submit" class="absolute -right-20 bottom-0 mb-1 mr-1 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

<div>
  <div class="bg-white">
  <div class="mx-auto max-w-full px-24 -mt-10 sm:px-48 sm:py-24 lg:px-10 ">
    <h2 class="sr-only">Products</h2>

    <div  class="grid grid-cols-1 sm:grid-cols-2 h-[930px] lg:grid-cols-3 xl:grid-cols-4 gap-1 xl:gap-7">
  <template  v-for="car in dataCars">
    <div  class="group relative overflow-hidden rounded-lg bg-gray-200 shadow-md hover:shadow-lg">
      <div class="absolute bottom-[210px]  left-[100px] flex w-full justify-center pb-4">
   
          <router-link  class="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full" to="/onecard" tag="button">Contact <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="w-5 h-5 inline-block mr-2">
            <g fill="#FFFFFF">
              <path d="M55.5 18.8L53.6 17l-17.5 17.5c-2.2 2.2-5.9 2.2-8.1 0L10.3 17l-1.9 1.9L21.5 32l-13.1 13.1 1.9 1.9L36 34.5c2.2-2.2 5.9-2.2 8.1 0l13.2 13.2 1.9-1.9L42.3 32l13.2-13.2z"/>
              <path d="M51.8 50.4H12.3c-2.3 0-4.2-1.9-4.2-4.2V18c0-2.3 1.9-4.2 4.2-4.2h39.5c2.3 0 4.2 1.9 4.2 4.2v28.2c0 2.3-1.9 4.2-4.2 4.2zM12.2 16.5c-.8 0-1.4.6-1.4 1.4v28.2c0 .8.6 1.4 1.4 1.4h39.5c.8 0 1.4-.6 1.4-1.4V17.9c0-.8-.6-1.4-1.4-1.4H12.2z"/>
            </g>
          </svg></router-link>
       
       
      
      </div>

          
          <div class="aspect-w-16 aspect-h-9 w-full">
            <img :src="car.image_url" :alt="karhba" class="h-full w-full object-cover object-center ">
          </div>
          <div class="px-4 py-4 absolute bottom-0 w-full bg-gray-900 bg-opacity-50">
            <h3 class="mt-2 text-l font-medium text-white ">{{car.make}}</h3>
            <p class="mt-1 text-lg font-medium text-white group-hover:text-gray-300">{{car.price}}$</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</div>


</div>

    </div>


   
    
</template>

<script>
import axios from 'axios';

export default {
 
  data(){
    return{
      dataCars :[]
    };

  },
  mounted(){
    axios.get("http://localhost:5002/api/product/").then((res)=>{
      this.dataCars = res.data
      console.log(this.dataCars);
    }).catch((err)=>{
      console.log(err);
    })

  },
  methods: {
    navigateToAbout() {
      router.push({ name: "about" });
    }

  }
}


</script>



