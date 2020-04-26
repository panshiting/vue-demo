<template>
  <div class="container">
    <el-button @click="handleClick">打开可拖动组件</el-button>
    <div ref="iframeContent" class="iframe-content">
      <iframe id="iframe" ref="iframe" src="https://www.baidu.com/" width="100%" />
    </div>
    <el-dialog
      v-el-drag-dialog
      title="弹窗"
      :model="false"
      :modal-append-to-body="false"
      :append-to-body="true"
      :close-on-click-modal="false"
      :visible.sync="visible">
      <div>你好！</div>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog'
export default {
  name: 'Home',
  data () {
    return {
      visible: false
    }
  },
  directives: { elDragDialog },
  mounted () {
    this.setSize()
  },
  methods: {
    handleClick () {
      this.visible = true
    },
    setSize () {
      const winHeight = window.innerHeight
      console.log(window.innerHeight)
      console.log(this.$refs.iframe.contentWindow.document.body.clientHeight)
      this.$refs.iframe.height = (winHeight -40) + 'px'
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background-color: rgba(#000, .5);
  // .iframe-content {
  //   width: 100%;
  //   height: calc(100vh - 20px);
  // }
}
</style>
