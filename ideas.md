# iGEM Syn-M Wiki 设计理念

## 选定设计方案：学术科技风格 (Academic Tech Aesthetic)

### Design Movement
**Neo-Academic Digital** - 融合传统学术期刊的严谨排版与现代科技界面的动态元素，创造一种既专业又具有未来感的视觉语言。

### Core Principles
1. **深邃背景**：使用深蓝色渐变作为主背景，象征深海/宇宙的探索精神
2. **橙色强调**：以橙色作为主要强调色，代表活力与创新
3. **卡片化内容**：所有内容区块采用半透明卡片设计，增加层次感
4. **侧边导航**：固定侧边栏提供页面内导航，模仿学术论文的目录结构

### Color Philosophy
- **Primary Background**: `#0d1b2a` → `#1a2a4a` 深蓝渐变 - 代表科学的深度与严谨
- **Accent Color**: `#ff6b35` 橙色 - 代表创新与突破
- **Secondary Accent**: `#E6007E` 品红色 - 代表生物医学领域
- **Text**: 白色/浅灰色 - 确保在深色背景上的可读性
- **Card Background**: `rgba(30, 50, 80, 0.85)` 半透明深蓝 - 创造层次感

### Layout Paradigm
- 固定顶部导航栏 (70px 高度)
- 左侧固定侧边栏 (260px 宽度) 用于页面内目录
- 主内容区居中，最大宽度 1200px
- 响应式设计，移动端隐藏侧边栏

### Signature Elements
1. **橙色竖线装饰**：章节标题左侧的橙色竖线，模仿学术论文的引用标记
2. **渐变下划线**：页面标题下方的橙色→粉色渐变下划线
3. **高亮框**：重要信息使用带左边框的渐变背景高亮框

### Interaction Philosophy
- 平滑滚动到锚点
- 侧边栏当前章节高亮
- 卡片悬停时微微上浮
- 导航链接悬停时背景变化

### Animation
- 卡片入场时从下方淡入 (fadeInUp)
- 按钮和链接悬停时平滑过渡 (0.3s ease)
- 页面滚动时侧边栏高亮平滑切换

### Typography System
- **页面标题**: 48px, 700 weight, 橙色
- **章节标题**: 28px, 600 weight, 白色
- **小节标题**: 22px, 600 weight, 橙色
- **正文**: 16px, 400 weight, 浅灰色, 1.8 行高
- **代码**: Fira Code / Consolas, 14px
