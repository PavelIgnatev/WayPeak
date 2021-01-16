<template >
  <div class="appMain">
    <div class="load" v-if="loading">
      <Plane
        style="
          position: absolute;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
        "
      ></Plane>
    </div>
    Имя: {{ name }} <br />
    Фамилия: {{ sername }}
    <router-view></router-view>
  </div>
</template>
<script>
import { Plane } from "vue-loading-spinner";
export default {
  name: "app",
  data() {
    return {
      loading: true,
    };
  },
  beforeCreate() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
  },
  computed: {
    name() {
      return this.$store.getters.info.name;
    },
    sername() {
      return this.$store.getters.info.sername;
    },
  },
  components: {
    Plane,
  },
};
</script>
<style lang="sass">
.load
  margin: 0
  padding: 0
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background: white
  z-index: 100000
</style>