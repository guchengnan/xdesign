<template>
  <main>
    <section>
      <h3>基本使用</h3>
      <x-page-header title="标题文字"></x-page-header>
    </section>
    <section>
      <h3>带有返回图标</h3>
      <x-page-header title="标题文字" :back="true"></x-page-header>
    </section>
    <section>
      <h3>副标题或tag列表</h3>
      <x-page-header title="标题文字" :back="true" subTitle="副标题">
        <template slot="tags">
          <span class="status status-info">处置中</span>
          <span class="level level-error">特别重大</span>
        </template>
      </x-page-header>
    </section>
    <section>
      <h3>带有操作区</h3>
      <x-page-header title="标题文字" :back="true" subTitle="副标题">
        <template slot="tags">
          <span class="status status-info">处置中</span>
          <span class="level level-error">特别重大</span>
        </template>
        <template slot="extra">操作区</template>
      </x-page-header>
    </section>
    <section>
      <h3>带有标签页</h3>
      <x-page-header title="标题文字" :back="true" subTitle="副标题" :tabs="tabs">
        <template slot="tags">
          <span class="status status-info">处置中</span>
          <span class="level level-error">特别重大</span>
        </template>
        <template slot="extra">操作区</template>
      </x-page-header>
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
            <td>back</td>
            <td>返回箭头</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>title</td>
            <td>自定义标题文字</td>
            <td>String</td>
            <td></td>
          </tr>
          <tr>
            <td>subTitle</td>
            <td>自定义的二级标题文字</td>
            <td>String | slot</td>
            <td></td>
          </tr>
          <tr>
            <td>tags</td>
            <td>title 旁的 tag 列表</td>
            <td>slot</td>
            <td></td>
          </tr>
          <tr>
            <td>extra</td>
            <td>操作区，位于 title 行的行尾</td>
            <td>slot</td>
            <td></td>
          </tr>
          <tr>
            <td>tabs</td>
            <td>导航Tabs</td>
            <td>Array</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h3>事件</h3>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>@back</td>
            <td>返回按钮的点击事件</td>
            <td>Function</td>
          </tr>
          <tr>
            <td>@change</td>
            <td>切换面板的回调</td>
            <td>Function(action) {}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
// 引入x-pageHeader组件
import XPageHeader from '@/components/x-page-header'
export default {
  components: {
    XPageHeader,
  },
  data() {
    return {
      tabs: [
        {
          title: "全部",
        },
        {
          title: "中国",
        },
        {
          title: "澳大利亚",
        },
        {
          title: "俄罗斯",
        },
        {
          title: "乌兹别克斯坦",
        },
      ],
    };
  },
};
</script>

<style></style>
