import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import 'babel-polyfill'
import Fastclick from 'fastclick'
Fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
