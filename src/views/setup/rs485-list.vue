<template>
  <div class="rs485-list">
    <van-nav-bar title="RS485设置" left-arrow @click-left="$router.goBack()" />
    <van-cell-group title="RS485端口列表">
      <van-cell title="RS485 1#" is-link to="/setup/rs485-setup">
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="RS485 2#" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="RS485 3#" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="RS485 4#" is-link>
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