<script setup>
// Slots: default (title), meta. Frontmatter: doodle, doodleSize
import Doodle from '../components/Doodle.vue'
defineProps({
  doodle: { type: String, default: '' },
  doodleSize: { type: [Number, String], default: 150 },
})
</script>

<template>
  <div class="slidev-layout ehs tone-dark ehs-divider ehs-end">
    <div class="divider-main">
      <slot />
      <div v-if="$slots.meta" class="divider-meta"><slot name="meta" /></div>
    </div>
    <div class="divider-strip"></div>
    <Doodle v-if="doodle" :name="doodle" :size="doodleSize" sticker />
  </div>
</template>
