<script setup lang="ts">
const route = useRoute()

const { data: posts } = await useFetch('/api/posts')

console.log(posts);

const this_post = posts.value.find(
  p => p.slug === route.params.slug
)

if (!this_post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  })
}

const html = this_post.html
</script>

<template>
  <div class="p-4">
    <div class="pb-4">
        <article
            class="prose mx-auto"
            v-html="html"
        />
    </div>
    <div class="">
        <KkButtonLink to="/blog" icon="i-lucide-arrow-left">Return to Blog ToC</KkButtonLink>
    </div>
  </div>
</template>