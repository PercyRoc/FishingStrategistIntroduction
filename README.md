# 垂钓军师 - 介绍页

这是一个为垂钓军师App设计的功能丰富的单页介绍网站（Landing Page），用于收集用户手机号码进行产品预约通知。

## 🎯 项目特性

- 📱 **移动端优先** - 完全响应式设计，适配各种设备
- 🎨 **现代UI设计** - 深色模式，科技感十足
- 🎭 **丰富动画** - 滚动触发动画、视差效果、输入反馈
- 📞 **手机号收集** - 完整的手机号码验证和收集功能
- 🚀 **高性能** - 基于 Vite 的快速开发和构建
- 💎 **Tailwind CSS** - 现代化的CSS框架，易于定制

## 🏗️ 页面结构

### 1. 英雄区域 (Hero Section)
- 全屏背景图片（宁静湖面日出）
- 渐变蒙层效果
- 醒目的产品标题和卖点
- 向下滚动提示动画

### 2. 核心召唤区域 (Call to Action)
- 手机号码收集表单
- 实时输入验证和格式化
- 渐变按钮设计
- 提交状态反馈

### 3. 详细功能预览 (Features Deep Dive)
- **智能环境分析** - 气压、风力、月相等深度分析
- **AI预测引擎** - 上鱼指数和个性化推荐
- **钓场社区** - 地图、评价、渔获分享
- **个人日志** - 数据记录和复盘分析
- 左右交替布局，避免视觉疲劳

### 4. 页脚
- 版权信息

## 🚀 快速开始

### 前提条件
- Node.js 16+ 
- npm 或 yarn

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd FishingStrategistIntroduction
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **打开浏览器**
   访问 `http://localhost:5173`

### 构建部署

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 📱 功能说明

### 手机号码收集系统
- **格式化输入** - 自动限制为11位数字
- **实时验证** - 输入时边框颜色变化反馈
- **正则验证** - 符合中国大陆手机号格式
- **本地存储** - 备份收集的手机号码
- **提交反馈** - 成功/失败/加载状态提示

### 动画效果系统
- **滚动动画** - 功能卡片从左侧滑入
- **视差效果** - 背景图片跟随滚动移动
- **输入动效** - 输入框聚焦时轻微放大
- **按钮动效** - 悬停和点击时的缩放效果

### 响应式设计
- **移动端优先** - 从小屏幕开始设计
- **多断点适配** - sm、md、lg、xl断点
- **触摸友好** - 适合触摸设备的交互

## 🛠️ 技术栈

- **HTML5** - 语义化标签
- **Tailwind CSS** - 实用优先的CSS框架
- **JavaScript (ES6+)** - 现代JavaScript语法
- **Vite** - 快速构建工具
- **PostCSS** - CSS后处理器

## 📁 项目结构

```
FishingStrategistIntroduction/
├── index.html              # 主页面
├── script.js               # JavaScript功能
├── style.css               # Tailwind CSS样式
├── package.json            # 项目配置
├── vite.config.js          # Vite配置
├── tailwind.config.js      # Tailwind配置
├── postcss.config.js       # PostCSS配置
└── README.md               # 项目说明
```

## 🎨 设计特色

- **深色模式** - 科技感十足的深灰色配色
- **渐变效果** - 蓝紫色渐变按钮和装饰
- **高质量图片** - 来自Unsplash的精选图片
- **现代字体** - Inter字体族
- **微交互** - 细腻的悬停和点击效果

## 🔧 自定义配置

### 修改背景图片
在 `index.html` 文件中替换图片URL：
```html
<img src="YOUR_IMAGE_URL" alt="背景图片" class="...">
```

### 修改色彩方案
在 `tailwind.config.js` 中调整颜色配置：
```javascript
theme: {
  extend: {
    colors: {
      // 添加自定义颜色
    }
  }
}
```

### 接入真实API
在 `script.js` 文件中替换 `simulateApiCall` 函数：
```javascript
// 替换为真实的API调用
const response = await fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ phone: phone })
});
```

## 📝 注意事项

1. **手机号码存储** - 目前使用localStorage存储，生产环境需要接入后端API
2. **图片资源** - 使用Unsplash图片，建议替换为自己的图片资源
3. **浏览器兼容** - 支持现代浏览器，IE需要polyfill
4. **SEO优化** - 已包含基本meta标签，可根据需要扩展

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 🤝 贡献

欢迎提交Issue和Pull Request！

---

**垂钓军师团队** - 让科技改变钓鱼体验 🎣 