<template>
  <div>
    <table>
      <tr
        is="num"
        v-for="(item, index) in goodsArr"
        :key="index"
        :count="item.count"
        :goodsName="item.goodsName"
        :item="item"
      ></tr>
      <span>AllNumber:{{ Allnumber }}</span>
    </table>
  </div>
</template>

<script>
import num from "./components/num.vue";
export default {
  components: { num },
  data() {
    return {
      goodsArr: [
        { count: 0, goodsName: "Watermelon" },
        { count: 0, goodsName: "Banana" },
        { count: 0, goodsName: "Orange" },
        { count: 0, goodsName: "Pineapple" },
        { count: 0, goodsName: "Strawberry" },
      ],
    };
  },
  computed: {
    Allnumber() {
      return this.goodsArr.reduce((pre, item) => {
        pre += item.count;
        return pre;
      }, 0);
    },
  },
};
</script>

<style></style>
