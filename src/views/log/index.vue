<template>
  <div class="log">
    <van-nav-bar title="日志数据" left-arrow @click-left="$router.goBack()" />
    <div>
      <van-cell-group title="日志数据">
        <van-cell title="平台日志" is-link to="/log/platform-log" />
        <van-cell title="操作日志" is-link to="/log/operation-log" />
      </van-cell-group>
    </div>
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