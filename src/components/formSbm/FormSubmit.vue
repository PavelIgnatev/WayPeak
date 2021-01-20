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
      <div class="All__wrapper">
        <Item
          class="All__item"
          v-for="(item, index) in $store.getters.returnInboxPost"
          :key='index'
          :keyy='index'
          :item="item"
        >
          {{ item }}
        </Item>
      </div>
    </form>
  </div>
</template>
<script>
import Item from "../Item/Item";
export default {
  name: "FormSubmit",
  data() {
    return {
      text: "",
      data: [],
      show: true,
    };
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.returnInboxPost).length) {
      await this.$store.dispatch("fetchMess");
    }
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
  components: { Item },
};
</script>
<style lang="sass">
.All
    &__wrapper
        margin: 0
        padding: 0
        height: calc(100vh - 64px)
        overflow: auto
</style>