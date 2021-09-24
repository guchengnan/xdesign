<template>
  <span class="x-tag" :class="activeClass">
    <slot>标签</slot>
  </span>
</template>

<script>
export default {
  name: "XTag",
  props: {
    color: {
      type: String,
      default: "status-error",
    },
  },
  computed: {
    activeClass() {
      return `x-tag-${this.color}`;
    },
  },
};
</script>

<style lang="scss" scoped>
/* 状态标签 */
.x-tag {
  color: #fff;
  height: 24px;
  line-height: 24px;
  border-radius: 2px;
  padding: 0 8px;
  font-size: 12px;
  user-select: none;
  display: inline-block;
  vertical-align: top;
  letter-spacing: 0;
  & + span {
    margin-left: 8px;
  }
  /* 待受理 */
  &.x-tag-status-error {
    color: #bc3232;
    background-color: #faefef;
  }
  /* 已受理 */
  &.x-tag-status-warn {
    color: #ff9f00;
    background-color: #fef7ec;
  }
  /* 处置中 */
  &.x-tag-status-info {
    color: #0288d1;
    background-color: #ebf6fc;
  }
  /* 已结束 */
  &.x-tag-status-success {
    color: #45ad49;
    background-color: #f1f9f1;
  }
  /* 等级标签 */
  /* 特别重大 */
  &.x-tag-level-error {
    background-color: #f03644;
  }
  /* 重大 */
  &.x-tag-level-warn {
    background-color: #f68e30;
  }
  /* 较大 */
  &.x-tag-level-alarm {
    background-color: #edbb3a;
  }
  /* 一般 */
  &.x-tag-level-info {
    background-color: #3665f0;
  }
}
</style>
