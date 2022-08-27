<template>
  <span>
    <div class="abc">
      <img src="./img/1.png" alt="" />
      <p :style="{ backgroundColor: str }" @click="add">{{ title }}</p>
    </div>
  </span>
</template>

<script>
export default {
  data() {
    return {
      str: "",
      title: "我是凶残蟑螂恶霸",
    };
  },
  methods: {
    add() {
      this.str = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
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
}
</style>
