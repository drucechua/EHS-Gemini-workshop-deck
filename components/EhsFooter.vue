<script setup>
import EhsLogo from './EhsLogo.vue'
import Torch from './Torch.vue'
defineProps({ dark: { type: Boolean, default: false } })
</script>

<template>
  <div class="ehs-footer">
    <EhsLogo :dark="dark" />
    <span class="ehs-footer-meta">
      <span>EHS Team Training</span>
      <Torch :size="11" :color="dark ? 'var(--ehs-pastel)' : 'var(--ehs-citron)'" />
      <span class="ehs-footer-page">{{ $slidev.nav.currentPage }}</span>
    </span>
  </div>
</template>
