<template>
  <div class="index">
    <van-nav-bar title="参数设置" left-arrow @click-left="$router.goBack()" />
    <div>
      <van-cell-group title="串口设置">
        <van-cell title="COM" is-link to="/setup/com-list" value="8路" />
        <van-cell title="RS485" is-link to="/setup/rs485-list" value="4路" />
      </van-cell-group>
      <van-cell-group title="摄像头设置">
        <van-cell title="网络摄像头" is-link to="/setup/ipc-list" value="4路" />
      </van-cell-group>
      <van-cell-group title="门禁设置">
        <van-cell title="门禁设备" is-link value="2路" />
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