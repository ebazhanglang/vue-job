<template>
  <span>
    <div class="abc">
      <img :src="url" alt="" />
      <p>{{ name }}</p>
    </div>
  </span>
</template>

<script>
export default {
  props: ["url", "name"],
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
