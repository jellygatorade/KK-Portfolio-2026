<script>
// Init ---------------------------------------------------------------
// Event listeners ----------------------------------------------------
</script>

<template>
  <div class="flex flex-row justify-start items-center gap-2 py-2">
    <KkButton>Hello world.</KkButton>
    <KkButton
      label="Save"
      icon="i-lucide-save"
    />
    <KkButton
      label="Cancel"
      variant="secondary"
      icon="i-lucide-x"
    />
    <KkButton
      label="Next"
      variant="ghost"
      icon="i-lucide-arrow-right"
      icon-position="right"
    />
  </div>
  <div class="flex flex-row justify-start items-center gap-2 py-2">
    <KkTextLink to="/about">
      About Us
    </KkTextLink>
    <KkButtonLink
      to="/contact"
      icon="i-lucide-mail"
    >
      Contact Us
    </KkButtonLink>
    <KkButtonLink
      to="/blog"
      icon="i-lucide-arrow-right"
      icon-position="right"
    >
      Read More
    </KkButtonLink>
    <KkTextLink
      to="https://nuxt.com"
      external
    >
      Nuxt Website
    </KkTextLink>
  </div>
</template>

<style>
</style>
