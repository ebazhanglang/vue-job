<template>
  <div>
    <p v-for="(item, index) in arr" :key="index">
      {{ item.shopName }}
      <button @click="add(index)">+</button>{{ item.count
      }}<button @click="lessen(index)">-</button>
    </p>
  </div>
</template>

<script>
export default {
  props: ["arr"],
  methods: {
    add(i) {
      this.$emit("newAdd", i);
    },
    lessen(i) {
      this.$emit("newLessen", i);
    },
  },
};
</script>

<style></style>
