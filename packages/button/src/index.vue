<template>
  <button class="x-button" :size="size" :type="type" :block="block" @click="handleClick">
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  name: "XButton",
  props: {
    size: {
      type: String,
      // small middle large
      default: "middle",
    },
    type: {
      type: String,
      // primary danger link
      default: 'default'
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
};
</script>

<style lang="scss" scoped>
.x-button {
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: transparent;
  & + button:not([block]) {
    margin-left: 8px;
  }
  &[size=small] {
    height: 24px;
    font-size: 12px;
    padding-left: 7px;
    padding-right: 7px;
  }
  &[size=middle] {
    height: 32px;
    font-size: 14px;
    padding-left: 16px;
    padding-right: 16px;
  }
  &[size=large] {
    height: 40px;
    font-size: 16px;
    padding-left: 23px;
    padding-right: 23px;
  }
  &[type=default] {
    color: #4B5D6C;
    border: 1px solid #DCDCDC;
    background-color: #fff;
  }
  &[type=primary] {
    color: #fff;
    background-color: #4A62E7;
  }
  &[type=danger] {
    color: #fff;
    background-color: #f44336;
  }
  &[type=link] {
    color: #4A62E7;
  }
  &[block] {
    width: 100%;
  }
}
</style>
