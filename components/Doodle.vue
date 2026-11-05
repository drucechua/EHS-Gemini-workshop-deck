<script setup>
// Usage: Doodle name="pencil" size="120". Files live in public/img/doodles/
import { asset } from './asset.js'
defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 120 },
  sticker: { type: Boolean, default: false },
})
</script>

<template>
  <span class="doodle" :class="{ 'doodle-sticker': sticker }" :style="{ '--doodle-size': `${size}px` }" aria-hidden="true">
    <img :src="asset(`img/doodles/${name}.svg`)" alt="" />
  </span>
</template>
