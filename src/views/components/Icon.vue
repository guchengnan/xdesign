<template>
  <main class="about">
    <section>
      <h3>图标列表</h3>
      <ul>
        <li v-for="(item, index) in glyphs" :key="index" @click="handleCopy(item)">
          <x-icon :type="item.font_class"></x-icon>
          <span>{{ item.font_class }}</span>
        </li>
      </ul>
    </section>
    <section>
      <h3>API</h3>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>图标类型</td>
            <td>String</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import glyphs from '@/utils/iconfont.js'
export default {
  name: "Icon",
  alias: 'Icon 图标',
  order: 6,
  data() {
    return {
      glyphs
    }
  },
  methods: {
    handleCopy(action) {
      const content = `<x-icon type="${action.font_class}" />`;
      let input = document.createElement("input");
      input.value = content;
      document.body.appendChild(input);
      input.select();
      document.execCommand("Copy");
      document.body.removeChild(input);
      alert(`复制成功\n${content}`);
    }
  }
};
</script>

<style lang="less" scoped>
ul {
  overflow: hidden;
  li {
    width: 110px;
    height: 90px;
    cursor: pointer;
    text-align: center;
    float: left;
    margin: 0 8px 8px 0;
    border-radius: 4px;
    font-size: 24px;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #fff;
      background-color: var(--theme-hover-color);
    }
    i {
      color: inherit;
      display: block;
      margin: 14px;
    }
    span {
      color: inherit;
      display: block;
    }
  }
}
</style>
