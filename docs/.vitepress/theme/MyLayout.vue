<script setup lang="ts">
import { ref ,onMounted, watch, reactive} from 'vue'
import { useData, useRoute,useRouter } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
const data = useData()
const route = useRoute()
const router = useRouter()
const { Layout } = DefaultTheme
const { theme } = data

const isShowWechat = ref(false)

const course = reactive({
  show:false,
  link:''
})
if (typeof window !== 'undefined') {
  watch(() => router.route.data.relativePath, (path) => {
    if(path.startsWith('react/')){
      course.show = true
      course.link = "https://student-api.iyincaishijiao.com/t/BNHNoPs/"
    }else{
      course.show = false
    }
  }, { immediate: true });
}
onMounted(()=>{
  const path = location.pathname
  // router 
  let isShowSide = location.search.indexOf('hide') == -1 
  isShowWechat.value = isShowSide && location.host === 'shengxinjing.cn'

  if(isShowSide){
    let fixwindow = document.querySelector('.gpt-fix-window')
    if(fixwindow){
      fixwindow.style.display = 'none'
    }
  }
  // renderKanban()

})
function renderKanban(){
  if(typeof loadlive2d!=='undefined'){
    if(location.pathname.indexOf('chatgpt.html') > -1){
      // loadlive2d("live2d", "/miku/model.json");
      loadlive2d("live2d", "https://cdn.jsdelivr.net/gh/shengxinjing/static/miku/model.json")
    }
  }else{
    setTimeout(()=>renderKanban(),200)
  }
}

// setTimeout(()=>{
  // loadlive2d("live2d", "/mai/model.json");
  // if(location.pathname.indexOf('chatgpt.html') > -1){
    // loadlive2d("live2d", "/miku/model.json");
  // }
  // loadlive2d("live2d", "https://cdn.jsdelivr.net/gh/shengxinjing/static/miku/model.json")
  // https://cdn.jsdelivr.net/gh/shengxinjing/static/work.png
// },2000)
</script>

<template>
  <Layout>
    <template #doc-before><slot name="doc-before" />
      <div class="action" v-if="course.show">
        <a class="course-btn" :href="course.link" target="_blank">课程链接</a>
      </div>

    </template>

    <template #aside-outline-after>
      <div v-if="isShowWechat" class="about-me">
        <p class="item">扫码联系 & 客服</p>
        <p class="item">学习编程 & 自由职业</p>
        <img :src="theme.me.wechat" alt="">

        <!-- <p class="item">
          <a target="_blank" href="https://appx496fyc38425.h5.xiaoeknow.com/p/decorate/homepage">我的课程首页</a>
        </p> -->
      </div>
    </template>
    <template #aside-ads-after>
      <canvas id="live2d" width="300" height="550"></canvas>
    </template>
  </Layout>
</template>
<style scoped>
.about-me {
  padding: 16px;
  font-size: 14px;
  /* text-align: center; */
}
.about-me p{
  margin: 5px 0;
}
.about-me a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}

.about-me img {
  width: 150px;
  margin-left:-8px;
}
</style>
<!-- 
<template>
  <div v-if="frontmatter.layout !== false" class="Layout">
    <slot name="layout-top" />
    <VPSkipLink />
    <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <VPNav>
      <template #nav-bar-title-before><slot name="nav-bar-title-before" /></template>
      <template #nav-bar-title-after><slot name="nav-bar-title-after" /></template>
      <template #nav-bar-content-before><slot name="nav-bar-content-before" /></template>
      <template #nav-bar-content-after><slot name="nav-bar-content-after" /></template>
      <template #nav-screen-content-before><slot name="nav-screen-content-before" /></template>
      <template #nav-screen-content-after><slot name="nav-screen-content-after" /></template>
    </VPNav>
    <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" />
    <VPSidebar :open="isSidebarOpen" />

    <VPContent>
      <template #home-hero-before><slot name="home-hero-before" /></template>
      <template #home-hero-after><slot name="home-hero-after" /></template>
      <template #home-features-before><slot name="home-features-before" /></template>
      <template #home-features-after><slot name="home-features-after" /></template>

      <template #doc-footer-before><slot name="doc-footer-before" /></template>
      <template #doc-before><slot name="doc-before" /></template>
      <template #doc-after><slot name="doc-after" /></template>

      <template #aside-top><slot name="aside-top" /></template>
      <template #aside-bottom><slot name="aside-bottom" /></template>
      <template #aside-outline-before><slot name="aside-outline-before" /></template>
      <template #aside-outline-after><slot name="aside-outline-after" /></template>
      <template #aside-ads-before><slot name="aside-ads-before" /></template>
      <template #aside-ads-after><slot name="aside-ads-after" /></template>
    </VPContent>

    <VPFooter />
    <slot name="layout-bottom" />
  </div>
  <Content v-else />
</template> -->
