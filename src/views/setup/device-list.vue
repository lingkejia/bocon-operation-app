<template>
  <div class="device-list">
    <van-nav-bar title="选择仪表" left-arrow @click-left="$router.goBack()" />
    <van-cell-group title="仪表类型">
      <van-cell title="流量计" is-link to="/setup/company-list"></van-cell>
      <van-cell title="COD监测仪" is-link></van-cell>
      <van-cell title="氨氮监测仪" is-link></van-cell>
      <van-cell title="总磷总氮监测仪" is-link></van-cell>
      <van-cell title="烟气监测系统" is-link to="/setup/com-setup"></van-cell>
      <van-cell title="通用协议仪表" is-link></van-cell>
      <van-cell title="其他仪表" is-link></van-cell>
      <van-cell title="不启用" is-link></van-cell>
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