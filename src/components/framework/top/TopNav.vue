<template>
  <div>
    <el-row class="top-nav">
      <el-col :span="3" :offset="4" class="top-nav-item-ext" @click.native="goPath('/home')">
        <el-image :src="require('../../../assets/logo/logo.gif')" class="logo" fit='fill'></el-image>
      </el-col>
      <el-col :span="1" :offset="0" class="top-nav-item" @click.native="goPath('/course')">课程</el-col>
      <el-col :span="1" :offset="0" class="top-nav-item" @click.native="goPath('/discuss')">讨论区</el-col>
      <el-col :span="1" :offset="0" class="top-nav-item" @click.native="goPath('/test')">课后练习</el-col>
      <el-col :span="3" :offset="4" class="top-nav-item-ext">
        <el-input placeholder="搜索感兴趣的课程">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="1" :offset="0" class="top-nav-item-ext"></el-col>
      <el-col :span="1" :offset="0" class="top-nav-item" @click.native="goPath('/login')">登录</el-col>
      <el-col :span="1" :offset="0" class="top-nav-item" @click.native="goPath('/register')">注册</el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "TopNav",
    data() {
      return {
      };
    },
    methods: {
      goPath(path) {
        this.$router.push(path);
      },
      err(){
        console.log(this.logo);
      }
    },
  };
</script>

<style scoped>
  .top-nav {
    width: 100%;
    position: fixed;
    top: 0px;
    text-align: center;
    background-color: #ffffff;
  }

  .top-nav-item,
  .top-nav-item-ext {
    height: 70px;
    line-height: 70px;
  }

  .top-nav-item:hover {
    cursor: pointer;
    background-color: #f4f4f4;
    color: #00c758;
  }
  /* logo样式控制 */
  .logo{
    width: 100%;
    height: 70px;
  }
</style>
