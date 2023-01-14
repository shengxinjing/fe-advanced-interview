# 标题


[题目来源](https://fullstack-challenges.netlify.app/)

## 题目要求和代码
```vue

```

## 解答

```vue


- xx
+ aa
```

## 视频

[]()

https://vitepress.vuejs.org/guide/markdown#header-anchors


https://mermaid-js.github.io/mermaid/#/Setup

https://mermaid.js.org/syntax/flowchart.html

```mermaid
graph TD
    A[Start] --> B{Is it?};
    B -->|Yes| C[OK];
    C --> D[Rethink];
    D --> B;
    B ---->|No| E[End];
```

```mermaid
sequenceDiagram
    participant John
    participant Alice
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
```

```mermaid
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
```

```mermaid
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
```

```
graph LR;
    K([<img src='/vitepress-plugin-mermaid/K.png' width='60' >])-.->G((<img id='git' src='/vitepress-plugin-mermaid/Octocat.png' width='50' >));
    H([<img id='helm' src='/vitepress-plugin-mermaid/helm.png' width='60' >])-.->G
    G-->A;
    A(<img src='/vitepress-plugin-mermaid/argo-cd.png' width='60' >)-->D(<img src='/vitepress-plugin-mermaid/ocp.png' width='60' >);
classDef img fill:none,color:none,stroke:none,border-radius:50px
class G,D,A,K,H img
click G "http://www.github.com" "This is a link" _blank
click K "https://kustomize.io/" _blank
```


```mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
```