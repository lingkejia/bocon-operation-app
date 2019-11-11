<template>
  <div class="company-list">
    <van-nav-bar title="选择厂家" left-arrow @click-left="$router.goBack()" />
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="美国哈希CODmax在线分析仪" clickable @click="radio = '1'">
          <van-radio slot="right-icon" name="1" />
        </van-cell>
        <van-cell title="广州怡文EST-2001型在线监测仪" clickable @click="radio = '2'">
          <van-radio slot="right-icon" name="2" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="container">
      <van-button @click="onChoose">选择</van-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      radio: ""
    };
  },
  methods: {
    onChoose() {
      this.$router.isBack = true;
      this.$router.go(-2);
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
</style>