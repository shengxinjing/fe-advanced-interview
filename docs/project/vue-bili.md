# Vue3+TS实现B站项目


---

## 项目技术栈和初始化

1. Vite
2. Typescript
3. Pinia
4. Vue-router
5. Ant-design-vue

---

## 下一步
1. 规范搭建
2. 功能实现 & 网络调试
3. 项目优化
4. 发布部署 
5. 总结归纳

---

---

## 项目初始化

使用create-vite初始化 

`pnpm create vite-app vue-bili --template vue-ts`
---



## 项目目录规范
```
pages            页面
components       组件
routes           路由  
hooks            hooks工具库
utils            函数工具库
api              网络请求
layout           布局
types            类型定义（TS）
store            数据流
....

```
---

## css解决方案

1. css
2. 行内样式
3. less sass stylus预处理
4. css in js
5. tailwindcss原子化css



---
## 各种规范lint

1. 代码规范eslint （prettier）
2. stylelint (自行体验)
3. git hooks `husky`
4. lint-staged只处理缓存区的代码
5. git commit信息格式 自己写脚本 or commitlint
6. commitizen (自行体验)

---


## Git 校验
使用Husky在代码提交的时候，执行校验

```sh
pnpm i husky -D
husky install
npx husky add .husky/pre-commit "npm run lint"

```

```json
"scripts": {
    // install自动执行
    "prepare": "husky install"
}
```

---

## lint-staged 防止每次都全量

```json
"lint-staged": {
    "**/*.{js,jsx,tsx,ts}": [
      "npm run lint"
  ]
}
```

---

## git commit信息格式
方便自动生成changelog和团队协作

```sh
<type>: <subject>
```
type可以是下面的值
1. feat: 新功能。
2. fix: Bug修复
3. docs: 文档修改
4. perf: 性能优化
5. refactor: 代码重构
6. test: 测试代码
7. chore: 不知道是啥就写chore

---

## commitlint

https://commitlint.js.org/#/

其实自己写也不费劲，参考
https://github.com/vuejs/core/tree/main/scripts

```sh
pnpm install -D commitlint @commitlint/config-conventional @commitlint/cli

npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'

```

`.commitlintrc`

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```



1. 目录规范搭建 
2. 好用的脚本工具
3.  工程化系统搭建(插件和工具)

