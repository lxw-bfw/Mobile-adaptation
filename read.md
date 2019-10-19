# 前端开发之移动端布局适配解决方案



### 1. rem适配方案

- 使用阿里的rem布局插件—— flexible.js，来实现页面布局在不同移动端的适配。
- 自己原生开发一个rem布局插件
  - 获取设备viewport
  - 划分10等分，参考阿里的flexible.js，每一等分大小是ValRem
  - 设置html的font-size为ValRem + 'px'
  - 监听改变浏览器viewport大小的事件，重新获取viewprot，计算ValRem：包括拉伸和收缩浏览器以及缩放网页：resize事件监听、（缩放网页同样会导致浏览器的viewport发生改变）。监听页面重新加载事件这里选择onpageshow而不是选择onload，onload是第一次加载页面的时候触发，onpageshow是每一次加载我们的页面都会触发，如果页面下次是从缓存中获取或者是单页应用，所以使用onpageshow最合适
  - 字体优化：字体大小并不能使用rem，字体的大小和字体宽度，并不成线性关系，所以我们的字体也想要适配不同的设备但是不能使用rem为单位。