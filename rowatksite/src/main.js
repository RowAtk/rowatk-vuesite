import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

/*
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue"

const routes = [
  {
      path: '/',
      component: Home
  },
  // '/Resume': Resume,
  {
      path: '/Contact',
      component: Contact
  }
]

const router = new VueRouter({
  routes
})
*/

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
