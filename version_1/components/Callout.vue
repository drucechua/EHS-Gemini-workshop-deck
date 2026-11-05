<script setup>
// <Callout label="Tip" tone="sky" icon="cut">Body text</Callout>
// tones: paper, sky, peach, sage, butter, dark
import Dot from './Dot.vue'
defineProps({
  label: { type: String, default: '' },
  tone: { type: String, default: 'paper' },
  icon: { type: String, default: '' },
})
</script>

<template>
  <div class="callout" :class="`callout-${tone}`">
    <Dot v-if="icon" :icon="icon" :tone="tone === 'dark' ? 'clay' : 'ink'" />
    <div>
      <span v-if="label" class="callout-label">{{ label }}</span>
      <slot />
    </div>
  </div>
</template>
