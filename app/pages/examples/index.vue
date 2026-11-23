<script setup lang="ts">
import { md } from '~/utils/markdown'

const md_converted_html = md.render('# Hello World')
</script>

<template>
  <div class="p-4">
    <div class="pb-4">
      <h1>Examples.</h1>
      <KkButtonLink to="/" icon="i-lucide-house">Home</KkButtonLink>
    </div>
    <div class="pb-4">
      <p>Component is Transition</p>
      <ExamplesComponentIsMain />
    </div>
    <div class="pb-4">
      <ExamplesOriginalUi />
    </div>
    <div class="">
      <p>Markdown Rendering</p>
      <div v-html="md_converted_html"></div>
    </div>
  </div>
</template>
