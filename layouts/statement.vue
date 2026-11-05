<script setup>
// Centered dark slide for one key message. Frontmatter: tone (dark | cream | sun)
import EhsFooter from '../components/EhsFooter.vue'
defineProps({ tone: { type: String, default: 'dark' } })
</script>

<template>
  <div class="slidev-layout ehs ehs-statement" :class="`tone-${tone}`">
    <div class="ehs-body"><slot /></div>
    <EhsFooter :dark="tone === 'dark'" />
  </div>
</template>
