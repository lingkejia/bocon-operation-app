<template>
  <div class="rs485-setup">
    <van-nav-bar title="RS485 1#" left-arrow @click-left="$router.goBack()" />
    <van-cell-group title="启用状态">
      <van-switch-cell v-model="checked" title="功能开关" />
    </van-cell-group>
    <van-cell-group title="参数配置" v-if="checked">
      <van-cell title="摄像头 1#" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="摄像头 2#" is-link label="192.168.1.4">
        <van-tag plain type="success">已启用</van-tag>
      </van-cell>
      <van-cell title="摄像头 3#" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
      <van-cell title="摄像头 4#" is-link>
        <van-tag plain>未启用</van-tag>
      </van-cell>
    </van-cell-group>
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