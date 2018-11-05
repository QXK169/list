<template>
  <div class="home">
    <div class="view">
      <router-view/>
    </div>
    <ul class="tab">
      <li v-for="(list, index) in tabs" @click="tab(list, index)" :key="index">
        <img :src="list.pic | imgFilter" alt="" style="width: 1.08rem">
        <p :class=" index === 0 ? 'active' : '' " class="list">{{ list.name }}</p>
      </li>
    </ul>
       <div class='rule' v-if="ruleShow">
                <div class='rule_list'>
                   <div class='rule_list_title'>任务手册</div>
                   <ul class='rule_list_content'>
                      <li>1.完成任务必须开启苹果的录屏功能，我们只会以录屏作为任务完成的唯一衡量指标；</li>
                      <li>2.提现前必须添加公众号，拉你入群给你提现红包</li>
                      <li>3.任务奖励根据APP排名进行设置，当截止时间到达，每个参与的用户评分任务奖励。</li>
                   </ul>
                </div>
                <div class="rule_btn" @click='changeRule'>我已清楚规则</div>   
        </div>
  </div>
</template>
<script>
  export default{
    name: 'home',
      data(){
        return {
            tabs: [
              {name: '任务清单', pic: 'home-d.png',url: '/index', active:'home-a.png', icon: 'home-d.png'},
              {name: '我的', pic: 'my-d.png', url: '/my', active:'my-a.png', icon: 'my-d.png'}],
              ruleShow:true
        }
      },
    methods: {
      //设置底部导航切换
      setTab(name){
          switch (name) {
            case 'index':
              this.setTabColor(0);
              break;
            case 'my':
              this.setTabColor(1);
              break;
          }
      },
            changeRule(){
                this.ruleShow = false;
            },
      //颜色切换
      setTabColor(index){
        let lists = document.querySelectorAll('.list');
        let list = Array.from(lists);
        list.forEach(item => {
          item.className = 'list';
        });
        list[index].className = 'active list';
        //切换图片
        this.tabs.forEach(item => {
          item.pic = item.icon;
        });
        this.tabs[index].pic = this.tabs[index].active;
      },
      tab(item, index){
          this.setTabColor(index);
          this.$router.push(item.url);
      }
    },
    mounted(){
      let name = this.$route.name;
      this.setTab(name);
    },
    filters: {
      imgFilter(val){
        return 'static/shop/'+ val;
      }
    }
  }
</script>
<style class="scoped">
.home {
  width: 100%;
  height:100%;
  background: url('../assets/home-bg.png') no-repeat;
}
  .view {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling : touch;
  }
  .tab {
    max-width: 750px;
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    /* border-top: 1px solid #f5f5f5; */
    background-color: #5d18cd;
  }
  .tab>li {
    flex: 1;
    text-align: center;
    cursor: pointer;
  }
  .tab>li p{
    margin-top: -.08rem;
    font-size: 0.25rem;
    color: #fff;
  }
  .active {
    color: #fff!important;
  }
  .img_box {
    height: 1.17rem;
    text-align: center;
  }
  .img_active {
    width: 1.11rem;
  }
  .img_default {
    width: 0.38rem;
  }
.rule {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: url('../assets/opcity_bg.png') no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;   
    height: 100%; 
}
.rule_list {
    width: 4.29rem;
    height: 4.43rem;
    background: url('../assets/input_bg.png') no-repeat;
    background-size: contain;
    margin: 0 auto;
    padding: 0.3rem;
}
.rule_btn {
    width: 3rem;
    height: .85rem;
    background: url('../assets/btn.png') no-repeat;
    background-size: contain;
    text-align: center;
    line-height: .85rem;
    color: #333;
    margin:  0 auto;
}
.rule_list_title {
    color: #333;
    text-align: center;
    font-size: 0.28rem;
    font-weight: 600;
}
.rule_list_content {
    color: #333;
    font-size: 0.26rem;
    text-align: justify
}
.rule_list_content li {
    padding-top: 0.2rem;
}
</style>
