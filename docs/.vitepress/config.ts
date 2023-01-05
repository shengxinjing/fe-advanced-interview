import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// import taskLists from 'markdown-it-task-lists'

function getDirctSidebar(pathname: string) {
  const p = path.resolve(__dirname, '../', pathname)
  const dirct = fs.readdirSync(p)
                  .filter(v=>v.endsWith('.md'))
                  .sort((a, b) => {
                    if(a==='index.md') return 1
                    if(a[0]!=='2') return 1
                    return a>b ? -1 : 1
                  })
  return dirct.map(dir=>{
    const file = fs.readFileSync(path.resolve(p,dir)).toString()
    let text = dir
    let lines = file.split('\n')
    const line = lines.shift()
    if(line.startsWith('# ')){
      text = line.replace('# ','')
    }else{
      if(line.startsWith('---')){
        const index = lines.findIndex(v=>v.startsWith('---'))
        lines = lines.slice(index+1).filter(v=>v)
        if(lines[0].startsWith('# ')){
          text = lines[0].replace('# ','')
        }
      }
    }
    return {
      text,
      link: `/${pathname}/${dir.replace('.md','')}`
    }
  })
}

export default defineConfigWithTheme<ThemeConfig>({
  title: '大圣前端进阶指南',
  description: '大圣前端进阶指南|Vue3|React|Vite|Cli|项目实战',
  head: [
    // ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/element3.ico', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/woniu.png', type: 'image/png', sizes: '16x16' }],
    ['script',{src:'/live2d.js'}]
  ],
  // base:"/src/"
  themeConfig: {
    me: {
      // wechat:"https://cdn.jsdelivr.net/gh/shengxinjing/static/wechat.jpg"
      // wechat: "https://cdn.jsdelivr.net/gh/shengxinjing/static/jingu2.png"
      wechat: "/wechat2.png",
      gongzhonghao: "/gongzhonghao.jpeg"
      // wechat:"https://cdn.jsdelivr.net/gh/shengxinjing/static/xiao3.jpg"
    },
    logo: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/woniu.png',
    nav: [
      { text: '🔥一起进步', link: '/about' },
      { text: '英语', link: '/blog/itwords' },
      { text: '🔥面试题', link: '/interview/' },
      // { text: '玩转Vue3', link: '/vue/' },
      // { text: '玩转React18', link: '/react/' },
      { text: '源码漫游记', link: '/source/' },
      { text: '路线图', link: 'https://roadmap.shengxinjing.cn/' },
    ],
    
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/V3ZHdnZErY' },
      { icon: 'github', link: 'https://github.com/shengxinjing/fe-advanced-interview' },
      { icon: 'twitter', link: 'https://twitter.com/shengxj1' },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="20" height="20"  viewBox="0 0 512 512" >
      <path fill="currentColor" d="M488.6 104.1c16.7 18.1 24.4 39.7 23.3 65.7v202.4c-.4 26.4-9.2 48.1-26.5 65.1c-17.2 17-39.1 25.9-65.5 26.7H92.02c-26.45-.8-48.21-9.8-65.28-27.2C9.682 419.4.767 396.5 0 368.2V169.8c.767-26 9.682-47.6 26.74-65.7C43.81 87.75 65.57 78.77 92.02 78h29.38L96.05 52.19c-5.75-5.73-8.63-13-8.63-21.79c0-8.8 2.88-16.06 8.63-21.797C101.8 2.868 109.1 0 117.9 0s16.1 2.868 21.9 8.603L213.1 78h88l74.5-69.397C381.7 2.868 389.2 0 398 0c8.8 0 16.1 2.868 21.9 8.603c5.7 5.737 8.6 12.997 8.6 21.797c0 8.79-2.9 16.06-8.6 21.79L394.6 78h29.3c26.4.77 48 9.75 64.7 26.1zm-38.8 69.7c-.4-9.6-3.7-17.4-10.7-23.5c-5.2-6.1-14-9.4-22.7-9.8H96.05c-9.59.4-17.45 3.7-23.58 9.8c-6.14 6.1-9.4 13.9-9.78 23.5v194.4c0 9.2 3.26 17 9.78 23.5s14.38 9.8 23.58 9.8H416.4c9.2 0 17-3.3 23.3-9.8c6.3-6.5 9.7-14.3 10.1-23.5V173.8zm-264.3 42.7c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.2 6.3-14 9.5-23.6 9.5c-9.6 0-17.5-3.2-23.6-9.5c-6.1-6.3-9.4-14-9.8-23.2v-33.3c.4-9.1 3.8-16.9 10.1-23.2c6.3-6.3 13.2-9.6 23.3-10c9.2.4 17 3.7 23.3 10zm191.5 0c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.1 6.3-14 9.5-23.6 9.5c-9.6 0-17.4-3.2-23.6-9.5c-7-6.3-9.4-14-9.7-23.2v-33.3c.3-9.1 3.7-16.9 10-23.2c6.3-6.3 14.1-9.6 23.3-10c9.2.4 17 3.7 23.3 10z"></path>
    </svg>`
        }, link: "https://space.bilibili.com/26995758"
      },
      {
        icon: {
          svg: `<svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
      <g>
          <path d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z" ></path>
          <path d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308" fill="#FFFFFF"></path>
          <path d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475" fill="#D2E5F1"></path>
          <path d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624" fill="#B5CFE4"></path>
      </g>
  </svg>`}, link: "https://t.me/+3MgX0yHFR2s5OWQ1"
      },
  //      {
  //       icon: {
  //         svg: `<svg width="274px" height="274px" viewBox="-9 0 274 274" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
  //     <g>
  //         <path d="M249.874103,164.084793 C246.121107,183.392442 216.260831,204.522765 181.966269,208.61788 C164.083135,210.751705 146.475762,212.712995 127.700462,211.851797 C96.9952088,210.444977 72.7666374,204.522765 72.7666374,204.522765 C72.7666374,207.511889 72.9509692,210.357972 73.3196328,213.019724 C77.3115222,243.322396 103.36719,245.137696 128.048481,245.984147 C152.959817,246.836498 175.141568,239.842212 175.141568,239.842212 L176.164978,262.363134 C176.164978,262.363134 158.740462,271.719816 127.700462,273.440737 C110.584149,274.381567 89.33143,273.010138 64.5778816,266.458249 C10.8916144,252.248479 1.65880329,195.021567 0.246084399,136.955576 C-0.184514679,119.715392 0.080923109,103.458802 0.080923109,89.8624885 C0.080923109,30.4870046 38.9837803,13.0831336 38.9837803,13.0831336 C58.5996328,4.07447005 92.258619,0.286082949 127.250693,0 L128.110416,0 C163.10249,0.286082949 196.783596,4.07447005 216.397974,13.0831336 C216.397974,13.0831336 255.299356,30.4870046 255.299356,89.8624885 C255.299356,89.8624885 255.787467,133.670046 249.874103,164.084793" ></path>
  //         <path d="M209.412536,94.4687189 L209.412536,166.362544 L180.929587,166.362544 L180.929587,96.5818986 C180.929587,81.8722212 174.740462,74.4060461 162.360739,74.4060461 C148.672997,74.4060461 141.812905,83.2628203 141.812905,100.775816 L141.812905,138.970839 L113.498066,138.970839 L113.498066,100.775816 C113.498066,83.2628203 106.636499,74.4060461 92.9487572,74.4060461 C80.5690337,74.4060461 74.3799093,81.8722212 74.3799093,96.5818986 L74.3799093,166.362544 L45.89696,166.362544 L45.89696,94.4687189 C45.89696,79.7752627 49.6381581,68.0989493 57.1529968,59.460424 C64.9023056,50.8218986 75.050877,46.3935115 87.6488494,46.3935115 C102.224333,46.3935115 113.262121,51.9957235 120.560186,63.2016221 L127.654748,75.0947097 L134.750785,63.2016221 C142.047375,51.9957235 153.085163,46.3935115 167.662121,46.3935115 C180.258619,46.3935115 190.40719,50.8218986 198.157974,59.460424 C205.671338,68.0989493 209.412536,79.7752627 209.412536,94.4687189" fill="#FFFFFF"></path>
  //     </g>
  // </svg>
  // `,
  //       }, link: "https://mas.to/@shengxj"
  //     }
    ],
    lastUpdatedText:"更新时间",
    editLink: {
      pattern: 'https://github.com/shengxinjing/fe-advanced-interview/tree/main/docs/:path',
      text: '编辑页面'
    },
    markdown:{
      config(md){
        // md.use(taskLists)
      } 
    },
    sidebar: {
      '/': [
        {
          text:'文章',
          items:getDirctSidebar('blog')
        },
        {
          text:'面试题',
          items:[
            {text:'面试题',link:'/interview/'},
          ]
        },
        {
          text: '玩转Vue3',
          // link: "/react/",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Vue3学习之路', link: '/vue/'
            },
            {
              text:'实战入门', items:[
                {text:'Vue入门',link:'/vue/intro'}
              ]
            },
            {
              text:'企业级实战', items:[
                {text:'Typescript',link:'/vue/ts'}
              ]
            },
            {
              text:'组件库入门', items:[
                {text:'组件库技术栈',link:'/vue/component'}
              ]
            },
          ],
        },
        {
          text: '玩转React18',
          // link: "/react/",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'React学习之路', link: '/react/'
            },
            {
              text:'实战入门', items:[
                {text:'React入门',link:'/react/intro'}
              ]
            },
            {
              text:'企业级实战', items:[
                {text:'Typescript',link:'/react/ts'}
              ]
            },
            {
              text:'组件库入门', items:[
                {text:'组件库技术栈',link:'/react/component'}
              ]
            },
          ],
        },
        {
          text:'前端实战进阶',
          items:getDirctSidebar('project')
        },
        {
          text:"源码漫游记",
          collapsible: true,
          items:getDirctSidebar('source')
        }
      ],
    },
    footer: {
      message: '文明其精神，野蛮其体魄',
      copyright: ' Copyright © 京ICP备18000331号-1'
    }
  }
})