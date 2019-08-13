<template>
    <div>
        <card-index />
        <button v-on:click="locate">跳转新的单页</button>
        <router-view></router-view>
        <my-footer />
    </div>
</template>

<script>
import CardIndex from '@/components/cards/cards.vue'
import MyFooter from '@/components/footer/footer.vue'
export default {
    components: {
      MyFooter,
      CardIndex
    },
    data () {
      return {}
    },
    created () {
      const obj = {
        a: 1,
        b: 2
      }
      const obj2 = {
        ...obj,
        c: 3
      }
      console.log(obj2)
    },
    methods: {
      locate () {
        console.log('111')
        this.$router.push({
          path: '/home'
        })
      }
    }
}
</script>
