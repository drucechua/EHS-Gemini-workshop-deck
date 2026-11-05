<script setup>
// The NYUAD four-torch design element, recolorable through a CSS mask.
// Usage: Torch size="120" color="var(--ehs-citron)" spin
import { computed } from 'vue'
import { asset } from './asset.js'
const props = defineProps({
  size: { type: [Number, String], default: 120 },
  color: { type: String, default: 'var(--ehs-citron)' },
  spin: { type: Boolean, default: false },
})
const url = `url(${asset('img/torch-mask.png')})`
const style = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  backgroundColor: props.color,
  WebkitMaskImage: url,
  maskImage: url,
}))
</script>

<template>
  <span class="torch" :class="{ 'torch-spin': spin }" :style="style" aria-hidden="true"></span>
</template>
