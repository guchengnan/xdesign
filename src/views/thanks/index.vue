<template>
  <main>
    <section>
      <h3>致谢</h3>
      <figure v-if="false">
        <img src="~@/assets/images/thanks/wtdwu.jpg" />
        <figcaption>
          <h5>wtdwu</h5>
          <p>
            该款UI组件库的调色师、组件规范制定者，专业的UI设计师、UE设计师···
          </p>
        </figcaption>
      </figure>
      <figure>
        <img src="~@/assets/images/thanks/iconfont.jpg" />
        <figcaption>
          <h5>iconfont-阿里巴巴矢量图标库</h5>
          <p>
            国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造，设计和前端开发的便捷工具
          </p>
        </figcaption>
      </figure>
      <figure>
        <img src="~@/assets/images/thanks/100font.jpg" />
        <figcaption>
          <h5>100font.com</h5>
          <p>
            一个专门收集整理“免费商用字体、免版权字体、没有版权的字体、无版权的字体”的字体下载网站，免费下载、免费商用！
          </p>
        </figcaption>
      </figure>
      <figure>
        <img src="~@/assets/images/thanks/harmony.svg" />
        <figcaption>
          <h5>Harmonyos</h5>
          <p>
            华为HUAWEI鸿蒙OS是新一代的智能终端操作系统；鸿蒙HarmonyOS开发者、应用开发、设备开发、鸿蒙生态、分布式系统为不同设备的智能化、互联与协同提供了统一的语言。华为鸿蒙智能手机操作系统带来简洁，流畅，连续，安全可靠的全场景交互体验。
          </p>
        </figcaption>
      </figure>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
figure {
  display: flex;
  margin: 24px 0;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 12px;
    border: 1px solid #e1e1e1;
  }
  figcaption {
    h5 {
      margin-bottom: 4px;
      font-size: 12px;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.45);
    }
    p {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
    }
  }
}
</style>
