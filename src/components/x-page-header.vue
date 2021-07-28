<template>
  <div class="x-page-header" :type="type">
    <div class="x-page-header-left">
      <header>
        <a v-if="back" href="javascript:;" @click.stop="backClick">返回</a>
        <h2>{{ title }}</h2>
        <slot v-if="$slots.subTitle" name="subTitle"></slot>
        <p v-else>{{ subTitle }}</p>
        <slot name="tags"></slot>
      </header>
      <ul>
        <li
          v-for="(item, index) in tabs"
          :key="index"
          :class="{ active: index === activeIndex }"
          @click="tabClick(item, index)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="x-page-header-right">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "XPageHeader",
  props: {
    back: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    type() {
      const tabs = this.tabs && this.tabs.length;
      return tabs ? "nav-bar" : "title-bar";
    },
  },
  methods: {
    // tab 被点击的回调
    tabClick(action, index) {
      this.activeIndex = index;
      this.$emit("change", action);
    },
    // 返回按钮的点击事件
    backClick() {
      this.$emit("back");
    },
  },
};
</script>

<style lang="scss" scoped>
.x-page-header {
  padding: 0 24px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  &[type="title-bar"] {
    height: 56px;
    h2 {
      height: 56px;
      line-height: 56px;
    }
    ul {
      display: none;
    }
  }
  &[type="nav-bar"] {
    height: 86px;
    h2 {
      height: 50px;
      line-height: 50px;
    }
  }
  &-left {
    header {
      display: flex;
      align-items: center;
      > a {
        width: 28px;
        height: 28px;
        text-indent: -999em;
        margin-right: 16px;
        background-image: url("~@/assets/images/icon_back_default.svg");
        background-position: center center;
        background-repeat: no-repeat;
        &:hover {
          background-image: url("~@/assets/images/icon_back_hover.svg");
        }
      }
      > h2 {
        font-size: 20px;
        color: #1d1f25;
        font-weight: 500;
        margin-right: 16px;
      }
      > p {
        margin-right: 16px;
        color: #919eab;
        font-size: 14px;
      }
    }
    ul {
      height: 36px;
      line-height: 34px;
      display: flex;
      li {
        height: 36px;
        margin-right: 40px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        font-size: 14px;
        color: #4b5d6c;
        &.active {
          color: #3665f0;
          border-bottom-color: #3665f0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
