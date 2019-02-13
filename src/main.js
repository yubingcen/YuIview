import Vue from 'vue'
import router from '@/app/desktop/config/Router'
import App from './app/desktop/Root.vue'
import store from './store/store'
import './plugins/iview.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
