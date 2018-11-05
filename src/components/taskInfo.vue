<template>
  <div class="taskInfo">
    <header class="header">
      <img src="../assets/Left.png" alt="" @click="back">
      <span>任务详情</span>
    </header>
    <div class="task_info_rule">
      <img src="../assets/money_bg.png" alt="">
      <section class="task_content">
        <div>1.请点击下方领取我的"任务码" 并对任务码截图保存</div>
        <p class="task_tip" @click="receiveCode">领取任务码</p>
        <div>2.开启苹果录屏功能， 保证后续步骤是在苹果录屏状态下完成；</div>
        <p class="task_tip" @click="video">苹果录屏教学</p>
        <div>3.在苹果录屏功能状态下， 开启app store搜索 "原创" 在第15位左右，下载完成试玩1分钟后保存录屏；</div>
        <div>4.回到微试玩小程序， 在"进行中"的任务列表里， 点击 <span class="tip">上传录屏按钮</span>，完成上传后等待审核；</div>
      </section>
      <div class="upload_btn"  @click.stop="openFile">上传视频
          <input type="file" @change="fileChange()" style="display: none" ref="file" multiple="multiple">
      </div>
    </div>
    <div class="code" v-if="closeWrapper">
        <div class="code-c">
          <img src="../assets/close.png" alt="" class="close" @click="close">
          <p>您本次任务的任务码</p>
          <p>958762452</p>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        closeWrapper:false
      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
      openFile(){
        console.log(this.$refs.file);
        this.$refs.file.click();
      },
      fileChange(e){
        console.log(this.$refs.file.files);
      },
      video(){
        this.$router.push('/video')
      },
      receiveCode(){
        this.closeWrapper = true;
      },
      close(){
        this.closeWrapper = false;
      }
    }
  }
</script>
<style>
  @import "../../static/header.css";
  .taskInfo {
    width: 100%;
    height: 100%;
    background: url("../assets/info_bg.png") no-repeat;
    background-size: 100%;
  }
  .task_info_rule {
    width: 6.5rem;
    height: 10.25rem;
    margin: 1rem auto 0 auto;
    background-color: #ffffff;
    border-radius: 0.1rem;
    position: relative;
    padding: 0.8rem 0.3rem;
    box-sizing: border-box;
  }
  .task_info_rule img {
    width: 1.25rem;
    height: 1.51rem;
    position: absolute;
    right: -0.1rem;
    top: -0.8rem;
  }
  .task_content {
    color: #333;
    text-align: justify;
  }
   .task_content p {
     text-align: center;
     color: #fd6161;
     margin: 0.3rem 0;
   }
  .upload_btn {
    width: 5.98rem;
    height: 1.14rem;
    text-align: center;
    line-height: 1.14rem;
    background: url("../assets/info_btn.png") no-repeat;
    background-size: 100%;
    color: #fff;
    margin:  0.8rem auto 0 auto;
  }
  .tip {
    color: #fd6161;
  }
  .code {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.4);
  }
  .code-c {
    width: 4.33rem;
    height: 2.5rem;
    background-color: #fff;
    border-radius: 0.1rem;
    position: relative;
    text-align: center;
    padding: 0.4rem;
    box-sizing: border-box;
  }
  .close{
    width: 0.5rem;
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
  }
  .code-c p {
      margin-bottom: 0.3rem;
  }
  .code-c p:last-child {
    color: cornflowerblue;
    font-size: 0.4rem;
  }
</style>
