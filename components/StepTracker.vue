<script setup>
// <StepTracker :active="2" />  shows the three phases: Content, Deck, Video
// Custom labels: <StepTracker :steps="['A', 'B']" :active="1" />
const props = defineProps({
  active: { type: [Number, Array], default: 1 },
  steps: { type: Array, default: () => ['Content', 'Deck', 'Video'] },
})
const isActive = (i) =>
  Array.isArray(props.active) ? props.active.includes(i + 1) : props.active === i + 1
</script>

<template>
  <div class="step-tracker" :data-phase="Array.isArray(active) ? active[0] : active" aria-label="Workflow progress">
    <template v-for="(s, i) in steps" :key="s">
      <span class="step" :class="{ 'is-active': isActive(i) }" :aria-current="isActive(i) ? 'step' : undefined">
        <span class="step-num" :style="{ background: `var(--ehs-step-${i + 1})` }">{{ i + 1 }}</span>
        {{ s }}
      </span>
      <span v-if="i < steps.length - 1" class="sep" aria-hidden="true"></span>
    </template>
  </div>
</template>
