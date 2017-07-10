<template>
  <div class="hot-good-list clearfix">
    <div class="pull-left hot-good-left">
      <div class="hot-good-inner">
        <router-link to="/">
          <div class="hot-img">
            <img class="" src="https://static.jie.net/group1/M00/55/F7/rBAB4FkdYCuIJQwNAAA1JICL3dUAAAAHwLMptIAADU8927.jpg">
          </div>
          <div class="hot-font">
            <div class="hot-good-title">Mellower Coffee 麦隆咖啡 经典系列 甜香</div>
            <div>
              <span>￥<span >28.00</span></span>
              <span >已有<span>40</span>人购买</span>
            </div>
          </div>

        </router-link>
      </div>
    </div>
    <div class="pull-left hot-good-left">
      <div class="hot-good-inner">
        <router-link to="/">
          <div class="hot-img">
            <img class="" src="https://static.jie.net/group1/M00/55/F7/rBAB31kdXLqIZnNFAAKInQsl6coAAAAHwKQKu0AAoi1245.jpg" >
          </div>
          <div class="hot-font">
            <div class="hot-good-title">马来西亚进口 舒米勒特浓白咖啡</div>
            <div class="clearfix">
              <span >￥<span >35</span></span>
              <span >已有<span>16</span>人购买</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.hot-good-list{
  position:relative;
  width:100%;
  margin-top:0.75em;
  margin-bottom:4em;
}
  .hot-good-left{
    width:50%;
  }
  .hot-good-inner{
    width:96%;
    margin-left:3%;
    background-color:#fff;
  }
  .hot-img{
    width:100%;
  }
.hot-img img{
  width:100%;
}
 .hot-font{
    padding:0.5em 0.75em;
   font-size:0.85em;
  }
  .hot-font .hot-good-title{
    line-height:1.2;
  }
</style>
