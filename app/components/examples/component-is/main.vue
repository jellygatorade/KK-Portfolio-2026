<script setup lang="ts">
// Init ---------------------------------------------------------------

// Import dynamic components
// This is required in Nuxt to use <component :is=""> directive, due to Nuxt's auto import system

const Component1 = resolveComponent("ExamplesComponentIsStateOne");
const Component2 = resolveComponent("ExamplesComponentIsStateTwo");

const state = shallowRef(Component1);

// Event listeners ----------------------------------------------------

function onChangeState(param) {
  console.log(param);
  switch (param) {
    case "state-1":
      state.value = Component1;
      break;
    case "state-2":
      state.value = Component2;
      break;
    default:
      console.log("Parameter does not match a known state component.");
  }
}

</script>

<template>
  <Transition name="fade" mode="out-in">
      <!-- <KeepAlive> here if desired -->
      <component
          :is="state"
          @change-state="onChangeState"
      ></component>
      <!-- </KeepAlive> -->
  </Transition>
</template>