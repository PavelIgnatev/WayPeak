<template >
  <div class="blockRight" v-if="$route.params.id">
    <HeaderRight
      v-if="$store.getters[to][id]"
      :data="$store.getters[to][id]['data']"
    ></HeaderRight>
    <div class="blockRight__wrapper">
      <div
        contentEditable="true"
        v-if="this.$store.getters[to][id]"
        :key="$route.params.id"
        @input="debounceName"
        class="blockRight__name"
        ref="name"
        data-text="Что нужно делать"
      ></div>
      <div
        contentEditable="true"
        v-if="this.$store.getters[to][id]"
        :key="$route.params.id + $route.params.id"
        @input="debounceDescription"
        class="blockRight__description"
        ref="description"
        data-text="Описание"
      ></div>
    </div>
  </div>
  <div
    class="blockRightNone"
    v-else-if="Object.keys($store.getters[this.to]).length && width > 920"
  >
    <img src="@/assets/img/icons/wind.png" class="blockRightNone__img" />
    <div class="blockRightNone__text">
      Нажмите на задачу, чтобы посмотреть её детали
    </div>
  </div>
  
</template>
<script>
import _ from "lodash";
import HeaderRight from "../headers/headerRight/headerRight";
import ItemData from "../Item/ItemData";
export default {
  name: "blockRight",
  data() {
    return {
      paths: {
        all: ["returnInboxPost", "updateMess"],
        search: ["returnInboxPost", "updateMess"],
        inbox: ["returnInboxPost", "updateMess"],
        completed: ["returnPerformedPost", "updatePerformed"],
        trash: ["returnTrashPost", "updateTrash"],
      },
      subtext: "",
      width: screen.width 
    };
  },
  components: { HeaderRight, ItemData },
  updated() {
    if (this.$store.getters[this.to][this.id]) {
      if (this.$refs.name.innerText == "") {
        this.$refs.name.innerText = this.$store.getters[this.to][this.id].text;
      }
      if (this.$refs.description.innerText == "") {
        this.$refs.description.innerText = this.$store.getters[this.to][this.id]
          .description
          ? this.$store.getters[this.to][this.id].description
          : "";
      }
    }
  },
  computed: {
    to() {
      return this.paths[this.$route.path.split("/")[2]][0];
    },
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    debounceName: _.debounce(function (e) {
      let formData = {
        id: this.id,
        text: e.target.innerText.trim(),
      };
      this.$store.dispatch(
        `${this.paths[this.$route.path.split("/")[2]][1]}`,
        formData
      );
    }, 500),
    debounceDescription: _.debounce(function (e) {
      let formData = {
        id: this.id,
        description: e.target.innerText.trim(),
      };
      this.$store.dispatch(
        `${this.paths[this.$route.path.split("/")[2]][1]}`,
        formData
      );
    }, 500),
    updateWidth() {
      this.width = window.innerWidth;
    }
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  }
};
</script>
<style lang="sass">
.blockRight
  border-left: 1px solid rgba(0,0,0,.15)
  height: 100vh
  color: rgba(0,0,0,.85)
  position: relative
  &__wrapper
    overflow: auto !important
    height: calc(100vh - 66px)
  &__name
    line-height: 24px
    font-size: 16px
    font-weight: 600
    margin-bottom: 15px
    padding: 0 20px
    text-decoration: none !important
    padding-top: 12px
  &__description
    text-decoration: none !important
    line-height: 23px
    font-size: 16px
    padding: 0 20px
*::selection
  background: #bad7fb !important
.subtext
  display: block
  margin-top: 20px
  width: 280px
  resize: none

  height: 40vh
  &::placeholder
    font-size: 14px
    color: #909090
.main
  display: block
  height: 7vh
  vertical-align: baseline
  &::placeholder
    font-size: 14px
    color: #909090
[contentEditable=true]:empty:before
  position: absolute
  z-index: -1
  user-select: none
  content: attr(data-text)
  color: #909090
  font-size: 15px
.blockRightNone
  height: 100%
  overflow: auto
  &__img
    display: block
    margin: 0 auto
    margin-top: 250px
  &__text
    display: block
    line-height: 32px
    margin-top: 23px
    width: 90%
    text-align: center
    font-size: 22px
    color: rgba(0,0,0,.24)
    margin-bottom: 50px
</style>