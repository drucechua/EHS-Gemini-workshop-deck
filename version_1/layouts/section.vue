<script setup>
// Slots: number, default (title), subtitle. Frontmatter: doodle, doodleSize
import Doodle from '../components/Doodle.vue'
import EhsFooter from '../components/EhsFooter.vue'
defineProps({
  doodle: { type: String, default: '' },
  doodleSize: { type: [Number, String], default: 150 },
})
</script>

<template>
  <div class="slidev-layout ehs tone-dark ehs-divider">
    <div class="divider-main">
      <div v-if="$slots.number" class="divider-number"><slot name="number" /></div>
      <slot />
      <div v-if="$slots.subtitle" class="divider-subtitle"><slot name="subtitle" /></div>
    </div>
    <div class="divider-strip"></div>
    <Doodle v-if="doodle" :name="doodle" :size="doodleSize" sticker />
    <EhsFooter dark />
  </div>
</template>
