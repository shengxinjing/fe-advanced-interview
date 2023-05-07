<script setup>
import { useSlots,ref } from 'vue'
import Word from './Word.vue'
const props = defineProps({
  line:{
    type:Boolean,
    default:false
  }
})
let slot = useSlots().default().map(v=>{
  const ch = props.line?'\n':" "
  return v.children.split(ch).filter(v=>v)
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