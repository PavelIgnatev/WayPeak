<template>
  <form @submit.prevent="sendDate" class="FormSubmit" @click="closeRight">
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
</template>
<script>
export default {
  name: "FormSubmit",
  data() {
    return {
      text: "",
      show: true,
      width: screen.width
    };
  },
  methods: {
    async sendDate() {
      const formData = {
        text: this.text,
        description: "",
      };
      try {
        if (this.text) {
          this.text = "";

          await this.$store.dispatch("pushMess", formData);
        }
      } catch (e) {
      }
    },
    closeRight(){
      if(this.width < 920){
        this.$store.commit("falsemenuRight")
      }
    },
    updateWidth() {
      this.width = window.innerWidth;
    }
  },
  components: {},
  created() {
    window.addEventListener("resize", this.updateWidth);
  }
};
</script>
<style lang="sass">
.FormSubmit
  display: block
  height: 36px
  margin: 0 45px 12px 28px
.centerView__input
  display: block
  padding: 6px 0
  padding-left: 15px
  padding-right: 15px
  width: 100%
  font-size: 14px
  box-sizing: border-box
  color: rgba(0,0,0,.85)
  &:focus
    margin-left: -1px
    border-radius: 5px
    border: 1px solid #97ace9
    padding: 5px 0
    padding-left: 15px
    padding-right: 15px
  &::placeholder
    color: #909090
    font-size: 14px
</style>