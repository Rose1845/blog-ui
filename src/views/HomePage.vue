<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Api,getFileUrl } from "../api";
import { PostType } from "../types";
const allPosts = ref<PostType[]>([]);
const singlePost = ref<PostType[]>([]);
const newPost = ref<PostType>({
  id: 0,
  title: "",
  username: "",
  desc: "",
  photo: "",
  categories: [],
});
const createPost = async (e:Event) => {
    const target = e.target as HTMLFormElement;
    const file =target.photo.files[0];
    console.log(file);
    
    
    try {
      const response = await Api.post("/api/posts", {
        title: newPost.value.title,
        username: newPost.value.username,
        desc: newPost.value.desc,
        photo:file,
        categories: newPost.value.categories,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
      );
      const data = await response.data;
      newPost.value = data;
      console.log(newPost.value);
    } catch (error) {
      console.log(error);
    }
  };
  const fileToUpload=ref<File|null>(null);
  const handleFileSelectChange=(e:Event)=>{
    const target = e.target as HTMLInputElement;
    const file =target.files?.[0];
    fileToUpload.value!=file;
  }
onMounted(async () => {
  // create post

 
  // get all posts
  const fetchPosts = async () => {
    try {
      const response = await Api.get("/api/posts");
      const data = await response.data;
      allPosts.value = data;
      console.log(allPosts.value);
    } catch (error) {
      console.log(error);
    }
  };
  return Promise.all([fetchPosts()]);
});
const form = ref<HTMLFormElement | null>(null);
</script>
<template>
  <main class="max-w-7xl mx-auto">
  
    <div>
      <h2>Get All Posts</h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div v-for="post in allPosts" :key="post.id">
          <h1>{{ post.title }}</h1>
          <p>{{ post.desc }}</p>
          <img :src="getFileUrl(post.photo as string)" alt="">
        </div>
      </div>
    </div>
    <!-- form forpost -->
    <div>
        <h2>Create Post</h2>
        <form @submit.prevent="createPost" ref="form">
            <input type="text" v-model="newPost.title" placeholder="title" />
            <input type="text" v-model="newPost.username" placeholder="username" />
            <input type="text" v-model="newPost.desc" placeholder="desc" />
            <input type="file" @change="handleFileSelectChange" name="photo" placeholder="photo" />
            <input type="text" v-model="newPost.categories" placeholder="categories" />
            <button type="submit">Create Post</button>
        </form>
     
    </div>
  </main>
</template>
<style scoped></style>
