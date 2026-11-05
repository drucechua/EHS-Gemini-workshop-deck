<script setup>
// NYUAD lockup from public/brand/nyuad-logo.svg (copied from theme/public/brand/),
// colored through a CSS mask so one file works on light and dark slides.
import { asset } from './asset.js'
defineProps({
  dark: { type: Boolean, default: false },
  height: { type: [Number, String], default: 16 },
})
const url = `url(${asset('brand/nyuad-logo.svg')})`
</script>

<template>
  <span
    class="ehs-logo"
    role="img"
    aria-label="NYU Abu Dhabi"
    :style="{
      height: `${height}px`,
      width: `${Number(height) * 4}px`,
      backgroundColor: dark ? 'var(--ehs-on-night)' : 'var(--ehs-ink)',
      WebkitMaskImage: url,
      maskImage: url,
    }"
  ></span>
</template>
