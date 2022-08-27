<template>
  <div>
    <div class="abc">
      <img :src="url" alt="" />
      <p :style="{ backgroundColor: str }" @click="add">
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "",
    };
  },
  props: ["url", "name"],
  methods: {
    add() {
      this.str = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)})`;
      this.$emit("love", this.name);
    },
  },
};
</script>

<style>
.abc {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}
img {
  width: 100%;
  height: 200px;
  background-color: rgb(100, 100, 100);
}
</style>
