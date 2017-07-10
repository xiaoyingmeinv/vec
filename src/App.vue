<template>
<div class="app">
   <my-home></my-home>
  <div class="footer">
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
  </div>
</div>
</template>

<script>
import myHome from './components/home.vue'
export default {
  components: {
      myHome
  }
}
</script>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }
  /**清除浮动**/
  .clearfix {
    zoom: 1;
  }

  .clearfix:before, .clearfix:after {
    content: " ";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  .pull-left {
    float: left;
  }

  .pull-right {
    float: right;
  }
  .footer{
    position:fixed;
    width:100%;
    height:50px;
    background-color:#fff;
    bottom:0;
    z-index:999;
  }

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
    background: url("./assets/img/nav-home.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item.active i.icon.icon-nav-home {
    background: url("./assets/img/nav-home-active.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item i.icon.icon-nav-category {
    background-size: 1em;
    width: 1.5em;
    height: 1.5em;
    background: url("./assets/img/nav-category.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item.active i.icon.icon-nav-category {
    background: url("./assets/img/nav-category-active.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item i.icon.icon-nav-cart {
    background-size: 1em;
    width: 1.5em;
    height: 1.5em;
    background: url("./assets/img/nav-cart.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item.active i.icon.icon-nav-cart {
    background: url("./assets/img/nav-cart-active.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item i.icon.icon-nav-user {
    background-size: 1em;
    width: 1.5em;
    height: 1.5em;
    background: url("./assets/img/nav-user.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .bar-tab .tab-item.active i.icon.icon-nav-user {
    background: url("./assets/img/nav-user-active.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }


</style>
