<template>
  <div class="task">
    <header class="header">
      <img src="../assets/Left.png" alt="" @click="back">
      <span>任务列表</span>
    </header>
    <div class="task_desc">
      <div class="task_rate">
        <p>目标排名</p>
        <p>第5名</p>
      </div>
      <div class="task_line"></div>
      <div class="task_rate">
        <p>平均奖励</p>
        <p>1000元</p>
      </div>
    </div>
    <div class="task_rater"></div>
    <div class="task_time">
    剩余时间：2天10小时56分10秒
  </div>
    <div class="task_btn" @click="receiveTask">
      接受任务
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
      },
      receiveTask(){
        this.$router.push('/taskInfo')
      }
    }
  }
</script>
<style>
@import "../../static/header.css";
  .task_desc {
    width: 100%;
    height: 6.24rem;
    background: url("../assets/banner-bg.png") no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .task_rate, .task_line {
    margin-bottom: 0.4rem;
  }
  .task_rate p {
    color: #ffffff;
    text-align: center;
  }
.task_rate p:last-child {
  font-size: 0.4rem;
  font-weight: 600;
}
  .task_line {
    width: 1px;
    height: .8rem;
    background: #fff;
    margin: 0 0.4rem 0.45rem 0.4rem;
  }
  .task_rater {
    width: 6.07rem;
    height: 3.28rem;
    background: url("../assets/rate.png") no-repeat;
    background-size: 100%;
    margin: 0.4rem auto 0 auto;
  }
  .task_time {
    color: #999;
    text-align: center;
    margin-top: 0.4rem;
  }
  .task_btn {
    width: 5.98rem;
    height: 0.88rem;
    color:#fff;
    line-height: 0.88rem;
    text-align: center;
    margin: 0.4rem auto 0 auto;
    background: url("../assets/task-btn.png") no-repeat;
    background-size: 100%;
  }
</style>
