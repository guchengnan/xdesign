<template>
  <div class="x-page-header" :type="type">
    <div class="x-page-header-left">
      <header>
        <x-icon v-if="back" type="arrowleft" @click.native="handleBack"></x-icon>
        <h2>{{ title }}</h2>
        <p v-if="subTitle">{{ subTitle }}</p>
        <slot v-if="$slots.subTitle" name="subTitle"></slot>
        <slot name="tags"></slot>
      </header>
      <ul v-if="tabs.length">
        <li
          v-for="(item, index) in tabs"
          :key="index"
          :class="{ active: index === activeIndex }"
          @click="handleTab(item, index)"
        >
          {{ item[replaceFields.title] }}
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
  name: 'XPageHeader',
  props: {
    // 标题
    title: {
      type: String,
      default: '',
    },
    // 副标题或说明文字，支持slot插槽
    subTitle: {
      type: String,
      default: '',
    },
    // 返回按钮
    back: {
      type: Boolean,
      default: false,
    },
    // tab数据
    tabs: {
      type: Array,
      default: () => [],
    },
    // 替换tabs中title字段为tabs中对应的字段
    replaceFields: {
      type: Object,
      default: () => {
        return {
          title: 'title'
        }
      },
    },
  },
  data() {
    return {
      activeIndex: 0,
    }
  },
  computed: {
    type() {
      const tabs = this.tabs && this.tabs.length
      return tabs ? 'tab-bar' : 'title-bar'
    },
  },
  methods: {
    // tab 被点击的回调
    handleTab(action, index) {
      this.activeIndex = index
      this.$emit('change', action)
    },
    // 返回按钮的点击事件
    handleBack() {
      this.$emit('back')
    }
  },
}
</script>

<style lang="less" scoped>
.x-page-header {
  padding: 0 24px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  &[type='title-bar'] {
    height: 56px;
    h2 {
      height: 56px;
      line-height: 56px;
    }
    ul {
      display: none;
    }
  }
  &[type='tab-bar'] {
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
      > .x-icon {
        font-size: 20px;
        margin-right: 14px;
        cursor: pointer;
        &:hover {
          color: var(--theme-default-color);
        }
      }
      > h2 {
        font-size: 20px;
        color: var(--default-color);
        font-weight: 500;
        margin-right: 16px;
      }
      > p {
        margin-right: 14px;
        color: var(--tips-color);
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
        color: var(--desc-color);
        &:hover {
          color: var(--theme-default-color);
        }
        &.active {
          color: var(--theme-default-color);
          border-bottom-color: var(--theme-default-color);
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
