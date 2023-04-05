<script setup lang="ts"></script>
<template>
    <nav>
        <ul class="flex flex-row space-x-2">
            <li><router-link :to="{name:'home'}">Home</router-link></li>
            <li><router-link :to="{name:'new-post'}">New Post</router-link></li>
        </ul>
    </nav>

</template>
<style scoped></style>