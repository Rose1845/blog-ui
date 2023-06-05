<script setup lang="ts">
import { ref } from "vue";
import { Api } from "@/api";
import { LoginUserType } from "@/types";
const existingUser = ref<LoginUserType>({
  username: "",
  password: "",
});
const loginUser = async (e: Event) => {
  const response = await Api.post("/api/auth/login", {
    username: existingUser.value.username,
    password: existingUser.value.password,
  });
  const data=await response.data;
  existingUser.value=data;
  console.log(existingUser.value);

};
const form = ref<HTMLFormElement | null>(null);
</script>

<template>
  
     
      <!-- component -->
<div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style="background-image:url('https://images.unsplash.com/photo-1684783028297-440439f2b010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60')">
  <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div class="text-white">
      <div class="mb-8 flex flex-col items-center">
        <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width="150" alt="" srcset="" />
        <h1 class="text-4xl font-bold mt-4">Login</h1>
        <span class="text-gray-300">Enter Login Details</span>
      </div>
      <form @submit.prevent="loginUser">
        <div class="mb-4 text-lg">
          <input v-model="existingUser.username" class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com" />
        </div>
        <div class="mb-4 text-lg">
          <input v-model="existingUser.password" class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" />
        </div>
        <div class="mt-8 flex justify-center text-lg text-black">
          <button type="submit" class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
        </div>

      </form>
      <div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="/register"
								>
									Don't have an account? Login!
								</a>
							</div>
    </div>
  </div>
</div>
</template>
