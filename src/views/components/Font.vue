<template>
  <main>
    <section>
      <h3>字体梯度</h3>
      <table>
        <tbody>
          <tr>
            <td>字号</td>
            <td>12</td>
            <td>14</td>
            <td>16</td>
            <td>20</td>
            <td>24</td>
            <td>30</td>
          </tr>
          <tr>
            <td>行高</td>
            <td>20</td>
            <td>22</td>
            <td>24</td>
            <td>28</td>
            <td>32</td>
            <td>38</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h3>字号梯度</h3>
      <dl v-for="(item, index) in fontSize" :key="index" class="font-size">
        <dt :style="{ fontSize: item.title }">
          {{ item.title }}&nbsp;&nbsp;&nbsp;&nbsp;{{ item.sub }}
        </dt>
        <dd>{{ item.desc }}</dd>
      </dl>
    </section>
    <section>
      <h3>不同样式的文本</h3>
      <dl class="font-text">
        <dt>普通文字</dt>
        <dd>平台管理</dd>
      </dl>
      <dl class="font-text">
        <dt>加粗文字</dt>
        <dd style="font-weight: 700">平台管理</dd>
      </dl>
      <dl class="font-text">
        <dt>禁用文字</dt>
        <dd style="color: #919eab">平台管理</dd>
      </dl>
      <dl class="font-text">
        <dt>代码文字</dt>
        <dd style="background-color: #f2f4f5">平台管理</dd>
      </dl>
      <dl class="font-text">
        <dt>带颜色底</dt>
        <dd style="background-color: #c7d0ff">平台管理</dd>
      </dl>
      <dl class="font-text">
        <dt>带下划线</dt>
        <dd style="text-decoration: underline">平台管理</dd>
      </dl>
      <dl class="font-text">
        <dt>带删除线</dt>
        <dd style="text-decoration: line-through">平台管理</dd>
      </dl>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Font',
  alias: '字体规范',
  order: 4,
  data() {
    return {
      fontSize: [
        {
          title: "30px",
          sub: "1378.6",
          desc: "用于着重强调的一级数据，DIN(粗体)，行高38px",
        },
        {
          title: "24px",
          sub: "平台管理",
          desc: "可作为备用梯度字体酌情使用，行高32px",
        },
        {
          title: "20px",
          sub: "平台管理",
          desc: "用于一级标题（页面标题、区块标题），二级数据（TTTGB字体），行高28px",
        },
        {
          title: "16px",
          sub: "平台管理",
          desc: "用于二级标题（卡片标题），行高24px",
        },
        {
          title: "14px",
          sub: "平台管理",
          desc: "用于常规字体（导航内容、按钮文字、说明文字、常规正文、列表内容、组件文字），行高22px",
        },
        {
          title: "12px",
          sub: "平台管理",
          desc: "用于辅助文字（面包屑、页面更新时间、组件的补充说明、数据图标的辅助文字），行高20px",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
dl.font-size {
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
  dt {
    font-size: var(--fontSize);
    font-weight: 700;
    color: #1d1f24;
    line-height: 1.5;
  }
  dd {
    color: #4b5d6c;
    font-size: 14px;
    line-height: 22px;
  }
}
dl.font-text {
  font-size: 14px;
  line-height: 22px;
  display: flex;
  color: #1d1f24;
  dt::after {
    content: "：";
  }
}
</style>
