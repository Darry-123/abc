// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/* eslint-disable no-new */
import router from './router'
import './assets/css/initial.css'
import 'lib-flexible'
import axios from 'axios'



Vue.config.productionTip = false
//Vue.prototype.$http = axios;



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
