<script setup>
// Slots: eyebrow, default (title + subtitle), meta
import Doodle from '../components/Doodle.vue'
defineProps({
  image: { type: String, default: '/img/cover-campus.png' },
  doodle: { type: String, default: '' },
  doodleSize: { type: [Number, String], default: 128 },
})
</script>

<template>
  <div class="slidev-layout ehs ehs-cover">
    <div class="cover-text">
      <img src="/img/nyuad-logo.png" alt="NYU Abu Dhabi" style="height: 20px; width: auto; align-self: flex-start; margin-bottom: 48px; opacity: 0.85" />
      <div v-if="$slots.eyebrow" class="cover-eyebrow"><slot name="eyebrow" /></div>
      <div class="cover-main"><slot /></div>
      <div v-if="$slots.meta" class="cover-meta"><slot name="meta" /></div>
    </div>
    <div class="cover-image" :style="{ backgroundImage: `url(${image})` }" role="img" aria-label="Illustration of the NYU Abu Dhabi campus at night"></div>
    <Doodle v-if="doodle" :name="doodle" :size="doodleSize" sticker />
  </div>
</template>
