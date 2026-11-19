<script setup lang="ts">
// Init ---------------------------------------------------------------

const emit = defineEmits(["change-state"]);

// Event listeners ----------------------------------------------------

function onClick_Btn() {
  emit("change-state", "state-1");
}

</script>

<template>
  <div>
    <p>State 2</p>
    <button @click="onClick_Btn">Change state</button>
  </div>
</template>