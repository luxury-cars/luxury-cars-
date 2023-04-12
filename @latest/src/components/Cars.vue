<template>
    <div>
      <h1>My Component</h1>
      <button @click="togglePosts">{{ showPosts ? 'Hide Posts' : 'Show Posts' }}</button>
      <ul v-if="showPosts">
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [],
        showPosts: false
      }
    },
    methods: {
      togglePosts() {
        this.showPosts = !this.showPosts;
        if (this.showPosts) {
          axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
              this.posts = response.data;
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    }
  }
  </script>
  