<script setup>
import { useSlots,computed } from 'vue'
const [word] = useSlots().default()
const props = defineProps({
  how:{
    type:Boolean,
    default:true
  }
})
const showHow = computed(()=>{
  return props.how && showPlay.value && word.children.split(' ').filter(v=>v).length==1
})
const showPlay = computed(()=>{
  return word && word.children
})
function play1(){
    play(1)
}
function play2(){
    play(2)
}
function pron(){
  // https://howjsay.com/how-to-pronounce-frontend
  let url = 'https://www.google.com/search?q=how+to+pronounce+'+word.children
  console.log(url)
  window.open(url)
  // let ele = document.createElement('a')
}
function play(type){
  const url = `https://dict.youdao.com/dictvoice?audio=${word.children}&type=${type}`
  const audio = new Audio(url)
  // audio.addEventListener
  audio.play()
}
</script>

<template>
  <div class="it-words" @click="pronunciation">
    <span>
      <slot></slot> 
    </span>
    <span class="tip" v-if="showPlay" @click="play1()">英</span>
    <span class="tip" v-if="showPlay" @click="play2()">美</span>
    <span class="tip" v-if="showHow" @click="pron">How</span>
  </div>
</template>
<style scoped>
.it-words{
  display: inline-block;
  cursor: pointer;
  color:var(--vp-c-brand);
  margin-right:10px;
}

.tip{
    color: var(--vp-badge-tip-text);
    display: inline-block;
    margin-left: 8px;
    border: 1px solid var(--vp-c-brand);
    border-radius: 10px;
    padding: 0 4px;
    line-height: 18px;
    font-size: 16px;
    font-weight: 600;
}
</style>