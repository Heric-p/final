<template>
  <div class="foot">
    <el-row>
      <el-col :span="8" :offset="4" class="left">
        <el-image :src="require('../../../assets/logo/foot.gif')" fit="fill" class="logo"></el-image>
        <p>高校视频点播系统，你的移动课堂，愿让你我的知识得到分享。</p>
      </el-col>

      <el-col :span="8" :offset="0" class="right">
        <about>
          <h3 slot="title">关于我们</h3>
          <div slot="about-item">
            <about-item :toPath="toPath.about">
              <p slot="about-link">关于我们</p>
            </about-item>
            <about-item :toPath="toPath.call">
              <p slot="about-link">联系我们</p>
            </about-item>
            <about-item :toPath="toPath.sug">
              <p slot="about-link">意见反馈</p>
            </about-item>
          </div>
        </about>
        <about>
          <h3 slot="title">关注我们</h3>
          <div slot="about-item">
            <about-item :toPath="toPath.about">
              <el-popover placement="top-start" title="扫码关注" width="100px" height="100px" trigger="hover"
                slot="about-link">
                <div style="width:150px;height:150px;">
                  <img style="width:100%;height:100%;object-fit: cover;" src="../../../assets/img/foot/call.jpg" alt />
                </div>
                <img src="../../../assets/img/foot/iswechat.svg" alt="" width="30%" style="margin-top: 20px;"
                  slot="reference">
              </el-popover>
            </about-item>
          </div>
        </about>
        <about>
          <h3 slot="title">友情链接 </h3>
          <div slot="about-item">
            <about-item :toPath="otherLink.mooc">
              <p slot="about-link">慕课</p>
            </about-item>
            <about-item :toPath="otherLink.xuetang">
              <p slot="about-link">B站</p>
            </about-item>
            <about-item :toPath="otherLink.bilibili">
              <p slot="about-link">学堂在线</p>
            </about-item>
          </div>
        </about>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import About from "./About";
  import AboutItem from "./AboutItem.vue";

  export default {
    name: "Foot",
    data() {
      return {
        // 路由设置
        toPath: {
          about: '/home/about',
          call: '/home/call',
          sug: '/home/suggertion'
        },
        // 友情链接设置
        otherLink: {
          mooc: 'https://www.icourse163.org/',
          xuetang: 'https://www.xuetangx.com/',
          bilibili: 'https://www.bilibili.com/'
        }
      }
    },
    components: {
      About,
      AboutItem,
    },
  };
</script>

<style scoped>
  .foot {
    width: 100%;
    height: 210px;
    background-color: #272727;
    position: absolute;
    bottom: 0px;
    color: #cccccc;
  }

  .left,
  .right {
    margin-top: 40px;
  }

  .right {
    display: flex;
  }

  /* logo部分样式设置 */
  .logo {
    width: 70%;
  }
</style>
