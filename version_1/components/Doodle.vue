<script setup>
// <Doodle name="pencil" :size="120" />  Files live in public/img/doodles/
defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 120 },
  sticker: { type: Boolean, default: false },
})
</script>

<template>
  <span class="doodle" :class="{ 'doodle-sticker': sticker }" :style="{ '--doodle-size': `${size}px` }" aria-hidden="true">
    <img :src="`/img/doodles/${name}.svg`" alt="" />
  </span>
</template>
