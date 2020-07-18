// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router/router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-table/dist/bootstrap-table.min.css'
import 'bootstrap-table/dist/bootstrap-table.min.js'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.min.js'
import 'bootstrapvalidator/dist/css/bootstrapValidator.min.css'
import 'bootstrapvalidator/dist/js/bootstrapValidator.min.js'

import 'ztree/css/metroStyle/metroStyle.css'
import 'ztree/js/jquery.ztree.core.js'
import 'ztree/js/jquery.ztree.exedit.js'
import 'ztree/js/jquery.ztree.excheck.js'
import 'ztree/js/jquery.ztree.exhide.js'

import echarts from 'echarts'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(echarts)
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
