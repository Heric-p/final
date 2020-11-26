<template>
  <div
    @click="goPath"
    @mouseover="overStyle"
    @mouseleave="leaveStyle"
    :class="{ overStyle: isOver, leaveStyle: !isOver, base: true }"
  >
    <slot name="about-link"></slot>
  </div>
</template>

<script>
export default {
  name: "AboutItem",
  data() {
    return {
      isOver: false,
    };
  },
  props: {
    toPath: String,
  },
  methods: {
    // 动态控制样式
    overStyle() {
      this.isOver = true;
    },
    leaveStyle() {
      this.isOver = false;
    },
    // 打开相应网页
    goPath() {
      // 判断若是http开头则是一个网站，需要在新窗口打开。若不是则为一个路由，由router处理。
      if (this.toPath.indexOf("http") == 0) {
        window.location.href = this.toPath;
      } else {
        console.log("这是一个路由");
        this.$router.push(this.toPath);
      }
    },
  },
};
</script>

<style scoped>
.base {
  margin-top: -10px;
}

.overStyle {
  color: #00c758;
  cursor: pointer;
}

.leaveStyle {
  color: #cccccc;
}
</style>
