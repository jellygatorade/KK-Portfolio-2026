<script setup lang="ts">
import {
  textLinkClasses,
} from '~/utils/ui-styles'

// Init - Props -------------------------------------------------------

interface Props {
  to: string
  external?: boolean
}

withDefaults(defineProps<Props>(), {
  external: false,
})
</script>

<template>
  <NuxtLink
    :to="to"
    :external="external"
    :class="textLinkClasses"
  >
    <slot />
  </NuxtLink>
</template>