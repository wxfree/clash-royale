import VueRouter from 'vue-router'
import Vue from 'vue'
import Index from './components/index.vue'
import Cards from './components/cards/cards.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Index,
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards,
    },
  ],
  // mode: 'history'
})

export default router
