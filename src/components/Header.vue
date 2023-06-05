<script setup lang="ts">
//  navbar responsive in mobile 
import { ref } from "vue";
const navbarOpen = ref(false);
const toggleNavbar = () => {
  navbarOpen.value = !navbarOpen.value;
};
</script>
<template>
    <div className="w-4/5 justify-between items-center hidden md:flex">
        <div className="w-2/3 hidden md:flex justify-between text-black text-lg font-semibold">
          <router-link
            :to="{name:'home'}"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
            Home
          </router-link>
          <a
            href="#"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
            Health
        </a>
          <a
            href="#"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
           Technology
        </a>
          <a
            href="#"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
           Designs
          </a>
        </div>
        <div  className="w-2/3 md:hidden flex justify-between text-black text-lg font-semibold">
          <router-link
            :to="{name:'home'}"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
            Home
          </router-link>
          <a
            href="#"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
            Health
        </a>
          <a
            href="#"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
           Technology
        </a>
          <a
            href="#"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
           Designs
          </a>
        </div>
      
      <!-- toggle the nabva -->
      <div className="md:hidden flex items-center">
        <button
          className="outline-none mobile-menu-button"
          @click="toggleNavbar"
        >
          <svg
            className=" w-6 h-6 text-gray-500 hover:text-sky-600 "
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>


      </div>
    
        <router-link
           :to="{name:'new-post'}"
            smooth={true}
            style="border-radius: 8px;"
            className="cursor-pointer px-3 py-2 text-2xl text-white bg-sky-600 b-1 hover:scale-80"
          >
            Create Post
          </router-link>
          <router-link
           :to="{name:'login'}"
            smooth={true}
            style="border-radius: 5px;"
            className="cursor-pointer px-3 py-2 bg-sky-600 text-center text-white text-2xl  hover:scale-80"
          >
            Login
          </router-link>
      </div>


</template>
<style scoped></style>