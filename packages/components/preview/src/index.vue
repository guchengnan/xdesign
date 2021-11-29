<template>
  <div v-if="visible" class="x-preview">
    <span v-show="currentIndex !== 0" class="x-preview-prev" @click="handleChange('prev')">
      <x-icon type="left" />
    </span>
    <span v-show="currentIndex  !== fileList.length-1" class="x-preview-next" @click="handleChange('next')">
      <x-icon type="right" />
    </span>
    <span class="x-preview-close" @click="handleChange('close')">
      <x-icon type="close" />
    </span>
    <div class="x-preview-contain">
      <img v-if="fileList[currentIndex].fileType === 0" :src="fileList[currentIndex].fileUrl" alt="" />
      <video v-else :src="fileList[currentIndex].fileUrl" controls></video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XPreview',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    // 预览文件列表
    fileList: {
      type: Array,
      default: () => [],
    },
    // 当前预览文件
    currentFile: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  created() {
    this.getCurrentIndex()
  },
  methods: {
    // 获取当前是第几个元素
    getCurrentIndex() {
      this.currentIndex = this.fileList.findIndex(item=>{
        return item.fileUrl === this.currentFile.fileUrl
      })
    },
    // 切换/关闭
    handleChange(key) {
      switch (key) {
        case 'prev':
          if(this.currentIndex > 0){
            this.currentIndex--
          }
          break;
        case 'next':
          if(this.currentIndex < this.fileList.length-1) {
            this.currentIndex++
          }
          break;
        default:
          this.$emit('update:visible', false)
          break;
      }
    }
  },
}
</script>

<style lang="less" scoped>
.x-preview {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  left: 0;
  top: 0;
  > span {
    cursor: pointer;
    text-align: center;
    color: #f1f1f1;
    background-color: rgba(0,0,0,0.3);
    font-size: 24px;
    position: absolute;
    font-weight: 700;
  }
  &-prev, &-next {
    width: 48px;
    height: 64px;
    line-height:64px;
    top: 50%;
    transform: translateY(-50%);
  }
  &-prev {
    left: 30px;
  }
  &-next {
    right: 30px;
  }
  &-close {
    width: 48px;
    height: 48px;
    line-height:48px;
    right: 30px;
    top: 30px;
  }
  &-contain {
    display: flex;
    align-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  img,video {
    max-width: 80vw;
    max-height: 80vh;
  }
}
</style>
