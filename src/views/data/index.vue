<template>
  <div class="data">
    <van-nav-bar title="实时数据" left-arrow @click-left="$router.goBack()" />
    <div>
      <div class="data-box">
        <p class="data-box-title">烟气流速</p>
        <div class="data-box-item">
          <span class="data-box-item-unit">m/s</span>
          <span class="data-box-item-value">
            678
            <i>/1000</i>
          </span>
        </div>
        <van-progress :show-pivot="false" :percentage="67" />
      </div>
      <div class="data-box">
        <p class="data-box-title">气压</p>
        <div class="data-box-item">
          <span class="data-box-item-unit">kPa</span>
          <span class="data-box-item-value">
            348
            <i>/1000</i>
          </span>
        </div>
        <van-progress :show-pivot="false" :percentage="45" />
      </div>
      <div class="data-box">
        <p class="data-box-title">烟气温度</p>
        <div class="data-box-item">
          <span class="data-box-item-unit">℃</span>
          <span class="data-box-item-value">
            231
            <i>/1000</i>
          </span>
        </div>
        <van-progress :show-pivot="false" :percentage="34" />
      </div>
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
.data {
  .data-box {
    margin: 10px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    .data-box-title {
      font-size: 14px;
    }
    .data-box-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .data-box-item-unit {
        font-size: 14px;
        color: #9e9e9e;
      }
      .data-box-item-value {
        font-size: 32px;
        i {
          font-size: 12px;
          color: #9e9e9e;
        }
      }
    }
  }
}
</style>