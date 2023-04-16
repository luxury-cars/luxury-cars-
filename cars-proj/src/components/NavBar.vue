<template>
  <div>

    <nav class="bg-black -800">
      <div class="mx-auto max-w-7xl sm:px-5 lg:px-0">
        <div class="relative flex h-16 ">
          <div>


          </div>
          <div class="flex flex-auto items-center justify-center sm:justify-start">
            <div class="flex flex-shrink-0 items-center ">
              <p class="text-white text-3xl font-bold  -ml-28 mr-96">Luxury<span class="text-red-700">Car</span></p>
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <RouterLink to="/AllCars" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page">
                  OUR CARS
                </RouterLink>

                <RouterLink to="/about"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  ABOUT US
                </RouterLink>

                <RouterLink to="/contact"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  CONTACT
                </RouterLink>
                
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center  ml-5 pr-2 sm:static  ">
            <button type="button"
              class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>

            <div class="relative ml-20">
  <div class="flex items-center"> 
    <button type="button"
      class="flex  text-white text-l mr-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      id="user-menu-button" aria-expanded="false" aria-haspopup="true">
      <p
        class="bg-red-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition-colors duration-300">
        SELL</p>
    </button>
    <button type="button"
      class="flex  text-white text-l mr-4 ml-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      id="user-menu-button" aria-expanded="false" aria-haspopup="true">
      <p
        class="bg-red-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition-colors duration-300">
        Login </p>
    </button>
  </div>
</div>
          </div>
        </div>
      </div>


      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">

          <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page">Dashboard</a>

          <a href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>

          <a href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>

        <a href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
      </div>
    </div>
    
   
  </nav>
  
</div>

</template>

<script>
import { RouterLink } from 'vue-router'

</script>