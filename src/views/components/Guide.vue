<template>
  <main>
    <section>
      <h3>快速上手</h3>
      <p>我们希望XDesign组件库可以提高你的效率，成为你开发中的X因素。</p>
      <p>
        因为当前XDesign组件库尚在开发阶段，并未publish至npm仓库，此阶段您可以从github仓库clone至您的项目中。
      </p>
      <article>
        <pre>
├─node_modules
<mark>├─packages
│  ├─assets
│  │  ├─fonts
│  │  └─styles
│  └─components
│      ├─button
│      │  └─src</mark>
├─public
├─src
│  ├─assets
│  │  ├─images
│  │  └─styles
│  ├─router
│  ├─store
│  ├─utils
│  └─views
│      └─components
└─tests
    ├─e2e
    │  ├─plugins
    │  ├─specs
    │  └─support
    └─unit
      </pre>
        <dl>
          <dt>1.下载代码</dt>
          <dd>
            <code>
              git clone https://github.com/guchengnan/xdesign.git
              <x-icon type="file-copy-fill" @click.native="handleCopy" />
              <x-icon type="github-fill" @click.native="handleGitStore" />
            </code>
          </dd>
          <dt>2.引入组件</dt>
          <dd>
            <code>
              import "@packages/assets/styles/xdesign.css"<br/>
              import XDesign from "@packages/components";<br/>
              // 按需导入<br/>
              Vue.use(XDesign.Button)<br/>
              // 全量导入<br/>
              Vue.use(XDesign);
            </code>
          </dd>
          <dt>注意：当前<u>@packages</u>已在webpack配置中进行了别名设置，你需要根据实际项目进行改写即可。</dt>
        </dl>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Guide',
  alias: '快速上手',
  order: 1,
  methods: {
    // 复制clone命令
    handleCopy() {
      let input = document.createElement("input");
      input.value = 'git clone https://github.com/guchengnan/xdesign.git';
      document.body.appendChild(input);
      input.select();
      document.execCommand("Copy");
      document.body.removeChild(input);
      alert('复制成功');
    },
    // 跳转至github
    handleGitStore() {
      window.open('http://github.com/guchengnan/xdesign.git')
    }
  }
}
</script>

<style lang="less" scoped>
article {
  background-color: #fff;
  display: flex;
  padding: 8px;
  margin-top: 12px;
  font-family: inherit;
  pre {
    width: 180px;
    font-family: inherit;
    mark {
      background-color: #c7d0ff;
    }
  }
  > dl {
    flex: 1;
    dd {
      > code {
        font-family: inherit;
        padding: 8px;
        color: #fff;
        display: block;
        border-radius: 3px;
        margin: 8px 0;
        line-height:20px;
        background-color: var(--default-color);
        i {
          margin-left: 12px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>