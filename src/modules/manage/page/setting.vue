<template>
  <main>
    <!-- <header>基础设置</header> -->
    <section class="wrap scroll">
      <el-form v-model="webinfo" label-width="130px" v-loading="loading">
        <el-form-item label="网站标题">
          <el-input size="medium" v-model="webinfo.title"> </el-input>
        </el-form-item>
        <el-form-item label="网站关键词">
          <el-input size="medium" v-model="webinfo.keyword"> </el-input>
        </el-form-item>
        <el-form-item label="网站描述">
          <el-input size="medium" v-model="webinfo.description" type="textarea" :rows="2"></el-input>
        </el-form-item>
        <el-form-item label="备案号">
          <el-input size="medium" v-model="webinfo.icp"></el-input>
        </el-form-item>
        <el-form-item label="微信图片地址">
          <el-input size="medium" v-model="webinfo.weixin"></el-input>
        </el-form-item>
        <el-form-item label="支付宝图片地址">
          <el-input size="medium" v-model="webinfo.zhifubao"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
          <el-input size="medium" v-model="webinfo.qq"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input size="medium" v-model="webinfo.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input size="medium" v-model="webinfo.email"></el-input>
        </el-form-item>
        <el-form-item label="Github地址">
          <el-input size="medium" v-model="webinfo.github"></el-input>
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input size="medium" v-model="webinfo.personinfo" type="textarea" :rows="3"></el-input>
        </el-form-item>
      </el-form>
    </section>
    <footer>
      <el-button type="primary" size="small" @click="submit" :disabled="saveDis">保　存</el-button>
    </footer>
  </main>
</template>

<script>

export default {
  data() {
    return {
      saveDis: false,
      loading: true,
      webinfo: {
        title: '',
        keyword: '',
        description: '',
        icp: '',
        weixin: '',
        zhifubao: '',
        description: '',
        weixin: '',
        zhifubao: '',
        personinfo: '',
      }
    }
  },
  created() {
    this.loading = true;
    this.$get('/api/v2/webinfo/read').then(res => {
      
      this.webinfo = res.data
      this.loading = false;
    }).catch(() => {

    })
  },
  methods: {
    submit() {
      this.loading = true;
      this.saveDis = true;
      this.$post('/api/v2/webinfo/set', this.webinfo).then(res => {
        this.loading = false;
        this.saveDis = false;
        this.$message.success(res.message)
      }).catch(() => {
      })
      
    }
  }
}
</script>


<style scoped lang="stylus">
.el-form .el-input
  width 220px
.el-textarea
  width 500px
</style>