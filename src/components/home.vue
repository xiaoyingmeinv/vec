<template>
<div class="home">
  <div class="header clearfix">
    <div class="nav-left"><img src="../assets/images/jie-logo.png"></div>
    <div class="nav-right pull-left">
      <div class="navbar-search right-search">
        <a href="javascript:;" class="form-control">
          <span>搜索</span>
        </a>
      </div>
    </div>
  </div>
  <div class="content">
    <slide-show :slides="slides" :inv="invTime"></slide-show>
    <nav-tip></nav-tip>
    <div class="guide-list clearfix">
      <div class="guide-left pull-left">
        <router-link to="/">
          <img class="" src="../assets/images/left-promo.png">
        </router-link>
      </div>
      <div class="guide-right pull-left">
        <div class="guide-right-top">
          <router-link to="/">
            <img class="guideImg" src="../assets/images/right-top-promo.png">
          </router-link>
        </div>
        <div class="guide-right-bottom">
          <router-link  to="/">
            <img class="guideImg" src="../assets/images/right-bottom-promo.png">
          </router-link >
        </div>
      </div>
    </div>
    <hot-goods-list></hot-goods-list>
  </div>
</div>
</template>
<script>
  import slideShow from './slideShow'
  import navTip from './navTip'
  import hotGoodsList from './hotGoodsList'
  export default {
    components: {
      slideShow,
      navTip,
      hotGoodsList
    },
    data() {
      return {
        invTime: 2000,
        slides:[
          {
            src: require('../assets/images/banner1.png'),
            title: 'xxx1',
            href: 'xxxxx'
          },
          {
            src: require('../assets/images/banner-1.jpg'),
            title: 'xxx2',
            href:  'xxxxx'
          },
          {
            src: require('../assets/images/banner3.png'),
            title: 'xxx3',
            href:  'xxxxx'
          }
        ],
        guideList:[
          {
            title: 'xxx3',
            toKey:'进口食品',
            href:  'https://jie.net/m/html/category/category.html'
          },
          {
            title: 'xxx3',
            toKey:'家居建材',
            href:  'https://jie.net/m/html/category/category.html'
          },
          {
            title: 'xxx3',
            toKey:'母婴',
            href:  'https://jie.net/m/html/category/category.html'
          }
        ]
      }
    }
  }
</script>
<style>
  .app .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99;
  }
  .app .header .nav-left .jieLog{
    width:60px;
  }
  .app .content{

  }
  .navbar-search{
    margin-left: 5.5rem;
    margin-right: 0.5rem;
  }
  .form-control{
    font-size: .8rem;
    color: #fffcfc;
    width: 15em;
    height:30px;
    margin: 10px 0 10px;
    border: 0;
    border-radius: 1rem;
    display: block;
    background: #998586 url('../assets/images/search.png') no-repeat 0.3rem center;
    padding-left: 2.5em;
    background-size: 1.6em;
    text-decoration: none;
    color:#fff;
  }
  .nav-left{
    position: absolute;
    left:2em;
    top: 16px;
    width: 3rem;
    display: block;
  }
  .nav-left img{
    width: 100%;
  }
  .guide-list{
    position:relative;
    width:100%;
    height:12em;
    margin-top:0.75em;
  }
  .guide-left{
    position: relative;
    width: 40%;
    height: 100%;
  }
  .guide-left img{
    width:100%;
    height:100%;
  }
  .guide-right{
    width:60%;
    height:100%;
  }
  .guide-right .guide-right-top{
    width:100%;
    height:50%;
  }

  .guide-right .guide-right-bottom{
    width:100%;
    height:50%;
  }
  .guide-right .guideImg{
    width:100%;
    height:100%;
  }
</style>
