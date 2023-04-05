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

};
const form = ref<HTMLFormElement | null>(null);
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="max-w-md w-full mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center">Register</h1>
      <form
        @submit.prevent="loginUser"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        ref="form"
      >
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="username">
            Username
          </label>
          <input
            v-model="existingUser.username"
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
            v-model="existingUser.password"
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
            login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
