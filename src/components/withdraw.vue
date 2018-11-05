<template>
  <div class="wx-box">
    <header class="head_top">
      <img src="../assets/left_icon.png" alt="" @click="back">
      <span>微信提现</span>
    </header>
    <div class="wx_content">
      在公众号右下角找到 "<span class="wx_tip">联系我们</span>"，点击弹出"<span class="wx_tip">微信提现</span>"， 点击后根据提示添加运营人员微信号进行提现。
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    }
  }
</script>
<style scoped>
  @import "../../static/header.css";
  .wx-box {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }
  .wx_content {
      width: 6.9rem;
      height: 6.5rem;
      background: url("../assets/wx-bg.png") no-repeat;
      background-size: 100%;
      margin:  0.8rem auto 0 auto;
      box-sizing: border-box;
    padding: 0.4rem 0.2rem;
    text-align: justify;
  }
  .wx_tip {
    color: #fd6161;
  }
</style>
