<template>
  <div id="myCarousel" class="carousel slide" ref="mybox">
    <!-- 轮播（Carousel）指标 -->

    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner">
      <div class="item active">
        <img src="/wp-content/uploads/2014/07/slide1.png" alt="First slide">
      </div>
      <div class="item">
        <img src="/wp-content/uploads/2014/07/slide2.png" alt="Second slide">
      </div>
      <div class="item">
        <img src="/wp-content/uploads/2014/07/slide3.png" alt="Third slide">
      </div>
    </div>

  </div>
</template>
<script>
  export default{
      data (){

      },
    methods:{
      init (){
        this.$refs.carousel('cycle');;
      }
    },
    mounted (){
      init()
    }
  }
</script>
