<template>
  <div>
    <Navigation/>
    <NuxtPage />
    <h3 class=" text-red-400 justify-center items-center mx-auto flex py-1 ">Franco &copy; 2023</h3>
  </div>
</template>
<script setup lang="ts">
import Navigation from './components/Navigation.vue';
const {
  isModalVisible,
  toggle,
  toggleBubbleVisibility,
  popoutChatWindow,
} = useChatWoot()
</script>
