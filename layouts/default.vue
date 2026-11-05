<script setup>
// Frontmatter options: tone (cream | sand | sun | dark), doodle, doodleSize, doodlePos (br | tr | bl)
import Doodle from '../components/Doodle.vue'
import EhsFooter from '../components/EhsFooter.vue'
defineProps({
  tone: { type: String, default: 'cream' },
  doodle: { type: String, default: '' },
  doodleSize: { type: [Number, String], default: 120 },
  doodlePos: { type: String, default: 'br' },
})
</script>

<template>
  <div class="slidev-layout ehs" :class="`tone-${tone}`">
    <div class="ehs-body"><slot /></div>
    <Doodle v-if="doodle" :name="doodle" :size="doodleSize" :sticker="tone === 'dark'" :class="`doodle-pos-${doodlePos}`" />
    <EhsFooter :dark="tone === 'dark'" />
  </div>
</template>
