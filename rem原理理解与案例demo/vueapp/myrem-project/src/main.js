/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2019-10-18 14:37:42
 * @LastEditors: lxw
 * @LastEditTime: 2019-10-18 15:24:32
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'lib-flexible'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
