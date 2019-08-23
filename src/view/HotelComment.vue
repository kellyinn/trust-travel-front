<template>
  <div id="main">
      <Header></Header>
      <el-divider></el-divider>
      <div class="hotel-comment">
        
      </div>
      <div class="copyright clearfix">
          <div class="left-text fl">
            <span class="iconfont logo">TrustTravel</span>
            <span class="info-text">© 2019 TrustTravel, Inc. All rights reserved.</span>
          </div>
          <div class="right-text fl clearfix">
            <a href="javascript:;" class="fr">CNY - ￥</a>
            <a href="javascript:;" class="fr">中文（简体）</a>
          </div>
      </div>
  </div>
</template>
<style>

</style>

<script>
import Vue from 'vue'
import Header from '../components/Header.vue'
    export default {
      name: 'HotelComment',
      components: {
        Header
      },
    }
</script>