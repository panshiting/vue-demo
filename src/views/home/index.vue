<template>
  <div class="container">
    <el-button @click="handleClick">打开可拖动组件</el-button>
    <div ref="iframeContent" class="iframe-content">
<<<<<<< HEAD
      <iframe id="iframe" ref="iframe" src="https://www.baidu.com/" width="100%" />
=======
      <iframe id="iframe" ref="iframe" src="https://www.baidu.com/" />
>>>>>>> c84d67ba09c231889849fa2114880a4e2788fbb3
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
<<<<<<< HEAD
    this.setSize()
=======
    // this.setSize()
>>>>>>> c84d67ba09c231889849fa2114880a4e2788fbb3
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
  iframe {
    width: 100%;
    height: calc(100vh - 60px);
  }
}
</style>
