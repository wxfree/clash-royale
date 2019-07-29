<template>
    <div class="container">
        <div class="item" v-for="item in cards" :key="item.id">
            <a>
                <img :src="item.url" alt="">
                <p class="card_name">{{ item.name }}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      cards: {
        required: true,
        type: Array
      }
    },
    data () {
      return {}
    }
}
</script>

<style scoped>
 .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.card_name {
    color: #000000;
    text-align: center;
}
</style>
