## 项目介绍

本项目为个人搭建的模版，采用 React + React-Router V6 + Typescript + Vite 3 + Mobx + ahooks 搭建。

## 主要技术栈

- [React](https://reactjs.org/)
- [Typescript](https://www.tslang.cn/index.html)
- [Vite](https://cn.vitejs.dev/)
- [Mobx](https://zh.mobx.js.org/README.html)
- [ahooks](https://ahooks.js.org/zh-CN/)
- [React-Router](https://reactrouter.com/)

## 工程目录

```shell
.
├── .husky
├── public
├── src
│   ├── assets                资源目录（图片、icon、scss、css等）
│   ├── components            公共组件
│   ├── config                配置中心
│   ├── constant              常量
│   ├── hooks                 自定义 hook
│   ├── layout                布局组件
│   ├── pages                 页面目录
│   ├── router                路由配置
│   ├── service               请求中心
│   ├── store                 状态管理
│   ├── typings               ts类型定义
│   └── utils                 工具函数
│   ├── App.tsx               主应用
│   └── auto-imports.d.ts     工具函数
│   ├── main.tsx              主入口
│   └── vite-env.d.ts         全局声明
├── .commitlintrc.cjs         commitlintrc 配置
├── .env.development          开发环境配置
├── .env.production           生产环境配置（自行创建）
├── .eslintrc.cjs             eslint 配置
├── .eslintignore             eslint 忽略配置
├── .prettierrc.cjs           prettier 配置
├── .prettierignore           prettier 忽略配置
├── .gitignore                git 忽略配置
├── .stylelintrc.cjs          stylelintrc 配置
├── index.html                项目入口
├── package.json
├── README.md
├── tsconfig.json             ts 配置
└── vite.config.ts            vite 配置
```

## 运行项目

1.  安装依赖

```shell
pnpm i
```

2.  本地运行项目

```shell
pnpm dev
```

3.  打包构建

```shell
pnpm build
```
