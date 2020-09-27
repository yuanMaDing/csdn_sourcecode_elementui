import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'

import './components'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/reset.css'

Vue.use(utils)
  .use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')