<script setup>
// <Dot icon="script" tone="mustard" />  Icons live in public/img/icons/
// tones: mustard, clay, olive, ink, step-1 ... step-5
defineProps({
  icon: { type: String, required: true },
  tone: { type: String, default: 'mustard' },
  large: { type: Boolean, default: false },
})
</script>

<template>
  <span class="dot" :class="[`dot-${tone}`, { lg: large }]" aria-hidden="true">
    <img :src="`/img/icons/${icon}.png`" alt="" />
  </span>
</template>
