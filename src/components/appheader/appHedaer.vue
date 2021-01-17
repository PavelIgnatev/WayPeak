<template >
    <div class='appHeader'>
        <header>{{name}}{{sername}}</header>
    </div>
</template>
<script>
export default {
    name: 'AppHeader',
    async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }},
    computed: {
    name() {
      return this.$store.getters.info.name;
    },
    sername() {
      return this.$store.getters.info.sername;
    },
  },
}
</script>
<style lang="">
    
</style>