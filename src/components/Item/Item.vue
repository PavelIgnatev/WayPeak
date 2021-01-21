<template >
    <div class="Item" >
        <div class="Item__check" @click="comlit"></div>
        <router-link :to='"/app/all/" + keyy' class="Item__a" :key="keyy" >
        <div class="Item__wrapper">
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
        async all(){
            const fromData = {
                id: this.keyy,
                text: this.item
            }
            await this.$store.dispatch('pushPerformed', fromData)
            await this.$store.dispatch('deleteMess', fromData)
        },
        async comlit(){
            const fromData = {
                id: this.keyy,
                text: this.item
            }
            await this.$store.dispatch('pushMess', fromData)
            await this.$store.dispatch('deletePerformed', fromData)
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
    position: relative
    &::before
        content: ''
        width: 3px
        height: 40px
        background: $green 
        position: fixed
        transform: translateX(-850%)
    &__a
        display: flex
        align-items: center
        width: 100%
        height: 100%
        color: rgba(0,0,0,.9)
    &__wrapper
        margin-left: 10px
        width: 100%
        display: flex
        align-items: center
    &__item
        margin-left: 20px
        margin-top: 3px
    .router-link-active
        background-color: rgba(75,111,222,.12)
        border-radius: 5px
    &__check
        position: absolute
        left: 5px
        width: 11px
        height: 11px
        border: 1px solid #808080
</style>