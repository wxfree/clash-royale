<template>
  <div class="main">
    <div class="card-type">
      <a
        v-for="(item, index) in rarities"
        :key="index"
        :class="{'text-border': true, 'curtype': curType === item}"
        @click="changeCardType(item)"
      >
        {{ item }}
      </a>
    </div>
    <classify :cards="filterCards" />
  </div>
</template>

<script>
// http://www.18183.com/hsct/kapai/
import axios from 'axios'
import Classify from './classify.vue'
export default {
    components: {
      Classify
    },
    data () {
      return {
        curType: 'all',
        types: ['troop', 'spell', 'building'],
        rarities: ['all', 'common', 'rare', 'epic', 'lengendary'],
        cards: [
          {
            id: 1,
            name: '天狗',
            rarity: 'lengendary',
            type: 'troop',
            url: '../../../static/image/flydog.png'
          },
          {
            id: 2,
            name: '气球',
            rarity: 'epic',
            type: 'troop',
            url: '../../../static/image/balloon.png'
          },
          {
            id: 3,
            name: '毒药',
            rarity: 'epic',
            type: 'spell',
            url: '../../../static/image/poison.jpg'
          },
          {
            id: 4,
            name: '胖子',
            rarity: 'rare',
            type: 'troop',
            url: '../../../static/image/fat.png'
          },
          {
            id: 5,
            name: '迫击炮',
            rarity: 'common',
            type: 'building',
            url: '../../../static/image/mortar.png'
          },
          {
            id: 6,
            name: '女巫',
            rarity: 'epic',
            type: 'troop',
            url: '../../../static/image/witch.png'
          },
          {
            id: 7,
            name: '飞桶',
            rarity: 'epic',
            type: 'spell',
            url: '../../../static/image/bucket.png'
          },
          {
            id: 8,
            name: '地狱飞龙',
            rarity: 'lengendary',
            type: 'troop',
            url: '../../../static/image/dragon.png'
          }
        ]
      }
    },
    computed: {
      filterCards () {
        if (this.curType === 'all') {
          return this.cards
        } else {
          return this.cards.filter(v => v.rarity === this.curType)
        }
      }
    },
    created () {
      // console.log(this.filterCards)
      this.getData().then(resp => {
        console.log(resp)
      })
      console.log('num:', this.$store.state.num)
      this.$store.commit('addNum')
    },
    methods: {
      changeCardType (curType) {
        this.curType = curType
        console.log(this.curType, this.filterCards)
        console.log(this.$store.state.num)
      },
      async getData() {
        const resp = await axios.get('/static/data/cards.json')
        return resp.data
      }
    }
}
</script>

<style lang="scss" scoped>
    .card-type {
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: left;
        margin: 3%;
        & .text-border {
          line-height: 40px;
          font-size: 16px;
          text-align: center;
          border: 1px grey solid;
          margin: 0 3%;
          padding: 0 1%;
        }
        & .curtype {
            background-color: blue;
            color: #ffffff;
        }
    }
</style>
