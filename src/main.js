// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI, { Loading } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import './axios'
import {setCookie, getCookie, delCookie} from '@/cookie'

Vue.prototype.$cookieStore = {setCookie, getCookie, delCookie}
Vue.prototype.$axios = axios

/* 测试环境mock才有效 */
if (process.env.MOCK) {
  require('./mock/index.js')
}

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
