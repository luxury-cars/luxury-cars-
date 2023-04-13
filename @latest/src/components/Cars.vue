<template>
    <div>
      <h1>My Cars</h1>
      <button @click="togglePosts">{{ showPosts ? 'Hide Posts' : 'Show Posts' }}</button>
      <table v-if="showPosts">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
          </tr>
        </tbody>
      </table>
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
  