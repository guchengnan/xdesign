<template>
  <main>
    <section>
      <h3>按钮类型</h3>
      <x-button>默认按钮</x-button>
      <x-button type="primary">primary按钮</x-button>
      <x-button type="danger">danger按钮</x-button>
      <x-button type="link">link按钮</x-button>
    </section>
    <section>
      <h3>按钮尺寸</h3>
      <x-button size="small" type="primary">small按钮</x-button>
      <x-button type="primary">middle按钮</x-button>
      <x-button size="large" type="primary">large按钮</x-button>
    </section>
    <section>
      <h3>Block按钮</h3>
      <x-button type="primary" block>Block填充按钮</x-button>
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
            <td>size</td>
            <td>设置按钮大小，可选值为small、large</td>
            <td>String</td>
            <td>middle</td>
          </tr>
          <tr>
            <td>type</td>
            <td>设置按钮类型，可选值为primary、danger、link</td>
            <td>String</td>
            <td>default</td>
          </tr>
          <tr>
            <td>block</td>
            <td>将按钮宽度调整为其父宽度的选项</td>
            <td>Boolean</td>
            <td>false</td>
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
            <td>@click</td>
            <td>点击按钮时的回调</td>
            <td>Function(event) {}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Button',
  alias: 'Button 按钮',
  order: 5
};
</script>

<style></style>
