<template >
  <div class="ItemDataRight" :class="{ prosrRight: localeDate != nowDate }">
    {{ localeDate }}
  </div>
</template>
<script>
export default {
  name: "ItemDataRight",
  props: ["data"],
  data() {
    return {
      month: {
        0: "янв.",
        1: "фев.",
        2: "мар.",
        3: "апр.",
        4: "май.",
        5: "июн.",
        6: "июл.",
        7: "авг.",
        8: "сен.",
        9: "окт.",
        10: "нояб.",
        11: "дек.",
      },
    };
  },
  computed: {
    localeDate() {
      return new Date(this.data).toLocaleDateString();
    },
    nowDate() {
      return new Date(Date.now()).toLocaleDateString();
    },
    LocalDateTwoDay() {
      return new Date(this.data + 86400000).toLocaleDateString();
    },
  },
};
</script>
<style lang="sass">
.ItemDataRight  
    font-size: 16px
    font-weight: 300
    display: flex
    justify-content: center
    align-items: center
    height: 100%
    transition: 0.2s ease-in-out
    &:hover
        cursor: pointer
        color: #bd3020
.prosrRight
  color: red
</style>