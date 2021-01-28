<template >
  <div class="ItemDataRight" :class="{ prosrRight: localeDate != nowDate }">
    {{
      localeDate == nowDate
        ? "Сегодня,"
        : LocalDateTwoDay == nowDate
        ? "Вчера,"
        : `${Math.round((Date.now() - data) / 86400000)} ${declOfNum(
            Math.round((Date.now() - data) / 86400000),
            ["день назад", "дня назад", "дней назад"]
          )},`
    }}

    {{
      `${new Date(this.data).getDate()} ${
        month[new Date(this.data).getMonth()]
      }`
    }}
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
  methods: {
    declOfNum(number, words) {
      return words[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]
      ];
    },
  },
};
</script>
<style lang="sass">
.ItemDataRight
  font-size: 14px
  font-weight: 300
  display: flex
  justify-content: center
  align-items: center
  color: #4e71de
  height: 100%
  transition: 0.2s ease-in-out
  &:hover
    cursor: pointer
.prosrRight
  color: #e13e39

</style>