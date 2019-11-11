<template>
  <div class="add-device">
    <van-nav-bar title="设备连接" left-arrow @click-left="$router.goBack()" />
    <div class="wifi">
      <div>
        <i class="iconfont icon-wifi wifi-icon"></i>
        <p class="wifi-title">连接设备WIFI</p>
      </div>
    </div>
    <div class="help">
      <van-divider>操作指引</van-divider>
      <ol>
        <li>第一步：打开手机WIFI设置</li>
        <li>第二步：连接名称为K37A-XXX的无线网络</li>
        <li>第三步：输入WIFI默认密码：88888888</li>
        <li>第四步：连接成功后，点击下方设备检测按钮</li>
      </ol>
    </div>
    <div class="footer">
      <van-row type="flex" justify="space-between">
        <van-col span="16">
          <van-button type="info" block>自动检测设备</van-button>
        </van-col>
        <van-col span="8">
          <van-button block>手动输入</van-button>
        </van-col>
      </van-row>
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
.add-device {
  .wifi {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .wifi-icon {
      font-size: 96px;
      color: #1989fa;
    }
    .wifi-title {
      font-size: 20px;
      margin-top: 20px;
    }
  }
  .help {
    margin: 0 50px;
    li {
      font-size: 12px;
      margin-bottom: 10px;
      color: #616161;
    }
  }
  .footer {
    width: 100vw;
    position: fixed;
    bottom: 0;
  }
}
</style>