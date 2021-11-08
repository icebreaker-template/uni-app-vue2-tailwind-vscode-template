<template>
  <view class="w-screen flex flex-col items-center">
    <image
      class="logo w-24"
      src="../../static/logo.png"
    ></image>
    <view>
      <text class="title">{{title}} World</text>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {},
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
