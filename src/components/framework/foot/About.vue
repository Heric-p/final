<template>
  <div id="about">
    <slot name="title"></slot>
    <div class="about">
      <slot name="about-item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
#about {
  flex: 1;
}
.about {
  display: flex;
}
</style>
