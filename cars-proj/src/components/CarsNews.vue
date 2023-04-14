<template>

<div class="border-t-2 -mt-20 border-gray-300"></div>
    <div>
      <div class="  ">
        <p class="text-3xl   ml-56 mt-10 text-gray-800 font-serif">The Journal</p>
      </div>
      <div class="flex flex-wrap w-[800] mb-20   ml-72 mt-10 pl-10">
        <div
          v-for="(article, index) in savedarticles"
          :key="article.url"
          class="flex   mb-4  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-w-2xl dark:bg-neutral-700 max-h-30 md:flex-row gap-1 w-full md:w-1/2"
          :class="{ 'md:ml-0': index % 2 === 1 }"
        >
          <img
            class="h-10 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            :src="article.urlToImage"
            alt=""
          />
          <div class=" flex-col px-9 pt-10  m-12  -mt-2 pr-7 md:pl-0">
            <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              {{ article.title }}
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {{ article.description }}
            </p>
            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated {{ new Date(article.publishedAt).toLocaleTimeString() }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>




<script>
import axios from 'axios';

export default {
    data() {
        return {
            savedarticles: []
        }
    },
    mounted() {

        const apiKey = '3fc3d9f9daaf474ca2bf8de3d089030b';
        const url = 'https://newsapi.org/v2/top-headlines';
        const params = {
            q: 'cars',

            apiKey: apiKey,
        };

        axios.get(url, { params })
            .then((response) => {
                // Process the response data, which should be in JSON format
                this.savedarticles = response.data.articles;
                console.log(this.savedarticles);

            })
            .catch((error) => {
                console.log(error);
            });

    }
}



</script>