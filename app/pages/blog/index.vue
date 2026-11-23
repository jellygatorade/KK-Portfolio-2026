<script setup lang="ts">
const { data: posts } = await useFetch('/api/posts')
</script>

<template>
  <div class="p-4">
    <div class="pb-4">
      <p class="pb-2">Blog</p>
      <KkButtonLink to="/" icon="i-lucide-house">Home</KkButtonLink>
    </div>
    <div class="flex flex-col">
      <KkTextLink 
        v-for="post in posts"
        :key="post.slug"
        :to="'/blog/' + post.slug"
      >{{post.slug}}</KkTextLink>
    </div>
  </div>
</template>