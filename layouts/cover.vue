<script setup>
// Slots: eyebrow, default (title + subtitle), meta
import { computed } from 'vue'
import Doodle from '../components/Doodle.vue'
import EhsLogo from '../components/EhsLogo.vue'
import Torch from '../components/Torch.vue'
import { asset } from '../components/asset.js'
const props = defineProps({
  image: { type: String, default: 'img/cover-campus.png' },
  doodle: { type: String, default: '' },
  doodleSize: { type: [Number, String], default: 128 },
})
const bg = computed(() => `url(${asset(props.image)})`)
</script>

<template>
  <div class="slidev-layout ehs ehs-cover">
    <div class="cover-text">
      <EhsLogo :height="20" style="margin-bottom: 48px" />
      <div v-if="$slots.eyebrow" class="cover-eyebrow">
        <Torch :size="16" color="var(--ehs-citron)" spin />
        <slot name="eyebrow" />
      </div>
      <div class="cover-main"><slot /></div>
      <div v-if="$slots.meta" class="cover-meta"><slot name="meta" /></div>
    </div>
    <div class="cover-image" :style="{ backgroundImage: bg }" role="img" aria-label="Illustration of the NYU Abu Dhabi campus at night"></div>
    <Doodle v-if="doodle" :name="doodle" :size="doodleSize" sticker />
  </div>
</template>
