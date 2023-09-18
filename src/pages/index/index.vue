<template>
  <view class="w-screen flex flex-col items-center">
    <view
      class="bg-[url(https://pic1.zhimg.com/v2-3ee20468f54bbfefcd0027283b21aaa8_720w.jpg)] bg-[length:100%_100%] bg-no-repeat w-screen h-[41.54vw]">
    </view>

    <view class="after:content-['uni-app-vue2-tailwind-vscode-template'] text-sky-400"></view>


    <view class="text-gray-900/75 mb-2 before:text-sky-500 before:content-['让我们开始神奇的_*tailwindcss*_开发吧！']"></view>
    <view>
      <view class="text-lg font-semibold">uview-ui 2 控件示例</view>
      <view>
        <u-button :customStyle="{ width: '200px' }" text="月落"></u-button>
        <u-cell-group>
          <u-cell icon="setting-fill" title="个人设置"></u-cell>
          <u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
          <u-cell value="内容">
            <view slot="title" class="u-slot-title">
              <text class="u-cell-text text-[red]">单元格</text>
            </view>
          </u-cell>
        </u-cell-group>

      </view>
    </view>

    <view class="text-lg font-semibold">写法示例</view>
    <view :class="classArray">classArray bg-url</view>

    <view>
      <text class="text-[1.1em] text-gray-800">{{ title }} World</text>
    </view>
    <view :class="[
      flag ? 'bg-red-900' : 'bg-[#fafa00]',
    ]">Toggle</view>
    <view :class="{
      'bg-[#fafa00]': flag === true,
    }">Toggle</view>
    <view class="p-[20px] -mt-2 mb-[-20px] ">p-[20px] -mt-2 mb-[-20px] margin的jit 不能这么写 -m-[20px]</view>
    <view class="space-y-[1.6rem]">
      <view class="w-[300rpx] text-black text-opacity-[0.19]">w-[300rpx] text-black text-opacity-[0.19]</view>
      <view class="min-w-[300rpx] max-h-[100px] text-[20px] leading-[0.9]">min-w-[300rpx] max-h-[100px] text-[20px]
        leading-[0.9]</view>
      <view class="max-w-[300rpx] min-h-[100px] text-[#dddddd]">max-w-[300rpx] min-h-[100px] text-[#dddddd]</view>
      <view
        class="flex items-center justify-center h-[100px] w-[100px] rounded-[40px] bg-[#123456] bg-opacity-[0.54] text-[#ffffff]">
        Hello</view>
      <view class="border-[10px] border-[#098765] border-solid border-opacity-[0.44]">border-[10px] border-[#098765]
        border-solid border-opacity-[0.44]</view>
      <view class="grid grid-cols-3 divide-x-[10px] divide-[#010101] divide-solid">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </view>
      <view class="w-32 py-2 rounded-md font-semibold text-white bg-pink-500 ring-4 ring-pink-300">
        Default
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      title: "Hello",
      flag: true,
      // https://uniapp.dcloud.net.cn/tutorial/vue-basics.html#class-%E4%B8%8E-style-%E7%BB%91%E5%AE%9A
      // 小程序端不支持 classObject 和 styleObject 语法。
      classObj: {
        'bg-[#123456]': true,
        'text-[#654321]': true
      },
      classArray: [true ? 'bg-[#123456]' : undefined, 'text-[#654321]', "bg-[url('https://xxx.com/xx.webp')]"]
    };
  },
  methods: {},
});
</script>

