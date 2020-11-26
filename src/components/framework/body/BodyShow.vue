<template>
  <div class="body">
    <el-row>
      <el-col :span="16" :offset="4">
        <slot></slot>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BodyShow'
};
</script>

<style scoped>
.body {
  margin-top: 70px;
}
</style>
