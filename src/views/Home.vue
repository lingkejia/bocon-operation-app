<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">设备</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="less" >
.home {
  padding-bottom: 60px;
}
</style>
