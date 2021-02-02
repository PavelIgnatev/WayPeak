<template >
  <div class="preload" v-if="loading">
    <Plane
      style="
        position: absolute;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
      "
    ></Plane>
  </div>
</template>
<script>
import { Plane } from "vue-loading-spinner";

export default {
  name: "Preload",
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  },
  components: { Plane },
};
</script>
<style lang="sass">
.preload
  margin: 0
  padding: 0
  position: absolute
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background: white
  z-index: 10000000
</style>