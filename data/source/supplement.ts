/** 数据补充：漫画宇宙扩展角色 / 地点 / 物品 / 事件 / 作品 */
import { ch, team, loc, item, ev, wk, uni, E } from './registry';
import { L2 } from '../taxonomy';

const A = L2('存活', 'Alive');
const D = L2('已故', 'Deceased');
const U = L2('多变', 'Varies');
const U616 = 'uni-earth-616';
const PAST = L2('历史', 'Past');
const NOW = L2('当前', 'Current');
const LEAD = L2('主角', 'Lead');
const SUP = L2('配角', 'Supporting');

/* ---------- 补充角色 ---------- */
ch('blade', 'antihero', '刀锋战士 埃里克·布鲁克斯', 'Blade / Eric Brooks', '半人半吸血鬼的日行者，以银刃猎杀吸血鬼的午夜猎手。', 'The Daywalker hunting vampires with silver blades.', { race: 'race-human', status: A, debut: 'The Tomb of Dracula #10 (1973)', actor: L2('韦斯利·斯奈普斯 / 马赫沙拉·阿里', 'Wesley Snipes / Mahershala Ali'), occupation: '吸血鬼猎人', universe: U616 });
ch('ghost-rider-robbie', 'antihero', '恶灵骑士 罗比·雷耶斯', 'Ghost Rider / Robbie Reyes', '驾驭黑色道奇充电车的复仇之灵，链条与火焰。', 'The spirit of vengeance behind a muscle car wheel.', { race: 'race-human', status: A, debut: 'All-New Ghost Rider #1 (2014)', actor: L2('加布里埃尔·鲁纳', 'Gabriel Luna'), occupation: '机械师 / 复仇之灵', universe: U616 });
ch('ghost-rider-johnny', 'antihero', '恶灵骑士 约翰尼·布雷泽', 'Ghost Rider / Johnny Blaze', '把灵魂卖给梅菲斯托的特技车手，骷髅火焰审判之灵。', 'The stunt rider who sold his soul to Mephisto.', { race: 'race-human', status: A, debut: 'Marvel Spotlight #5 (1972)', occupation: '特技车手 / 复仇之灵', universe: U616 });
ch('mephisto', 'villain', '梅菲斯托', 'Mephisto', '冒充魔鬼的维度主宰，以灵魂契约收割众生。', 'The soul-broker pretending to be the Devil.', { race: L2('维度主宰', 'Dimensional lord'), status: A, debut: 'The Silver Surfer #3 (1968)', universe: U616 });
ch('squirrel-girl', 'superhero', '松鼠少女 达琳·格林', 'Squirrel Girl / Doreen Green', '能指挥松鼠的乐观英雄，战绩表里"战胜过灭霸"。', 'Beats Squirrel-focused odds — and Thanos, allegedly.', { race: 'race-human', status: A, debut: 'Marvel Super-Heroes Vol.2 #8 (1992)', occupation: '学生 / 英雄', universe: U616 });
ch('blue-marvel', 'superhero', '蓝奇 亚当·布拉威尔', 'Blue Marvel / Adam Brashear', '反物质实验造就的最强英雄之一，因肤色被时代埋没。', 'Antimatter-powered, sidelined by his era\'s racism.', { race: 'race-human', status: A, debut: 'Adam: Legend of the Blue Marvel (2008)', occupation: '科学家 / 英雄', universe: U616 });
ch('monica-616-spectrum', 'superhero', '光谱 莫妮卡 (616)', 'Spectrum / Monica Rambeau (616)', '化作任意光谱能量的初代惊奇队长继任者。', 'Captain Marvel II turned living light.', { race: 'race-human', status: A, debut: 'Amazing Spider-Man Annual #16 (1983)', occupation: '英雄 / 复仇者队长', universe: U616 });
ch('kate-pryde', 'superhero', '凯蒂·普莱德', 'Kitty Pryde / Shadowcat', '可穿透物质的X战警核心。', 'The phasing heart of the X-Men.', { race: 'race-mutant', status: A, debut: 'Uncanny X-Men #129 (1980)', occupation: 'X 战警', universe: U616 });
ch('jubilee', 'superhero', '李千欢', 'Jubilee / Jubilation Lee', '烟花能量的高校变种人，金刚狼的养女式伙伴。', 'Firework-powered mall rat, Logan\'s ward.', { race: 'race-mutant', status: A, debut: 'Uncanny X-Men #244 (1989)', occupation: 'X 战警', universe: U616 });
ch('destiny-irene', 'superhero', '命运女 艾琳·艾德勒', 'Destiny / Irene Adler', '预见一切的盲眼变种人，克罗地亚预言书执笔人。', 'The blind precog writing the future\'s ledger.', { race: 'race-mutant', status: D, debut: 'Uncanny X-Men #141 (1981)', occupation: '先知', universe: U616 });
ch('moira-mactaggert', 'scientist', '莫伊拉·麦克塔格特', 'Moira MacTaggert', '泽维尔一生的盟友与基因学家（616 版本，无九命设定）。', 'Xavier\'s geneticist ally (616 continuity).', { race: 'race-human', status: U, debut: 'Uncanny X-Men #96 (1975)', occupation: '基因学家', universe: U616 });
ch('shang-chi-616', 'superhero', '尚气 (616)', 'Shang-Chi (616)', '漫画原版功夫大师，反对父亲傅满洲的特工。', 'The comics original master of kung fu.', { race: 'race-human', status: A, debut: 'Special Marvel Edition #15 (1973)', occupation: '功夫大师', universe: U616 });
ch('moon-knight-616', 'superhero', '月亮骑士 (616)', 'Moon Knight (616)', '漫画正典的月光骑士，多重人格更破碎。', 'The comics Moon Knight, even more fractured.', { race: 'race-human', status: A, debut: 'Werewolf by Night #32 (1975)', occupation: '雇佣兵 / 化身', universe: U616 });
ch('howard-the-duck', 'antihero', '霍华德鸭', 'Howard the Duck', '被困地球的愤世嫉俗鸭子哲学家。', 'A trap! Trapped duck philosopher on Earth-616.', { race: L2('鸭形外星人', 'Duck alien'), status: A, debut: 'Adventure into Fear #19 (1973)', occupation: '诗人 / 侦探', universe: U616 });
ch('galacta', 'superhero', '加拉克塔', 'Galacta', '行星吞噬者之女，以寄生蠕虫"节食"救世的少女。', 'Galactus\'s daughter keeping her hunger ethical.', { race: L2('宇宙原初混血', 'Cosmic hybrid'), status: A, debut: 'Galacta: Daughter of Galactus (2010)', occupation: '英雄', universe: U616 });
ch('captain-america-616', 'superhero', '美国队长 (616) 斯蒂文', 'Captain America (616) / Steve Rogers', '漫画正典的美国队长，指挥光照会渡过宇宙坍缩。', 'The 616 Cap of the Illuminati.', { race: 'race-human', status: A, debut: 'Captain America Comics #1 (1941)', occupation: '复仇者', universe: U616 });
ch('iron-man-616', 'superhero', '钢铁侠 (616) 托尼', 'Iron Man (616) / Tony Stark', '漫画正典的钢铁侠，光照会最有罪的决定者。', 'The 616 Stark of the Illuminati.', { race: 'race-human', status: A, debut: 'Tales of Suspense #39 (1963)', occupation: '发明家 / 复仇者', universe: U616 });
ch('mr-fantastic-616-light', 'scientist', '神奇先生 (光照会)', 'Mister Fantastic (Illuminati)', '扛起"按响毁灭之门"之责的里德。', 'The Reed who pressed the incursion button.', { race: 'race-human', status: A, debut: 'FF #1 (2011)', occupation: '光照会成员', universe: U616 });
ch('namor-616', 'antihero', '纳摩 (616)', 'Namor (616)', '漫画正典的海王纳摩，光照会最不稳定的棋子。', 'The 616 Sub-Mariner, Illuminati\'s loose cannon.', { race: 'race-mutant', status: A, debut: 'Motion Picture Funnies Weekly (1939)', occupation: '亚特兰蒂斯之王', universe: U616 });
ch('black-bolt-616', 'superhero', '黑蝠王 (616)', 'Black Bolt (616)', '一声可碎星球而选择沉默的异人族之王。', 'The Inhuman king whose whisper cracks planets.', { race: 'race-inhuman', status: A, debut: 'Fantastic Four #45 (1965)', occupation: '异人族之王', universe: U616 });
ch('doctor-strange-616-illu', 'superhero', '奇异博士 (光照会)', 'Doctor Strange (Illuminati)', '以黑魔法守门宇宙坍缩的至尊。', 'The Sorcerer keeping the incursion doors.', { race: 'race-human', status: A, debut: 'Strange Tales #110 (1963)', occupation: '至尊法师', universe: U616 });
ch('beast-616-illu', 'scientist', '野兽 (光照会)', 'Beast (Illuminati)', ' Replacement X 教授席位的计算者。', 'The calculating Beast on the Illuminati.', { race: 'race-mutant', status: A, debut: 'X-Men #1 (1963)', occupation: '科学家', universe: U616 });
ch('cyclops-616', 'superhero', '镭射眼 (终战)', 'Cyclops (Endgame)', '黑王朝皇后期分裂的斯科特，觉醒凤凰五人组之首。', 'Phoenix Five\'s fallen leader.', { race: 'race-mutant', status: A, debut: 'X-Men #1 (1963)', occupation: '革命者', universe: U616 });
ch('x23', 'superhero', 'X-23 劳拉·金尼', 'X-23 / Laura Kinney', '洛根的克隆体女儿，接过金刚狼名号。', 'Logan\'s clone daughter who became Wolverine.', { race: 'race-mutant', status: A, debut: 'NYX #3 (2003)', actor: L2('达芙妮·基恩 (电影)', 'Dafne Keen'), occupation: '金刚狼', universe: U616 });
ch('moon-girl', 'superhero', '月亮女孩 卢内拉·拉斐特', 'Moon Girl / Lunella Lafayette', '9 岁天才与恐龙魔鬼恐龙的搭档。', 'The 9-year-old smartest there is, with Devil Dinosaur.', { race: 'race-inhuman', status: A, debut: 'Moon Girl and Devil Dinosaur #1 (2015)', occupation: '学生 / 发明家', universe: U616 });
ch('devil-dinosaur', 'animal', '魔鬼恐龙', 'Devil Dinosaur', '红色暴龙，月亮女孩的最佳搭档。', 'The red T-Rex bonded to Moon Girl.', { race: L2('变异暴龙', 'Mutated T-Rex'), status: A, debut: 'Devil Dinosaur #1 (1978)', universe: U616 });

/* ---------- 补充关系 ---------- */
E('ch-blade', 'ch-mephisto', 'nemesis', { since: L2('午夜之子', 'Midnight Sons'), status: NOW });
E('ch-ghost-rider-johnny', 'ch-mephisto', 'nemesis', { since: '1972', status: NOW });
E('ch-mephisto', 'ch-ghost-rider-johnny', 'creator-of', { means: L2('地狱契约', 'Hell bargain'), status: NOW });
E('ch-ghost-rider-robbie', 'ch-ghost-rider-johnny', 'successor-of', { mantle: L2('恶灵骑士', 'Ghost Rider'), status: NOW });
E('ch-x23', 'ch-wolverine', 'clone-of', {});
E('ch-x23', 'ch-wolverine', 'successor-of', { mantle: L2('金刚狼', 'Wolverine'), status: NOW });
E('ch-wolverine', 'ch-jubilee', 'adoptive-parent', { kind: L2('养父般', 'Father figure'), status: NOW });
E('ch-moon-girl', 'ch-devil-dinosaur', 'symbiote-bond', { period: L2('搭档', 'Partners'), status: NOW });
E('ch-blue-marvel', 'team-avengers', 'member-of', { status: NOW });
E('ch-monica-616-spectrum', 'team-avengers', 'leader-of', { status: PAST });
E('ch-destiny-irene', 'ch-mystique', 'lover', { status: PAST });
E('ch-moira-mactaggert', 'ch-charles-xavier', 'ally', { status: NOW });
E('ch-shang-chi-616', 'ch-shang-chi', 'variant-of', {});
E('ch-moon-knight-616', 'ch-moon-knight-marc', 'variant-of', {});
E('ch-namor-616', 'ch-namor', 'variant-of', {});
E('ch-monica-616-spectrum', 'ch-monica-rambeau', 'variant-of', {});
E('ch-black-bolt-616', 'race-inhuman', 'member-of-race', { purity: L2('皇室', 'Royal') });
E('ch-squirrel-girl', 'ch-thanos', 'defeated', { when: L2('漫画记载', 'In the comics') });

/* ---------- 光照会（616） ---------- */
team('illuminati-616', 'secret', '光照会 (616)', 'The Illuminati (616)', '为应对宇宙碰撞秘密集结的六人理事会，背负按下按钮之罪。', 'The secret six deciding universes\' fates.', { founded: L2('New Avengers (2013)', 'New Avengers (2013)'), status: L2('解散', 'Disbanded'), universe: U616 });
for (const m of ['ch-iron-man-616', 'ch-mr-fantastic-616-light', 'ch-doctor-strange-616-illu', 'ch-namor-616', 'ch-black-bolt-616', 'ch-beast-616-illu']) {
  E(m, 'team-illuminati-616', 'member-of', { status: PAST });
}
E('team-illuminati-616', 'ev-hickman-incursions', 'participated', { side: L2('决策者', 'Decision makers') });
E('ch-iron-man-616', 'team-avengers', 'member-of', { role: L2('创始成员', 'Founding'), status: NOW });
E('ch-captain-america-616', 'team-avengers', 'leader-of', { status: NOW });
E('ch-cyclops-616', 'ch-scott-summers', 'kin', { kind: L2('同位分身', 'Same being, later era'), status: NOW });
E('team-illuminati-616', 'ev-incursion-secret-wars-2015', 'participated');

/* ---------- 补充地点 / 物品 ---------- */
loc('latveria', 'city', '拉托维尼亚', 'Latveria', '毁灭博士统治的东欧小国，科技与魔法并存的铁幕之邦。', 'Doom\'s techno-magical iron nation.', { region: L2('东欧', 'Eastern Europe'), universe: U616, first: '神奇四侠 #5 (1962)' });
loc('kun-lun', 'mythic', '昆仑', 'K\'un-Lun', '每十年现世的七城之一，铁拳的修行圣地。', 'One of the Seven Cities; home of the Iron Fist.', { region: L2('异次元', 'Otherworld'), universe: U616, first: 'Marvel Premiere #15 (1974)' });
loc('genosha', 'city', '基诺沙', 'Genosha', '变种人乐土的兴衰之地， Wild Sentinels 屠杀之所。', 'The mutant paradise turned graveyard.', { region: L2('非洲近海', 'Off Africa'), universe: U616, first: 'Uncanny X-Men #235 (1988)' });
loc('krakoa', 'city', '喀拉喀瓦', 'Krakoa', '活体岛屿变种国家，门户网络连接全球。', 'The living island nation of mutantkind.', { region: L2('太平洋', 'Pacific'), universe: U616, first: 'Giant-Size X-Men #1 (1975)' });
loc('halfworld', 'planet', '半世界', 'Halfworld', '火箭浣熊的出身地，疯人院星球。', 'Rocket\'s birthplace: the asylum planet.', { region: L2('宇宙深空', 'Deep space'), universe: U616, first: 'Marvel Preview #7 (1976)' });
E('loc-latveria', 'uni-earth-616', 'located-in-universe');
E('loc-krakoa', 'uni-earth-616', 'located-in-universe');
E('ch-victor-von-doom', 'loc-latveria', 'rules', { status: NOW });
E('ch-danny-rand', 'loc-kun-lun', 'lives-in', { status: PAST });
E('ch-charles-xavier', 'loc-krakoa', 'rules', { status: PAST });
E('ch-erik-lehnsherr', 'loc-genosha', 'rules', { status: PAST });
E('ch-rocket', 'loc-halfworld', 'born-in');
E('loc-krakoa', 'ch-charles-xavier', 'guards', { status: PAST });

item('ultimate-nullifier', 'cosmic-artifact', '终极抹除者', 'The Ultimate Nullifier', '唯一能让行星吞噬者恐惧的宇宙级武器。', 'The one weapon Galactus fears.', { status: A, universe: U616 });
item('cosmic-cube', 'cosmic-artifact', '宇宙立方', 'Cosmic Cube', '可改写现实的立方体，红骷髅曾借其成神。', 'The wish-granting cube Red Skull once ascended with.', { status: A, universe: U616 });
item('casket-of-winters', 'mythic-weapon', '永冬之匣', 'The Casket of Ancient Winters', '约顿海姆的至寒圣物，可冻结世界。', 'Jotunheim\'s world-freezing relic.', { status: A, universe: U616 });
item('adamantium', 'material', '艾德曼合金', 'Adamantium', '坚不可摧的人造金属，浇注了金刚狼的骨骼。', 'The unbreakable metal in Logan\'s bones.', { status: A, universe: U616 });
item('warlock-eye', 'magic', '术士之眼', 'The Warlock\'s Eye', '能让看见者陷入恐惧的阿斯加德圣物。', 'The Asgardian relic of fear.', { status: A, universe: U616 });
E('item-adamantium', 'ch-wolverine', 'empowered-by', {});
E('ch-wolverine', 'item-adamantium', 'empowered-by', { status: NOW });
E('item-cosmic-cube', 'ab-reality-warping', 'grants-ability');
E('ch-richard-rider', 'item-ultimate-nullifier', 'wields', { means: L2('获得', 'Acquired'), status: PAST });
E('ch-odin', 'item-casket-of-winters', 'wields', { status: NOW });

/* ---------- 补充事件 ---------- */
ev('annihilation', 'cosmic', '歼灭之战', 'The Annihilation Wave', '湮灭虫潮席卷正宇宙，新星军团与英雄联军奋起。', 'Annihilus\'s wave engulfs the positive universe.', { time: L2('漫画 2006', 'Comics 2006'), universe: U616, outcome: L2('湮灭被阻', 'Wave repelled') });
ev('empyre', 'war', '皇天之战', 'Empyre', '克里与斯克鲁联军血洗植物族， Avengers 抉择停战。', 'Kree-Skrull alliance vs. the Cotati.', { time: L2('漫画 2020', 'Comics 2020'), universe: U616, outcome: L2('休战', 'Armistice') });
ev('secret-invasion-comics', 'war', '秘密入侵 (漫画)', 'Secret Invasion (2008)', '斯克鲁人渗入地球英雄组织，谁是人谁是斯克鲁？', 'Who do you trust: Skrulls among heroes.', { time: L2('漫画 2008', 'Comics 2008'), universe: U616, outcome: L2('入侵败退', 'Invasion repelled') });
ev('m-day-aftermath', 'timeline', 'X 之家建国', 'Krakoa Era', '变种人团结建国喀拉喀瓦， Resurrection 协议颠覆死亡。', 'Mutants build Krakoa and beat death.', { time: L2('漫画 2019–', 'Comics 2019-'), universe: U616, outcome: L2('建国', 'Nation founded') });
E('ev-annihilation', 'ch-richard-rider', 'origin-event');
E('ch-richard-rider', 'ev-annihilation', 'participated');
E('ev-secret-invasion-comics', 'wk-secret-invasion', 'adapted-as-event');
E('ev-empyre', 'wk-kree-skrull-war', 'same-series');
E('ev-m-day-aftermath', 'ev-m-day', 'led-to', { kind: L2('间接', 'Indirect') });

/* ---------- 补充作品 ---------- */
wk('new-xmen', 'comic', '新X战警 (2001)', 'New X-Men (2001)', '莫里森的变种人基因革命。', 'Morrison\'s mutant evolution.', { year: '2001–2004', channel: L2('漫画宇宙', 'Comics'), status: L2('已完结', 'Ended'), universe: U616 });
wk('astonishing-xmen', 'comic', '惊人X战警', 'Astonishing X-Men (2004)', 'Whedon & Cassaday 的回归本源之作。', 'Whedon & Cassaday\'s back-to-basics.', { year: '2004–2013', channel: L2('漫画宇宙', 'Comics'), status: L2('已完结', 'Ended'), universe: U616 });
wk('thor-god-of-thunder', 'comic', '雷神：雷霆之神', 'Thor: God of Thunder (2012)', '戈尔与三时代雷神的埃斯波西托画卷。', 'Gorr across three Thor eras.', { year: '2012–2014', channel: L2('漫画宇宙', 'Comics'), status: L2('已完结', 'Ended'), universe: U616 });
wk('alias-comics', 'comic', '别名 (Alias)', 'Alias (2001)', 'Bendis 开创 MAX 侦探流的杰西卡·琼斯起源。', 'Jessica Jones\'s MAX noir origin.', { year: '2001–2003', channel: L2('漫画宇宙', 'Comics'), status: L2('已完结', 'Ended'), universe: U616 });
wk('punisher-max', 'comic', '惩罚者 MAX', 'Punisher MAX (2004)', 'Ennis 笔下无超英的残酷战争叙事。', 'Ennis\'s superpower-free war on crime.', { year: '2004–2008', channel: L2('漫画宇宙', 'Comics'), status: L2('已完结', 'Ended'), universe: U616 });
wk('moon-knight-comic', 'comic', '月亮骑士 (2006)', 'Moon Knight (2006)', ' Huston & Finch 的月光疯批正典。', 'Huston & Finch\'s Moon madness.', { year: '2006–2009', channel: L2('漫画宇宙', 'Comics'), status: L2('已完结', 'Ended'), universe: U616 });
wk('marvel-snap', 'game', '漫威终极逆转', 'Marvel Snap', '快节奏卡牌对战的全球爆款。', 'The fast card battler.', { year: '2022', channel: L2('游戏', 'Games'), status: L2('运营中', 'Live'), universe: L2('多宇宙', 'Multiversal') });
wk('marvel-zombies-show', 'animation', '漫威丧尸', 'Marvel Zombies', '丧尸英雄的动画长篇（2025）。', 'The animated dead hero saga (2025).', { year: '2025', channel: L2('动漫宇宙', 'Animation'), status: L2('已播出', 'Released'), universe: L2('Earth-1918 等', 'Earth-1918') });
E('wk-new-xmen', 'chan-comics', 'belongs-to-channel');
E('wk-astonishing-xmen', 'chan-comics', 'belongs-to-channel');
E('wk-thor-god-of-thunder', 'chan-comics', 'belongs-to-channel');
E('wk-alias-comics', 'chan-comics', 'belongs-to-channel');
E('wk-punisher-max', 'chan-comics', 'belongs-to-channel');
E('wk-moon-knight-comic', 'chan-comics', 'belongs-to-channel');
E('wk-marvel-snap', 'chan-game', 'belongs-to-channel');
E('wk-marvel-zombies-show', 'chan-anime', 'belongs-to-channel');
E('wk-thor-god-of-thunder', 'wk-love-thunder', 'adaptation-of');
E('wk-alias-comics', 'wk-jessica-jones-show', 'adaptation-of');
E('wk-moon-knight-comic', 'wk-moon-knight', 'adaptation-of');
E('wk-marvel-zombies-show', 'wk-what-if', 'spinoff-of');
E('ch-wolverine', 'wk-thor-god-of-thunder', 'mentioned-in', {});

/* ---------- 抽象存在与补充团队 ---------- */
ch('eternity', 'cosmic', '永恒 Eternity', 'Eternity', '宇宙本身的具象化，万事万物的总和。', 'The universe itself, personified.', { race: L2('抽象实体', 'Abstract entity'), status: A, debut: 'Strange Tales #138 (1965)', universe: L2('多宇宙', 'Multiversal') });
ch('living-tribunal', 'cosmic', '活立法庭', 'The Living Tribunal', '裁决多元宇宙平衡的至高三脸法官。', 'The three-faced judge of the multiverse.', { race: L2('抽象实体', 'Abstract entity'), status: A, debut: 'Strange Tales #157 (1967)', universe: L2('多宇宙', 'Multiversal') });
ch('one-above-all', 'cosmic', '至高存在', 'The-One-Above-All', '漫威宇宙的终极创世者，一切作者意志的化身。', 'The ultimate creator behind all authors.', { race: L2('抽象实体', 'Abstract entity'), status: A, debut: 'Fantastic Four #511 (2004)', universe: L2('全能层面', 'Omniversal') });
E('ch-eternity', 'ch-living-tribunal', 'ally', { status: NOW });
E('ch-one-above-all', 'ch-living-tribunal', 'creator-of', { status: NOW });
E('ch-living-tribunal', 'ab-reality-warping', 'has-ability', { level: L2('多元级', 'Multiversal') });

ch('wiccan-616', 'superhero', '巫术 威廉 (616)', 'Wiccan / William Kaplan (616)', '绯红女巫转世之子（漫画正典），现实改写的新星。', 'The reincarnated son of the Scarlet Witch.', { race: 'race-mutant', status: A, debut: 'Young Avengers #1 (2005)', occupation: '少年英雄', universe: U616 });
ch('hulkling', 'superhero', '丑客 斯科鲁', 'Hulkling / Teddy Altman', '克里与斯克鲁混血的变形者，巫术的未婚夫。', 'Kree-Skrull hybrid; Wiccan\'s fiancé.', { race: 'race-skrull', status: A, debut: 'Young Avengers #1 (2005)', occupation: '少年英雄', universe: U616 });
ch('patriot-eli', 'superhero', '爱国者 伊莱', 'Patriot / Eli Bradley', '以赛亚·布拉德利的孙子，仿血清少年领袖。', 'Isaiah Bradley\'s grandson leading the Young Avengers.', { race: 'race-human', status: A, debut: 'Young Avengers #1 (2005)', occupation: '少年英雄', universe: U616 });
ch('iron-lad', 'villain', '钢铁少年', 'Iron Lad / Nathaniel Richards', '少年时期的征服者康，青年复仇者的缔造者。', 'Young Kang before the conquest.', { race: 'race-human', status: U, debut: 'Young Avengers #1 (2005)', occupation: '时间旅行者', universe: L2('多时间线', 'Multiversal') });
E('ch-wiccan-616', 'ch-wanda-maximoff', 'kin', { kind: L2('转世亲子(漫画)', 'Reborn son (comics)'), status: NOW });
E('ch-wiccan-616', 'ch-hulkling', 'spouse', { status: NOW });
E('ch-wiccan-616', 'ch-billy-maximoff', 'variant-of', {});
E('ch-iron-lad', 'ch-kang', 'variant-of', {});
E('ch-patriot-eli', 'ch-isaiah-bradley', 'kin', { kind: L2('祖孙', 'Grandfather & grandson'), status: NOW });

team('young-avengers', 'hero-team', '青年复仇者', 'The Young Avengers', '继承复联衣钵的少年英雄团。', 'The kids inheriting the Avengers legacy.', { founded: '2005', founder: L2('钢铁少年', 'Iron Lad'), status: A, universe: U616 });
for (const m of ['ch-wiccan-616', 'ch-hulkling', 'ch-patriot-eli', 'ch-iron-lad']) E(m, 'team-young-avengers', 'member-of', { status: NOW });
E('team-young-avengers', 'team-avengers', 'affiliated-with', { status: NOW });

ch('adrian-toomes-616', 'villain', '秃鹫 (616)', 'Vulture / Adrian Toomes (616)', '漫画正典的飞行拾荒老人。', 'The comics winged senior scavenger.', { race: 'race-human', status: A, debut: 'Amazing Spider-Man #2 (1963)', occupation: '罪犯', universe: U616 });
ch('quentin-beck-616', 'villain', '神秘客 (616)', 'Mysterio / Quentin Beck (616)', '特技幻象师出身的蜘蛛侠克星。', 'The stuntman illusionist.', { race: 'race-human', status: A, debut: 'Amazing Spider-Man #13 (1964)', occupation: '幻象师', universe: U616 });
ch('mac-gargan', 'villain', '蝎子人 麦克·加根', 'Scorpion / Mac Gargan', '詹姆斯根资助改造的蜘蛛侠猎手，后成毒液宿主。', 'The scorpion who once hosted Venom.', { race: 'race-human', status: A, debut: 'Amazing Spider-Man #19 (1964)', occupation: '赏金猎人', universe: U616 });
team('sinister-six', 'villain-org', '邪恶六人组', 'The Sinister Six', '章鱼博士组建的蜘蛛侠反派联盟。', 'Doc Ock\'s Spider-hunting syndicate.', { founded: '1964', founder: L2('章鱼博士', 'Doctor Octopus'), status: A, universe: U616 });
E('ch-otto-octavius', 'team-sinister-six', 'leader-of', { status: NOW });
E('ch-adrian-toomes-616', 'team-sinister-six', 'member-of', { status: NOW });
E('ch-quentin-beck-616', 'team-sinister-six', 'member-of', { status: NOW });
E('ch-mac-gargan', 'team-sinister-six', 'member-of', { status: NOW });
E('ch-max-dillon', 'team-sinister-six', 'member-of', { status: NOW });
E('ch-flint-marko', 'team-sinister-six', 'member-of', { status: NOW });
E('team-sinister-six', 'ch-peter-parker-616', 'rival-org', { status: NOW });

team('midnight-sons', 'coalition', '午夜之子', 'The Midnight Sons', '对抗超自然威胁的黑暗英雄联盟。', 'The dark heroes vs. the supernatural.', { founded: '1992', founder: L2('幽灵大师', 'The Ghost Rider lineage'), status: A, universe: U616 });
E('ch-blade', 'team-midnight-sons', 'member-of', { status: NOW });
E('ch-ghost-rider-johnny', 'team-midnight-sons', 'member-of', { status: NOW });
E('ch-ghost-rider-robbie', 'team-midnight-sons', 'member-of', { status: NOW });
E('ch-doctor-strange-616-illu', 'team-midnight-sons', 'affiliated-with', { status: NOW });
E('ch-michael-morbius', 'team-midnight-sons', 'affiliated-with', { status: NOW });

loc('x-mansion', 'facility', '泽维尔学院', 'Xavier\'s School for Gifted Youngsters', '变种人学校的永恒主场，战争与课堂共用一厅。', 'School and battlefield of mutantkind.', { region: L2('纽约塞勒姆中心', 'Salem Center, NY'), universe: U616, first: 'X战警 #1 (1963)' });
loc('attilan', 'city', '阿提兰', 'Attilan', '异人族的都城，月面悬浮之城。', 'The lunar capital of the Inhumans.', { region: L2('月球', 'The Moon'), universe: U616, first: 'Fantastic Four #47 (1966)' });
E('loc-x-mansion', 'uni-earth-616', 'located-in-universe');
E('ch-charles-xavier', 'loc-x-mansion', 'lives-in', { status: NOW });
E('team-xmen', 'loc-x-mansion', 'hq-at', { status: NOW });
E('ch-black-bolt-616', 'loc-attilan', 'rules', { status: NOW });

uni('battleworld', 'parallel', '战争世界', 'Battleworld', '秘密战争 2015 中杜姆以六16与终极碎片缝合的神之王座世界。', 'Doom\'s patchwork god-planet from Secret Wars 2015.', { designation: 'Battleworld', nature: L2('缝合星球', 'Stitched planet'), status: L2('已解体', 'Dismantled') });
E('wk-secret-wars-15', 'uni-battleworld', 'set-in');
E('uni-battleworld', 'uni-earth-616', 'branched-from', { at: 'ev-incursion-secret-wars-2015' });
