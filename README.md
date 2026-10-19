# 漫威宇宙全维关系图谱 · Marvel Universe Graph

**简体中文** | [English](README.en.md)

> 以「节点 + 关系」知识图谱交互式浏览漫威全内容生态（漫画 / 电影 / 剧集 / 动漫 / 游戏）中一切事物的关联 —— 作品 → 角色 → 人物三层模型、九种视图投影、中英双语、**运行时零外网请求，断网完整可用**。

**[🌐 在线访问](https://studyguy.github.io/marvel-universe-graph/)** · **[📦 源码仓库](https://github.com/studyguy/marvel-universe-graph)**

![技术栈](https://img.shields.io/badge/Vite%205%20·%20React%2018%20·%20TypeScript%20·%20Canvas%202D-图谱引擎-e62429)

---

## 📖 这是什么

想查「美国队长3 里都有谁出场」或「钢铁侠和蜘蛛侠是什么关系」，零散的百科页面很难给出全局答案。本站把漫威宇宙的一切实体（作品、角色名号、人物、团队、物品、事件、宇宙……）与它们之间的关系（出场、担任、盟敌、师徒、血缘、能力……）建为一张**可交互的知识图谱**：中心放射 + 逐层下钻，点开节点看详情（图片、双语简介、关系列表、来源链接），检索中英文与别名自动补全。

数据为纯前端静态 JSON，**运行时零外网请求**——部署到任意静态托管（GitHub Pages / nginx / 对象存储），断网也能完整浏览与交互。

## 🚀 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 开发模式 → http://localhost:5173
npm run build      # 生产构建（先汇编数据，再打包到 dist/）
npm run preview    # 预览生产构建
npm test           # vitest：人名规范化单测 + data:build 全量不变量校验（黑盒）
```

> `dist/` 可部署到任意静态托管。

## ✨ 核心功能

| 模块 | 说明 |
|---|---|
| 三层关系链 | **作品 → 角色 → 人物**：作品关联出场角色（《美国队长3》→ 美国队长/钢铁侠/蜘蛛侠），角色串联历任人物（美国队长 → 史蒂夫·罗杰斯/山姆·威尔逊）；无名号人物（灭霸等）由作品直连 |
| 九种视图投影 | 全景（类型星团）/ 角色 / 团队 / 场景 / 作品 / 物品 / 事件 / 宇宙 / 频道 —— 同一张图的重新投影 |
| 名号体系 | **角色（名号）为关系核心**：93 个角色节点、139 人挂「担任」关系；作品出场与身份类社会关系（盟敌/战斗/师徒/创造/组织/事件/武器/能力）自动改道名号层（名号↔名号关系 70+ 条）；家族血缘/情感/变体保留人物层；双重防返祖校验 |
| 节点详情 | 图片、中英名、别名、简介、分类关键属性、按大类分组的关系列表、来源链接；人物介绍为 Fandom 式四段叙事（身份起源 / 经历 / 能力弱点 / 现状），信息卡直接汇总自关系边不重复存储 |
| 检索 | 中 / 英 / 别名自动补全，命中即定位居中并打开详情 |
| 筛选与图例 | 节点大类 + 关系大类开关；节点颜色 / 线色 / 箭头 / 频道划分图例 |
| 多端适配 | PC 三区布局（均可折叠）；移动端底部弹层、单指平移、双指缩放、双触下钻、安全区适配 |
| 状态记忆 | 语言、主题、视图、筛选、中心与浏览历史 localStorage 持久化 |
| 日夜间主题 | 顶栏 ☀️/🌙 一键切换；日间纸白+漫威红、夜间深空+暖金；画布引擎随主题联动 |
| 体系文档 | `/docs/schema` 与 `/docs/relations` 站内可查分类与关系体系（由 `data/taxonomy.ts` 直接渲染，永不脱节） |
| 引导与状态 | 首访三步引导；加载 / 空结果 / 可重试错误 / 图片占位四态兜底 |

## 🗂️ 数据与图片管线

数据源在 `data/source/*.ts`（实体与关系声明），分类与关系体系在 `data/taxonomy.ts`：

```bash
npm run data:build   # 校验 + 汇编 → public/data/graph.json
```

- `data:build` 校验：ID 唯一、关系端点存在、类型/子类合法、子属性已声明，并列出统计与警告
- 新增内容：在 `data/source/` 中用 `ch()/wk()/team()/E()` 等构建器登记节点与关系
- 人物介绍：`data/source/bios.ts` 集中登记**选填**的双语介绍（事实来源 Marvel Database，CC BY-SA 3.0）；缺 bio 的人物只显示信息卡，不报错、不影响零警告验收

**真实图片**：仓库已内置 **699 张真实图像**（93 个角色节点全部配图 + 人物/作品全覆盖），来源 Fandom（CC BY-SA 3.0）、萌娘百科（CC BY-NC-SA）、百度百科主图；缺失自动回退海报级生成头像（类型配色 + 徽章），永不破图。补图通道：

```bash
node scripts/fetch-images.mjs        # Fandom 通道（自动探测本机代理端口）
node scripts/fetch-images-cn.mjs     # 萌娘百科通道（无需代理）
node scripts/fetch-images-baike.mjs  # 百度百科通道（直连）
npm run data:build                   # 打标后刷新即生效
```

> 目检是硬性步骤（自动首图会配错，错图比徽章更糟）；详细流程见 `scripts/` 与下方架构文档。

## 🏗️ 技术架构

```
data/source → scripts/build-data.ts → public/data/graph.json
                                          ↓
        React UI（顶栏/筛选/详情/文档） ← Zustand → Canvas 2D 图谱引擎（布局/渲染/命中/交互）
```

详见 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)（唯一架构真相源）、[docs/data-inventory.md](docs/data-inventory.md)（数据清单）、[docs/node-taxonomy.md](docs/node-taxonomy.md) 与 [docs/relation-taxonomy.md](docs/relation-taxonomy.md)（体系文档）。

## 📊 数据规模

当前内置数据集：**718 节点 / 1738 关系**（含 93 名号与身份节点），覆盖全部 11 大节点类：MCU 全部电影与剧集、福克斯 X 战警系、索尼 SSU、经典剧集、动画、游戏、漫画重要连载与大事件，以及 616 漫画核心角色与多宇宙蜘蛛侠变体等。数据以 MCU 正史为深度优先，适合学习与演示用途。

## 📜 许可与致谢

本项目代码与原创内容（图谱引擎、数据结构、汇编数据、双语整理）**版权归作者所有**，采用自定义许可（详见 [LICENSE.md](./LICENSE.md)）：

- ✅ 允许：在线浏览、个人学习、GitHub 平台内 Fork 与 Pull Request
- ❌ 禁止：未经作者事先书面许可，复制 / 再分发、修改后发布，或用于任何**商业用途**；授权与合作请提 [Issue](https://github.com/studyguy/marvel-universe-graph/issues)

本项目为**非官方、非商业的学习 / 粉丝用途**作品：漫威及全部角色内容的著作权归 **Marvel 与 Disney** 所有；数据与图片参考并致谢 [Marvel Database](https://marvel.fandom.com/wiki/Marvel_Database)（CC BY-SA 3.0）、[Marvel Cinematic Universe Wiki](https://marvelcinematicuniverse.fandom.com/wiki/Marvel_Cinematic_Universe_Wiki)（CC BY-SA 3.0），相应衍生内容依 CC BY-SA 3.0 共享并注明出处。
