<template>
  <div v-if="visible" class="x-tree-modal-mask" @click.self="handleCancel">
    <div class="x-tree-modal">
      <div class="x-tree-modal-header">
        <h3>选择{{ title }}</h3>
        <input type="search" placeholder="请输入人员" />
      </div>
      <div class="x-tree-modal-content">
        <ul>
          <li>
            <label
              ><input
                v-model="allChecked"
                type="checkbox"
                @change="handleChange($event, 'all')"
              />全选（{{ checkedList.length }} / {{ treeData.length }}）</label
            >
          </li>
          <li v-for="item in treeData" :key="item.id">
            <label :class="{ active: item.checked }">
              <input
                type="checkbox"
                :checked="item.checked"
                @change="handleChange($event, item)"
              />{{ item.name }}
            </label>
          </li>
        </ul>
      </div>
      <div class="x-tree-modal-result">
        <div class="x-tree-modal-result-label">
          {{ title }}（已选{{ checkedList.length }}）
        </div>
        <div class="x-tree-modal-result-content">
          <x-tag
            closable
            v-for="item in checkedList"
            :key="item.id"
            :data="item"
            @close="handleClose(item)"
          >
            {{ item.name }}
          </x-tag>
        </div>
      </div>
      <div class="x-tree-modal-footer">
        <x-button @click="handleCancel">取消</x-button>
        <x-button type="primary" @click="handleOk">确定</x-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XTreeModal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      treeData: [
        {
          id: 1,
          name: "李云龙",
          checked: false,
        },
        {
          id: 2,
          name: "赵刚",
          checked: false,
        },
        {
          id: 3,
          name: "段鹏",
          checked: true,
        },
        {
          id: 4,
          name: "魏大勇",
          checked: false,
        },
        {
          id: 5,
          name: "张大彪",
          checked: false,
        },
        {
          id: 6,
          name: "楚云飞",
          checked: false,
        },
        {
          id: 7,
          name: "钱伯钧",
          checked: false,
        },
        {
          id: 8,
          name: "孙德胜",
          checked: false,
        },
        {
          id: 9,
          name: "丁伟",
          checked: false,
        },
        {
          id: 11,
          name: "孔捷",
          checked: false,
        },
        {
          id: 12,
          name: "杨秀芹",
          checked: false,
        },
        {
          id: 13,
          name: "谢宝庆",
          checked: false,
        },
        {
          id: 14,
          name: "张富贵",
          checked: false,
        },
        {
          id: 15,
          name: "平田一郎小日本",
          checked: false,
        },
        {
          id: 16,
          name: "筱冢义男龟孙子",
          checked: false,
        },
      ],
      allChecked: false,
      checkedList: [{ id: 3, name: "段鹏", checked: true }],
    };
  },
  methods: {
    handleChange(event, action) {
      const { checked } = event.target;
      if (action === "all") {
        this.treeData.map((item) => {
          item.checked = checked;
        });
        this.checkedList = this.treeData.filter((item) => {
          return item.checked;
        });
        return;
      }
      action.checked = checked;
      // 追加or删除
      if (checked) {
        this.checkedList.push(action);
      } else {
        this.checkedList = this.checkedList.filter((item) => {
          return item.id !== action.id;
        });
      }
      this.allChecked = this.checkedList.length === this.treeData.length;
    },
    handleClose(action) {
      this.checkedList = this.checkedList.filter((item) => {
        return item.id !== action.id;
      });
      this.treeData.map((item) => {
        if (item.id === action.id) {
          item.checked = false;
        }
      });
    },
    handleCancel() {
      this.$emit("update:visible", false);
    },
    handleOk() {
      this.$emit("update:visible", false);
      this.$emit("ok", this.checkedList);
    },
  },
};
</script>

<style lang="less" scoped>
.x-tree-modal-mask {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  .x-tree-modal {
    width: 460px;
    max-height: 548px;
    border-radius: 4px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &-header {
      height: 56px;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: inset 0 -1px 0 0 #e8e8e8;
      h3 {
        font-size: 16px;
        color: #1d1f25;
        font-weight: normal;
      }
      input {
        width: 248px;
        height: 36px;
        outline: none;
        color: #1d1f25;
        background-color: #fff;
        border: 1px solid #ccd2d8;
        border-radius: 4px;
        padding: 0 16px;
        &::placeholder {
          font-size: 14px;
          color: #919eab;
        }
      }
    }
    &-content {
      min-height: 270px;
      max-height: 360px;
      margin: 8px 24px 8px 24px;
      overflow-y: auto;
      // scrollbar-face-color 滚动条凸出部分的颜色
      // scrollbar-shadow-color 立体滚动条阴影的颜色
      // scrollbar-highlight-color 滚动条空白部分的颜色
      // scrollbar-3dlight-color 滚动条亮边的颜色
      // scrollbar-darkshadow-color 滚动条强阴影的颜色
      // scrollbar-track-color 滚动条的背景颜色
      // scrollbar-arrow-color 上下按钮上三角箭头的颜色
      // scrollbar-base-color  滚动条的基本颜色
      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgba(29, 31, 36, 0.16);
        // background: rgba(29, 31, 36, 0.16);
        border-radius: 3px;
        &:hover {
          background-color: rgba(29, 31, 36, 0.16);
        }
      }
      ul {
        user-select: none;
        li > label {
          height: 40px;
          padding: 0 16px;
          display: flex;
          cursor: pointer;
          align-items: center;
          font-size: 14px;
          color: #1d1f24;
          input[type="checkbox"] {
            width: 16px;
            height: 16px;
            cursor: pointer;
            margin-right: 8px;
            background: #fff;
            border: 1px solid #ccd2d8;
            border-radius: 2px;
          }
          &.active {
            background-color: #f9f9f9;
          }
          &:hover {
            background-color: #eceffc;
          }
        }
      }
    }
    &-result {
      height: 56px;
      padding: 0 24px;
      display: flex;
      align-items: center;
      box-shadow: inset 0 1px 0 0 #e8e8e8, inset 0 -1px 0 0 #e8e8e8;
      &-label {
        width: 118px;
        font-size: 14px;
        color: #1d1f24;
      }
      &-content {
        flex: 1;
        overflow-y: auto;
        max-height: 50px;
        .x-tag + .x-tag {
          margin-left: 2px;
          margin-bottom: 2px;
        }
        &::-webkit-scrollbar {
          width: 2px;
          // display: none;
        }
      }
    }
    &-footer {
      height: 60px;
      padding: 0 24px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>
