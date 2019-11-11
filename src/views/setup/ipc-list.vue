<template>
  <div class="ipc-list">
    <van-nav-bar title="摄像头设置" left-arrow @click-left="$router.goBack()" />
    <van-cell-group title="摄像头列表">
      <van-cell title="网络摄像头 1#" is-link to="/setup/ipc-setup">
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="网络摄像头 2#" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="网络摄像头 3#" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="网络摄像头 4#" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
</style>