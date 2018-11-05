<template>
    <div class="my">
        <div class="my-info">
          <p class="my-image"></p>
          <p class="my-Id">ID: 2533684415</p>
          <section class="my-money">
            <img src="../assets/my_last.png" alt=""><span class="money">当前余额：<strong>400</strong></span>
          </section>
        </div>
        <section class="order" @click="goInto('/orderList')">
          <div class="order_l">
            <img src="../assets/03_icon.png" alt="">
          </div>
          <div class="order_r">
            <p>收支明细</p>
            <img src="../assets/right.png" alt="">
          </div>
        </section>
      <section class="order" @click="goInto('/video')">
      <div class="order_l">
        <img src="../assets/01_icon.png" alt="">
      </div>
      <div class="order_r">
        <p>录屏使用</p>
        <img src="../assets/right.png" alt="">
      </div>
    </section>
      <section class="order" @click="goInto('/withDraw')">
        <div class="order_l">
          <img src="../assets/02_icon.png" alt="">
        </div>
        <div class="order_r order_w">
          <p>提现流程</p>
          <img src="../assets/right.png" alt="">
        </div>
      </section>
    </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
      methods:{
        goInto(url){
          this.$router.push(url);
        }
      }
    }
</script>
<style scoped>
  .my {
    height: 100%;
    background-color: #f8f8f8;
  }
  .my-info {
    height: 6.24rem;
    background: url("../assets/my_bg.png") no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .my-image {
    width: 1.2rem;
    height: 1.2rem;
    background-color: cornflowerblue;
    border-radius: 1.2rem;
  }
  .my-Id {
    color: #fff;
    margin-top: 0.4rem;
  }
  .my-money {
    display: flex;
    align-items: center;
    margin-top: 0.2rem;
  }
  .my-money img{
      width: .64rem;
  }
  .my-money>span {
    display: inline-block;
    width: 2.09rem;
    height: .53rem;
    background: url("../assets/my_last02.png") no-repeat;
    background-size: 100%;
    margin-left: -0.1rem;
    text-align: center;
    line-height: 0.53rem;
  }
  .money {
      color: #fff;
      font-size: 0.2rem;
  }
  .money strong {
    font-size: 0.28rem;
  }
  .order {
    height: 0.98rem;
    display: flex;
    align-items: center;
    line-height: 0.98rem;
    background-color: #ffffff;
  }
  .order_l {
    flex-basis: 1rem;
    text-align: center;
  }
  .order_l img {
      width: .34rem;
      vertical-align: middle;
  }
  .order_r {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
  }
  .order_w {
    border-bottom: none;
  }
  .order_r img {
    width: .11rem;
    height: 0.21rem;
    margin-right: 0.4rem;
  }
</style>

