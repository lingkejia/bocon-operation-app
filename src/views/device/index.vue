<template>
  <div class="index">
    <van-nav-bar title="1234567890" left-arrow @click-left="$router.goBack()" />
    <div class="detail blue-background">
      <div class="device-door">
        <i class="iconfont icon-tianchongxing- device-door-icon"></i>
        <p>远程开门</p>
      </div>
    </div>
    <div class="toolbar" ref="toolbar">
      <van-grid :column-num="3">
        <van-grid-item @click="$router.push('/data/index')">
          <i class="icon iconfont icon-shuju1"></i>
          <p class="label">数据</p>
        </van-grid-item>
        <van-grid-item @click="$router.push('/setup/index')">
          <i class="icon iconfont icon-canshu"></i>
          <p class="label">参数</p>
        </van-grid-item>
        <van-grid-item @click="$router.push('/log/index')">
          <i class="icon iconfont icon-rizhi1"></i>
          <p class="label">日志</p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    getGlobalInterface() {
      this.$api.common.getGlobalInterface().then(res => {
        console.log("res :", res);
      });
    }
  },
  mounted() {
    this.getGlobalInterface();
  }
};
</script>
<style lang="less" scoped>
.index {
  .detail {
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    .device-icon {
      font-size: 96px;
      margin-top: 60px;
    }
    .device-ip {
      margin-top: 20px;
      font-size: 12px;
    }
    .device-door {
      width: 100%;
      text-align: center;
      font-size: 16px;
      .device-door-icon {
        font-size: 96px;
      }
    }
  }
  .toolbar {
    width: 100%;
    position: fixed;
    bottom: 0;
    .icon {
      font-size: 32px;
    }
    .label {
      margin-top: 10px;
      font-size: 12px;
      color: #757575;
    }
  }
}
</style>