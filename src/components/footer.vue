<template>
  <nav class="footer-bar bar-tab">
    <a id="home-link" class="tab-item  external" href="/m/html/index.html">
      <i class="icon icon-nav-home"></i>
      <div class="tab-label">首页</div>
    </a>
    <a id="category-link" class="tab-item" href="/m/html/category/category.html">
      <i class="icon icon-nav-category"></i>
      <div class="tab-label">分类</div>
    </a>
    <a id="cart-link" class="tab-item external" href="/m/html/cart/cart.html">
      <i class="icon icon-nav-cart"></i>
      <div class="tab-label">购物车</div>
    </a>
    <a id="user-link" class="tab-item external" href="/m/html/my/my.html">
      <i class="icon icon-nav-user"></i>
      <div class="tab-label">我的</div>
    </a>
  </nav>
</template>
<style>

  /* 导航条 */
  .footer-bar{
   padding-top:0.5em;
  }

  .bar-tab .tab-item .icon{
    display:inline-block;

  }
 .footer-bar a{
    display: inline-block;
    width:24%;
   text-align:center;
  }
  .footer-bar .tab-label{
    font-size:0.8em;
    margin-top:0.2em;
  }
  .bar-tab .tab-item i.icon.icon-nav-home {
    background-size: 1rem;
    width: 1.5em;
    height: 1.5em;
    background: url("../assets/img/nav-home.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item.active i.icon.icon-nav-home {
    background: url("../assets/img/nav-home-active.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item i.icon.icon-nav-category {
    background-size: 1em;
    width: 1.5em;
    height: 1.5em;
    background: url("../assets/img/nav-category.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item.active i.icon.icon-nav-category {
    background: url("../assets/img/nav-category-active.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item i.icon.icon-nav-cart {
    background-size: 1em;
    width: 1.5em;
    height: 1.5em;
    background: url("../assets/img/nav-cart.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item.active i.icon.icon-nav-cart {
    background: url("../assets/img/nav-cart-active.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item i.icon.icon-nav-user {
    background-size: 1em;
    width: 1.5em;
    height: 1.5em;
    background: url("../assets/img/nav-user.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item.active i.icon.icon-nav-user {
    background: url("../assets/img/nav-user-active.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }


</style>
