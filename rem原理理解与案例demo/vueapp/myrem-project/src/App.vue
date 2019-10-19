<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2019-10-18 14:37:42
 * @LastEditors: lxw
 * @LastEditTime: 2019-10-18 15:38:59
 -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {

  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
