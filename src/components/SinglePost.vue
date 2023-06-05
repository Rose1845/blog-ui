<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Api,getFileUrl } from "../api";
import {useRoute} from "vue-router";
import { PostType } from "../types";

const singlePost = ref<PostType[]>([]);

// single post
onMounted(()=>{
    const fetchSinglePost = async (params : any) => {
     
        try {
        const response = await Api.get(`/api/posts/${params.ObjectID}`);
        
        const data = await response.data;
        singlePost.value = data;
        console.log(singlePost.value,"single post");
        } catch (error) {
        console.log(error);
        }
    };
    return Promise.all([fetchSinglePost({params:useRoute().params})]);
})
</script>
<!-- <script lang="ts">
import { Api ,getFileUrl} from "../api";
import {  ref,onMounted } from "vue";
import { PostType } from "../types";
export default  {
  name: "SinglePost",
  props: {
    id: {
      type: Number as () => number,
      required: true,
    },
  },
  setup(props) {
    const getSinglePost = ref<PostType[]>([]);

    const fetchSinglePost = async () => {
      try {
        const response = await Api.get(`/api/posts/${props.id}`);
        const data = await response.data;
        getSinglePost.value = data;
        console.log(getSinglePost.value);
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      return Promise.all([fetchSinglePost()]);
    });
    const fileToUpload=ref<File|null>(null);
   const handleFileSelectChange=(e:Event)=>{
    const target = e.target as HTMLInputElement;
    const file =target.files?.[0];
    fileToUpload.value!=file;
  }
    return { getSinglePost };
  },
};
</script> -->
<template>
<div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
  <div v-for="post in singlePost" :key="post.id">
    <h1>{{ post.title }}</h1>
    <p>{{ post.desc }}</p>
    <img :src="getFileUrl(post.photo as string)" alt="">
  </div>
</div>
</template>
<style scoped>
</style>