<template>
  <i class="x-icon" :class="['x-icon-' + type]"></i>
</template>

<script>
export default {
  name: "XIcon",
  props: {
    type: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import url('../../../assets/styles/iconfont.css');
</style>
