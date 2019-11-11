<template>
  <div class="platform-log">
    <van-nav-bar title="平台日志" left-arrow @click-left="$router.goBack()" />
    <van-steps direction="vertical" :active="0">
      <van-step v-for="n in 10">
        <p class="log-time">2016-07-12 12:40</p>
        <p class="log-user">admin</p>
        <p class="log-content">升级参数 IP地址由 192.168.8.149 修改为 192.168.8.140</p>
      </van-step>
    </van-steps>
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
@gray: #757575;
.platform-log {
  .log-time,
  .log-user {
    font-size: 12px;
    color: @gray;
  }
  .log-content {
    margin-top: 10px;
    font-size: 14px;
    color: #000;
  }
}
</style>