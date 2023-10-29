import { defineConfigWithTheme,defineConfig } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import { withMermaid } from "vitepress-plugin-mermaid";
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { biliSvg,telegramSvg } from './util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// import taskLists from 'markdown-it-task-lists'

function getDirctSidebar(pathname: string) {
  const p = path.resolve(__dirname, '../', pathname)
  if(!fs.existsSync(p)) return []
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
    const line = lines.shift() as string
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

const projectSidebar = {
  text:'前端实战进阶',
  collapsible: true,
  collapsed: true,
  items:getDirctSidebar('project')
}
// export default withMermaid(defineConfig({
export default withMermaid(defineConfigWithTheme<ThemeConfig>({
  title: '大圣前端进阶指南',
  description: '大圣前端进阶指南|Vue3|React|Vite|Cli|项目实战',
  head: [
    // ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/element3.ico', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/woniu.png', type: 'image/png', sizes: '16x16' }],
    // ['script',{src:'/live2d.js'}],
    ['link', { rel: 'stylesheet', href:'https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css' }],
    // ['link', { rel: 'stylesheet', href:'https://cdn.jsdelivr.net/npm/daisyui@2.51.3/dist/full.css' }],
    

    ['script',{src:"https://hm.baidu.com/hm.js?ccf55dfd2764cf3ebf43d6b3c9da9b20"}]
  ],
  // mermaid:{
    // theme: 'dark' // default,neutral,forest,dark,base
  // },
  appearance:false,

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
      // { text: '英语', link: '/blog/itwords' },
      { text: '面试课', link: '/interview/' },
      { text: '🔥玩转Vue3', link: '/vue/' },
      { text: '🔥玩转React18', link: '/react/' },
      { text: '源码漫游记', link: '/source/' },
      { text: '前端学算法', link: '/algorithm/' },
      { text: '1V1咨询', link: '/1v1' },
      { text: '关于我', link: '/about' },
      { text: '路线图', link: 'https://roadmap.shengxinjing.cn/' },
    ],
    
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@shengxj' },
      { icon: 'discord', link: 'https://discord.gg/qCB4pUzpzw' },
      { icon: 'github', link: 'https://github.com/shengxinjing/fe-advanced-interview' },
      { icon: 'twitter', link: 'https://twitter.com/shengxj1' },
      {
        icon: {
          svg: biliSvg
        }, link: "https://space.bilibili.com/26995758"
      },
      {
        icon: {
          svg: telegramSvg}, link: "https://t.me/+TudEYWNH2fw4NDg1"
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
      "/react":[
        {
          text: '玩转React18',
          // link: "/react/",
          collapsible: true,
          collapsed: false,
          items: [
            {
              text: 'React+TS企业级实战+组件库', link: '/react/'
            },
            {
              text:'实战入门', items: getDirctSidebar('react/intro')
            },
            {
              text:'企业级实战', items: getDirctSidebar('react/arch')
            },
            {
              text:'自己的组件库', items: getDirctSidebar('react/component')
            },
            {
              text:'React生态', items: getDirctSidebar('react/framework')
            },
          ],
        }
      ],
      "/vue":[
        {
          text: '玩转Vue3',
          // link: "/react/",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Vue3+TS企业级实战+组件库', link: '/vue/'
            },
            {
              text:'实战入门', items:getDirctSidebar('vue/intro')
            },
            {
              text:'企业级实战', items:getDirctSidebar('vue/arch')
            },
            {
              text:'组件库入门', items:getDirctSidebar('vue/component')
            },
            {
              text:'Vue生态', items: getDirctSidebar('vue/framework')
            },
          ],
        },
      ],
      '/': [

        {
          text:'文章',
          collapsible: true,
          collapsed: false,
          items:[
            {text:'',items:getDirctSidebar('blog')},
            {text:'读书测评',items:getDirctSidebar('books')},
            {text:'生活规划',items:getDirctSidebar('life')}
          ]
        },
        {
          text:'面试题',
          collapsible: true,
          collapsed: true,
          items:[
            {text:'面试题',link:'/interview/'},
          ]
        },
        
        projectSidebar,
        {
          text:"源码漫游记",
          collapsible: true,
          collapsed: true,
          items:getDirctSidebar('source')
        },
        {
          text:"前端啃算法",
          collapsible: true,
          collapsed: true,
          items:getDirctSidebar('algorithm')
        }
      ],
    },
    footer: {
      message: '追求持续轻松的职业生涯',
      copyright: ' Copyright © 京ICP备18000331号-1'
    }
  },

}))