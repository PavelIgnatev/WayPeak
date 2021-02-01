<template >
  <div class="centerView">
    <HeaderGorizontal
      text="Поиск"
      :search="this.$route.path.split('/')[3]"
    ></HeaderGorizontal>
    <div
      class="centerView__wrapper "
      style="height: calc(100vh - 64px)"
      v-if="
        this.$store.getters.returnsortInboxPost.filter((item) => {
          return item[1].text.indexOf(this.$route.path.split('/')[3]) != -1;
        }).length
      "
    >
      <Item
        v-for="(item, index) in this.$store.getters.returnsortInboxPost.filter(
          (item) => {
            return item[1].text.indexOf(this.$route.path.split('/')[3]) != -1;
          }
        )"
        :description="item[1].description"
        :data="item[1].data"
        :key="index"
        :keyy="item[0]"
        push="pushPerformed"
        del="deleteMess"
        :item="item[1].text"
        to="all"
      >
      </Item>
    </div>
    <div class="noTask" v-else>
      <img src="@/assets/img/icons/moon.png" class="noTask__img" />
      <div class="noTask__text">Они могут быть на луне :P</div>
      <div class="noTask__subtext">Задачи не найдены</div>
    </div>
  </div>
</template>
<script>
import Item from "../Item/Item";
import HeaderGorizontal from "../headerGorizontal/HeaderGorizontal.vue";
export default {
  name: "All",
  metaInfo: {
    title: 'Поиск'
  },
  data() {
    return {
      text: "",
    };
  },
  components: { HeaderGorizontal, Item },
};
</script>
<style lang="sass">
</style>