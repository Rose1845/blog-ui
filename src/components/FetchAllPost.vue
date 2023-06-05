<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Api,getFileUrl } from "../api";
import { PostType } from "../types";
import SinglePost from "./SinglePost.vue";
const allPosts = ref<PostType[]>([]);

  onMounted(async () => {
    // create post
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


  const fileToUpload=ref<File|null>(null);
  const handleFileSelectChange=(e:Event)=>{
    const target = e.target as HTMLInputElement;
    const file =target.files?.[0];
    fileToUpload.value!=file;
  }

const form = ref<HTMLFormElement | null>(null);
</script>
<template>
  <main class="max-w-7xl mx-auto">
  
    
    <!-- form forpost -->
    <body>
		<!-- Container -->
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div>
      <h2>Get All Posts</h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div v-for="post in allPosts" :key="post.id">
          <h1>{{ post.title }}</h1>
          <p>{{ post.desc }}</p>
          <img :src="getFileUrl(post.photo as string)" alt="">
        </div>
      <SinglePost />
      </div>
    </div>
				</div>
			</div>
		</div>
	</body>
  </main>
</template>
<style scoped></style>
