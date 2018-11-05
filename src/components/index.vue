<template>
    <div>
        <ul class='tab-items'>
            <li v-for="(item,index) in list"  :class="curryIndex === index ? 'tab-item tab-item-active' : 'tab-item'" @click='changeTab(index)' :key='index'>
                <span :class="curryIndex === index ? 'tab-span tab-span-active' : 'tab-span'">{{item.name}}</span>
            </li>
        </ul>
        <div class='content' v-if="curryIndex === 0">
          <div class='task-list' @click="goInto" >
                <section class='task-title'>
                    <div class='task-img'>
                        <img src="../assets/app_img.png" alt="">
                    </div>
                     <div class='task-money'>
                         <div class='task-target'>
                             <p>10000</p>
                             <p>目标金额</p>
                         </div>
                         <div class='task-line'></div>
                         <div class="task-award">
                             <p>0.5</p>
                             <p>下载奖励</p>
                         </div>
                     </div>
                </section>
                <section class='task-desc-title'>
                    <p>任务描述</p>
                    <div class='task-time'>12:36:30</div>
                </section>
                <section>
                    <p>app 搜索关键词'原创' 后列表中找都应用 "看理想" 并完成首次下载</p>
                </section>
            </div>
          <div class='footer-tip'>达到搜索目标是时，用户共同平分目标奖励金额</div>
        </div>
        <div  class='content' v-if="curryIndex === 1">
          <div class="task-no">
            <img src="../assets/no_task.png" alt="">
            <p>还没有进行中的任务， 赶快去抢任务吧~</p>
          </div>
        </div>
        <div  class='content' v-if="curryIndex === 2"></div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[{name:'任务列表'},{name:'进行中'},{name:'已完成'}],
                curryIndex:0
            }
        },
        methods:{
            changeTab(key){
                this.curryIndex = key;
            },
          goInto(){
              this.$router.push('/receiveTask')
          }
        }
    }
</script>
<style scoped>
.tab-items{
  height: 0.88rem;
  display: flex;
  align-items: center;
  background-color: #5d18cd;
  font-size: 0.26rem;
}
.tab-item {
    flex: 1;
    text-align: center;
    color: rgba(209,149,70, 0.8);
}
.tab-item-active {
    color: #f9c316;

}
.tab-span {
    display: inline-block;
    height: 0.8rem;
    line-height: 0.8rem;
}
.tab-span-active {
    border-bottom: 2px solid #f9c316;
}
.content {
    padding: 0.3rem;
}
.task-list {
    margin-bottom: 0.2rem;
    padding: 0.2rem;
    background: #fff;
    border-radius: 10px;
}
.task-title {
    display: flex;
    align-items: center;
}
.task-img {
    flex-basis: 40%;
}
.task-img>img{
    width: 0.96rem;
    height: 0.96rem;
}
.task-money {
    flex:1;
    display: flex;
    align-items: center;
    text-align: center;
}
.task-line {
    height: 0.5rem;
    width: 1px;
    background: #999;
}
.task-target,.task-award {
    flex:1;
}
.task-desc-title {
    display: flex;
    justify-content: space-between;
    margin: 0.1rem 0;
}
.task-desc-title p{
    color: #333;
}
.task-time {
    width: 1.24rem;
    height: 0.37rem;
    text-align: center;
    color: #fff;
    background: url('../assets/task_btn.png') no-repeat;
    background-size: 100%;
    font-size: 0.22rem;
    line-height: 0.37rem;
}
.footer-tip {
    position: fixed;
    width: 100%;
    /*padding: 0 0.3rem;*/
    bottom: 1.5rem;
    color: #fff;
    font-size: 0.28rem;
    text-align: center;
}
.task-award p:first-child {
    color: red;
    font-weight: 600;
}
  /*无任务*/
.task-no {
  text-align: center;
  margin-top: 1rem;
}
.task-no img {
  width: 2.78rem;
  height: 2.8rem;
}
  .task-no p {
    color: #fdfdfd;
    margin-top: 0.4rem;
  }
</style>
