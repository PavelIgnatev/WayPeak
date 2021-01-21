<template>
  <div class="FormSubmit">
    <form @submit.prevent="sendDate">
      <input
        class="All__input"
        type="text"
        placeholder='Добавьте задачу в "Входящие", нажмите Enter для сохранения'
        v-model="text"
      />
      <input
        type="submit"
        style="opacity: 0; z-index: -1; position: absolute"
      />
    </form>
  </div>
</template>
<script>

export default {
  name: "FormSubmit",
  data() {
    return {
      text: "",
      show: true,
    };
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.returnInboxPost).length) {
      await this.$store.dispatch("fetchMess");
    }
  },
  methods: {
    async sendDate() {
      const formData = {
        text: this.text,
      };
      try {
        if (this.text) {
          this.text = ''
          await this.$store.dispatch("pushMess", formData);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  components: {  },
};
</script>
<style lang="sass">
.All
  &__wrapper
    margin: 0
    padding: 0
    margin-top: 15px
    height: calc(100vh - 64px)
    overflow: auto
</style>