<template>
  <div class="order-box">
    <header class="head_top">
      <img src="../assets/left_icon.png" alt="" @click="back">
      <span class="order-record">收支明细</span>
      <p class="order-time" @click="openPicker">{{dateMsg}}</p>
    </header>
    <ul class="order-type">
      <li v-for="(item, index) in listType" class="order-d" :class="currentIndex === index ? 'order-a': ''" @click="changeSort(index)">{{item}}</li>
    </ul>
    <div class="order-input" v-if="currentIndex === 0">
      <div class="order-title">
        <p>任务奖励</p>
        <span>2018.11.01</span>
      </div>
      <div class="order-money">+200</div>
    </div>
    <div class="order-input" v-else>
      <div class="order-title">
        <p>提现</p>
        <span>2018.11.01</span>
      </div>
      <div class="order-out-money">-200</div>
    </div>
    <div class="time-wrap" v-if="timeWrapper">
        <ul class="time-lists">
          <li v-for="(item,index) in timeList" class="time-list-d" @click="changeDate(index)" :class="currentDate === index ? 'time-list-a':''">{{item}}</li>
        </ul>
    </div>
    <mt-datetime-picker
      type="date"
      ref="picker"
      v-model="dateTime"
      year-format="{value} 年"
      month-format="{value} 月"
      @confirm="handleConfirm"
      :startDate="startDate"
    >
    </mt-datetime-picker>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        dateMsg: '选时间',
        listType: ['收入','支出'],
        timeList:['2018.11', '2018.10','2018.09','2018.08'],
        currentIndex: 0,
        currentDate: 0,
        timeWrapper: false,
        dateTime: new Date(),
        startDate: new Date('1999')
      }
    },
    methods:{
      openPicker() {
        document.querySelectorAll('.picker-slot-center')[2].style.display = 'none';
        this.$refs.picker.open();
      },
      handleConfirm(data){
        let date = new Date(data);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        if(month < 10) {
          month = '0' + month;
        }
        this.dateMsg = `${year}.${month}`
      },
      back(){
        this.$router.go(-1);
      },
      changeSort(key){
        this.currentIndex = key;
      },
      selectTime(){
        this.timeWrapper = true;
      },
      changeDate(key){
          this.dateMsg = this.timeList[key];
          this.currentDate = key;
         this.timeWrapper = false;
      }
    }
  }
</script>
<style scoped>
  @import "../../static/header.css";
  .order-time {
    position: absolute;
    color: #5d18cd;
    right: 0.4rem;
    top: 0.2rem
  }
  .order-box {
    height: 100%;
    background-color: #ffffff;
  }
  .order-type {
    display: flex;
    justify-content: center;
    margin: 0.2rem 0 0.4rem 0;
  }
  .order-d {
    width: 3.2rem;
    height: .62rem;
    line-height: 0.6rem;
    color: #999;
    border: 1px solid #999;
    text-align: center;
  }
  .order-type li:first-child {
    border-bottom-left-radius: 0.1rem;
    border-top-left-radius: 0.1rem;
    border-right: none;
  }
  .order-type li:last-child {
    border-bottom-right-radius: 0.1rem;
    border-top-right-radius: 0.1rem;
    border-left: none;
  }
  .order-a {
    color: #fff;
    border: 1px solid #5d18cd;
    background-color: #5d18cd;
  }
  .order-input {
    height: 0.98rem;
    padding: 0 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .order-title p {
    color: #333;
  }
  .order-title span {
    color: #999;
  }
  .order-money {
    color: #fd6161;
  }
  .time-wrap {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
  }
  .time-lists {
    width: 3.34rem;
    height: 3.63rem;
    background-color: #fff;
    border-radius: 0.1rem;
    position: absolute;
    top: 0.98rem;
    right: 0.2rem;
    box-sizing: border-box;
    text-align: center;
    padding: 0.4rem 0;
  }
  .time-list-d {
    margin-bottom: 0.3rem;
  }
  .time-list-a {
    color: #5d18cd;
  }
</style>
