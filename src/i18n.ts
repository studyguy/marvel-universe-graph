/** 全站 UI 双语字典 */
import { L2 } from '../data/taxonomy';

export type Lang = 'zh' | 'en';

const S = {
  appTitle: L2('漫威宇宙图谱', 'Marvel Universe Graph'),
  appSub: L2('全维关系知识图谱', 'The Full-Spectrum Knowledge Graph'),
  searchPlaceholder: L2('搜索角色 / 作品 / 物品…', 'Search characters, works, items…'),
  searchEmpty: L2('未找到匹配的节点', 'No matching nodes'),
  viewLabel: L2('视图', 'View'),
  filterTitle: L2('筛选', 'Filters'),
  nodeTypes: L2('节点大类', 'Node Categories'),
  relationCats: L2('关系大类', 'Relation Categories'),
  legend: L2('图例', 'Legend'),
  legendNodes: L2('节点颜色 = 大类', 'Node color = category'),
  legendLines: L2('线色 = 关系大类；箭头 = 方向', 'Line color = relation type; arrows show direction'),
  legendChannels: L2('频道划分：MCU 流媒体剧集与特别篇归 MCU 频道；ABC/Netflix 老剧归"电视剧宇宙"；福克斯 X 战警与索尼 SSU 归"其他影视宇宙"；动画与游戏独立成频道。', 'Channels: MCU streaming series & specials belong to the MCU channel; ABC/Netflix shows form the TV Universe channel; legacy Fox X-Men and Sony\'s SSU form Other Film Universes; animation and games have their own channels.'),
  legendActors: L2('演员不设独立节点，作为"出场"关系的子属性记录。', 'Actors are not nodes; they are stored as sub-properties of appearance relations.'),
  legendVariants: L2('跨宇宙同名角色分立节点，以"多元变体"关系互连。', 'Same-name characters across universes are separate nodes linked as multiversal variants.'),
  resetFilters: L2('全部显示', 'Show all'),
  detail: L2('详情', 'Details'),
  relations: L2('关系', 'Relations'),
  aliases: L2('别名', 'Aliases'),
  keyProps: L2('关键属性', 'Key Attributes'),
  sources: L2('信息来源', 'Sources'),
  back: L2('返回上一中心', 'Back to previous focus'),
  resetView: L2('恢复视野', 'Fit view'),
  backToOverview: L2('回到全景', 'Back to Overview'),
  zoomIn: L2('放大', 'Zoom in'),
  zoomOut: L2('缩小', 'Zoom out'),
  centerNow: L2('当前中心', 'Current focus'),
  breadcrumb: L2('浏览路径', 'Breadcrumb'),
  edgeDetail: L2('关系详情', 'Relation Detail'),
  subProps: L2('子属性', 'Sub-properties'),
  noSubProps: L2('该关系无附加子属性', 'No sub-properties on this relation'),
  loading: L2('正在展开宇宙…', 'Unfolding the universe…'),
  loadError: L2('数据加载失败', 'Failed to load data'),
  retry: L2('重试', 'Retry'),
  emptyResult: L2('当前筛选下没有可见节点，试试放宽筛选条件。', 'No visible nodes under current filters — try loosening them.'),
  moreCluster: L2('更多', 'More'),
  clusterLabel: L2('聚合', 'Cluster'),
  guideTitle: L2('三步上手', 'Getting Started'),
  guide1t: L2('点选节点', 'Click a node'),
  guide1d: L2('查看它的详情面板与全部关系', 'Open its detail panel and relations'),
  guide2t: L2('双击下钻', 'Double-click to drill'),
  guide2d: L2('以该节点为中心重新展开一层关系', 'Re-center the graph on that node'),
  guide3t: L2('切换视图', 'Switch views'),
  guide3d: L2('全景 / 角色 / 场景 / 事件 / 宇宙：五张视图随你切换', 'Overview / Roles / Locations / Events / Universes: five projections'),
  start: L2('开始探索', 'Start Exploring'),
  skip: L2('跳过', 'Skip'),
  next: L2('下一步', 'Next'),
  docs: L2('体系文档', 'Schema Docs'),
  docsTitle: L2('内容分类与关系体系', 'Taxonomy & Relation System'),
  backToGraph: L2('返回图谱', 'Back to Graph'),
  about: L2('关于', 'About'),
  aboutText: L2('本项目为学习/粉丝用途。数据与图片参考 Marvel Database 与 Marvel Cinematic Universe Wiki（CC BY-SA 3.0），内容版权归原作者及 Marvel 所有。', 'A fan/learning project. Data and imagery reference the Marvel Database and MCU Wiki (CC BY-SA 3.0); all content belongs to its rights holders and Marvel.'),
  dataStats: L2('节点', 'nodes'),
  langSwitch: L2('EN', '中文'),
  themeToggle: L2('切换日间 / 夜间模式', 'Toggle light / dark theme'),
  poweredBy: L2('数据来源', 'Data sources'),
  doubleClickHint: L2('双击设为中心', 'Double-click to focus'),
  dragHint: L2('拖拽 / 滚轮缩放 / 双击空白复位', 'Drag / scroll to zoom / double-click blank to reset'),
  touchHint: L2('单指平移 · 双指缩放 · 轻触切换焦点', 'One finger pans · pinch zooms · tap to re-focus'),
  debut: L2('首登场', 'Debut'),
  appearsIn: L2('出场', 'Appearances'),
  filterOn: L2('已隐藏', 'hidden'),
  collapse: L2('收起', 'Collapse'),
  expand: L2('展开', 'Expand'),
  minimap: L2('小地图', 'Minimap'),
  selectHint: L2('单击查看详情', 'Click for details'),
  readFullBio: L2('阅读完整介绍', 'Read the full biography'),
  bioClose: L2('关闭', 'Close'),
  infoMantle: L2('名号', 'Mantle'),
  infoBirth: L2('出生地', 'Birthplace'),
  infoAbilities: L2('能力', 'Abilities'),
  infoAffiliation: L2('所属', 'Affiliation'),
  infoIdentity: L2('身份', 'Identity'),
};

export type StringKey = keyof typeof S;
export const strings = S;
export function t(key: StringKey, lang: Lang): string {
  return S[key][lang];
}

/** 介绍区块标题：随节点类型取词（人物→人物介绍、角色→角色介绍…）；
 *  英文侧统一用 Biography。未登记的类型回退为"人物介绍"。 */
const BIO_TITLE_ZH: Record<string, string> = {
  character: '人物介绍',
  mantle: '角色介绍',
  team: '团队介绍',
  location: '地点介绍',
  item: '物品介绍',
  work: '作品介绍',
  event: '事件介绍',
  universe: '宇宙介绍',
  channel: '频道介绍',
  race: '种族介绍',
  ability: '能力介绍',
};
export function bioTitle(type: string, lang: Lang): string {
  return lang === 'zh' ? (BIO_TITLE_ZH[type] ?? '人物介绍') : 'Biography';
}
