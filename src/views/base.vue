<template>
  <div class="welcome-page">
    <div class="welcome-header">
      <h2>欢迎来到学生管理系统</h2>
      <p>点击list查看学生信息</p>
    </div>

    <div class="carousel">
      <div @click="prevSlide" class="carousel-prev-icon-left"></div>
      <div class="carousel-slides">
        <img
          v-for="(slide, index) in slides"
          :key="index"
          :src="slide"
          :style="{ left: index * 100 + '%', transform: dynamicstyle }"
          alt="轮播图片"
        />
      </div>
      <div @click="nextSlide" class="carousel-prev-icon-right"></div>
    </div>

    <!-- 轮播图容器 -->
    <div class="slider-container">
      <!-- 轮播图片 -->
      <div class="slider">
        <!-- 动态绑定背景图片样式 -->
        <div class="slide" :style="{ backgroundImage: 'url(' + slides[currentSlideIndex] + ')' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// 定义 dynamicstyle 变量
let dynamicstyle = ref('');

// 轮播图片地址数组
const slides = ref([
  'demo-vue/src/assets/1.jpg', // 
  'demo-vue/src/assets/1.jpg', // 
]);

// 当前轮播图片索引
let currentSlideIndex = ref(0);

// 在组件挂载后执行
onMounted(() => {
  // 设置定时器，每隔3秒切换一次图片
  const interval = setInterval(() => {
    currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length;
  }, 3000);

  // 组件销毁时清除定时器
  return () => clearInterval(interval);
});
</script>

<style scoped>
.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 300px; /* 轮播图容器的高度 */
}

.slider {
  display: flex;
  transition: transform 0.5s ease; /* 切换动画效果 */
}

.slide {
  width: 100%;
  height: 300px; /* 轮播图的高度 */
  background-size: cover;
  background-position: center;
}
</style>
