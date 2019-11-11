<template>
  <div class="com-list">
    <van-nav-bar title="COM设置" left-arrow @click-left="$router.goBack()" />
    <van-cell-group title="COM端口列表">
      <van-cell title="COM1" is-link to="/setup/com-setup">
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="COM2" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="COM3" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="COM4" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="COM5" is-link to="/setup/com-setup">
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="COM6" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="COM7" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="COM8" is-link>
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