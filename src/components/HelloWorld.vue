<template>
  <div class="">
    <el-input v-model="inpContent"></el-input>
    <el-button type="primary" @click="getvalue">获取数据</el-button
    ><el-button type="primary" @click="setvalue">添加数据</el-button>
  </div>
</template>
<script>
export default {
  name: "blog",
  data() {
    return {
      inpContent: "",
    };
  },
  methods: {
    getvalue() {
      this.$http.get("/api/getvalue", { params: { id: 1 } }).then((res) => {
        console.log("res", res);
        this.inpContent = res.data[0].name;
      });
    },
    setvalue() {
      this.$http
        .post("/api/setvalue", { id: 1, name: this.inpContent })
        .then((res) => {
          console.log("res", res);
        });
    },
  },
};
</script>
