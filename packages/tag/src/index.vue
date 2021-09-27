<template>
  <div
    v-if="visible"
    class="x-tag"
    :theme="theme"
    :type="type"
    :closable="closable"
  >
    <span><slot>标签</slot></span>
    <a
      v-if="closable"
      href="javascript:;"
      class="x-tag-close"
      @click.stop="handleClose(data)"
      >×</a
    >
  </div>
</template>

<script>
export default {
  name: "XTag",
  props: {
    theme: {
      type: String,
      default: "light",
    },
    type: {
      type: String,
      default: "default",
    },
    closable: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    handleClose(action) {
      this.visible = false;
      this.$emit("close", action);
    },
  },
};
</script>

<style lang="scss" scoped>
/* 状态标签 */
.x-tag {
  height: 24px;
  line-height: 24px;
  border-radius: 2px;
  padding: 0 8px;
  font-size: 12px;
  user-select: none;
  display: inline-flex;
  vertical-align: top;
  letter-spacing: 0;
  align-items: center;
  justify-content: center;
  & + & {
    margin-left: 8px;
  }
  // 浅色主题
  &[theme="light"] {
    &[type="default"] {
      color: #4b5d6c;
      background-color: #f1f2f4;
    }
    &[type="info"] {
      color: #0288d1;
      background-color: #ebf6fc;
    }
    &[type="success"] {
      color: #45ad49;
      background-color: #f1f9f1;
    }
    &[type="warn"] {
      color: #ff9f00;
      background-color: #fef7ec;
    }
    &[type="error"] {
      color: #bc3232;
      background-color: #faefef;
    }
  }
  // 深色主题
  &[theme="dark"] {
    color: #fff;
    &[type="error"] {
      background-color: #f03644;
    }
    &[type="warn"] {
      background-color: #f68e30;
    }
    &[type="alarm"] {
      background-color: #edbb3a;
    }
    &[type="info"] {
      background-color: #3665f0;
    }
  }
  // 暗黑主题（后期迭代）
  // &[theme="dark"] {
  //   &[type="error"] {
  //     color: #ff8d8d;
  //     background-color: rgba(241, 54, 54, 0.25);
  //   }
  //   &[type="warn"] {
  //     color: #ff913f;
  //     background-color: rgba(255, 145, 63, 0.25);
  //   }
  //   &[type="success"] {
  //     color: #00ea9c;
  //     background-color: rgba(0, 234, 156, 0.25);
  //   }
  //   &[type="info"] {
  //     color: #91cdff;
  //     background-color: rgba(100, 179, 245, 0.3);
  //   }
  // }
  > span {
    color: inherit;
    font-size: inherit;
  }
  &[closable] > span {
    display: inline-block;
    max-width: 64px;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .x-tag-close {
    color: #4b5d6c;
    font-size: 14px;
    &:hover {
      color: #1d1f25;
    }
  }
}
</style>
