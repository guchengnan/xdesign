<template>
  <main>
    <section>
      <h3>状态类</h3>
      <x-tag color="status-error">待受理</x-tag>
      <x-tag color="status-warn">已受理</x-tag>
      <x-tag color="status-info">处置中</x-tag>
      <x-tag ccolor="status-success">已结束</x-tag>
    </section>
    <section>
      <h3>级别类</h3>
      <x-tag color="level-error">特别重大</x-tag>
      <x-tag color="level-warn">重大</x-tag>
      <x-tag color="level-alarm">较大</x-tag>
      <x-tag color="level-info">一般</x-tag>
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
            <td>color</td>
            <td>标签色（当前系统仅支持自带标签色）</td>
            <td>String</td>
            <td>status-error</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
