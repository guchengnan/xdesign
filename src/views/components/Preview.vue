<template>
  <main>
      <section>
        <h3>图片/视频预览</h3>
        <template v-for="item in fileList">
          <img v-if="item.fileType === 0" :src="item.fileUrl" :key="item.fileId" @click="handlePreview(item)">
          <video v-else :src="item.fileUrl" :key="item.fileId" @click="handlePreview(item)"></video>
        </template>
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
            <td>visible</td>
            <td>是否可见</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>fileList</td>
            <td>预览文件集合</td>
            <td>Array</td>
            <td></td>
          </tr>
          <tr>
            <td>currentFile</td>
            <td>当前预览文件</td>
            <td>Object</td>
            <td></td>
          </tr>
          <tr>
            <td>replaceFields</td>
            <td>替换 fileList 中 fileId,fileUrl,fileType 字段为 fileList 中对应的字段</td>
            <td>Object</td>
            <td>{ fileId:'fileId', fileUrl:'fileUrl', fileType:'fileType' }</td>
          </tr>
        </tbody>
      </table>
    </section>
      <!-- 预览组件 -->
      <x-preview v-if="visible" :visible.sync="visible" :file-list="fileList" :currentFile="currentFile"></x-preview>
  </main>
</template>

<script>
export default {
    name: 'Preview',
    alias: 'Preview 预览',
    order: 7,
    data() {
      return {
        visible: false,
        currentFile: null,
        fileList: [{
          fileId: 1,
          fileUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202011%2F12%2F20201112132046_zynsq.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640512611&t=fa928ed760e017641a4cbc40c091de43',
          fileType: 0
        },{
          fileId: 2,
          fileUrl: 'https://view.2amok.com/20200617/e2efd835b734a00b39a99b7179baaa7b.mp4',
          fileType: 2
        },{
          fileId: 3,
          fileUrl: 'https://img2.baidu.com/it/u=752144878,633709515&fm=26&fmt=auto',
          fileType: 0
        },{
          fileId: 4,
          fileUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F5%2F57d60e916a589.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640512720&t=fb9047e4c95f85046ff704245d3d3c31',
          fileType: 0
        },{
          fileId: 5,
          fileUrl: 'https://view.2amok.com/20200618/b571eb4e6c02bf7a3d0fb6f2f205f7d2.mp4',
          fileType: 2
        },{
          fileId: 6,
          fileUrl: 'http://panzheng.xyz/images/wechat.jpg',
          fileType: 0
        }]
      }
    },
    methods: {
      handlePreview(action) {
        this.currentFile = action
        this.visible = true
      }
    }
}
</script>

<style lang="less" scoped>
img, video {
  width: 80px;
  height: 80px;
  padding: 4px;
  cursor: pointer;
  object-fit: contain;
  margin-right: 8px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid var( --area-border-color);
}
</style>