<template>
  <main>
    <section>
      <h3>基本使用</h3>
      <x-page-header title="标题文字"></x-page-header>
    </section>
    <section>
      <h3>带有返回图标</h3>
      <x-page-header title="标题文字" :back="true" @back="handle"></x-page-header>
    </section>
    <section>
      <h3>副标题或tag列表</h3>
      <x-page-header title="标题文字" :back="true" subTitle="更新截止于：2021-11-25 18:02:38">
        <template slot="tags">
          <x-tag type="success">已结束</x-tag>
          <x-tag theme="dark" type="warn">重大</x-tag>
        </template>
      </x-page-header>
    </section>
    <section>
      <h3>带有操作区</h3>
      <x-page-header title="标题文字" :back="true" subTitle="副标题">
        <template slot="tags">
          <x-tag type="success">已结束</x-tag>
          <x-tag theme="dark" type="warn">重大</x-tag>
        </template>
        <template slot="extra">操作区</template>
      </x-page-header>
    </section>
    <section>
      <h3>带有标签页</h3>
      <x-page-header
        title="标题文字"
        :back="true"
        subTitle="副标题"
        :tabs="tabs"
      >
        <template slot="tags">
          <x-tag type="error">待受理</x-tag>
          <x-tag theme="dark" type="info">一般</x-tag>
        </template>
        <template slot="extra">
          <x-button type="primary"><x-icon type="plus" />新建事件</x-button>
        </template>
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
          <tr>
            <td>replaceFields</td>
            <td>替换Tabs中title字段</td>
            <td>Object</td>
            <td>{ title: 'title' }</td>
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
export default {
  name: 'PageHeader',
  alias: 'PageHeader 页头',
  order: 7,
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
  methods: {
    handle(){
      alert('返回事件回调')
    }
  }
}
</script>
