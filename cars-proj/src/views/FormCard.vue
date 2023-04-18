
<template>
   <body class="overflow-hidden dark:bg-gray-900">
        <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
   
                <img class="mt-24 -ml-20 w-[800px] rounded-lg "  alt="image of a girl posing" :src="this.$route.query.image" />
            </div> 
       
            <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div class="border-b border-gray-200 pb-6">
                    <p class="text-sm leading-none text-gray-600 dark:text-gray-300 ">{{this.$route.query.carName}}</p>
                    <h1 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{{this.$route.query.model}}</h1>
                </div>
                <div class="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p class="text-base leading-4 text-gray-800 dark:text-gray-300">Colours</p>
                    <div class="flex items-center justify-center">
                        <p class="text-sm leading-none text-gray-600 dark:text-gray-300">Smoke Blue with red accents</p>
                
       
                        
                    </div>
                </div>
            
                <div>
                    <p class="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">{{this.$route.query.description}}</p>
                    <p class="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Mileage:{{this.$route.query.Mileage}}</p>
                    <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Engine: {{this.$route.query.Engine}}</p>
                    <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Gearbox:  {{this.$route.query.Gearbox}}</p>
                    <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">drive : {{this.$route.query.drive }}</p>
             
                </div>
             
                <div>
                    <div class="border-b py-4 border-gray-200">
                        <div @click="showList1" data-menu class="flex justify-between items-center cursor-pointer">
                            <p  class="text-base leading-4 text-gray-800 dark:text-gray-300">Contact Seller</p>
                            <button  class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
                                <img v-if="showData1==false" class="transform dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg" alt="dropdown">
                                <img v-if="showData1==true" class="transform dark:hidden rotate-180" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg" alt="dropdown">
                            </button>
                        </div>
                        <div v-if="showData1" class=" pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300" id="sect">  connect with seller to know more email :{{this.$route.query.emailSeller}}</div>
                    </div>
                </div>
            </div>
        </div>
    </body>

  
  </template>
  
  <script>
  export default {
    data(){
     return {showData1:false}

    },
    props: {
      carName: {
        type: String,
        required: true
      }
    },
    created() {
  
  

      console.log( this.$route.query)
    } ,methods:{
    
        showList1(){
            if(this.showData1==false){
                this.showData1=true
            } else{
                this.showData1=false
            }
        },
      }
  }
  </script>
  