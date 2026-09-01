# 漫威宇宙全维关系图谱 · Marvel Universe Graph

以"节点 + 关系"知识图谱的形式，交互式浏览漫威全内容生态（漫画 / 电影 / 剧集 / 动漫 / 游戏）中一切事物的关联。中心放射 + 逐层下钻，中英双语，**断网完整可用**。

**🌐 在线访问 / Live Demo**：[studyguy.github.io/marvel-universe-graph](https://studyguy.github.io/marvel-universe-graph/)

![技术栈](https://img.shields.io/badge/Vite%205%20·%20React%2018%20·%20TypeScript%20·%20Canvas%202D-图谱引擎-e62429)

---

## 快速开始 / Quick Start

```bash
npm install        # 安装依赖
npm run dev        # 开发模式 → http://localhost:5173
npm run build      # 生产构建（先汇编数据，再打包到 dist/）
npm run preview    # 预览生产构建
npm test           # vitest：人名规范化单测 + data:build 全量不变量校验（黑盒）
```

> 网站为纯前端静态站：`dist/` 可部署到任意静态托管（GitHub Pages / nginx / 对象存储…）。**运行时零外网请求**，断网可完整浏览与交互。

## 如何更新数据 / Updating Data

数据源在 `data/source/*.ts`（实体与关系声明），分类与关系体系在 `data/taxonomy.ts`。

```bash
npm run data:build   # 校验 + 汇编 → public/data/graph.json
```

- `data:build` 会校验：ID 唯一、关系端点存在、类型/子类合法、子属性已声明，并列出统计与警告；
- 新增内容：在 `data/source/` 中用 `ch()/wk()/team()/E()` 等构建器登记节点与关系即可；
- 修改体系：改 `data/taxonomy.ts`（站内 `/docs/schema`、`/docs/relations` 文档页由它直接渲染，永不脱节）。

### 人物介绍（Fandom 式详情）

`data/source/bios.ts`（按 bios-core / bios-mcu / bios-comics 分文件）集中登记**选填**的人物介绍（`bio('ch-bruce-banner', [{ zh, en }, …])`），详情抽屉内渲染为"信息卡 + 介绍摘要"，点"阅读完整介绍"弹出全文大弹窗：

- 叙事模板与 Fandom 人物页一致：① 身份与起源 ② 主要经历/故事线 ③ 能力与弱点 ④ 现状与结局（4-6 段、双语）；
- 信息卡（名号/出生地/能力/所属）**直接汇总自关系边**（held-mantle / born-in / has-ability / member-of），不重复存储；
- **事实来源：Marvel Database（marvel.fandom.com）**——本机需要通过代理访问（Clash mixed-port 7897 等）+ 真实浏览器过 Cloudflare 挑战（curl 直抓会被 403 拦截）；抓取流程见 `scripts/fetch-moegirl-bios.py`（旧萌娘通道）与浏览器内采集脚本（可按需重新执行）；中文正文为本站改写（CC BY-SA 3.0，非商业粉丝用途），待补名单在 bios-comics.ts 尾部注释；
- 缺 bio 的人物只显示信息卡，不报错、不影响零警告验收。

## 真实图片（可选增强）/ Real Images (Optional)

仓库已内置 **699 张真实图像**（93 个角色节点全部配图 + 人物/作品全覆盖，剩余为能力/宇宙/频道等抽象概念，使用徽章式生成头像），来源：
- Fandom（Marvel Database / MCU Wiki，CC BY-SA 3.0）— 走本机代理抓取
- 萌娘百科（CC BY-NC-SA）— 中文百科通道，环境直连可达
- 百度百科词条主图（仅人物/称号型词条，自动排除影视作品）— `node scripts/fetch-images-baike.mjs`
- 百度图片搜索（直连，无需代理；适用于 fandom 封锁 + 必应图床被网络的兜底）— 见下方"必应/百度直连补图"流程

如需重新抓取或补充：

```bash
node scripts/fetch-images.mjs        # Fandom 通道：自动探测本机代理端口（7897/7890/10809…），也可 --proxy=host:port
node scripts/fetch-images-cn.mjs     # 萌娘百科通道（无需代理）
node scripts/fetch-images-web.mjs    # Web 通道：豆瓣海报 + 必应图（走代理）
node scripts/fetch-images-baike.mjs  # 百度百科通道：人物/角色词条主图（直连）
npm run data:build                   # 打标后刷新即生效
```

**必应 / 百度直连补图（无代理环境）**：必应搜索接口可直连但图床 `ts*.mm.bing.net` 会被重置，需改用候选元信息中的 `murl`（原始图）或直接走百度图片通道：

```bash
node scripts/fetch-baidu-candidates.mjs            # 百度图片：每节点 8 张候选缩略图 → .tmp-bing/
python3 scripts/montage-bing-sheets.py             # 拼接触片（PIL）供目检挑图
python3 -c "..."                                   # 根据目检把选中候选复制到 public/assets/images/<id>.jpg
npm run data:build                                 # 自动打标（img:true 按文件存在探测）
```

目检是硬性步骤（历史教训：自动首图会配错，错图比徽章更糟）；抓取流程与常用候选词集中在 `scripts/fetch-baidu-candidates.mjs` 的 `TARGETS` 表。

- 批量查询（10 标题/请求）+ 候选标题策略（去后缀 / (film) / (TV series) / (Earth-616)）+ 未命中清单 `scripts/fetch-misses.json`
- 运行时真实图优先，缺失自动回退海报级生成头像（类型配色 + 子类徽章 + 纹样），永不破图

## 功能总览

| 模块 | 说明 |
|---|---|
| 三层关系链 | **作品 → 角色 → 人物**：作品关联其出场角色（如《美国队长3》→ 美国队长/钢铁侠/蜘蛛侠），角色再串联历任人物（美国队长 → 史蒂夫·罗杰斯/山姆·威尔逊）；无名号人物（灭霸等）由作品直连 |
| 视图投影 | 全景（类型星团）/ 角色 / 团队 / 场景 / 作品 / 物品 / 事件 / 宇宙 / 频道 九种，同一张图的重新投影 |
| 名号体系 | **角色（名号）为关系核心**：93 个角色节点、139 人挂"担任"关系；作品出场与身份类社会关系（盟敌/战斗/师徒/创造/组织/事件/武器/能力）自动改道名号层——名号↔名号关系 70+ 条（如 钢铁侠↔美国队长 盟友/宿敌、钢铁侠→蜘蛛侠 师徒）；家族血缘/情感/变体/出生地保留人物层；双重防返祖校验 |
| 节点详情 | 图片、中英名、别名、简介、分类关键属性、按大类分组的关系列表、来源链接 |
| 检索 | 中 / 英 / 别名自动补全，命中即定位居中并打开详情 |
| 筛选与图例 | 节点大类 + 关系大类开关；节点颜色/线色/箭头/频道划分图例 |
| 多端 | PC 三区布局（筛选/画布/详情均可折叠）；移动端底部弹层、单指平移、双指缩放、双触下钻、安全区适配 |
| 状态记忆 | 语言、主题、视图、筛选、中心与浏览历史 localStorage 持久化 |
| 日夜间主题 | 顶栏 ☀️/🌙 一键切换；日间纸白+漫威红、夜间深空+暖金；画布引擎（背景/星点/节点/小地图）随主题联动，`data-theme` 语义令牌驱动 |
| 体系文档 | `/docs/schema` 与 `/docs/relations` 站内可查分类与关系体系 |
| 引导与状态 | 首访三步引导；加载 / 空结果 / 可重试错误 / 图片占位四态兜底 |

## 架构

详见 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)（唯一架构真相源）、[docs/data-inventory.md](docs/data-inventory.md)（数据清单盘点）、[docs/node-taxonomy.md](docs/node-taxonomy.md) 与 [docs/relation-taxonomy.md](docs/relation-taxonomy.md)（体系文档）。

```
data/source → scripts/build-data.ts → public/data/graph.json
                                          ↓
        React UI（顶栏/筛选/详情/文档） ← Zustand → Canvas 2D 图谱引擎（布局/渲染/命中/交互）
```

## 数据规模

当前内置演示数据集：**718 节点 / 1259 关系**（含 93 名号与身份节点），覆盖全部 11 大节点类：
MCU 全部电影与剧集、福克斯 X 战警系、索尼 SSU、经典剧集、动画、游戏、漫画重要连载与大事件，以及 616 漫画核心角色与多宇宙蜘蛛侠变体等。数据以 MCU 正史为深度优先，兼容学习与演示用途。

## 许可与致谢

本项目代码与原创内容（图谱引擎、数据结构、汇编数据、双语整理）**版权归作者所有**，采用自定义许可（详见 [LICENSE.md](./LICENSE.md)）：

- ✅ 允许：在线浏览、个人学习、GitHub 平台内 Fork 与 Pull Request；
- ❌ 禁止：未经作者事先书面许可，复制 / 再分发、修改后发布，或用于任何**商业用途**。授权与合作请提 [Issue](https://github.com/studyguy/marvel-universe-graph/issues)。

### 第三方内容致谢

本项目为**非官方、非商业的学习 / 粉丝用途**作品：

- 漫威及全部角色内容的著作权归 **Marvel 与 Disney** 所有；
- 数据与图片参考并致谢：[Marvel Database](https://marvel.fandom.com/wiki/Marvel_Database)（CC BY-SA 3.0）、[Marvel Cinematic Universe Wiki](https://marvelcinematicuniverse.fandom.com/wiki/Marvel_Cinematic_Universe_Wiki)（CC BY-SA 3.0），相应衍生内容依 CC BY-SA 3.0 共享并注明出处。
