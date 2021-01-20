<template >
  <div class="All">
    <form @submit.prevent="sendDate">
      <input
        class="all"
        type="text"
        placeholder='Добавьте задачу в "Входящие", нажмите Enter для сохранения'
        v-model="text"
      />
      <input type="submit" style="opacity:0"/>
      <div
        class=""
        v-for="(item, index) in $store.getters.returnInboxPost"
        :key="index"
      >
        {{ item }}
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "All",
  data() {
    return {
      text: "",
      data: [],
    };
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.returnInboxPost).length) {
      await this.$store.dispatch("fetchMess");
    }
    console.log(this.$store.getters.info)
    this.data = this.$store.getters.returnInboxPost;
  },
  methods: {
    async sendDate() {
      if (this.text) {
        this.data.unshift(this.text);
      }
      const formData = {
        data: this.data,
      };
      try {
        if (this.data) {
          this.text = "";
          await this.$store.dispatch("pushMess", formData);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style lang="sass">
.All
    max-height: 100vh
.all
    width: 500px
    &::placeholder
        color: #909090
        font-size: 14px
</style>