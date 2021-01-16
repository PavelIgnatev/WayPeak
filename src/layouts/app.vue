<template >
    <div class="app">
        Имя: {{name}} <br>  
        Фамилия: {{sername}}
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "app",
  async beforeCreate() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
  },
    computed: {
        name() {
        return  this.$store.getters.info.name;
        },
        sername(){
            return  this.$store.getters.info.sername
        }

  },
};
</script>
<style lang="">
    
</style>