<script setup>
defineProps({ dark: { type: Boolean, default: false } })
</script>

<template>
  <div class="ehs-footer">
    <img :src="dark ? '/img/nyuad-logo-light.png' : '/img/nyuad-logo.png'" alt="NYU Abu Dhabi" />
    <span class="ehs-footer-meta">
      <span>EHS Team Training</span>
      <span class="ehs-footer-sep" aria-hidden="true"></span>
      <span class="ehs-footer-page">{{ $slidev.nav.currentPage }}</span>
    </span>
  </div>
</template>
