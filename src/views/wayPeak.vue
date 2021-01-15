<template >
  <div class="wayPeak">
    {{ name }}
    {{sername}}
  </div>
</template>
<script>
export default {
  name: "waypeak",
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
  },
  computed: {
        name() {
        return this.$store.getters.info.name;
        },
        sername(){
            return this.$store.getters.info.sername
        }

  },
};
</script>
<style lang="">
</style>