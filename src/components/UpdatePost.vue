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
const updatePost = async () => {
      try {
        const response = await Api.put("/api/post", {
          title: newPost.value.title,
          username: newPost.value.username,
          desc: newPost.value.desc,
          photo: newPost.value.photo,
          categories: newPost.value.categories,
        });
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
    <body>
		<!-- Container -->
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style="background-image: url('https://images.unsplash.com/photo-1518975775530-f4dcbbee9672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsb2clMjBwaG90b3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')"
					></div>
					<!-- Col -->
					<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Create A Post</h3>
						<form @submit.prevent="updatePost" ref="form" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										Title
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="title"
                    v-model="newPost.title"
										type="text"
										placeholder="title"
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Username
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="username"
                    v-model="newPost.username"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="photo">
									Photo
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="photo"
									type="file"
                  @change="handleFileSelectChange"
									placeholder="photo"
								/>
							</div>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="categories">
										Categories
									</label>
									<input
									v-model="newPost.categories"
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="CATEGORIES"
										type="CATEGORIES"
										placeholder="Categories"
									/>	
								</div>
							
							</div>
              <div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="categories">
										Description
									</label>
									<textarea
                  cols="35" rows="10"
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="desc"
                    v-model="newPost.desc"
										type="desc"
										placeholder="describe your post"
									>	</textarea>
                  
								</div>
							
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Update Your Post
								</button>
							</div>
							
							
						</form>
					</div>
				</div>
			</div>
		</div>
	</body>
  </main>
</template>
<style scoped></style>
