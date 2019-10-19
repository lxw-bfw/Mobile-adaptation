<!--
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2019-10-18 14:59:31
 * @LastEditors: lxw
 * @LastEditTime: 2019-10-18 15:34:40
 -->
### rem适配移动端页面
---
1. 使用阿里的rem插件flexible，根据不同设备动态计算设置html的fontsize还有body默认字体大小（字体优化问题：不能使用rem单位，flexible已经给body设置一个合适的字体大小，所以后面其他内容的字体大小设置基于body我们可以使用em作为字体大小的单位。）
2. 使用webpcak插件postcss-px2rem：根据我们的配置自动把我们px转换成rem。也就是我们根据我们的设计图配置好了之后，以后布局单位直接使用设计稿的数值
设计稿多少px，我们就写多少px。postcss-px2rem工具会帮我们自动转换。
3. 其他优化：若发现其他问题再做优化。比如页面宽度问题。通过设置body可以解决可能出现的页面宽度过宽问题。

### 注意：
1. flexible会为页面根据屏幕自动添加标签，动态控制initial-scale，maximum-scale，minimum-scale等属性的值 ===>设备缩放比。也就是下面这几句
```
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```
所以需要先把public里面的 index.html 这句标签去掉，避免重复

2. 如果我们的移动web项目使用了第三方的ui框架，而这个框架本身不兼容px2rem，那么我们这样使用的话会导致这个框架的ui样式发生错乱。此时解决方案是：vue.config.js里面配置px2rem插件的时候。
```
你可以将remUnit的值设置为设计图宽度（这里假设为750px）75的一半 ==> 37.5，即可以1:1还原mint-ui的组件，否则会样式会有变化，例如按钮会变小。
既然设置成了37.5 那么我们必须在写样式时，也将值改为设计图的一半。
```
3. vue.config.js中：
```
loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          // remUnit这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。
          // 假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
          require('postcss-px2rem')({
            remUnit: 75
          })
        ]
      }
    }
```