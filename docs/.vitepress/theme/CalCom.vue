<script setup lang="ts">
import { onMounted } from 'vue';
import { useDark } from '@vueuse/core'

const isDark = useDark()
defineProps<{
  link: string
  title: string
}>()

declare global {
  interface Window {
    Cal: any
  }
}

if (typeof window !== 'undefined') {
  window.Cal = window.Cal || function (...args: any[]) {
    const p = function (a: any, ar: any) {
      a.q.push(ar)
    }

    const cal = window.Cal
    if (!cal.loaded) {
      cal.ns = {}
      cal.q = cal.q || []
      document.head.appendChild(document.createElement('script')).src = 'https://app.cal.com/embed/embed.js'
      cal.loaded = true
    }
    if (args[0] === 'init') {
      const api = function () {
        p(api, args)
      } as any
      const namespace = args[1]
      api.q = api.q || []
      typeof namespace === 'string'
        ? (cal.ns[namespace] = api) && p(api, args)
        : p(cal, args)
      return
    }
    p(cal, args)
  }

  window.Cal('init', { origin: 'https://app.cal.com' })

  onMounted(() => {
    window.Cal('ui', { theme: isDark.value ? 'dark' : 'light', styles: { branding: { brandColor: '#000000' } }, hideEventTypeDetails: false, layout: 'month_view' })
  })
}
</script>

<template>
  <button :data-cal-link="link" class="sbtn" >
    <div i-ri-calendar-event-fill />
    {{ title }}
  </button>
</template>