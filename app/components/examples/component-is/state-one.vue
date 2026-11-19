<script setup lang="ts">
// Init ---------------------------------------------------------------

const emit = defineEmits(["change-state"]);

// Event listeners ----------------------------------------------------

function onClick_Btn() {
  emit("change-state", "state-2");
}

</script>

<template>
  <div>
    <p>State 1</p>
    <button @click="onClick_Btn">Change state</button>
  </div>
</template>