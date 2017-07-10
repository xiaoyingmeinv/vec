<template>
  <div class="nav-tip">
     <ul>
       <li>
         <img src="../assets/images/gou.png"/>
         <span>1级优质商品</span>
       </li>
       <li>
         <img src="../assets/images/gou.png"/>
         <span>7天无理由退换</span>
       </li>
       <li>
         <img src="../assets/images/gou.png"/>
         <span>48小时快速退款</span>
       </li>
     </ul>
  </div>
</template>
<script>
 export default{

 }
</script>
<style>
.nav-tip{
  position:relative;
  width:100%;
  background-color:#fff;
}
.nav-tip ul li{
    display:inline-block;
    width:32%;
    height:40px;
    line-height:40px;
    text-align:center;
  }
.nav-tip ul li img{
  width:15px;
  height:15px;
  vertical-align:middle;
}
.nav-tip ul li span{
  display:inline-block;
  font-size:0.65em;
  vertical-align:middle;
}
</style>
