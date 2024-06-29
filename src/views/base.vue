<template>
  <div class="welcome-page">
    <div class="welcome-header">
      <h1>欢迎来到学生管理系统</h1>
      <p>这里可以展示一些欢迎的介绍和功能简介。</p>
    </div>

    <div class="additional-info">
      <h3>系统信息</h3>
      <p>这里可以展示系统的一些额外信息或链接。</p>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store/user';

const userStore = useUserStore();
const { userList } = storeToRefs(userStore);
</script>

<style scoped>
.welcome-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
}

.welcome-header {
  margin-bottom: 40px;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.student-list {
  background-color: rgb(107, 111, 103);
  margin-bottom: 40px;
}

h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.user-item {
  cursor: pointer;
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.user-item:hover {
  text-decoration: underline;
}

.additional-info {
  margin-top: 40px;
}

h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
}

.additional-info p {
  font-size: 1rem;
  color: #666;
}
</style>
