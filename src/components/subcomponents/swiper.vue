<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for循环的话 一定要使用 key -->
      <!-- 以后 哪个页面使用 这个轮播图组件 那个页面将传递lunbotuList -->
      <!-- 此时 lunbotuList 应该是 父组件向子组件传值来设置 -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt="" :class="{full:isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
  <!-- 分析：为什么商品评论中的 轮播图没有想象中的那么完美 -->
  <!-- 1.首页中的图片 它的宽和高 都是使用了 100% 的宽度 -->
  <!-- 2.在商品详情页面中 轮播图的 图片 如果也使用 宽高为 100%的话 页面展现效果不好  -->
  <!-- 3.商品详情页面中的轮播图 期望 高度是 100% 但是 宽度为 自适应 -->
  <!-- 4.经过分析 得到问题的原因 首页中的轮播图 和 详情中的轮播图 分歧点是 宽度到底是100% 还是自适应 -->
  <!-- 5.既然这两个轮播图 其他方面都是没有冲突的 只是宽度有分歧 那么 可以定义一个属性 让使用轮播图的调用者 手动自定 是否为 100%的高度 -->
</template>

<script>
export default {
  props: ["lunbotuList", "isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: pink;
    }

    img {
      height: 100%;
    }
  }
}

.full {
  width: 100%;
}
</style>