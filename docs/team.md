<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [

      {
    avatar: 'https://avatars.githubusercontent.com/u/1905176?v=4',

    
    name: '花果山大圣 CEO & CAO',
    title: 'Responsible for thinking 、 bragging and say wocao',
    links: [
      { icon: 'github', link: 'https://github.com/shengxinjing' },
      { icon: 'twitter', link: 'https://twitter.com/shengxj1' }
    ]
  },
  {
    avatar: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/chatgpt.png',

    
    name: 'CTO',
    title: `The top person responsible for technology within the company`,
    links: [
      { icon: 'twitter', link: 'https://twitter.com/shengxj1' }
    ]
  },
  // COO、CFO、CHO、CRO、CTO、CSO、CIO、CMO、CKO
{
    avatar: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/chatgpt.png',

    
    name: 'CIO',
    title: `Mainly responsible for company's information policy, standards, and procedures`,
    links: [
      { icon: 'twitter', link: 'https://twitter.com/shengxj1' }
    ]
  },
{
    avatar: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/chatgpt.png',

    
    name: 'CFO',
    title: `Financial Controller, who holds the financial information and cash resources of the business`,
    links: [
      { icon: 'twitter', link: 'https://twitter.com/shengxj1' }
    ]
  },{
    avatar: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/chatgpt.png',

    
    name: 'COO',
    title: `Responsible for supervising and managing daily activities`,
    links: [
      { icon: 'twitter', link: 'https://twitter.com/shengxj1' }
    ]
  },{
    avatar: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/chatgpt.png',

    
    name: 'CEEO',
    title: `Chief Everything Else Officer`,
    links: [
      { icon: 'twitter', link: 'https://twitter.com/shengxj1' }
    ]
  },
]
</script>

# Our Team (for fun)

Say hello to our awesome team. 

<VPTeamMembers size="small" :members="members" />