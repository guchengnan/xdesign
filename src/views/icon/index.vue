<template>
  <main>
    <section>
      <h3>图标列表</h3>
      <ul>
        <li
          v-for="item in iconList"
          :key="item.icon_id"
          @click="handleCopy(item)"
        >
          <x-icon :type="item.font_class" />
          <p>{{ item.font_class }}</p>
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
import { config } from "./iconfont";
console.log(config);
export default {
  computed: {
    iconList() {
      return config.glyphs;
    },
  },
  methods: {
    // 复制粘贴
    handleCopy(item) {
      const content = `<x-icon type="${item.font_class}" />`;
      let input = document.createElement("input");
      input.value = content;
      document.body.appendChild(input);
      input.select();
      document.execCommand("Copy");
      document.body.removeChild(input);
      alert(`复制成功\n${content}`);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 120px;
    height: 70px;
    text-align: center;
    cursor: pointer;
    padding: 12px 0 0;
    margin: 2px;
    border-radius: 4px;
    p {
      font-size: 10px;
      line-height: 20px;
    }
    i {
      font-size: 24px;
    }
    &:hover {
      i,
      p {
        color: #fff;
      }

      background-color: #4a62e7;
    }
  }
}
</style>
