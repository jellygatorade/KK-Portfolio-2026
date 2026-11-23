<script setup lang="ts">
import {
  buttonBaseClasses,
  buttonVariantClasses,
} from '~/utils/ui-styles'

// Init - Props -------------------------------------------------------

interface Props {
  to: string
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: string
  iconPosition?: 'left' | 'right'
  external?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  iconPosition: 'left',
  external: false,
})
</script>

<template>
  <NuxtLink
    :to="to"
    :external="external"
    :class="[
      buttonBaseClasses,
      buttonVariantClasses[variant],
    ]"
  >
    <Icon
      v-if="icon && iconPosition === 'left'"
      :name="icon"
      class="h-5 w-5"
    />
    <slot />
    <Icon
      v-if="icon && iconPosition === 'right'"
      :name="icon"
      class="h-5 w-5"
    />
  </NuxtLink>
</template>