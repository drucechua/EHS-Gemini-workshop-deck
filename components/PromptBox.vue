<script setup>
// Usage: PromptBox where="Gemini in Google Docs", with a pre block inside.
// The Copy button copies the prompt text to the clipboard.
import { ref } from 'vue'
defineProps({
  label: { type: String, default: 'The prompt' },
  where: { type: String, default: '' },
})
const body = ref(null)
const copied = ref(false)

function fallbackCopy(text) {
  const area = document.createElement('textarea')
  area.value = text
  area.style.position = 'fixed'
  area.style.opacity = '0'
  document.body.appendChild(area)
  area.select()
  document.execCommand('copy')
  document.body.removeChild(area)
}

async function copyPrompt() {
  const text = body.value ? body.value.innerText.trim() : ''
  try {
    await navigator.clipboard.writeText(text)
  } catch (e) {
    fallbackCopy(text)
  }
  copied.value = true
  setTimeout(() => { copied.value = false }, 1600)
}
</script>

<template>
  <div class="prompt-box">
    <div class="prompt-head">
      <span class="prompt-dots" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="prompt-label">{{ label }}</span>
      <span class="prompt-tools">
        <span class="prompt-where">{{ where }}</span>
        <button type="button" class="prompt-copy" @click.stop="copyPrompt">{{ copied ? 'Copied' : 'Copy' }}</button>
      </span>
    </div>
    <div ref="body" class="prompt-body"><slot /></div>
  </div>
</template>
