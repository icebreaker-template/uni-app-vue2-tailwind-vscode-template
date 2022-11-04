# uni-app vue2 tailwindcss 模板

> 已经支持 tailwindcss jit 模式!

[English](./README_en.md)

这是一个使用 `vue2` 来开发 `uni-app` 的模板,辅助以小程序定制化的 `tailwindcss`

由于受到 `@vue/cli-service` `4.x`版本中 `postcss 7.x` 的限制 , 所以 `tailwindcss` 降低了些版本

目前建议用此版本而不是 `vue3` 因为, 3 版本的 `uni-app` 生态并没有建立起了。

> 2022/11/4
> 目前 vue3 版本的 `uni-app` 主要可以使用 `vk-uview-ui` 和 `tmui`
> 其中  `vk-uview-ui` 为 `uview-ui 1.x` 的移植版本
> `tmui` 是一个新的组件库

<!-- 举个例子，vue3 可以使用 原先的控件库，会存在很多的 bug -->

## 快速开始

本项目已经集成 `weapp-ide-cli` 可以通过 `cli` 对 `ide` 进行额外操作，[详细信息](https://www.npmjs.com/package/weapp-ide-cli)

## Tips

- `vue2` 使用 `npx @dcloudio/uvm` 升级 `uni-app` 依赖

- `vue3` 使用 `npx @dcloudio/uvm alpha` 升级 `uni-app` 依赖
