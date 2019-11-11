<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: ""
    };
  },
  mounted() {
    if (window.history && window.history.pushState) {
      // history.pushState(null, null, document.URL);
      window.addEventListener("popstate", this.goBack, false);
    }
  },
  methods: {
    goBack() {
      // this.$router.go(-1);
      this.$router.isBack = true;
    }
  },
  watch: {
    $route() {
      var isBack = this.$router.isBack; // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else if (this.$router.isBack != null) {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  }
};
</script>
<style lang="less">
#app {
  height: 100%;
}
.router {
  position: absolute;
  width: 100%;
  transition: all ease 250ms;
}
.slide-left-enter,
.slide-right-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
