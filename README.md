# Mobile-Fixed-Bg-Fix
# 移动端固定背景修复工具

![GitHub license](https://img.shields.io/github/license/add-qwq/Mobile-Fixed-Bg-Fix?style=flat-square)

## English

### Mobile-Fixed-Bg-Fix

A lightweight JavaScript solution to fix the common issue of `background-attachment: fixed` misbehaving on mobile devices due to dynamic viewport changes caused by browser toolbar auto-hide/show functionality.

### Problem Background

Mobile browsers often adjust their viewport height dynamically as users scroll - when toolbars (address bar, navigation bar) automatically hide or show during scrolling, the viewport height changes abruptly. This behavior causes significant display issues for background images using `background-attachment: fixed`, including:
- Background image being cut off or stretched
- Unexpected gaps appearing in the background
- Jerky or inconsistent background positioning during scrolling
- Poor user experience with misaligned page content and backgrounds

These issues have long plagued web developers using fixed background styles on mobile devices.

### Solution

Mobile-Fixed-Bg-Fix provides a universal solution to this problem through intelligent detection and dynamic adjustment:
- Automatically identifies mobile devices
- Replaces native `background-attachment: fixed` with a more reliable fixed-position element implementation
- Maintains original background styling (image, size, position, repeat)
- Dynamically adjusts background height during viewport changes
- Preserves the intended visual effect while ensuring consistent display across mobile browsers

### Key Features

- **Automatic Device Detection**: Uses both viewport width and user-agent detection to identify mobile devices
- **Seamless Style Preservation**: Retains all original background properties from your CSS
- **Dynamic Height Adjustment**: Listens for scroll and resize events to update background dimensions
- **Non-Intrusive Integration**: Works with existing CSS without requiring major code changes
- **Lightweight Implementation**: Minimal performance impact with efficient event handling
- **Universal Compatibility**: Solves the issue across all mobile browsers with dynamic toolbar behavior

### Usage

1. **Include the Script**: Add the `mobile-fixed-bg-fix.js` file to your project
2. **Integrate into Pages**: Include the script in your HTML pages, preferably before the closing `</body>` tag or in your JavaScript bundle
3. **No Configuration Needed**: The script automatically initializes on `DOMContentLoaded` and works with existing `background-attachment: fixed` styles

```html
<!-- Example integration -->
<script src="path/to/mobile-fixed-bg-fix.js"></script>
```

### Implementation Principle

1. **Mobile Detection**: The script first checks if the user is on a mobile device using a combination of viewport width (<768px) and user-agent pattern matching
2. **Background Check**: It detects if the `<body>` element uses `background-attachment: fixed`
3. **Style Migration**: When a fixed background is found, it:
   - Changes the body's background attachment to `scroll`
   - Creates a new fixed-position element (`#fixed-background`)
   - Copies all original background properties (image, size, position, repeat) to this new element
4. **Dynamic Adjustment**: Listens for `scroll` and `resize` events to update the background element's height whenever the viewport changes significantly (>50px difference)
5. **Initial Calibration**: Performs an initial height adjustment on page load to ensure proper display from the start

### Compatibility

Compatible with all modern mobile browsers:
- Chrome for Android
- Safari for iOS
- Firefox for Mobile
- Edge for Mobile
- Other modern mobile browsers supporting ES5+

### License

This project is licensed under the [Apache-2.0 License](LICENSE).

---

## 中文

### Mobile-Fixed-Bg-Fix
# 移动端固定背景修复工具

![GitHub license](https://img.shields.io/github/license/add-qwq/Mobile-Fixed-Bg-Fix?style=flat-square)

### 项目介绍

一款轻量级JavaScript解决方案，用于修复移动端浏览器中因工具栏自动隐藏/显示导致视口动态变化时，`background-attachment: fixed`背景图片出现的显示问题。

### 问题背景

移动端浏览器在用户滚动时，通常会动态调整视口高度——当工具栏（地址栏、导航栏）自动隐藏或显示时，视口高度会突然变化。这种行为会导致使用`background-attachment: fixed`的背景图片出现显示问题，包括：
- 背景图片被截断或拉伸
- 背景中出现意外空白间隙
- 滚动时背景定位抖动或不一致
- 页面内容与背景错位，影响用户体验

这些问题长期困扰着在移动端使用固定背景样式的开发者。

### 解决方案

Mobile-Fixed-Bg-Fix通过智能检测和动态调整提供了通用解决方案：
- 自动识别移动设备
- 使用更可靠的固定定位元素替代原生`background-attachment: fixed`实现
- 保留原始背景样式（图片、尺寸、位置、重复方式）
- 在视口变化时动态调整背景高度
- 在确保移动端显示一致性的同时，保留预期的视觉效果

### 核心功能

- **自动设备检测**：结合视口宽度和用户代理检测识别移动设备
- **样式无缝保留**：完全继承CSS中定义的所有原始背景属性
- **动态高度调整**：监听滚动和窗口大小变化事件，实时更新背景尺寸
- **非侵入式集成**：无需大幅修改现有CSS，与现有样式兼容
- **轻量实现**：高效的事件处理机制，对性能影响极小
- **广泛兼容性**：解决所有具有动态工具栏行为的移动浏览器的显示问题

### 使用方法

1. **引入脚本**：将`mobile-fixed-bg-fix.js`文件添加到你的项目中
2. **集成到页面**：在HTML页面中引入脚本，建议放在`</body>`标签前或打包到JavaScript bundle中
3. **无需配置**：脚本会在`DOMContentLoaded`事件触发时自动初始化，直接与现有`background-attachment: fixed`样式配合工作

```html
<!-- 集成示例 -->
<script src="path/to/mobile-fixed-bg-fix.js"></script>
```

### 实现原理

1. **移动设备检测**：脚本首先通过视口宽度（<768px）和用户代理模式匹配的组合判断用户是否在移动设备上
2. **背景检测**：检查`<body>`元素是否使用了`background-attachment: fixed`样式
3. **样式迁移**：当检测到固定背景时，它会：
   - 将body的背景附着方式改为`scroll`
   - 创建新的固定定位元素（`#fixed-background`）
   - 将所有原始背景属性（图片、尺寸、位置、重复）复制到这个新元素
4. **动态调整**：监听`scroll`和`resize`事件，当视口变化超过50px时更新背景元素高度
5. **初始校准**：在页面加载时执行初始高度调整，确保从一开始就正确显示

### 兼容性

兼容所有现代移动浏览器：
- 安卓版Chrome
- iOS版Safari
- 移动版Firefox
- 移动版Edge
- 其他支持ES5+的现代移动浏览器

### 许可证

本项目采用[Apache-2.0许可证](LICENSE)授权。
