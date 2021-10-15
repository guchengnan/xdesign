<template>
  <main>
    <section>
      <h3>主题色</h3>
      <article>
        <dl v-for="(item, index) in themeColor" :key="index">
          <dt :style="{ '--bgc': item.color }"></dt>
          <dd>
            <h4>{{ item.title }}</h4>
            <p>{{ item.color }}</p>
          </dd>
        </dl>
      </article>
    </section>
    <section>
      <h3>文字色</h3>
      <article>
        <dl v-for="(item, index) in TextColor" :key="index">
          <dt :style="{ '--bgc': item.color }"></dt>
          <dd>
            <h4>{{ item.title }}</h4>
            <p>{{ item.color }}</p>
          </dd>
        </dl>
      </article>
    </section>
    <section>
      <h3>辅助色</h3>
      <article>
        <dl v-for="(item, index) in subColor" :key="index">
          <dt :style="{ '--bgc': item.color }"></dt>
          <dd>
            <h4>{{ item.title }}</h4>
            <p>{{ item.color }}</p>
          </dd>
        </dl>
      </article>
    </section>
    <section>
      <h3>其它</h3>
      <article>
        <dl v-for="(item, index) in otherColor" :key="index">
          <dt :style="{ '--bgc': item.color }"></dt>
          <dd>
            <h4>{{ item.title }}</h4>
            <p>{{ item.color }}</p>
          </dd>
        </dl>
      </article>
    </section>
    <section>
      <h3>数据图表&多彩标签色</h3>
      <article>
        <dl v-for="(item, index) in labelColor" :key="index">
          <dt :style="{ '--bgc': item.color }"></dt>
          <dd>
            <h4>{{ item.title }}</h4>
            <p>{{ item.color }}</p>
          </dd>
        </dl>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      themeColor: [
        { color: "#4a62e7", title: "一级按钮等" },
        { color: "#5f78ff", title: "按钮悬停" },
        { color: "#c7d0ff", title: "按钮禁用" },
      ],
      TextColor: [
        { color: "#1d1f24", title: "标题正文" },
        { color: "#4b5d6c", title: "说明文字" },
        { color: "#919eab", title: "提示文字" },
        { color: "#c0c5ca", title: "弱提示文字" },
      ],
      subColor: [
        { color: "#17a514", title: "成功状态" },
        { color: "#f44336", title: "失败状态" },
        { color: "#ff9f00", title: "警告状态" },
      ],
      otherColor: [
        { color: "#f4f5f6", title: "背景色" },
        { color: "#d8d8d8", title: "辅助线条" },
        { color: "#e8e8e8", title: "表格线条" },
        { color: "#f9f9f9", title: "表头背景" },
        { color: "#ccd2d8", title: "组件边框" },
      ],
      labelColor: [
        { color: "#48bcff", title: "普通首选" },
        { color: "#26cf3b", title: "达成率等" },
        { color: "#ffc459", title: "搭配使用" },
        { color: "#ff5959", title: "搭配使用" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 12px;
}
article {
  display: flex;
  dl {
    width: 220px;
    height: 44px;
    display: flex;
    align-items: center;
    dt {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background-color: var(--bgc);
      margin-right: 12px;
    }
    dd {
      h4 {
        font-size: 14px;
        color: #1d1f24;
        font-weight: normal;
        line-height: 22px;
      }
      p {
        font-size: 12px;
        color: #4b5d6c;
        line-height: 20px;
      }
    }
  }
}
</style>
