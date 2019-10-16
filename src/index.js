import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/global.css'

const root = document.createElement('div')
document.body.appendChild(root)
if (root) {
  root.innerHTML = ''
}
const app = new Vue({
  store,
  router,
  render: (h) => h(App),
})

app.$mount(root)
/*eslint-disable */
// new Vue({
//   components: { App },
//   template: '<App />',
//   store,
//   router
// }).$mount(root)
