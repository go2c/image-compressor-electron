一个基于 Electron 构建的跨平台桌面端图片压缩工具。该项目旨在提供一个轻量级、易用的 GUI 界面，帮助用户快速压缩 PNG、JPG、WebP 等格式的图片，有效减小文件体积，同时尽可能保持图片质量。

📸 功能特性

•   直观的用户界面：简洁明了的 GUI 操作界面，上手简单。

•   拖拽上传：支持将图片直接拖入窗口进行加载。

•   批量压缩：支持一次性选择多张图片进行处理。

•   实时预览：压缩前后图片效果即时对比。

•   自定义压缩率：可根据需求调整压缩质量参数。

•   跨平台支持：基于 Electron，理论上支持 Windows、macOS 和 Linux（当前配置主要针对 Windows x64）。

🛠️ 技术栈

•   框架: https://www.electronjs.org/

•   核心压缩库: https://www.npmjs.com/package/browser-image-compression

•   渲染进程: HTML5 / CSS3 / Vanilla JavaScript (ES6+)

•   进程通信: Electron IPC (Inter-Process Communication)

📂 项目结构

```
image-compressor-electron/
├── main.js            # 主进程：创建窗口、处理原生事件
├── preload.js         # 预加载脚本：安全地暴露 IPC 接口给渲染进程
├── renderer.js        # 渲染进程：处理 UI 交互和图片压缩逻辑
├── index.html         # 应用程序界面
├── package.json       # 项目配置和依赖管理
└── README.md          # 项目说明文档
```

🚀 快速开始

环境准备

在开始之前，请确保你的开发环境中已安装：

•   https://nodejs.org/ (推荐 LTS 版本，>= 18.x)

•   https://www.npmjs.com/ (通常随 Node.js 一同安装)

安装与运行

1.  克隆仓库
    ```bash
    git clone https://github.com/go2c/image-compressor-electron.git
    cd image-compressor-electron
    ```
2.  安装依赖
    ```bash
    npm install
    ```
    
3.  启动开发服务器  
    ```bash
    npm start
    ```
    
    此时会弹出一个 Electron 窗口，即为应用界面。

📦 打包构建

本项目使用 electron-builder 进行打包，执行以下命令生成 Windows 安装包 (.exe)   

```bash
npm run dist   
```

> ⚠️ 打包完成后，可在 dist 目录下找到生成的安装文件。

🙏 致谢

•   感谢 Electron 团队提供的优秀框架。
•   感谢 browser-image-compression 提供的核心压缩能力。
