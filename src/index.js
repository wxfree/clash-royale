import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/global.css'
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount(root)
