<template>
  <div class="router-tab-iframe-fake" />
</template>

<script>
// Iframe 页签页面
export default {
  name: 'Iframe',
  inject: ['$tabs'],

  props: {
    src: String,
    title: String,
    icon: String
  },

  computed: {
    // 链接安全过滤，避免执行js
    url() {
      let { src } = this

      // XSS 攻击链接返回空白页
      if (/^javascript:/.test(src)) {
        return 'about:blank'
      }

      return src
    }
  },

  async mounted() {
    let { url, $tabs } = this
    let { iframes } = $tabs

    if (!iframes.includes(url)) {
      iframes.push(url)
    }

    $tabs.currentIframe = url

    await this.$nextTick()
    this.$tabs.iframeMounted(url)
  },

  activated() {
    this.$tabs.currentIframe = this.url
  },

  deactivated() {
    this.$tabs.currentIframe = null
  },

  // 组件销毁后移除 iframe
  destroyed() {
    let { url } = this
    let { iframes } = this.$tabs
    let index = iframes.indexOf(url)

    if (index > -1) {
      iframes.splice(index, 1)
    }
  }
}
</script>
