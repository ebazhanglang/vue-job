<template>
  <tr>
    <td>
      <input type="number" v-model.number="item.count" />
    </td>
    <td>
      <span> {{ goodsName }} </span>
    </td>
    <td>
      <span v-show="item.count <= 0">εεδΊ!!!</span>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["count", "goodsName", "item"],
};
</script>

<style></style>
