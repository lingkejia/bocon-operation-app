<template>
  <div class="main">
    <div class="header blue-background">
      <div class="header-content">
        <div>
          <p class="user-name">凌可佳的运维</p>
          <p class="extra-info">上次运维时间：2019-10-28 13:44:23</p>
        </div>
        <div>
          <i
            class="iconfont icon-changyongtubiao-mianxing-"
            @click="$router.push('/device/add-device')"
          ></i>
        </div>
      </div>
    </div>
    <div class="container">
      <div v-padding="15" v-bg-color v-radius="10" v-fontsize="14">我的设备（10）</div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="device-list">
          <div
            class="device-list-item"
            :class="{'device-offline':n%3==0}"
            v-for="n in 15"
            @click="$router.push('/device/index')"
          >
            <div>
              <img src="@/assets/device-small.png" width="32" alt />
              <div v-margin:top="10">
                <p class="device-modal">K37A</p>
                <p class="device-sn">SN-1234567890</p>
              </div>
            </div>
            <div>
              <!-- <van-tag plain v-if="n%3==0">离线</van-tag>
              <van-tag plain type="success" v-else>在线</van-tag>-->
            </div>
          </div>
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.main {
  .header {
    padding: 15px;
    box-shadow: 0px 5px 20px 0px rgba(46, 170, 254, 0.5);
    color: #fff;
    margin-bottom: 30px;
    // background: url("../assets/bg.jpeg") no-repeat 100% 100%;
    .header-content {
      height: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user-name {
        font-size: 24px;
      }
      .extra-info {
        font-size: 12px;
      }
      i {
        font-size: 36px;
        color: #fff;
      }
    }
  }

  .device-count {
    border-radius: 10px;
    padding: 15px;
    font-size: 14px;
  }
  .device-list {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    .device-list-item {
      position: relative;
      width: calc(50vw - 45px);
      background: #fff;
      border-radius: 10px;
      margin-bottom: 10px;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      z-index: 1;
      .device-modal {
        font-size: 14px;
      }
      .device-sn {
        font-size: 12px;
      }
    }
    .device-offline {
      &:after {
        position: absolute;
        content: "";
        border-radius: 10px;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
        background-color: rgba(255, 255, 255, 0.8);
      }
    }
  }
}
</style>