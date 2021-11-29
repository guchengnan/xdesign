<template>
  <main>
    <section>
      <h3>不同主题</h3>
      <x-tag>默认</x-tag>
      <x-tag type="error">待受理</x-tag>
      <x-tag type="warn">已受理</x-tag>
      <x-tag type="info">处置中</x-tag>
      <x-tag type="success">已结束</x-tag>
      <br /><br />
      <x-tag theme="dark" type="error">特别重大</x-tag>
      <x-tag theme="dark" type="warn">重大</x-tag>
      <x-tag theme="dark" type="alarm">较大</x-tag>
      <x-tag theme="dark" type="info">一般</x-tag>
    </section>
    <section>
      <h3>可关闭标签</h3>
      <x-tag closable :data="{ title: '我的名字是张三' }" @close="handleClose"
        >我的名字是张三</x-tag
      >
      <x-tag closable  :data="{ title: '较大' }" theme="dark" type="alarm" @close="handleClose"
        >较大</x-tag
      >
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
            <td>theme</td>
            <td>设置标签主题，可选值为dark</td>
            <td>String</td>
            <td>light</td>
          </tr>
          <tr>
            <td>type</td>
            <td>设置标签类型，可选值为info、success、warn、error</td>
            <td>String</td>
            <td>default</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h3>事件</h3>
      <table>
        <thead>
          <tr>
            <th>事件名称</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>close</td>
            <td>关闭时的回调</td>
            <td>Function(action) {}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Tag',
  alias: 'Tag 标签',
  order: 8,
  methods: {
    handleClose(action) {
      console.log(action)
    },
  },
}
</script>

<style></style>
