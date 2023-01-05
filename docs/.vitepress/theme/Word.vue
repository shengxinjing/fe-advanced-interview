<script setup>
import { useSlots } from 'vue'
const [word] = useSlots().default()

function play1(){
    play(1)
}
function play2(){
    play(2)
}
function play(type){
  if(word && word.children){
    const url = `https://dict.youdao.com/dictvoice?audio=${word.children}&type=${type}`
    const audio = new Audio(url)
    // audio.addEventListener
    audio.play()
  }
}
</script>

<template>
  <div class="it-words" @click="pronunciation">
    <span>
      <slot></slot> 
    </span>
    <span class="tip" @click="play1()">英</span>
    <span class="tip" @click="play2()">美</span>
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
    padding: 0 2px;
    line-height: 18px;
    font-size: 16px;
    font-weight: 600;
}
</style>