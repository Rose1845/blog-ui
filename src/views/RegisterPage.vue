<script setup lang="ts">
import { ref } from "vue";
import { Api } from "@/api";
import { UserType } from "@/types";
const newUser = ref<UserType>({
  id: 0,
  username: "",
  email: "",
  password: "",
  //   avatar: "",
  profilePic: "",
});
const registerUser = async (e: Event) => {
  const target = e.target as HTMLFormElement;
  const file = target.profilePic.files[0];
  console.log(file);
  try {
    const response = await Api.post(
      "/api/auth/register",
      {
        username: newUser.value.username,
        email: newUser.value.email,
        password: newUser.value.password,
        profilePic: file,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const data = await response.data;
    newUser.value = data;
    console.log(newUser.value);
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
  <div class="flex justify-center items-center h-screen">
    <div class="max-w-md w-full mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center">Register</h1>
      <form
        @submit.prevent="registerUser"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        ref="form"
      >
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="profilePic">
            Profile Picture
          </label>
          <input
            @change="handleFileSelectChange"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photo"
            type="file"
            placeholder="photo"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input
            v-model="newUser.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="username">
            Username
          </label>
          <input
            v-model="newUser.username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input
            v-model="newUser.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
