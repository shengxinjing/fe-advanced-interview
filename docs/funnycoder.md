# funnyCoder有趣的程序员
<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import {biliSvg} from './.vitepress/util'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/7312949?v=4',
    name: 'doodlewind-雪碧',
    title: '08.前端已死？不存在的-前端开源也能融资千万美元-doodlewind雪碧分享开源创业之旅',
    links: [
      {icon:{svg:biliSvg},link:"https://www.bilibili.com/video/BV1cs4y1h7as/"},
      { icon: 'github', link: 'https://github.com/doodlewind' },
      { icon: 'twitter', link: 'https://twitter.com/ewind1994' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/14146560?v=4',
    name: 'HcySunYang-霍春阳',
    title: '07.【Vuejs设计与实现作者】霍春阳访谈| 学历吃亏也能进大厂|搞开源的典范 | Vuejs成员|',
    links: [
      {icon:{svg:biliSvg},link:"https://www.bilibili.com/video/BV1c5411Q7mv/"},
      { icon: 'github', link: 'https://github.com/hcySunYang' },
      { icon: 'twitter', link: 'https://twitter.com/HcySunYang' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/26037703?v=4',
    name: '程序员鱼皮',
    title: '06.“听说你做的网站经常被攻击？”对线程序员鱼皮| 职业规划 | 知识星球 | 大学生学习建议',
    links: [
      {icon:{svg:biliSvg},link:"https://www.bilibili.com/video/BV1CY411n7yr/"},
      { icon: 'github', link: 'https://github.com/liyupi' },
      // { icon: 'twitter', link: 'https://twitter.com/HcySunYang' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/12064746?v=4',
    name: '阿崔cxr',
    title: '05.【拥抱开源】自由职业的大崔哥 | 从迷茫到快速成长',
    links: [
      {icon:{svg:biliSvg},link:"https://www.bilibili.com/video/BV19T4y1m7Yi/"},
      { icon: 'github', link: 'https://github.com/cuixiaorui' },
      // { icon: 'twitter', link: 'https://twitter.com/HcySunYang' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/11247099?v=4',
    name: 'Anthony Fu',
    title: '04.Vue和NuxtLabs核心成员Anthony Fu的开源人生',
    links: [
      {icon:{svg:biliSvg},link:"https://www.bilibili.com/video/BV1eS4y1S7zB/"},
      { icon: 'github', link: 'https://github.com/antfu' },
      { icon: 'twitter', link: 'https://twitter.com/antfu7' }
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/240147?v=4',
    name: '面向工资编程-Auxten',
    title: '03.我用比特币，在北京买了房子',
    links: [
      {icon:{svg:biliSvg},link:"https://www.bilibili.com/video/BV1Wb4y1Q7Kd/"},
      { icon: 'github', link: 'https://github.com/auxten' },
      // { icon: 'twitter', link: 'https://twitter.com/antfu7' }
    ]
  },
      {
    avatar: 'https://avatars.githubusercontent.com/u/726566?v=4',
    name: 'Winter',
    title: '02.程序员如何在职场上给自己找个导师实现加速成长',
    links: [
      {icon:{svg:biliSvg},link:"https://www.bilibili.com/video/BV18Z4y137jV/"},
      { icon: 'github', link: 'https://github.com/wintercn' },
      // { icon: 'twitter', link: 'https://twitter.com/antfu7' }
    ]
  },
        {
    avatar: 'https://avatars.githubusercontent.com/u/470058?v=4',
    name: '廖雪峰',
    title: '01.技术偶像廖雪峰成长分享',
    links: [
      {icon:{svg:biliSvg},link:"https://www.bilibili.com/video/BV12i4y1V78b/"},
      { icon: 'github', link: 'https://github.com/michaelliao' },
      // { icon: 'twitter', link: 'https://twitter.com/antfu7' }
    ]
  },
          {
    avatar: 'https://avatars.githubusercontent.com/u/1905176?v=4',
    name: '花果山大圣',
    title: '00.非科班前端老司机从2K到40K之路',
    links: [
      {icon:{svg:biliSvg},link:"https://www.bilibili.com/video/BV12i4y1V78b/"},
      { icon: 'github', link: 'https://github.com/shengxinjing' },
      { icon: 'twitter', link: 'https://twitter.com/shengxj1' }
    ]
  },
]

</script>

有趣程序员的职业经历，希望可以给刚入行的程序员一些启发，除了闷头写KPI代码，还有很多有趣的事情可以做。


<VPTeamMembers size="small" :members="members" />