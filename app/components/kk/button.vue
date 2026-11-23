<script setup lang="ts">
import {
  buttonBaseClasses,
  buttonVariantClasses,
  buttonDisabledClasses,
} from '~/utils/ui-styles'

// Init - Props -------------------------------------------------------

interface Props {
  label?: string
  icon?: string
  iconPosition?: 'left' | 'right'
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  iconPosition: 'left',
  variant: 'primary',
  disabled: false,
})

// Event listeners ----------------------------------------------------

</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      buttonBaseClasses,
      buttonVariantClasses[variant],
      disabled && buttonDisabledClasses,
    ]"
  >
    <Icon
      v-if="icon && iconPosition === 'left'"
      :name="icon"
      class="h-5 w-5"
    />
    <span v-if="label">
      {{ label }}
    </span>
    <slot />
    <Icon
      v-if="icon && iconPosition === 'right'"
      :name="icon"
      class="h-5 w-5"
    />
  </button>
</template>