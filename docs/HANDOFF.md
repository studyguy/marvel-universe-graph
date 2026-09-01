# HANDOFF — 漫威宇宙全维关系图谱网站（接手开发文档）

> 用途：跨设备/跨工具交付。把本文直接粘贴给任意 AI 开发工具即可完整接手。项目根目录 `C:\Users\Admin\Desktop\Project\漫威wiki`。

## 0. 项目一句话
以"节点+关系"知识图谱交互漫威全内容生态（漫画/电影/剧集/动漫/游戏）：**作品 → 角色 → 人物** 三层模型，中心放射 + 逐层下钻，中英双语，纯前端静态站断网可用，当前 718 节点 / 1259 关系 / 678 张真实图片。

## 1. 运行与命令
```bash
npm install          # 依赖：vite5/react18/ts5/zustand4/react-router6（无其他图形库）
npm run dev          # 开发 http://localhost:5174（--force 可清 vite 转换缓存）
npm run data:build   # 校验+汇编 data/source/*.ts → public/data/graph.json（必跑的单一真相入口）
npm run build        # data:build + tsc + vite build → dist/（gzip 后 JS 约 31KB，总 660KB）
npm run preview
node scripts/fetch-images.mjs        # fandom 通道：自动探测本机代理(7897/7890/10809/1080/8888)或 --proxy=host:port
node scripts/fetch-images-cn.mjs     # 萌娘百科通道（中文词条主图，直连）
node scripts/fetch-images-web.mjs    # 豆瓣海报+必应图（需代理）
node scripts/fetch-images-baike.mjs  # 百度百科通道（仅人物/称号词条，内含 16 个错配词条黑名单）
```

## 2. 架构
```
data/source/*.ts         实体声明（registry.ts 提供 ch/team/loc/item/wk/ev/uni/chan/race/ab/mantle/E 构建器）
  → scripts/build-data.ts   ①校验 ②自动重构（三重逻辑见 §3）③输出 graph.json
  → src/store/useStore.ts   zustand+persist(localStorage)：index/centerId/history/视图/筛选/rightOpen…
  → src/graph/             Canvas 2D 自研引擎（camera/layout/渲染/命中/交互/小地图）+ avatar.ts 生成头像
  → src/components/        TopBar / FilterPanel / DetailDrawer(+EdgeCard) / Controls / States
  → src/pages/             GraphPage（哈希路由 #/、#/node/:id、#/docs/:slug）
data/taxonomy.ts          体系真相源：节点类型/关系体系/视图配置——站内 /docs 页面直接由它渲染
docs/                     ARCHITECTURE / data-inventory / node-taxonomy / relation-taxonomy / mantle-inventory / HANDOFF
```
**持久化键** `marvel-graph-ui`：lang/view/centerId/history/hiddenNodeTypes/hiddenEdgeCats/leftOpen/rightOpen/legendOpen/guideDone。

## 3. 数据模型（不可破坏的核心）
- **节点 11 类**：人物(character,239) / **角色(mantle,"名号与身份",93)** / 团队(33) / 地点(50) / 物品(33) / 作品(141) / 事件(35) / 宇宙(28) / 媒体频道(6) / 种族(20) / 能力(30)。
- **三层链**：作品 →(debut/stars-in/appears-in/cameo-in/mentioned-in)→ **角色** →(held-mantle 担任：时期/宇宙/状态/来源)→ **人物**。无名号纯名人物（灭霸/洛基等）由作品直连。
- **build-data 内置三重自动重构**（勿绕过）：①人物名规范化（"美国队长 史蒂夫·罗杰斯"→"史蒂夫·罗杰斯"，原名进 alias；override 表 PERSON_NAME_OVERRIDE）②作品出场边按"人物→主角色"自动改道（prime=该人物第一条 held）③**防返祖校验**：出场类边直连有名号人物 → 报错。
- 关系 20 大类 / 96 种（taxonomy.ts），子属性展示于详情与 EdgeCard。
- 演员不设节点（出场关系"饰演"子属性）。

## 4. 关键交互决策（已定稿，勿回退）
- **单击任意节点 = 焦点切换 + 详情展开**（一键三事）；单击中心仅重开详情；双击等价兼容。
- **详情面板开关键为"用户主控+记忆"**：任何焦点变化**不再**自动改动 rightOpen；PC 右下"清单纸"按钮 / 移动端同款按钮 toggle；状态 persist。关闭后切换节点不再弹出。
- 顶栏 9 视图："角色"视图落在 **cluster:mantle 角色列表环**（20 个角色名，单击进其图谱）；其余视图跳主角类型最高度数节点的关系图谱；全景=cluster:root 星团（单击星团=进入该类型图谱，不再有孤点索引环）。
- 右下按钮组：`⌂`回到全景 / 📋详情开关 / ↩返回上一中心 / ⛶恢复视野（已删除 ± 缩放键，滚轮/双指保留）。
- 小地图：1:1 像素同步（JS 设 width/height+style，禁 CSS 100%强制）、圆角底框+clip、8px 内边距、视口框 clamp。
- 画布图片渲染为 **cover 居中裁剪**（保持原比例，防拉伸）。
- 引导三步 + 加载/空/错误四态；搜索中文/英文/别名补全（角色优先加权 500）。

## 5. 已踩坑记录（改代码前先看）
- **图片正确性**：百度"战争机器"=游戏标志、"幻视"=日本MARU、萌娘"幻视"同理 → 已删图回退徽章；`fetch-images-baike.mjs` 有 16 词条黑名单；**凡新增词条通道必须校验**。fandom 是唯一跨全部节点可靠源（需代理 7897="Clash Verge"），错图删除后跑 `node scripts/fetch-images.mjs && npm run data:build` 自动补正确图。
- **vite public 缓存**：改 data 后 dev 服偶发提供旧 graph.json → 改 public 数据后用 `npx vite --force` 重启或 Ctrl+F5。
- 本环境（git-bash/win）WebFetch 直连 fandom/维基全封锁；npm/github/bing 元数据可达、bing 图床被墙；豆瓣软限流。代理端口探测用 curl `-o NUL`（无效 /dev/null）。
- 测试脚本注意：合成 PointerEvent 需 try-catch setPointerCapture；后台标签 rAF 冻结（手动 e.step()/e.draw() 推帧）；IAB 截图偶发超时（改用 canvas toDataURL 导出）。
- 双击窗口 550ms（页面阻塞导致 380ms 会丢）；`::center` 是引擎内部中心键（边端点需 keyOf 映射）；视图切换 effect 用 store.getState() 读最新值，防弹回。

## 6. 当前状态与待办
- ✅ 功能全链路（三层模型/下钻/回退/搜索/筛选/双语/移动端/记忆/深链/小地图/图片全覆盖）
- ⏳ 待办候选：
  1. 开代理跑 fandom 全量补图（当前 678 张；角色 21 个无图：黑寡妇/黑豹/幽灵/光谱/惊奇少女/回声/铁拳/徘徊者/蝎子人/蜥蜴人/克莱文/紫色人/霹雳火/牌皇/冰人/新星/蓝奇/巫术/钢铁少年/莫比亚斯/美国特工，另 Vision/War Machine 待补）
  2. 集成测试补全（无自动化测试，建议 vitest + engine 快照）
  3. 数据扩充：漫画大事件/更多变体宇宙；后续可加"演员节点"（现为子属性，若扩需同步三层模型）
  4. 部署：dist/ 静态托管（GitHub Pages/nginx/对象存储）零后端；若上 CloudBase 见 cloudbase 技能
  5. 性能：节点 >1000 后可做边 LOD 分组与虚拟滚动（当前 34-46 节点/帧无压力）

## 7. 验收清单（改动后逐项）
1. `npm run data:build` 零错误零警告（特别看"重构:"行与防返祖错误）
2. 全景 11 星团 → 单击"角色"星团 → 角色列表环 → 单击角色（如美国队长）→ 图谱含其作品+担任者人物
3. 顶栏"角色/团队/作品/物品/场景/事件/宇宙/频道"切换均有连线
4. 收面板切换节点：面板不弹；开面板切换：内容跟随；刷新记忆
5. 搜索"美国队长"角色优先；深链 #/node/mnt-hulk 自动展开
6. 移动端 390px：无横向滚动、底部弹层、双指缩放、tap 切换焦点
7. 图片无拉伸；小地图内容在框内
