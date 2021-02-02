<template >
  <div class="ItemData" v-if="data" :class="[{ prosr: localeDate != nowDate }, [classes]]">
    {{
      localeDate == nowDate
        ? "Сегодня"
        : LocalDateTwoDay == nowDate
        ? "Вчера"
        : `${new Date(this.data).getDate()} ${
            month[new Date(this.data).getMonth()]
          }`
    }}
  </div>
</template>
<script>
export default {
  name: "ItemData",
  props: ["data", "classes"],
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
.ItemData
  top: 50%
  transform: translateY(-50%)
  right: 12px
  position: absolute
  color: #4e71de
  font-size: 12px
  height: 26px

  z-index: 300
.prosr
  font-size: 12px
  color: #e13e39

</style>