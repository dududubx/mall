<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-src" src="~assets/img/tabbar/format13.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/wodeqiye.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-src" src="~assets/img/tabbar/product12.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/gengduomokuai.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
       <tab-bar-item path="/cart">
        <img slot="item-src" src="~assets/img/tabbar/cart-full.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/dingdanguanli.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
       <tab-bar-item path="/profile">
        <img slot="item-src" src="~assets/img/tabbar/bussiness-man.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/yuangongguanli.png">
        <div slot="item-text">个人</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/Tabbar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "App",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "assets/css/base"
</style>
