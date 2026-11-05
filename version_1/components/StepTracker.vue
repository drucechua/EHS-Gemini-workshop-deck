<script setup>
// <StepTracker :active="2" />  or  <StepTracker :active="[4, 5]" />
const props = defineProps({
  active: { type: [Number, Array], default: 1 },
})
const steps = ['Import', 'Script', 'Voice', 'Polish', 'Share']
const isActive = (i) =>
  Array.isArray(props.active) ? props.active.includes(i + 1) : props.active === i + 1
</script>

<template>
  <div class="step-tracker" aria-label="Workflow progress">
    <template v-for="(s, i) in steps" :key="s">
      <span class="step" :class="{ 'is-active': isActive(i) }" :aria-current="isActive(i) ? 'step' : undefined">
        <span class="step-num" :style="{ background: `var(--ehs-step-${i + 1})` }">{{ i + 1 }}</span>
        {{ s }}
      </span>
      <span v-if="i < steps.length - 1" class="sep" aria-hidden="true"></span>
    </template>
  </div>
</template>
