<template>
  <main>
    <section>
      <h3>基本信息</h3>
      <table>
        <tbody>
          <tr>
            <td>姓名</td>
            <td>潘正</td>
            <td>性别</td>
            <td>男</td>
          </tr>
          <tr>
            <td>年龄</td>
            <td>{{ new Date().getFullYear() - 1994 }}</td>
            <td>籍贯</td>
            <td>河北省保定市</td>
          </tr>
          <tr>
            <td>电话</td>
            <td>
              <a href="tel:13538963128">135-3896-3128</a>
            </td>
            <td>邮箱</td>
            <td>
              <a href="mailto:1611604515@qq.com">1611604515@qq.com</a>
            </td>
          </tr>
          <tr>
            <td>专业</td>
            <td>计算机软件技术</td>
            <td>现住址</td>
            <td>广州市天河区</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h3>工作经历</h3>
      <p>现就职于【腾讯云华南区域支撑中心】，任职【Web前端开发工程师】</p>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
table {
  td:nth-child(1),
  td:nth-child(3) {
    max-width: 50px;
    background-color: #f9f9f9;
  }
}
</style>
