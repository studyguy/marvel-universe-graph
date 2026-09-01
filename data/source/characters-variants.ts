/** 蜘蛛侠多宇宙变体与 NWH 客串反派 */
import { ch, E } from './registry';
import { L2 } from '../taxonomy';

const A = L2('存活', 'Alive');
const D = L2('已故', 'Deceased');
const LEAD = L2('主角', 'Lead');
const NOW = L2('当前', 'Current');
const PAST = L2('历史', 'Past');

ch('peter-parker-mcu', 'superhero', '蜘蛛侠 彼得·帕克 (MCU)', 'Spider-Man / Peter Parker (MCU)', '托尼选中的少年英雄，经历身份暴露与全世界遗忘后独自行侠。', 'Stark\'s chosen kid; forgotten by the world, still swinging.', { race: 'race-human', status: A, debut: '美国队长3：内战 (2016)', actor: '汤姆·赫兰德 Tom Holland', occupation: '学生 / 英雄', universe: 'uni-earth-199999' }, { zh: ['彼得·帕克'], en: ['Peter Parker'] });
ch('peter-parker-raimi', 'superhero', '蜘蛛侠 彼得·帕克 (马奎尔版)', 'Spider-Man / Peter Parker (Raimi)', '托比·马奎尔演绎的经典初代电影蜘蛛侠，"能力越大责任越大"的第一人。', 'The original film web-head: "With great power...".', { race: 'race-human', status: A, debut: '蜘蛛侠 (2002)', actor: '托比·马奎尔 Tobey Maguire', occupation: '摄影师 / 英雄', universe: 'uni-earth-96283' });
ch('peter-parker-tasm', 'superhero', '蜘蛛侠 彼得·帕克 (加菲版)', 'Spider-Man / Peter Parker (Webb)', '安德鲁·加菲尔德版街头感蜘蛛侠，格温的初恋与遗憾。', 'Garfield\'s street-level webhead; Gwen\'s first love.', { race: 'race-human', status: A, debut: '超凡蜘蛛侠 (2012)', actor: '安德鲁·加菲尔德 Andrew Garfield', occupation: '摄影师 / 英雄', universe: 'uni-earth-120703' });
ch('peter-parker-616', 'superhero', '蜘蛛侠 彼得·帕克 (616)', 'Spider-Man / Peter Parker (Earth-616)', '一切蜘蛛侠的原点：被放射性蜘蛛咬中的皇后区少年。', 'The original: the Queens teen bitten by a radioactive spider.', { race: 'race-human', status: A, debut: '神奇蜘蛛侠 (漫画 1962)', actor: L2('—', '—'), occupation: '摄影师 / 教师 / 英雄', universe: 'uni-earth-616' });
ch('norman-osborn', 'villain', '绿魔 诺曼·奥斯本 (616)', 'Green Goblin / Norman Osborn (616)', '奥斯本工业总裁，实验事故分裂出嗜杀的绿魔人格。', 'The CEO split by the Goblin formula.', { race: 'race-human', status: L2('多元轮回', 'Multiversal cycle'), debut: '神奇蜘蛛侠 #14 (1964)', occupation: '企业家 / 反派', universe: 'uni-earth-616' });
ch('otto-octavius', 'villain', '章鱼博士 奥托·奥克塔维 (616)', 'Doctor Octopus / Otto Octavius (616)', '四条机械触手的前核物理学家，一度夺舍蜘蛛侠成为"至高蜘蛛侠"。', 'Four arms, one giant ego; once Superior Spider-Man.', { race: 'race-human', status: A, debut: '神奇蜘蛛侠 #3 (1963)', occupation: '核物理学家 / 反派', universe: 'uni-earth-616' });
ch('green-goblin-raimi', 'villain', '绿魔 诺曼·奥斯本 (马奎尔宇宙)', 'Green Goblin / Norman Osborn (Raimi)', '马奎尔宇宙的绿魔，NWH 中再度撕裂彼得的悲剧。', 'The Raimi Goblin back to break Peter in NWH.', { race: 'race-human', status: D, debut: '蜘蛛侠 (2002)', actor: '威廉·达福 Willem Dafoe', occupation: '企业家 / 反派', universe: 'uni-earth-96283' });
ch('doc-ock-raimi', 'villain', '章鱼博士 奥托 (马奎尔宇宙)', 'Doc Ock / Otto Octavius (Raimi)', '为科学执念所困的悲剧教授，终以自我牺牲救赎。', 'The tragic professor who redeemed himself in sacrifice.', { race: 'race-human', status: A, debut: '蜘蛛侠2 (2004)', actor: '阿尔弗雷德·莫里纳 Alfred Molina', occupation: '核物理学家', universe: 'uni-earth-96283' });
ch('electro-tasm', 'villain', '电光人 麦克斯·狄龙 (加菲宇宙)', 'Electro / Max Dillon (Webb)', '渴望被看见的电工变成活体闪电。', 'The invisible man turned living lightning.', { race: 'race-human', status: A, debut: '超凡蜘蛛侠2 (2014)', actor: '杰米·福克斯 Jamie Foxx', occupation: '电工', universe: 'uni-earth-120703' });
ch('sandman-raimi', 'villain', '沙人 弗林特·马尔科 (马奎尔宇宙)', 'Sandman / Flint Marko (Raimi)', '为救女儿而犯罪的流沙之躯。', 'The shifting father stealing for his daughter.', { race: 'race-human', status: A, debut: '蜘蛛侠3 (2007)', actor: '托马斯·哈登·丘奇 Thomas Haden Church', occupation: '罪犯', universe: 'uni-earth-96283' });
ch('lizard-tasm', 'villain', '蜥蜴人 库尔特·康纳斯 (加菲宇宙)', 'The Lizard / Curt Connors (Webb)', '想复原断臂的教授被蜥蜴血清反噬。', 'The professor whose cure became a curse.', { race: 'race-human', status: A, debut: '超凡蜘蛛侠 (2012)', actor: '瑞斯·伊凡斯 Rhys Ifans', occupation: '生物学家', universe: 'uni-earth-120703' });

/* ---------- 变体关系 ---------- */
E('ch-peter-parker-mcu', 'ch-peter-parker-616', 'variant-of', {});
E('ch-peter-parker-raimi', 'ch-peter-parker-616', 'variant-of', {});
E('ch-peter-parker-tasm', 'ch-peter-parker-616', 'variant-of', {});
E('ch-green-goblin-raimi', 'ch-norman-osborn', 'variant-of', {});
E('ch-doc-ock-raimi', 'ch-otto-octavius', 'variant-of', {});
E('ch-electro-tasm', 'ch-max-dillon', 'variant-of', {});
E('ch-sandman-raimi', 'ch-flint-marko', 'variant-of', {});
E('ch-lizard-tasm', 'ch-curt-connors', 'variant-of', {});

/* ---------- MCU 蜘蛛侠核心关系 ---------- */
E('ch-peter-parker-mcu', 'ch-may-parker', 'kin', { kind: L2('婶侄', 'Aunt & nephew'), status: PAST });
E('ch-peter-parker-mcu', 'ch-ned-leeds', 'best-friend', { status: NOW });
E('ch-peter-parker-mcu', 'ch-mj-watson-mcu', 'lover', { status: NOW });
E('ch-peter-parker-mcu', 'ch-happy-hogan', 'ally', { status: NOW });
E('ch-peter-parker-mcu', 'ch-adrian-toomes', 'defeated', { when: L2('蜘蛛侠：英雄归来', 'Homecoming') });
E('ch-peter-parker-mcu', 'ch-quentin-beck', 'defeated', { when: L2('蜘蛛侠：英雄远征', 'Far From Home') });
E('ch-peter-parker-mcu', 'item-web-shooters', 'creator-of', { status: NOW });
E('ch-peter-parker-mcu', 'ev-multiverse-breach-nwh', 'participated');
E('ch-peter-parker-mcu', 'wk-smh', 'stars-in', { role: LEAD, actor: L2('汤姆·赫兰德', 'Tom Holland') });
E('ch-peter-parker-mcu', 'wk-ffh', 'stars-in', { role: LEAD, actor: L2('汤姆·赫兰德', 'Tom Holland') });
E('ch-peter-parker-mcu', 'wk-nwh', 'stars-in', { role: LEAD, actor: L2('汤姆·赫兰德', 'Tom Holland') });
E('ch-peter-parker-mcu', 'wk-sm-bnd', 'stars-in', { role: LEAD, actor: L2('汤姆·赫兰德', 'Tom Holland') });
E('ch-peter-parker-mcu', 'wk-ca-cw', 'debut', { actor: L2('汤姆·赫兰德', 'Tom Holland') });
E('ch-peter-parker-raimi', 'ch-green-goblin-raimi', 'nemesis', { since: L2('蜘蛛侠 (2002)', 'Spider-Man'), status: PAST });
E('ch-peter-parker-raimi', 'ch-doc-ock-raimi', 'nemesis', { status: PAST });
E('ch-peter-parker-raimi', 'ch-sandman-raimi', 'nemesis', { status: PAST });
E('ch-peter-parker-tasm', 'ch-electro-tasm', 'nemesis', { status: PAST });
E('ch-peter-parker-tasm', 'ch-lizard-tasm', 'nemesis', { status: PAST });
E('ch-peter-parker-mcu', 'ch-green-goblin-raimi', 'nemesis', { since: L2('英雄无归', 'No Way Home'), status: PAST });
E('ch-doc-ock-raimi', 'ch-green-goblin-raimi', 'ally', { status: PAST });
E('ch-green-goblin-raimi', 'ch-may-parker', 'killed', { when: L2('英雄无归 (2021)', 'No Way Home') });
