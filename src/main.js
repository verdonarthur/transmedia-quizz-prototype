import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import i18n from './i18n'

Vue.use(Buefy)
Vue.use(VueI18n)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  i18n
}).$mount('#app')
