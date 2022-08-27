<template>
  <div>
    <dog
      v-for="(item, index) in arr"
      :key="index"
      :url="item.dogImgUrl"
      :name="item.dogName"
      @love="fn"
    ></dog>
    <p>喜欢的狗:</p>
    <ul>
      <li v-for="(item, index) in love" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import dog from "./components/dog.vue";
export default {
  components: { dog },
  data() {
    return {
      love: [],
      arr: [
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl: "",
          dogName: "泰迪",
        },
        {
          dogImgUrl: "",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "哈士奇",
        },
        {
          dogImgUrl: "",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl: "",
          dogName: "萨摩耶",
        },
      ],
    };
  },
  methods: {
    fn(name) {
      this.love.push(name);
    },
  },
};
</script>

<style></style>
