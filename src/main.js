import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import { MessageFR } from './lang/fr.js'
import i18n from './i18n'

Vue.use(Buefy)
Vue.use(VueI18n)
console.log(MessageFR)
const i18n = new VueI18n({
  locale: 'fr', // set locale
  MessageFR // set locale messages
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  i18n,
  i18n
}).$mount('#app')
