import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import CSS
import "@/scss/index.scss"
// import vuetify
import vuetify from '@/plugins/vuetify'

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
