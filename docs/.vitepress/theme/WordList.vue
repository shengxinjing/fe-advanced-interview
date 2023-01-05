<script setup>
import { useSlots,ref } from 'vue'
import Word from './Word.vue'
let slot = useSlots().default().map(v=>{
  return v.children.split(' ').filter(v=>v)
})
</script>

<template>
  <div v-for="words in slot" class="words-item">
    <Word v-for="w in words" :key="w">
      {{ w }}
    </Word>
  </div>

</template>

<style scoped>
.words-item{
  margin-top:20px;
}
</style>