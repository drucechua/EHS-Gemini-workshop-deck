<script setup>
// Usage: Dot icon="script" tone="citron". Icons live in public/img/icons/
// Use a bare name for .png icons, or include the extension (e.g. "music.svg").
// tones: citron, cherry, olive, ink, step-1 ... step-5
import { computed } from 'vue'
import { asset } from './asset.js'
const props = defineProps({
  icon: { type: String, required: true },
  tone: { type: String, default: 'citron' },
  large: { type: Boolean, default: false },
})
const src = computed(() => asset(`img/icons/${props.icon.includes('.') ? props.icon : `${props.icon}.png`}`))
</script>

<template>
  <span class="dot" :class="[`dot-${tone}`, { lg: large }]" aria-hidden="true">
    <img :src="src" alt="" />
  </span>
</template>
