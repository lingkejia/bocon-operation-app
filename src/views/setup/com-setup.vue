<template>
  <div class="com">
    <van-nav-bar title="COM1" left-arrow @click-left="$router.goBack()" />
    <van-cell-group title="启用状态">
      <van-switch-cell v-model="checked" title="功能开关" />
    </van-cell-group>
    <div v-if="checked">
      <van-cell-group title="参数配置">
        <van-cell title="波特率" is-link>9600</van-cell>
        <van-cell title="校验位" is-link>无校验</van-cell>
        <van-cell title="数据位" is-link>8位</van-cell>
        <van-cell title="停止位" is-link>1位</van-cell>
        <van-cell title="维护状态" is-link>不启用</van-cell>
        <van-cell title="仪表地址" is-link>1</van-cell>
      </van-cell-group>
      <van-cell-group title="仪表型号">
        <van-cell title="美国哈希" is-link to="/setup/device-list">氨氮在线监测仪</van-cell>
      </van-cell-group>
      <van-cell-group title="监测因子">
        <van-cell title="氨氮" is-link>采集</van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      checked: false
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
</style>