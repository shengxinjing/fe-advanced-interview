# 前端源码漫游记

课程+社群答疑,一次性学完热门前端框架原理

## 🔥为什么要学习源码

1. 如果你想学习Vue、React、Vite、Rollup等热门框架的原理
2. 如果你想面试的时候和面试官谈笑风生
3. 如果你想构建自己的 __前端核心竞争力__
4. 前端架构师必备的技能，让你的简历更加亮眼 （定制插件，脚手架，性能优化)
5. 源码设计思想 + 手写实战，来一次性掌握这些源码吧

## 🏗️课程架构图

1. 了解前端框架的分层
2. 前端框架的发展历程
3. 自己实现Vue   （reactivity响应式 + compiler编译+runtine运行时）
4. 自己实现React（组件化 + Fiber + Hooks）
5. 自己实现Vite     ( 脚手架 + 预打包 + esbuild + 热更新 + 插件)
6. 自己实现Rollup 、Webpack (词法分析 + Tree-shaking + 打包)
7. 自己实现全栈框架架构 （文件路由，SSR，Island架构、性能优化)
8. 全面学习和了解框架的工程化架构 （Monorepo，pnpm，Typescript）
9. 单元测试驱动，全面提升综合实力

![](/source/arch.png)




## 主讲老师

![](https://secure2.wostatic.cn/static/p9q3ZhKtuGeuSS3qwGwUGb/image.png?auth_key=1678326554-qDP5QuxTtTtMorzf9mGSiv-0-eecaed4fa131b0b1415324fa391c8fbd)

## 适合学员

0~5年经验的前端，希望构建前端核心竞争力

有一定的Javascript基础，想要深入框架设计原理  ， 做开源的前端

提高面试成功率，进大厂

## 你将获得

热门前端框架的原理，构建前端核心竞争力

带你写框架源码的体验  + 良好的学习习惯

一个可以写入简历的亮点的开源项目，不定期的简历点评， 让你面试游刃有余

不定期加餐 （新框架 新技术）

## 课程大纲

|课程大纲|详细介绍|
|-|-|
|0. 开课 & 环境搭建  & 参考资料<br>（开班前在线见面会）|1. 前置知识学习介绍 <br>2. Typescript <br>3. Vitest<br>4. Unbuild<br>5. Pnpm<br>6. Rollup<br>7. 前端调试技巧<br>头脑风暴|
|1.  前端框架设计要素|1. 前端框架现状分析<br>2. 一个清单看前端框架<br>3. 响应式原理分析<br>4. 框架的插件机制设计<br>5. 前端框架设计要素分析<br>6. 编译时 和 运行时<br>7. 性能 & 代码体积|
|2. Vue3 框架分析和响应式实现|1. Proxy语法<br>2. 副作用收集和触发 tack和trigger<br>3. 副作用的清理<br>4. effect嵌套和调度<br>5. Vue3.2的位运算优化|
|3. Vue3 组件化 & 虚拟Dom|1. 组件到底是什么<br>2. 组件的创建与更新<br>3. 生命周期和props<br>4. 虚拟Dom的diff全流程分析<br>5. 从组件的本质看待组件库的设计|
|4. Vue Compiler编译|1. 编译原理基础概念科普<br>2. AST的生成与解析<br>3. 代码生成<br>4. Vue的compiler中的静态标记优化<br>5. 常见的编译工具（babel，rollup...)|
|5. React18 框架全家桶分析|1. JSX  和 template<br>2. React的设计理念<br>3. React中的Fiber，Hooks，Concurrenrt <br>4. React中组件的渲染|
|6. React18更新流程|1. 调度逻辑<br>2. fiber和requestIdleCallback<br>3. useState的实现<br>4. React18中的优先级制度<br>5. React18的更新机制|
|7. React18中的hooks和事件系统|1. hooks设计理念<br>2. useState和useEffect<br>3. useCallback和useMemo<br>4. 新的hook use介绍<br>5. React的事件合成系统<br>6. React框架中的算法|
|8. 前端框架中的特性设计|1. 数据流管理 （pinia redux)<br>2. 路由原理实现 （vue-router, react-router)<br>3. Context实现<br>4. 缓存组件的实现<br>5. 框架内部的性能优化|
|9.  新一代框架原理展望和科普<br>头脑风暴和总结|1. 编译型框架：Svelte<br>2. 更简单的React:  Solidjs<br>3. SSR & 同构框架的兴起：Next & Nuxt<br>4. 框架性能考虑的极致: 岛屿架构<br>5. Rust和Go等语言的入侵|
|10. 前端工程化领域的发展|1. Webpack的设计理念<br>2. Rollup的tree-shaking<br>3. Vite的兴起和Bundless<br>4. 前端脚手架工具分析|
|11.  webpack框架分析|1. AST的遍历<br>2. 模块依赖关系管理<br>3. webpack代码生成<br>4. webpack的常用优化手段|
|12. Vite原理手写（一）|1. 前端脚手架原理<br>2. 初始化代码<br>3. esbuild扫描模块依赖关系<br>4. 依赖预构建功能实现 |
|13. Vite原理手写  (二)|1. Vite的插件机制<br>2. Vite 处理css文件<br>3. Vite处理 JSX/TSX<br>4. Vite 入力 Vue单文件组件<br>5. Vite的热更新实现|
|14. Rollup 原理|1. 词法解析回顾<br>2. 模块依赖关系遍历和分析<br>3. tree-shaking如何实现<br>4. magic-string的使用|
|15. 工程化工具总结和补充|1. 源码回顾和总结<br>2. bundless的展望<br>3. Vite生态介绍<br>4. 如何参与开源的生态建设|
|16. 现代全栈框架的分析|1. Nuxt 和 Next 新特性<br>2. SSR的实现<br>3. 渲染方式一览  SSG, ISR, Pre-render<br>4. 手写island架构<br>5. 畅聊前端的未来|
|17. 微前端原理与实现|1. 微前端框架机制和痛点分析<br>2. 基座应用的实现<br>3. Javascript沙箱<br>4. css沙箱<br>5. 数据流和优化<br>6. 业内微前端框架分析|
|18. 课程总结|1. 框架原理带来了什么<br>2. unplugin开发插件  （兼容rollup,vite,webpack)<br>3. Vue扩展插件开发介绍<br>4. React扩展插件开发介绍<br>5. 课程总结与回顾<br>6. 头脑风暴|


## 购买须知

1. 课程录播，可持续回看
2. 课程为虚拟内容服务，购买成功后不可退款，敬请原谅
3. 此课程是前端私教课的源码模块


![](https://visitor-badge.glitch.me/badge?page_id=shengxinjing.source)