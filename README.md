# 个人作品集网站

## 项目描述

这是一个现代化的个人作品集网站，用于展示个人项目、技能和联系方式。网站采用响应式设计，适配桌面端和移动端，包含流畅的动画交互效果。

## 功能特点

- 响应式设计，支持各种屏幕尺寸
- 平滑滚动导航，自动高亮当前区域
- 动态项目展示卡片
- 带动画的技能进度条（IntersectionObserver）
- 联系表单验证和反馈
- 移动端汉堡菜单

## 项目结构

```
.
├── index.html      # 主页面
├── styles.css      # 样式文件
├── main.js         # JavaScript 交互
├── images/         # 图片资源文件夹
└── README.md       # 项目说明文档
```

## 在线地址

[https://kirineko.github.io/personal-portfolio/](https://kirineko.github.io/personal-portfolio/)

## 运行说明

### 方式一：直接打开

使用浏览器直接打开 `index.html` 文件即可预览。

### 方式二：Live Server（推荐）

如果你使用 VS Code，推荐安装 Live Server 插件：

1. 在 VS Code 中安装 "Live Server" 插件
2. 右键点击 `index.html`，选择 "Open with Live Server"
3. 浏览器将自动打开并实时刷新

### 方式三：本地服务器

使用 Python 启动简易 HTTP 服务器：

```bash
# Python 3
python -m http.server 8000
```

然后在浏览器中访问 `http://localhost:8000`。

## 技术栈

- **HTML5** - 语义化结构，响应式 meta 标签
- **CSS3** - Flexbox/Grid 布局，渐变色，过渡动画，媒体查询
- **JavaScript (ES6+)** - DOM 操作，事件处理，IntersectionObserver

## 自定义指南

1. **个人信息**：修改 `index.html` 中的姓名、简介和头像占位符
2. **项目展示**：编辑 `main.js` 中的 `projectsData` 数组
3. **技能**：编辑 `main.js` 中的 `skillsData` 数组
4. **样式**：修改 `styles.css` 中的配色和布局变量
5. **图片**：将图片放入 `images/` 文件夹，并更新 HTML 中的引用
