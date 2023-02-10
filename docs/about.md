
<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { useData } from 'vitepress'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }
]
const { site,theme } = useData()
</script>


# 关于我

你好，我是大圣，现在是自由职业程序员，独立开发者 && 讲师，欢迎关注我公众号

你可以收获前端学习小秘籍，一起学习`前端进阶`的知识

无论是想职场进阶，还是不想上班，都可以聊聊


<!-- <VPTeamMembers size="medium" :members="members" /> -->



## 大圣前端私教课

从1V1面试摸底 给你制定学习路线图 + 课程 + 导师辅导  帮你成功进阶前端


## 体系课
私教课的部分模块单独拆分

1. [前端啃算法](https://blc.xet.tech/s/2Ajvex)
   - Leetcode200题，掌握刷题公式，大厂面试必杀技
2. [Vue+ Typescript 企业实战+组件库课]
3. [React+ Typescript 企业实战+组件库课]
4. [前端源码漫游记](https://blc.xet.tech/s/3zmqj7)
   - 一次性掌握前端热门框架原理 
   - Vue3 + React + Vite + Rollup 源码手写 ...
   - Typescript + Pnpm + Monorepo + Vitest
5. Node + 工程化体系
6. 前端性能优化
7. [玩转Vue3文字专栏@极客时间](http://gk.link/a/10BM3)
8. 面试刷题辅导

other

1. 玩转Web3
2. 玩转Three.js
3. 玩转Rust
4. 玩转小程序
5. 如何做开源


<img :src="theme.me.gongzhonghao" width="280">
