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
    <KkButton @click="onClick_Btn1">Button 1</KkButton>
    <KkButton @click="onClick_Btn2">Button 2</KkButton>
    <KkTextLink to="/about">About Page</KkTextLink>
    <KkTextLink to="/examples">Examples Page</KkTextLink>
  </div>
  <KkButtonExamples />
</template>
