<script setup lang="ts">
import { ref } from "vue";
import { Api } from "@/api";
import { PostType } from "@/types";
// store

const newPost = ref<PostType>({
  id: 0,
  title: "",
  username: "",
  desc: "",
  photo: "",
  categories: [],
});
const createPost = async (e: Event) => {
  const target = e.target as HTMLFormElement;
  const file = target.photo.files[0];
  console.log(file);

  try {
    const response = await Api.post(
      "/api/posts",
      {
        title: newPost.value.title,
        username: newPost.value.username,
        desc: newPost.value.desc,
        photo: file,
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
const fileToUpload = ref<File | null>(null);
const handleFileSelectChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  fileToUpload.value != file;
};
const form = ref<HTMLFormElement | null>(null);
</script>
<template>
  <main>
    <form @submit.prevent="createPost" ref="form">
      <input type="text" v-model="newPost.title" placeholder="title" />
      <input type="text" v-model="newPost.username" placeholder="username" />
      <input type="text" v-model="newPost.desc" placeholder="desc" />
      <input
        type="file"
        @change="handleFileSelectChange"
        name="photo"
        placeholder="photo"
      />
      <input
        type="text"
        v-model="newPost.categories"
        placeholder="categories"
      />
      <button type="submit">Create Post</button>
    </form>
  </main>
</template>
