<template>
  <main>
    <article>
      <h1>XDesign组件库</h1>
      <p>我们希望XDesign组件库可以成为你开发中的x因素，进而提高你的效率。</p>
      <ul>
        <li>
          <a href="https://github.com/guchengnan/xdesign" target="_blank"
            >GitHub ★</a
          >
        </li>
        <li><router-link to="/tag">Tag标签</router-link></li>
        <li><router-link to="/pageheader">PageHeader页头</router-link></li>
        <li><router-link to="/thanks">特别鸣谢</router-link></li>
      </ul>
    </article>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  background-color: transparent!important;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 48px;
  article {
    width: 100%;
    height: 100%;
    padding: 24px;
    cursor: pointer;
    background-image: linear-gradient(0deg, #fff, #f3f5f8);
    border: 2px solid #fff;
    box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, 0.1), -8px -8px 20px 0 #fff;
    transition: all 0.3s ease-in-out;
    border-radius: 4px;
    h1 {
      display: flex;
      width: 200px;
      height: 56px;
      text-indent: -100em;
      justify-content: flex-start;
      align-content: center;
      background: transparent url('~@/assets/images/logo.svg') center center;
      background-size: cover;
    }
    p {
      font-size: 14px;
      color: #98a3b7;
      line-height: 20px;
      margin: 12px 0 24px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      a {
        font-size: 14px;
        color: #253554;
        height: 40px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(0deg, #fff, #f3f5f8);
        border: 2px solid #fff;
        box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, 0.1), -8px -8px 20px 0 #fff;
        border-radius: 5px;
        transition: all 0.2s ease-in-out;
        margin: 12px;
        &:hover {
          color: #0052d9;
          background-color: #f3f5f8;
          box-shadow: inset 8px 8px 20px 0 rgba(55, 99, 170, 0.11),
            inset -8px -8px 20px 0 #fff;
        }
      }
    }
  }
  footer {
    font-size: 14px;
    text-align: center;
    color: #98a3b7;
    line-height: 20px;
  }
}
</style>
