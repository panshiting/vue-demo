<template>
  <section class="error-404">
    <i class="img"></i>
    <div class="msg">
      <p class="err">404</p>
      <p>抱歉，你访问的页面不存在</p>
      <el-button type="primary" @click="handleClick">返回首页</el-button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Error404',
  methods: {
    handleClick () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped lang="scss">
p {
  padding: 0;
  margin: 0;
}
.error-404 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .img {
    background-color: rgba(#ff0000, .1);
    &::before {
      content: url('../../../assets/images/err404.png');
    }
  }
  .msg {
    padding-left: 100px;
    font-size: 16px;
    .err {
      font-size: 66px;
      color: #1989ff;
    }
    >p:first-child {
      margin-bottom: 10px;
    }
    .el-button {
      margin-top: 40px;
    }
  }
}
</style>
