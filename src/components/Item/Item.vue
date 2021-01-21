<template >
    <div class="Item" @click="index">
        <router-link :to='"/app/all/" + keyy' class="Item__a" :key="keyy" >
        <div class="Item__wrapper">
            <input type="checkbox" name="" id="" class="Item__input">
            <div class="Item__item">{{item}}</div>
        </div>
        <router-view></router-view>
    </router-link>
    </div>
    
</template>
<script>
export default {
    name: 'Item',
    props: ['item', 'keyy'],
    methods: {
        index(){
            console.log(this.keyy)
        }
    },
}
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.Item
    width: 100%
    height: 40px
    cursor: pointer
    display: flex
    font-size: 14px
    position: relative
    align-items: center
    &__a
        margin-left: 10px
        display: block
        width: 100%
        height: 100%
        color: rgba(0,0,0,.9)
    &__wrapper
        display: flex
        align-items: center
    &__input
        cursor: pointer
        margin: 0
        padding: 0
    &__item
        margin-left: 10px
        margin-top: 3px
    .router-link-active
        background-color: rgba(75,111,222,.12)
</style>