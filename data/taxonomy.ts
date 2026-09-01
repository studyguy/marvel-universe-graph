/**
 * 体系真相源：节点分类、关系体系、视图配置。
 * 站内 /docs 页面直接由本文件渲染；build-data.ts 据此校验数据。
 * 修改体系 = 修改这里 + 重新 data:build。
 */

export interface L {
  zh: string;
  en: string;
}
export const L2 = (zh: string, en: string): L => ({ zh, en });

/* ============================== 节点分类 ============================== */

export interface PropField {
  key: string;
  label: L;
}
export interface SubTypeDef {
  key: string;
  label: L;
}
export interface NodeTypeDef {
  key: string;
  label: L;
  color: string;
  icon: 'person' | 'flag' | 'pin' | 'gem' | 'clapper' | 'bolt' | 'orbit' | 'tv' | 'dna' | 'spark';
  subs: SubTypeDef[];
  props: PropField[];
}

export const NODE_TYPES: NodeTypeDef[] = [
  {
    key: 'character',
    label: L2('人物', 'Person'),
    color: '#ff4d5e',
    icon: 'person',
    subs: [
      { key: 'superhero', label: L2('超级英雄', 'Superhero') },
      { key: 'villain', label: L2('超级反派', 'Supervillain') },
      { key: 'antihero', label: L2('反英雄', 'Antihero') },
      { key: 'civilian', label: L2('凡人平民', 'Civilian') },
      { key: 'military', label: L2('政府与军方', 'Government & Military') },
      { key: 'scientist', label: L2('科学家与创造者', 'Scientist & Creator') },
      { key: 'cosmic', label: L2('宇宙级实体', 'Cosmic Entity') },
      { key: 'deity', label: L2('神话与神明', 'Deity') },
      { key: 'ai', label: L2('AI 与机械生命', 'AI & Mechanical Life') },
      { key: 'symbiote', label: L2('共生体', 'Symbiote') },
      { key: 'variant', label: L2('克隆与多元变体', 'Clone & Multiversal Variant') },
      { key: 'animal', label: L2('智慧动物', 'Sentient Animal') },
    ],
    props: [
      { key: 'race', label: L2('种族', 'Race') },
      { key: 'status', label: L2('生存状态', 'Status') },
      { key: 'universe', label: L2('所属宇宙', 'Home Universe') },
      { key: 'debut', label: L2('首次登场', 'First Appearance') },
      { key: 'actor', label: L2('演员 / 配音', 'Actor / Voice') },
      { key: 'occupation', label: L2('职业 / 身份', 'Occupation') },
    ],
  },
  {
    key: 'mantle',
    label: L2('角色', 'Role'),
    color: '#f0b429',
    icon: 'flag',
    subs: [
      { key: 'hero', label: L2('英雄名号', 'Hero Mantle') },
      { key: 'villain', label: L2('反派名号', 'Villain Mantle') },
      { key: 'title', label: L2('职位头衔', 'Positional Title') },
    ],
    props: [
      { key: 'first-held', label: L2('首任担任者', 'First Holder') },
      { key: 'debut', label: L2('起源作品', 'Origin Work') },
      { key: 'status', label: L2('延续状态', 'Status') },
      { key: 'universe', label: L2('所属宇宙', 'Universe') },
    ],
  },
  {
    key: 'team',
    label: L2('团队与组织', 'Team & Organization'),
    color: '#ff9a3d',
    icon: 'flag',
    subs: [
      { key: 'hero-team', label: L2('英雄团队', 'Hero Team') },
      { key: 'villain-org', label: L2('反派组织', 'Villain Organization') },
      { key: 'agency', label: L2('情报与军政机构', 'Agency & Government') },
      { key: 'secret', label: L2('秘密结社', 'Secret Society') },
      { key: 'empire', label: L2('星际帝国与军团', 'Cosmic Empire & Legion') },
      { key: 'faith', label: L2('神话与信仰团体', 'Mythic & Faith Group') },
      { key: 'family', label: L2('家族血脉', 'Family Bloodline') },
      { key: 'corp', label: L2('企业财团', 'Corporation') },
      { key: 'coalition', label: L2('临时联盟', 'Temporary Coalition') },
    ],
    props: [
      { key: 'founded', label: L2('创立', 'Founded') },
      { key: 'founder', label: L2('创始人', 'Founder') },
      { key: 'hq', label: L2('总部', 'Headquarters') },
      { key: 'status', label: L2('当前状态', 'Status') },
      { key: 'universe', label: L2('所属宇宙', 'Home Universe') },
    ],
  },
  {
    key: 'location',
    label: L2('地点与场景', 'Location'),
    color: '#4da3ff',
    icon: 'pin',
    subs: [
      { key: 'city', label: L2('城市与地区', 'City & Region') },
      { key: 'facility', label: L2('地球特殊设施', 'Earth Facility') },
      { key: 'planet', label: L2('外星星球', 'Alien Planet') },
      { key: 'dimension', label: L2('异次元领域', 'Dimensional Realm') },
      { key: 'mythic', label: L2('神话领域', 'Mythic Realm') },
      { key: 'nexus', label: L2('多元宇宙枢纽', 'Multiversal Nexus') },
    ],
    props: [
      { key: 'region', label: L2('所属区域', 'Region') },
      { key: 'universe', label: L2('所属宇宙', 'Universe') },
      { key: 'first', label: L2('首次出现', 'First Appearance') },
    ],
  },
  {
    key: 'item',
    label: L2('物品与神器', 'Item & Artifact'),
    color: '#ffd54a',
    icon: 'gem',
    subs: [
      { key: 'cosmic-artifact', label: L2('宇宙级神器', 'Cosmic Artifact') },
      { key: 'mythic-weapon', label: L2('神话武器', 'Mythic Weapon') },
      { key: 'tech', label: L2('高科技装备', 'High-Tech Gear') },
      { key: 'material', label: L2('特殊物质与材料', 'Special Material') },
      { key: 'magic', label: L2('魔法物品与典籍', 'Magic Item & Tome') },
      { key: 'bio', label: L2('有机生命类物品', 'Organic Artifact') },
      { key: 'mundane', label: L2('关键日常道具', 'Key Mundane Item') },
    ],
    props: [
      { key: 'creator', label: L2('制造者', 'Creator') },
      { key: 'status', label: L2('现状', 'Status') },
      { key: 'universe', label: L2('所属宇宙', 'Universe') },
    ],
  },
  {
    key: 'work',
    label: L2('作品', 'Work'),
    color: '#b980ff',
    icon: 'clapper',
    subs: [
      { key: 'film', label: L2('电影', 'Film') },
      { key: 'series', label: L2('电视剧', 'TV Series') },
      { key: 'special', label: L2('特别篇与短片', 'Special & Short') },
      { key: 'animation', label: L2('动漫', 'Animation') },
      { key: 'comic', label: L2('漫画连载', 'Comic Series') },
      { key: 'comic-event', label: L2('漫画大事件', 'Comic Event') },
      { key: 'game', label: L2('游戏', 'Game') },
      { key: 'other', label: L2('其他衍生', 'Other Media') },
    ],
    props: [
      { key: 'year', label: L2('年份', 'Year') },
      { key: 'channel', label: L2('所属频道', 'Channel') },
      { key: 'phase', label: L2('阶段', 'Phase') },
      { key: 'universe', label: L2('设定宇宙', 'Setting Universe') },
      { key: 'creator', label: L2('导演 / 主创', 'Director / Creator') },
      { key: 'status', label: L2('状态', 'Status') },
    ],
  },
  {
    key: 'event',
    label: L2('事件', 'Event'),
    color: '#ff6ea9',
    icon: 'bolt',
    subs: [
      { key: 'cosmic', label: L2('宇宙级大事件', 'Cosmic Cataclysm') },
      { key: 'war', label: L2('战争与冲突', 'War & Conflict') },
      { key: 'political', label: L2('政治与社会事件', 'Political & Social') },
      { key: 'personal', label: L2('个人关键事件', 'Personal Turning Point') },
      { key: 'origin', label: L2('起源事件', 'Origin Event') },
      { key: 'timeline', label: L2('时间线事件', 'Timeline Event') },
    ],
    props: [
      { key: 'time', label: L2('故事线时间', 'In-story Time') },
      { key: 'universe', label: L2('发生宇宙', 'Universe') },
      { key: 'outcome', label: L2('结果', 'Outcome') },
    ],
  },
  {
    key: 'universe',
    label: L2('宇宙', 'Universe'),
    color: '#38e1c6',
    icon: 'orbit',
    subs: [
      { key: 'primary', label: L2('主宇宙', 'Primary Universe') },
      { key: 'parallel', label: L2('平行宇宙', 'Parallel Universe') },
      { key: 'pocket', label: L2('口袋维度与子领域', 'Pocket Dimension') },
      { key: 'abstract', label: L2('抽象与全能层面', 'Abstract Plane') },
    ],
    props: [
      { key: 'designation', label: L2('编号', 'Designation') },
      { key: 'nature', label: L2('性质', 'Nature') },
      { key: 'status', label: L2('状态', 'Status') },
    ],
  },
  {
    key: 'channel',
    label: L2('媒体频道', 'Media Channel'),
    color: '#7f9cf5',
    icon: 'tv',
    subs: [
      { key: 'mcu', label: L2('MCU 漫威电影宇宙', 'MCU') },
      { key: 'tv', label: L2('电视剧宇宙', 'TV Universe') },
      { key: 'anime', label: L2('动漫宇宙', 'Animation Universe') },
      { key: 'comics', label: L2('漫画宇宙', 'Comics Universe') },
      { key: 'film-other', label: L2('其他影视宇宙', 'Other Film Universe') },
      { key: 'game', label: L2('游戏', 'Game') },
    ],
    props: [
      { key: 'medium', label: L2('媒介形态', 'Medium') },
      { key: 'canon', label: L2('正史规则', 'Canon Rule') },
    ],
  },
  {
    key: 'race',
    label: L2('种族与物种', 'Race & Species'),
    color: '#7ee06a',
    icon: 'dna',
    subs: [
      { key: 'human', label: L2('人类及亚种', 'Human & Subspecies') },
      { key: 'alien', label: L2('外星种族', 'Alien Race') },
      { key: 'cosmic', label: L2('宇宙级种族', 'Cosmic Race') },
      { key: 'inorganic', label: L2('非有机生命', 'Inorganic Life') },
      { key: 'mythic', label: L2('神话种族', 'Mythic Race') },
    ],
    props: [
      { key: 'homeworld', label: L2('母星', 'Homeworld') },
      { key: 'universe', label: L2('所属宇宙', 'Universe') },
      { key: 'status', label: L2('状态', 'Status') },
    ],
  },
  {
    key: 'ability',
    label: L2('能力与力量体系', 'Ability & Power'),
    color: '#f26fd8',
    icon: 'spark',
    subs: [
      { key: 'power', label: L2('超能力类型', 'Superpower') },
      { key: 'source', label: L2('力量来源', 'Power Source') },
      { key: 'magic', label: L2('魔法体系', 'Magic System') },
      { key: 'cosmic', label: L2('宇宙级力量', 'Cosmic Power') },
    ],
    props: [
      { key: 'kind', label: L2('类别', 'Kind') },
      { key: 'origin', label: L2('来源 / 起源', 'Origin') },
    ],
  },
];

/* ============================== 关系体系 ============================== */

export interface RelationCategoryDef {
  key: string;
  label: L;
  color: string;
  /** 视图主角类型集合；空 = 通用 */
  dash?: boolean;
}

export const RELATION_CATEGORIES: RelationCategoryDef[] = [
  { key: 'family', label: L2('家族血缘', 'Family'), color: '#ff9f6e' },
  { key: 'romance', label: L2('情感婚恋', 'Romance'), color: '#ff6e9f' },
  { key: 'social', label: L2('社交友敌', 'Social Bonds'), color: '#ffd166' },
  { key: 'mentorship', label: L2('师徒传承', 'Mentorship'), color: '#a3e66e' },
  { key: 'creation', label: L2('创造造物', 'Creation'), color: '#6ed3e6' },
  { key: 'variant', label: L2('克隆与变体', 'Clones & Variants'), color: '#c9a3ff' },
  { key: 'org', label: L2('组织归属', 'Affiliation'), color: '#ffa04d' },
  { key: 'geo', label: L2('空间地理', 'Geography'), color: '#5aa9ff' },
  { key: 'possession', label: L2('物品持有', 'Possession'), color: '#ffe066' },
  { key: 'participation', label: L2('事件参与', 'Involvement'), color: '#ff7a9c' },
  { key: 'appearance', label: L2('作品出场', 'Appearance'), color: '#b980ff' },
  { key: 'media', label: L2('媒体归属', 'Media Belonging'), color: '#8fa8ff' },
  { key: 'cosmos', label: L2('宇宙归属', 'Cosmic Belonging'), color: '#4de6c9' },
  { key: 'causality', label: L2('因果与时间', 'Causality & Time'), color: '#ff9c5a' },
  { key: 'component', label: L2('构成与来源', 'Composition'), color: '#e6e66e' },
  { key: 'work-rel', label: L2('作品间关系', 'Work Relations'), color: '#9c6eff' },
  { key: 'universe-rel', label: L2('宇宙间关系', 'Universe Relations'), color: '#35c2e0' },
  { key: 'lineage', label: L2('种族与能力', 'Race & Powers'), color: '#8fe66e' },
  { key: 'combat', label: L2('对抗与结局', 'Combat & Fate'), color: '#ff4d5e' },
  { key: 'mantle', label: L2('身份名号', 'Mantle Identity'), color: '#f0b429' },
];

export type SubPropKind = 'text' | 'node' | 'text[]' | 'select';
export interface SubPropField {
  key: string;
  label: L;
  kind: SubPropKind;
  options?: string[];
}
export interface RelationTypeDef {
  key: string;
  cat: string;
  label: L;
  directed: boolean;
  /** 从 target 一侧阅读时的反向标签（有向关系时用于关系列表） */
  reverseLabel?: L;
  /** 允许的端点节点类型（宽松约束，'*' = 全部） */
  endpoints: [Ep, Ep];
  /** 默认视觉权重 1(弱)-3(强) */
  weight: 1 | 2 | 3;
  subProps: SubPropField[];
}

type Ep = string[] | string;
const ANY = ['*'];
const STATUS_PROP: SubPropField = { key: 'status', label: L2('状态', 'Status'), kind: 'select', options: ['当前', '历史', 'Current', 'Past'] };
const SINCE_PROP: SubPropField = { key: 'since', label: L2('起始', 'Since'), kind: 'text' };
const VIA_PROP: SubPropField = { key: 'via', label: L2('来源作品', 'Source Work'), kind: 'node' };

const normEp = (e: Ep): string[] => (Array.isArray(e) ? e : [e]);
const rel = (
  key: string,
  cat: string,
  zh: string,
  en: string,
  directed: boolean,
  endpoints: [Ep, Ep],
  weight: 1 | 2 | 3,
  subProps: SubPropField[] = [],
  reverseZh?: string,
  reverseEn?: string
): RelationTypeDef => ({
  key,
  cat,
  label: L2(zh, en),
  directed,
  endpoints: [normEp(endpoints[0]), normEp(endpoints[1])],
  weight,
  subProps: [...subProps, SINCE_PROP, STATUS_PROP, VIA_PROP].slice(0, subProps.length ? subProps.length + 3 : 3),
  reverseLabel: reverseZh ? L2(reverseZh, reverseEn ?? zh) : undefined,
});

const CH2R = ['character'];
const CH_TE = ['character', 'team'];

export const RELATION_TYPES: RelationTypeDef[] = [
  // A 家族血缘
  rel('parent-of', 'family', '父母', 'Parent', true, [CH2R, CH2R], 3,
    [{ key: 'kind', label: L2('称谓', 'Relation'), kind: 'select', options: ['父', '母', '养父', '养母', 'Father', 'Mother', 'Adoptive Father', 'Adoptive Mother'] }], '子女', 'Child'),
  rel('sibling', 'family', '兄弟姐妹', 'Sibling', false, [CH2R, CH2R], 3, [{ key: 'kind', label: L2('称谓', 'Relation'), kind: 'text' }]),
  rel('grandparent', 'family', '祖辈', 'Grandparent', true, [CH2R, CH2R], 2, [], '孙辈', 'Grandchild'),
  rel('kin', 'family', '亲属', 'Kin', false, [CH2R, CH2R], 2, [{ key: 'kind', label: L2('亲缘', 'Kind'), kind: 'text' }]),
  rel('adoptive-parent', 'family', '养父母', 'Adoptive Parent', true, [CH2R, CH2R], 3, [{ key: 'kind', label: L2('称谓', 'Relation'), kind: 'select', options: ['养父', '养母', '养子', '养女', 'Adoptive Father', 'Adoptive Mother', 'Adopted Son', 'Adopted Daughter'] }], '养子女', 'Adopted Child'),
  // B 情感婚恋
  rel('spouse', 'romance', '配偶', 'Spouse', false, [CH2R, CH2R], 3, []),
  rel('lover', 'romance', '恋人', 'Lover', false, [CH2R, CH2R], 3, []),
  rel('ex-lover', 'romance', '前任', 'Ex-lover', false, [CH2R, CH2R], 2, []),
  rel('unrequited-love', 'romance', '暗恋', 'Unrequited Love', true, [CH2R, CH2R], 1, []),
  // C 社交友敌
  rel('best-friend', 'social', '挚友', 'Best Friend', false, [CH2R, CH2R], 3, []),
  rel('ally', 'social', '盟友', 'Ally', false, [CH2R, CH2R], 2, []),
  rel('rival', 'social', '对手', 'Rival', false, [CH2R, CH2R], 2, [{ key: 'field', label: L2('领域', 'Field'), kind: 'text' }]),
  rel('nemesis', 'social', '宿敌', 'Nemesis', false, [CH2R, CH2R], 3, [{ key: 'since', label: L2('首次对立', 'First Clash'), kind: 'text' }]),
  rel('idolizes', 'social', '崇拜', 'Idolizes', true, [CH2R, CH2R], 1, [], '被崇拜', 'Idolized By'),
  rel('distrusts', 'social', '不信任', 'Distrusts', true, [CH2R, CH2R], 1, []),
  // D 师徒传承
  rel('mentor-of', 'mentorship', '导师', 'Mentor', true, [CH2R, CH2R], 3, [], '徒弟', 'Apprentice'),
  rel('successor-of', 'mentorship', '继任', 'Successor', true, [CH2R, CH2R], 2, [{ key: 'mantle', label: L2('继承名号', 'Mantle'), kind: 'text' }], '前任', 'Predecessor'),
  // E 创造造物
  rel('creator-of', 'creation', '创造者', 'Creator', true, [CH2R, CH_TE], 3, [{ key: 'means', label: L2('方式', 'Means'), kind: 'text' }], '造物', 'Creation'),
  rel('resurrected', 'creation', '复活', 'Resurrected', true, [CH2R, CH2R], 2, [], '复活者', 'Resurrectee'),
  rel('converted', 'creation', '转化', 'Transformed', true, [CH2R, CH2R], 2, [{ key: 'into', label: L2('转变为', 'Into'), kind: 'text' }], '被转化', 'Transformed By'),
  rel('mind-controlled', 'creation', '精神控制', 'Mind-Controlled', true, [CH2R, CH2R], 2, [], '被控制', 'Controlled By'),
  // F 克隆与变体
  rel('clone-of', 'variant', '克隆自', 'Clone Of', true, [CH2R, CH2R], 2, [], '克隆原型', 'Clone Source'),
  rel('variant-of', 'variant', '多元变体', 'Multiversal Variant', false, [CH2R, CH2R], 2, [{ key: 'universe', label: L2('差异宇宙', 'Universe'), kind: 'text' }]),
  rel('symbiote-bond', 'variant', '共生结合', 'Symbiote Bond', false, [CH2R, CH2R], 3, [{ key: 'period', label: L2('时期', 'Period'), kind: 'text' }]),
  // G 组织归属
  rel('member-of', 'org', '成员', 'Member', true, [CH2R, ['team']], 3,
    [{ key: 'role', label: L2('身份', 'Role'), kind: 'select', options: ['创始成员', '正式成员', '前任成员', '荣誉成员', 'Founding', 'Active', 'Former', 'Honorary'] },
     { key: 'tenure', label: L2('任期', 'Tenure'), kind: 'text' }]),
  rel('leader-of', 'org', '领导者', 'Leader', true, [CH2R, ['team']], 3, [], '领袖', 'Leader'),
  rel('undercover-in', 'org', '卧底', 'Undercover', true, [CH2R, ['team']], 2, []),
  rel('founded-org', 'org', '创立', 'Founded', true, [CH2R, ['team']], 3, []),
  rel('affiliated-with', 'org', '隶属于', 'Affiliated', true, [CH_TE, ['team']], 2, [{ key: 'role', label: L2('角色', 'Role'), kind: 'text' }]),
  rel('rival-org', 'org', '敌对组织', 'Rival Organization', false, [['team'], ['team']], 2, []),
  rel('subordinate-org', 'org', '下属组织', 'Subsidiary', true, [['team'], ['team']], 2, [], '上级组织', 'Parent Organization'),
  rel('split-from', 'org', '分裂自', 'Split From', true, [['team'], ['team']], 2, [], '分裂出', 'Spawned'),
  rel('merged-org', 'org', '合并', 'Merged With', false, [['team'], ['team']], 1, []),
  // H 空间地理
  rel('born-in', 'geo', '出生地', 'Birthplace', true, [CH2R, ['location']], 2, []),
  rel('lives-in', 'geo', '居住地', 'Residence', true, [CH2R, ['location']], 2, []),
  rel('active-in', 'geo', '活动区域', 'Active Region', true, [CH_TE, ['location']], 1, []),
  rel('rules', 'geo', '统治', 'Rules', true, [CH_TE, ['location']], 3, []),
  rel('guards', 'geo', '守护', 'Guards', true, [CH_TE, ['location']], 2, []),
  rel('died-in', 'geo', '死亡地', 'Place of Death', true, [CH2R, ['location']], 1, []),
  rel('imprisoned-in', 'geo', '囚禁地', 'Imprisoned At', true, [CH2R, ['location']], 1, []),
  rel('hq-at', 'geo', '总部位于', 'Headquartered', true, [['team'], ['location']], 2, []),
  rel('battlefield-of', 'geo', '战场', 'Battlefield', true, ['event', ['location']], 2, []),
  // I 物品持有
  rel('wields', 'possession', '持有 / 使用', 'Wields', true, [CH2R, ['item']], 3,
    [{ key: 'means', label: L2('途径', 'Means'), kind: 'select', options: ['获得', '夺取', '赠予', '继承', '研制', 'Acquired', 'Seized', 'Gifted', 'Inherited', 'Built'] },
     { key: 'period', label: L2('时段', 'Period'), kind: 'text' }]),
  rel('owns', 'possession', '拥有', 'Owns', true, [CH_TE, ['item']], 2, []),
  rel('empowered-by', 'possession', '被其增强', 'Empowered By', true, [CH2R, ['item']], 2, []),
  rel('seeks', 'possession', '追寻', 'Seeks', true, [CH2R, ['item']], 1, []),
  rel('fused-with', 'possession', '融合', 'Fused With', false, [CH2R, ['item']], 2, []),
  rel('destroyed', 'possession', '摧毁', 'Destroyed', true, [CH2R, ['item']], 1, [{ key: 'when', label: L2('时间', 'When'), kind: 'text' }]),
  // J 事件参与
  rel('initiated', 'participation', '发起', 'Initiated', true, [CH_TE, ['event']], 3, []),
  rel('participated', 'participation', '参与', 'Participated', true, [CH_TE, ['event']], 2, [{ key: 'side', label: L2('阵营', 'Side'), kind: 'text' }]),
  rel('victim-of', 'participation', '受害', 'Victim', true, [CH2R, ['event']], 2, []),
  rel('prevented', 'participation', '阻止', 'Prevented', true, [CH_TE, ['event']], 3, []),
  rel('origin-event', 'participation', '起源事件', 'Origin Event', true, [['event'], CH2R], 3, [], '塑造角色', 'Shaped'),
  rel('witnessed', 'participation', '目击', 'Witnessed', true, [CH2R, ['event']], 1, []),
  // K 作品出场
  rel('debut', 'appearance', '首次登场', 'Debut', true, [CH_TE, ['work', 'comic-event']], 3, [{ key: 'actor', label: L2('饰演', 'Portrayed By'), kind: 'text' }]),
  rel('stars-in', 'appearance', '主演', 'Stars In', true, [CH2R, ['work', 'comic-event']], 3,
    [{ key: 'role', label: L2('身份', 'Role'), kind: 'select', options: ['主角', '配角', '客串', '提及', 'Lead', 'Supporting', 'Cameo', 'Mentioned'] },
     { key: 'actor', label: L2('饰演', 'Portrayed By'), kind: 'text' }]),
  rel('appears-in', 'appearance', '出场', 'Appears In', true, [CH_TE, ['work', 'comic-event']], 2,
    [{ key: 'role', label: L2('身份', 'Role'), kind: 'select', options: ['主角', '配角', '客串', '提及', 'Lead', 'Supporting', 'Cameo', 'Mentioned'] },
     { key: 'actor', label: L2('饰演', 'Portrayed By'), kind: 'text' }]),
  rel('cameo-in', 'appearance', '客串', 'Cameo In', true, [CH2R, ['work', 'comic-event']], 1, [{ key: 'actor', label: L2('饰演', 'Portrayed By'), kind: 'text' }]),
  rel('mentioned-in', 'appearance', '被提及', 'Mentioned In', true, [CH_TE, ['work', 'comic-event']], 1, []),
  // L 媒体归属
  rel('belongs-to-channel', 'media', '所属频道', 'Belongs To Channel', true, [['work'], ['channel']], 3,
    [{ key: 'phase', label: L2('阶段', 'Phase'), kind: 'text' }]),
  // M 宇宙归属
  rel('native-of', 'cosmos', '原生宇宙', 'Native Universe', true, [CH2R, ['universe']], 3, []),
  rel('set-in', 'cosmos', '设定于', 'Set In', true, [['work', 'event'], ['universe']], 3, []),
  rel('traveled-to', 'cosmos', '穿越至', 'Traveled To', true, [CH2R, ['universe']], 2, []),
  rel('variant-exists-in', 'cosmos', '变体存在于', 'Variant Exists In', true, [CH2R, ['universe']], 2, []),
  rel('erased-in', 'cosmos', '被抹除于', 'Erased In', true, [CH2R, ['universe']], 1, []),
  rel('located-in-universe', 'cosmos', '位于宇宙', 'Located In Universe', true, [['location', 'item', 'team', 'race'], ['universe']], 2, []),
  // N 因果与时间
  rel('led-to', 'causality', '导致', 'Led To', true, ['event', ['event']], 3, [{ key: 'kind', label: L2('直接性', 'Kind'), kind: 'select', options: ['直接', '间接', 'Direct', 'Indirect'] }]),
  rel('triggered-by', 'causality', '引发', 'Triggered', true, ['event', ['event', 'work']], 2, []),
  rel('adapted-as-event', 'causality', '改编为事件', 'Adapted Into', true, ['event', ['work', 'comic-event']], 2, []),
  rel('changed-timeline', 'causality', '改变时间线', 'Changed Timeline', true, [['event', 'character'], ['universe', 'event']], 2, []),
  // O 构成与来源
  rel('component-of', 'component', '是…的组件', 'Component Of', true, ['item', 'item'], 2, []),
  rel('forged-in', 'component', '锻造 / 制成于', 'Forged In', true, ['item', ['location', 'universe']], 2, []),
  rel('made-of', 'component', '由…构成', 'Made Of', true, ['item', 'item'], 2, []),
  // P 作品间
  rel('sequel-of', 'work-rel', '续作', 'Sequel', true, ['work', 'work'], 3, [], '前作', 'Preceded By'),
  rel('prequel-of', 'work-rel', '前传', 'Prequel', true, ['work', 'work'], 2, [], '正传', 'Followed By'),
  rel('spinoff-of', 'work-rel', '衍生自', 'Spinoff Of', true, ['work', 'work'], 2, []),
  rel('adaptation-of', 'work-rel', '改编自', 'Adaptation Of', true, ['work', ['work', 'comic-event']], 3, []),
  rel('crossover-with', 'work-rel', '交叉联动', 'Crossover', false, ['work', 'work'], 2, []),
  rel('reboot-of', 'work-rel', '重启', 'Reboot', true, ['work', 'work'], 2, []),
  rel('same-timeline', 'work-rel', '同一时间线', 'Same Timeline', false, ['work', 'work'], 1, []),
  rel('same-series', 'work-rel', '同一系列', 'Same Series', false, ['work', 'work'], 1, []),
  // Q 宇宙间
  rel('parallel-of', 'universe-rel', '平行', 'Parallel', false, ['universe', 'universe'], 2, []),
  rel('branched-from', 'universe-rel', '分支自', 'Branched From', true, ['universe', 'universe'], 3, [{ key: 'at', label: L2('分支点', 'Branch Point'), kind: 'node' }]),
  rel('merged-universe', 'universe-rel', '合并', 'Merged', false, ['universe', 'universe'], 2, []),
  rel('collided-with', 'universe-rel', '碰撞', 'Collided', false, ['universe', 'universe'], 2, [{ key: 'event', label: L2('碰撞事件', 'Event'), kind: 'node' }]),
  rel('contains', 'universe-rel', '包含', 'Contains', true, [['universe', 'location'], ['universe', 'location']], 2, [], '包含于', 'Contained By'),
  // R 种族与能力
  rel('member-of-race', 'lineage', '种族归属', 'Race Member', true, [CH2R, ['race']], 3, [{ key: 'purity', label: L2('血统', 'Purity'), kind: 'text' }]),
  rel('hybrid-of', 'lineage', '混血', 'Hybrid', true, [CH2R, ['race']], 2, []),
  rel('has-ability', 'lineage', '拥有能力', 'Has Ability', true, [CH2R, ['ability']], 3, [{ key: 'level', label: L2('强度', 'Level'), kind: 'text' }]),
  rel('grants-ability', 'lineage', '赋予能力', 'Grants Ability', true, [['item', 'race', 'event'], ['ability']], 2, []),
  // M 身份名号
  rel('held-mantle', 'mantle', '担任', 'Holds', true, [['character'], ['mantle']], 3,
    [{ key: 'period', label: L2('时期', 'Period'), kind: 'text' },
     { key: 'universe', label: L2('归属宇宙', 'Universe'), kind: 'text' }],
    '由…担任', 'Held By'),

  // S 对抗与结局
  rel('killed', 'combat', '击杀', 'Killed', true, [CH2R, CH2R], 3,
    [{ key: 'when', label: L2('时间', 'When'), kind: 'text' }, { key: 'where', label: L2('地点', 'Where'), kind: 'node' }]),
  rel('defeated', 'combat', '击败', 'Defeated', true, [CH2R, CH2R], 2, [{ key: 'when', label: L2('时间', 'When'), kind: 'text' }], '败于', 'Defeated By'),
  rel('betrayed', 'combat', '背叛', 'Betrayed', true, [CH2R, CH2R], 3, [], '遭背叛', 'Betrayed By'),
  rel('rescued', 'combat', '救助', 'Rescued', true, [CH2R, CH2R], 2, []),
  rel('sacrificed-for', 'combat', '牺牲相救', 'Sacrificed For', true, [CH2R, CH2R], 2, []),
];

/* ============================== 视图配置 ============================== */

export interface ViewModeDef {
  key: string;
  label: L;
  /** 视图主角节点类型；空 = 全部（全景） */
  primary: string[];
  /** 关系大类显示权重（影响放射布局排序与默认透明度） */
  catWeights: Record<string, number>;
  /** 默认可见的关系大类；空 = 全部 */
  defaultCats: string[];
  /** 全景聚类维度 */
  cluster?: 'type' | 'universe' | 'channel';
  hint: L;
}

export const VIEW_MODES: ViewModeDef[] = [
  {
    key: 'overview',
    label: L2('全景', 'Overview'),
    primary: [],
    catWeights: {},
    defaultCats: [],
    cluster: 'type',
    hint: L2('全宇宙聚类概貌：按节点大类聚成星团，可下钻任意星团', 'Clustered cosmos: node categories as star clusters, drill into any'),
  },
  {
    key: 'character',
    label: L2('角色', 'Roles'),
    primary: ['mantle'],
    catWeights: { family: 3, romance: 3, social: 3, mentorship: 3, variant: 2, combat: 2, lineage: 2, mantle: 3 },
    defaultCats: ['family', 'romance', 'social', 'mentorship', 'variant', 'combat', 'lineage', 'org', 'creation', 'mantle'],
    hint: L2('以角色（名号）为主角：钢铁侠、美国队长、蜘蛛侠…及其担任者网络', 'Role-centric: Iron Man, Captain America, Spider-Man… and their holders'),
  },
  {
    key: 'location',
    label: L2('场景', 'Locations'),
    primary: ['location'],
    catWeights: { geo: 3, participation: 2, cosmos: 2 },
    defaultCats: ['geo', 'participation', 'cosmos', 'component'],
    hint: L2('以地点为主角，突出出生地、居住地、统治、总部与战场', 'Location-centric: birthplaces, thrones, HQs and battlefields'),
  },
  {
    key: 'event',
    label: L2('事件', 'Events'),
    primary: ['event'],
    catWeights: { causality: 3, participation: 3, geo: 2 },
    defaultCats: ['causality', 'participation', 'geo', 'cosmos'],
    hint: L2('以事件为主角，突出因果链、参与者与发生地', 'Event-centric: causal chains, participants, arenas'),
  },
  {
    key: 'universe',
    label: L2('宇宙', 'Universes'),
    primary: ['universe'],
    catWeights: { 'universe-rel': 3, cosmos: 3 },
    defaultCats: ['universe-rel', 'cosmos'],
    hint: L2('以宇宙为主角，突出平行、分支、碰撞与归属', 'Universe-centric: parallels, branches, collisions'),
  },
];

/* ============================== 工具函数 ============================== */

export const nodeTypeMap = new Map(NODE_TYPES.map((t) => [t.key, t]));
export const relationMap = new Map(RELATION_TYPES.map((r) => [r.key, r]));
export const relationCatMap = new Map(RELATION_CATEGORIES.map((c) => [c.key, c]));
export const viewMap = new Map(VIEW_MODES.map((v) => [v.key, v]));
