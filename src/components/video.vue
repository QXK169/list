<template>
    <div class="video-box">
      <header class="head_top">
        <img src="../assets/left_icon.png" alt="" @click="back">
        <span>录屏使用视频</span>
      </header>

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
</style>
