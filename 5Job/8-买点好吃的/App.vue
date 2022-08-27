<template>
  <div>
    <h3>商品清单如下：</h3>
    <p v-for="(item, index) in arr" :key="index">
      {{ item.shopName }}--{{ item.price }}/份
    </p>
    <h3>请选择购买数量</h3>
    <num :arr="arr" @newAdd="newAdd" @newLessen="newLessen"></num>
    <p>总价为:{{ allPrice }}</p>
  </div>
</template>

<script>
import num from "./components/num.vue";
export default {
  components: { num },
  data() {
    return {
      arr: [
        { shopName: "可比克薯片", price: 5.5, count: 0 },
        { shopName: "草莓酱", price: 3.5, count: 0 },
        { shopName: "红烧肉", price: 55, count: 0 },
        { shopName: "方便面", price: 12, count: 0 },
      ],
    };
  },
  methods: {
    newAdd(i) {
      this.arr[i].count++;
    },
    newLessen(i) {
      this.arr[i].count > 0 && this.arr[i].count--;
    },
  },
  computed: {
    allPrice() {
      return this.arr.reduce((pre, item) => {
        pre += item.price * item.count;
        return pre;
      }, 0);
    },
  },
};
</script>

<style></style>
