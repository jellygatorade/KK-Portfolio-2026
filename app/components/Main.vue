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
    <UButton @click="onClick_Btn1">Button 1</UButton>
    <UButton @click="onClick_Btn2">Button 2</UButton>
    <UButton to="/default">Default Page</UButton>
    <UButton to="/about">About Page</UButton>
  </div>
</template>
