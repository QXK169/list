// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './config/api'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { DatetimePicker } from 'mint-ui'
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.use(MintUI)
// import 'web-animations-js'

Vue.config.productionTip = false
Vue.use(api);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
