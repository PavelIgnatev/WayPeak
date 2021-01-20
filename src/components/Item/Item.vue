<template >
    <div class="Item" :key="keyy" @click="f">
        {{keyy}}
        {{item}}
        
    </div>
</template>
<script>
export default {
    name: 'Item',
    props: ['item', 'keyy'],
    methods: {
        f(){
            console.log(this.keyy)
        }
    },
}
</script>
<style lang="sass">
.Item
    width: 100%
    height: 36px
    cursor: pointer
</style>