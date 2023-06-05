<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Api,getFileUrl } from "../api";
import { PostType } from "../types";
import FetchAllPost from "@/components/FetchAllPost.vue";
const allPosts = ref<PostType[]>([]);
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
  
    
    <!-- form forpost -->
    <div>
		<!-- Container -->
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
			<FetchAllPost/>
			</div>
		</div>
	</div>
  </main>
</template>
<style scoped></style>
