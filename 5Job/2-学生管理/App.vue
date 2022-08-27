<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="uName" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.number="uAge" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="gender">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add()">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>

        <tr v-for="(item, index) in arr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.uName }}</td>
          <td>{{ item.uAge }}</td>
          <td>{{ item.gender }}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true,
      uName: "",
      uAge: "",
      gender: "",
      id: "",
      arr: [{ uName: "牛逼", uAge: "18", gender: "男" }],
    };
  },
  methods: {
    add() {
      if (this.flag == false) {
        this.arr[this.id].uName = this.uName;
        this.arr[this.id].uAge = this.uAge;
        this.arr[this.id].gender = this.gender;
        return;
      } else if (this.uName == "" || this.uAge == "" || this.gender == "") {
        return alert("请输入内容");
      }
      this.arr.push({
        uName: this.uName,
        uAge: this.uAge,
        gender: this.gender,
      });
      this.uName = "";
      this.uAge = "";
      this.gender = "";
      this.flag = false;
    },
    del(i) {
      this.arr.splice(i, 1);
    },
    edit(i) {
      this.uName = this.arr[i].uName;
      this.uAge = this.arr[i].uAge;
      this.gender = this.arr[i].gender;
      this.id = i;
    },
  },
};
</script>
