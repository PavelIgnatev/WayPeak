<template>
  <div class="FormSubmit">
    <form @submit.prevent="sendDate">
      <input
        class="centerView__input"
        type="text"
        placeholder='Добавьте задачу в "Входящие", нажмите Enter для сохранения'
        v-model="text"
      />
      <input
        type="submit"
        style="opacity: 0; z-index: -1; position: absolute: top: 9999px"
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
.FormSubmit
  display: block
  height: 40px
  margin: 0 28px 12px
  .centerView__input
    width: 100%
    height: 100%
    &::placeholder
      color: #808080
      font-size: 14px
</style>