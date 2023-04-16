<template>
  <div class="border-t-2 -mt-20 border-gray-300">
  </div>
  <div>
    <div>
      <p class="text-4xl ml-56 mt-10 text-gray-800 font-medium">The Journal</p>
    </div>
    <div class="flex flex-wrap  gap-4  w-[800] mb-20 mt-10 ml-60">
      <div v-for="(article, index) in savedarticles" :key="article.url" class="w-1/4 mb-8">
        <div class="flex flex-wrap h-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div class="h-64">
            <img class="h-full w-full object-cover" :src="article.urlToImage" alt="">
          </div>
          <div class="p-4 flex-1 flex flex-wrap  justify-between">
            <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">{{ article.title }}</h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">{{ article.description }}</p>
            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated {{ new Date(article.publishedAt).toLocaleTimeString() }}
            </p>
          </div>
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
    };
  },
  mounted() {
    const apiKey = '3fc3d9f9daaf474ca2bf8de3d089030b';
    const url = 'https://newsapi.org/v2/top-headlines';
    const params = {
      q: 'cars',
      apiKey: apiKey
    };

    axios
      .get(url, { params })
      .then(response => {
        this.savedarticles = response.data.articles;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
