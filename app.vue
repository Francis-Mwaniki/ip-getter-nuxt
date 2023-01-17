<template>
  <div>
    <Navigation/>
    <NuxtPage />
  
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
