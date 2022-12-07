# 网页置灰方案讨论

如何在网页置灰的前提下，保持部分元素彩色

[在线体验](https://shengxinjing.cn/gray.html)

[本文视频版链接](https://www.bilibili.com/video/BV14g411H7Ad/)

最近哀悼日，网页端如何一键变灰已经有很多实现方式了，但是我看到一个推文很有意思，是一个不错的面试题

> 现在网页置灰已经不仅仅是一行css的事了，如何在网页置灰的前提下，部分元素保持彩色，这是一个不错的system design题

## 一键变灰

这个大部分同学都写了，直接
```css
html{
    filter: grayscale(100%);
}
```
考虑ie之类的兼容性的话，就直接把兼容性的属性都搞上去
```css
html{
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
  filter: progid:dximagetransform.microsoft.basicimage(grayscale=1);
}
```

如果想控制的更动态一些，可以用js控制html的class来实现这个切换过程

```html
<button class="btn" id="set-gray">置灰</button>
```

```javascript
let style = document.createElement('style')
let graySelector = 'gray-filter'
style.setAttribute('type', 'text/css')
// style.setAttribute('data-vite-dev-id', id)
style.textContent = `.${graySelector}{
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
  filter: progid:dximagetransform.microsoft.basicimage(grayscale=1);
}`
document.head.appendChild(style)

let root = document.querySelector('html')
let btn = document.querySelector('#set-gray')
btn && btn.addEventListener('click', () => {
  setAllGray()
}, false)

function toggleClassName(el,name){
  if (el.className.indexOf(name) > -1) {
    el.className = el.className.replace(name, '').trim()
  } else {
    el.className = [el.className, name].join(' ')
  }
}

function setAllGray() {
  toggleClassName(root,graySelector)
}

```
这样可以在后端通过接口的形式决定是不是加载这段js就可以了  


![01.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71936e0bca774644a7eb24af5b4cd84d~tplv-k3u1fbpfcp-watermark.image?)

> 那么问题来了，如何在置灰的前提下部分元素保持彩色呢



## filter重置（失败）
如果能直接某个元素重置filter, 尝试下面的写法，但是不生效

```css
html{
    filter:grayscale(100%);
}
.not-gray{
    filter:none;
}
```

如果filter的算法可逆的话，可以在`.not-gray`元素上设置一个翻转的filter，查了点资料,Chromium灰色100%的算法如下, 我本人图像处理方面比较菜，但是看起来全灰的算法不可逆，而且如果在元素上再盖一个canvas也不太好弄 放弃

```text
R/G/B = 0.2126R' + 0.7152G' + 0.0722'B
```


## 遮挡解决方案 backdrop-filter

有一个解决方案是用backdrop-filter做一个遮罩，毕竟filter还是有点损耗首屏性能的，虽然可以用transform开启硬件优化一些，我们还可以用遮罩的方式挡住也可以的，并且设置`pointer-events: none;`不阻挡用户交互，也是一段css搞定

```css
html {
    position: relative;
    width: 100%;
    height: 100%;
}
html::before {
    content: "";
    position: fixed;
    backdrop-filter: grayscale(100%);
    pointer-events: none;
    inset: 0;
    z-index: 100;
}
```
还可以把遮罩的position换成absolute, 实现一个只置灰首屏的效果，不过我感觉没啥必要


![02.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4bf01e0235824086a9f9ad68fe57960c~tplv-k3u1fbpfcp-watermark.image?)

然后我们可以设置指定元素的z-index，超过backdrop-filter的100就可以, 就有首屏+部分彩色的效果

![05.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a53bffbbd1b74260bba618ec60842164~tplv-k3u1fbpfcp-watermark.image?)

```css
.not-gray{
  position: relative;
  z-index:1000;
}
```


## 元素遍历标记

backdrop-filter其实也有他的兼容性问题，尤其是firefox版本102(最新107)之前都不能用，filter方案更普及一些，不过作为面试题的话 我们还可以继续用filter这个方法，

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d92347f45b2b4768bfc8129d7292d851~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d61f548cf85841b7bc15e5c79e5580be~tplv-k3u1fbpfcp-watermark.image?)


我们设置有一些选择器保持彩色，然后统计出当前这个网页中，需要置灰的元素，网页是一个属性结果，我们先对选中元素的父元素进行遍历标记




![06.jpeg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8466aa5236e9479297974322eab588e2~tplv-k3u1fbpfcp-watermark.image?)

```javascript

let body = document.body
//配置选择器，命中这个列表选择器的不置灰
let selectors = ['#not-gray2', '.not-gray3']
selectors.forEach(selector=>{
    let doms = [...document.querySelectorAll(selector)].forEach(v=>{
      if(!v) return 
      v.staycolor = true
      let parent = v.parentNode
      while(parent && !parent.colorful){
        parent.colorful = true
        parent = parent.parentNode
      }
    })
})

```

然后现在需要置灰的元素都已经标记了colorful，然后我们遍历一下，递归每个child，如果没有colorful，直接置灰返回，通过递归就可以把所有元素都置灰了

```js
let graySelector = 'gray-filter'
walk(body)

function walk(node){
    if(node.nodeType!==1) return 
    if(node.staycolor) return 
    if(!node.colorful){
      toggleClassName(node,graySelector)
      return
    }
    for (var i = 0; i < node.children.length; i++) {  
      var child = node.children[i]; 
      walk(child)
    }  
}
```

可以把selectors做成从后端读取，就可以动态设置保持彩色的部分了, 不过这样设置filter可能会导致部分元素的定位失效，不过作为面试题的追问还不错

![04.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f7a2de7d0ecc45b88000a98c95422af2~tplv-k3u1fbpfcp-watermark.image?)

## 总结
作为面试题来说，考察了面试者的css，js的dom遍历，递归思想，很不错的入门题
