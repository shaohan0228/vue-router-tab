<template>
  <div
    class="router-tab__contextmenu"
    :class="{ 'has-icon': hasIcon }"
    :style="{
      left: `${data.left}px`,
      top: `${data.top}px`
    }"
  >
    <tab-contextmenu-item
      v-for="item in menuList"
      :key="item.id"
      :data="item"
    />
  </div>
</template>

<script>
import TabContextmenuItem from './ContextmenuItem.vue'
import menuMap, { defaultMenu } from '../config/contextmenu'

export default {
  name: 'TabContextmenu',
  inject: ['$tabs'],
  components: { TabContextmenuItem },

  props: {
    // 右键数据
    data: {
      type: [Boolean, Object]
    },

    // 菜单配置
    menu: {
      type: Array,
      default: () => defaultMenu
    }
  },

  computed: {
    // 激活菜单的页签
    target() {
      return this.$tabs.$refs.tab[this.data.index]
    },

    // 菜单选项
    menuList() {
      return this.menu
        .map(item => {
          if (typeof item === 'string') {
            // 内置菜单
            return menuMap[item]
          } else if (item && item.id) {
            // 扩展内置菜单
            let origin = menuMap[item.id]
            return origin ? { ...origin, ...item } : item
          }
        })
        .filter(item => item)
    },

    // 是否显示图标
    hasIcon() {
      return this.menuList.some(item => item.icon)
    },

    // 页签
    tabs() {
      return this.$tabs.$refs.tab
    },

    // 左侧可关闭的页签
    lefts() {
      return this.tabs.slice(0, this.data.index).filter(item => item.closable)
    },

    // 左侧可关闭的页签
    rights() {
      return this.tabs.slice(this.data.index + 1).filter(item => item.closable)
    },

    // 其他可关闭的页签
    others() {
      return this.tabs.filter(item => item.closable && this.data.id !== item.id)
    }
  },

  methods: {
    // 关闭多个页签
    async closeMulti(tabs) {
      for (let { id } of tabs) {
        try {
          await this.$tabs.removeTab(id)
        } catch (e) {}
      }

      // 当前页签如已关闭，则打开右键选中页签
      if (!this.$tabs.activeTab) {
        this.$router.replace(this.target.to)
      }
    }
  }
}
</script>
