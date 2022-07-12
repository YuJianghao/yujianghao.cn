---
date: 2022-03-26
---

# 如何使用 JavaScript 获取 HTML 文本的显示范围

先放答案。

```js
function getRects(startDom, startIndex, endDom, endIndex) {
  const range = document.createRange()
  range.setStart(startDom, startIndex)
  range.setEnd(endDom, endIndex)
  return range.getClientRects()
}
```

或者

```js
const context = canvas.getContext('2d')!
context.font = font
const metrics = context.measureText(char)
const width = metrics.width
```

## 原理

使用[Range](https://developer.mozilla.org/en-US/docs/Web/API/Range)。Range 是一个 HTML 文档的片段，可以类比于 Photoshop 的选取。

1. 把需要测量的文本添加到选区中
2. 使用`Range.getClientRects`获取选区的位置和大小信息
3. 根据你应用中选区的排序情况，依次计算文本长度

## 注意事项

需要注意选取的时候是选择了`Element Node`还是`Text Node`。例如需要选择 span 中文字的时候应该使用`Text Node`

```js
const rects = getRects(span.firstChild, 3, span.firstChild, 7)
```

上述代码选择了 span 中的第三到第七（不含）个字符
