<script setup lang="ts">

function onClick_Btn1 (event) {
    console.log(`Clicked ${event.currentTarget.innerText}`);
}

function onClick_Btn2 (event) {
    console.log(`Clicked ${event.currentTarget.innerText}`);
}

</script>


<template>
  <div class="flex flex-row gap-2 py-2">
    <button @click="onClick_Btn1">Button 1</button>
    <button @click="onClick_Btn2">Button 2</button>
    <NuxtLink to="/about">About Page</NuxtLink>
    <NuxtLink to="/examples">Examples Page</NuxtLink>
  </div>
  <div>
    <p>To do:</p>
    <p>markdown-it</p>
    <p>iconify and see if I can do away with Nuxt UI</p>
    <Icon name="uil:github" style="color: black" />
    <button @click="onClick_Btn2" class="bg-blue-300">
      <Icon name="i-material-symbols:refresh" style="color: black" />
      Button 2
    </button>
  </div>
</template>
