<script setup>
import { useSlots,onMounted } from 'vue';
const [word] = useSlots().default()


onMounted(()=>{
  console.log('123,word',word.children.replace('#',''))
  if(word && word.children){
    const url = `https://dict.youdao.com/dictvoice?audio=${word.children.replace(/#/g,'')}&le=zh&product=pc&type=2`
    const audio = new Audio(url)
    // audio.addEventListener
    audio.play()
  }
})

</script>

<template>
<span></span>
</template>