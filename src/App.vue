
<script setup>
import { ref } from 'vue';
const type = ref('base');
</script>

<template>

  <div class="nav-wrapper">
    <div 
      class="mr-10" 
      :class="{active:type===item}"
      v-for="(item,index) in ['base','list']"
      :key="`nav_${index}`"
      @click="type=item"
    >
      <RouterLink :to="`/${item}`">{{item}}</RouterLink>
</div>
</div>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
.active {
  color: #ff99cc;
}

.border-black {
  border: #000001 solid px;
}

.pd-20 {
  padding: 20px;
}

.mr-10 {
  display: inline-block;
  margin-right: 10px;
}
.nav-wrapper{
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;   /*垂直居中*/
  justify-content: center;    /*水平居中*/
  border-bottom:2px solid rgba(0,0,0,0.06);
}
</style>
