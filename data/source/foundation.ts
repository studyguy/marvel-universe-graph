/** 基础层：媒体频道、宇宙、种族、能力 */
import { chan, uni, race, ab, E } from './registry';
import { L2 } from '../taxonomy';

/* ============================== 媒体频道 ============================== */
// 划分规则：MCU 流媒体剧集/特别篇归 MCU 频道（同一正史 Earth-199999）；
// ABC/Netflix 老剧归"电视剧宇宙"（正史归属存在官方口径分歧，正史规则字段标注）；
// 福克斯 X 战警与索尼 SSU 归"其他影视宇宙"（子频道见宇宙节点）；动画与游戏独立频道。
chan('mcu', 'mcu', 'MCU 漫威电影宇宙', 'Marvel Cinematic Universe', '2008 年《钢铁侠》开启的电影主线宇宙，电影、流媒体剧集、特别篇与动画共享 Earth-199999 正史。', 'The film-led flagship universe since Iron Man (2008): films, streaming series and specials share the Earth-199999 canon.', { medium: L2('电影 + 流媒体 + 特别篇', 'Films + Streaming + Specials'), canon: L2('单一正史 Earth-199999', 'Single canon: Earth-199999') });
chan('tv', 'tv', '电视剧宇宙', 'TV Universe', '电视与流媒体上的漫威改编剧集合：ABC、Netflix 捍卫者系、Freeform 等，各自成宇宙或正史归属存争议。', 'Live-action Marvel TV adaptations (ABC, Netflix Defenders saga, Freeform...), each its own continuum or canon-disputed.', { medium: L2('真人电视剧', 'Live-action TV'), canon: L2('多宇宙并存 / 正史争议', 'Multiple continuities / canon-disputed') });
chan('anime', 'anime', '动漫宇宙', 'Animation Universe', '漫威动画剧集与动画电影：从 90 年代 X 战警动画到蜘蛛侠平行宇宙系列。', 'Marvel animation: from 90s X-Men TAS to the Spider-Verse films.', { medium: L2('动画剧集 / 动画电影', 'Animation'), canon: L2('各自独立宇宙', 'Separate continuities') });
chan('comics', 'comics', '漫画宇宙', 'Comics Universe', '漫威漫画正史宇宙 Earth-616 及其家族，一切改编的源头。', 'The comics continuity of Earth-616 and its family — the source of all adaptations.', { medium: L2('漫画连载 / 单刊', 'Comic series'), canon: L2('Earth-616 正史为主', 'Primarily Earth-616') });
chan('film-other', 'film-other', '其他影视宇宙', 'Other Film Universes', '非 MCU 的真人电影宇宙：旧福克斯 X 战警系与索尼 SSU 毒液系等。', 'Non-MCU live-action film continuities: legacy Fox X-Men and Sony\'s SSU.', { medium: L2('真人电影', 'Live-action films'), canon: L2('各自独立宇宙', 'Separate continuities') });
chan('game', 'game', '游戏', 'Games', '漫威电子游戏：Insomniac 蜘蛛侠系、银河护卫队、漫威争锋等。', 'Marvel video games: Insomniac\'s Spider-Man saga, GotG, Marvel Rivals and more.', { medium: L2('电子游戏', 'Video games'), canon: L2('各自独立宇宙', 'Separate continuities') });


/* ============================== 宇宙 ============================== */
uni('earth-616', 'primary', '主宇宙 Earth-616', 'Earth-616', '漫威漫画正史主宇宙，绝大多数经典故事的发生地。', 'The mainstream comics continuity where most classic stories take place.', { designation: 'Earth-616', nature: L2('漫画正史主宇宙', 'Comics mainstream'), status: L2('现存', 'Active') });
uni('earth-199999', 'primary', '电影宇宙 Earth-199999', 'Earth-199999', 'MCU 正史宇宙编号，涵盖全部电影、剧集与特别篇。', 'The MCU canon designation covering all films, series and specials.', { designation: 'Earth-199999', nature: L2('电影正史主宇宙', 'Film mainstream'), status: L2('现存', 'Active') });
uni('earth-1610', 'parallel', '终极宇宙 Earth-1610', 'Earth-1610 (Ultimate)', '漫画"终极"系列 reboot 宇宙，终极蜘蛛侠迈尔斯的故乡，后于秘密战争 2015 中被摧毁合并。', 'The Ultimate comics reboot line; home of Miles Morales, destroyed and merged in Secret Wars (2015).', { designation: 'Earth-1610', nature: L2('平行宇宙（已并入）', 'Parallel (merged)'), status: L2('已摧毁', 'Destroyed') });
uni('earth-838', 'parallel', 'Earth-838', 'Earth-838', '《疯狂多元宇宙》中光照会所在的平行宇宙，被疯狂化的旺达血洗。', 'The Illuminati universe in Multiverse of Madness, ravaged by corrupted Wanda.', { designation: 'Earth-838', nature: L2('平行宇宙', 'Parallel'), status: L2('重创', 'Devastated') });
uni('earth-828', 'parallel', 'Earth-828', 'Earth-828', '《神奇四侠：初露锋芒》的复古未来主义宇宙，神奇四侠对抗行星吞噬者的家园。', 'The retro-futuristic world of The Fantastic Four: First Steps.', { designation: 'Earth-828', nature: L2('平行宇宙', 'Parallel'), status: L2('现存', 'Active') });
uni('earth-10005', 'parallel', 'Earth-10005 (旧福克斯 X 战警)', 'Earth-10005 (Fox X-Men)', '旧福克斯 X 战警系列电影宇宙， Deadpool & Wolverine 中被 TVA 标记为"锚点宇宙"。', 'The legacy Fox X-Men film continuity, pruned-by-TVA in Deadpool & Wolverine.', { designation: 'Earth-10005 Revised', nature: L2('其他影视宇宙', 'Other film universe'), status: L2('被 TVA 处置', 'TVA-pruned') });
uni('earth-96283', 'parallel', 'Earth-96283 (马奎尔蜘蛛侠)', 'Earth-96283 (Raimi Spider-Man)', '托比·马奎尔版蜘蛛侠三部曲宇宙。', 'The Tobey Maguire Spider-Man trilogy universe.', { designation: 'Earth-96283', nature: L2('其他影视宇宙', 'Other film universe'), status: L2('现存', 'Active') });
uni('earth-120703', 'parallel', 'Earth-120703 (加菲蜘蛛侠)', 'Earth-120703 (Webb Spider-Man)', '安德鲁·加菲尔德版超凡蜘蛛侠两部曲宇宙。', 'The Andrew Garfield Amazing Spider-Man universe.', { designation: 'Earth-120703', nature: L2('其他影视宇宙', 'Other film universe'), status: L2('现存', 'Active') });
uni('ssu', 'parallel', 'SSU 索尼蜘蛛宇宙', 'Sony Spider-Man Universe (SSU)', '索尼的毒液/莫比亚斯等电影共享宇宙，与 MCU 存在交集暗示。', 'Sony\'s Venom/Morbius shared film universe, teased to intersect the MCU.', { designation: 'SSU', nature: L2('其他影视宇宙', 'Other film universe'), status: L2('现存', 'Active') });
uni('earth-92131', 'parallel', 'Earth-92131 (X战警动画)', 'Earth-92131 (X-Men TAS)', '1992 年 X 战警动画及其续作 X 战警 97 的宇宙。', 'The 1992 X-Men animated series continuity continued by X-Men \'97.', { designation: 'Earth-92131', nature: L2('动漫宇宙', 'Animation universe'), status: L2('现存', 'Active') });
uni('spider-verse', 'parallel', '蜘蛛宇宙群', 'The Spider-Verse', '所有蜘蛛侠所在的多元宇宙总称，由"织网者"与蜘蛛图腾维系。', 'The web of all Spider-People\'s realities, bound by the Web of Life and Destiny.', { designation: '多宇宙', nature: L2('多元宇宙集合', 'Multiversal collective'), status: L2('现存', 'Active') });
uni('earth-65', 'parallel', 'Earth-65 (蜘蛛格温)', 'Earth-65 (Spider-Gwen)', '格温·史黛西被蜘蛛咬伤成为英雄的倒转宇宙。', 'The universe where Gwen Stacy was bitten by the radioactive spider instead.', { designation: 'Earth-65', nature: L2('平行宇宙', 'Parallel'), status: L2('现存', 'Active') });
uni('earth-928', 'parallel', 'Earth-928 (2099)', 'Earth-928 (2099)', '2099 年的未来宇宙，蜘蛛侠 2099 米格尔·奥哈拉的时代。', 'The far-future year 2099, era of Spider-Man 2099 Miguel O\'Hara.', { designation: 'Earth-928', nature: L2('平行宇宙', 'Parallel'), status: L2('现存', 'Active') });
uni('insomniac', 'parallel', 'Insomniac 游戏宇宙', 'Insomniac Game Universe', '《漫威蜘蛛侠》系列游戏的专属宇宙（Earth-1048）。', 'The dedicated universe of Insomniac\'s Marvel\'s Spider-Man games (Earth-1048).', { designation: 'Earth-1048', nature: L2('游戏宇宙', 'Game universe'), status: L2('现存', 'Active') });
uni('sacred-timeline', 'abstract', '神圣时间线', 'The Sacred Timeline', 'TVA 维护的"正确"时间线集合，任何分叉都将被裁剪。', 'The TVA-approved proper flow of time; branches get pruned.', { designation: '—', nature: L2('时间线集合', 'Timeline collective'), status: L2('被重启', 'Reset') });
uni('heimdall-dimension', 'pocket', '海姆达尔之境', '—', '《终局之战》结尾揭示的、能俯瞰诸宇宙的神秘观测维度。', 'The mysterious vantage realm glimpsed at the end of Endgame.', { designation: '—', nature: L2('观测维度', 'Vantage dimension'), status: L2('未知', 'Unknown') });
uni('dark-dimension', 'pocket', '黑暗维度', 'Dark Dimension', '多玛姆统治的混沌维度，古一与奇异博士的力量来源之一。', 'Dormammu\'s chaotic realm, tapped by the Ancient One and Doctor Strange.', { designation: '—', nature: L2('口袋维度', 'Pocket dimension'), status: L2('现存', 'Active') });
uni('mirror-dimension', 'pocket', '镜像维度', 'Mirror Dimension', '可折叠现实的复制空间，法师用它训练与战斗而不伤现实。', 'A folded copy of reality where sorcerers train and battle safely.', { designation: '—', nature: L2('口袋维度', 'Pocket dimension'), status: L2('现存', 'Active') });
uni('quantum-realm', 'pocket', '量子领域', 'Quantum Realm', '亚原子尺度的奇异空间，时间与空间规则失效，蚁人与征服者康的角力场。', 'The subatomic realm where spacetime breaks down; Ant-Man vs. Kang.', { designation: '—', nature: L2('亚原子维度', 'Subatomic dimension'), status: L2('现存', 'Active') });
uni('sakaar-arena', 'pocket', '萨卡星', 'Sakaar', '宇宙垃圾场行星，外星竞技场的所在地，浩克曾在此称王。', 'The junkyard planet with its gladiator arena; Hulk once ruled here.', { designation: '—', nature: L2('外星行星', 'Alien planet'), status: L2('已毁灭(诸神黄昏后)', 'Destroyed post-Ragnarok') });
uni('duat', 'pocket', '杜阿特冥界', 'Duat', '埃及神话的冥界，月亮骑士故事中阿米特与孔苏权柄所及之地。', 'The Egyptian underworld tied to Ammit and Khonshu in Moon Knight.', { designation: '—', nature: L2('神话领域', 'Mythic realm'), status: L2('现存', 'Active') });
uni('ta-lo', 'pocket', '塔罗秘境', 'Ta Lo', '十环背后的东方神话秘境，与地球通过竹林结界相连。', 'The mythic Chinese realm behind the Ten Rings bamboo gate.', { designation: '—', nature: L2('神话领域', 'Mythic realm'), status: L2('现存', 'Active') });
uni('nilfheim', 'pocket', '尼福尔海姆', 'Niflheim', '北欧神话中的死之雾国，海拉被流放之地。', 'The Norse realm of mist and death where Hela was banished.', { designation: '—', nature: L2('神话领域', 'Mythic realm'), status: L2('现存', 'Active') });
uni('void-endgame', 'pocket', '终局虚境', 'The Void', '《终局之战》后揭示的、位于时间之外的"万物终点"彼岸。', 'The beyond-time afterlife revealed at the end of Endgame.', { designation: '—', nature: L2('彼岸领域', 'Beyond-realm'), status: L2('现存', 'Active') });
uni('tva-prune-void', 'pocket', '虚空之地', 'The Void (TVA)', 'TVA 裁剪时间线的终点垃圾场，堆积着被删除的宇宙残骸与"最烂"变体。', 'The TVA\'s pruning dump piled with deleted timelines and "worst" variants.', { designation: '—', nature: L2('时间线垃圾场', 'Timeline void'), status: L2('现存', 'Active') });
uni('klyntar', 'pocket', '克林塔星', 'Klyntar', '共生体种族的母星，后成为宇宙强大的势力据点。', 'Homeworld of the symbiote race.', { designation: '—', nature: L2('外星行星', 'Alien planet'), status: L2('现存', 'Active') });
uni('tvq-line', 'abstract', '时间线之外', 'Outside Time', '遗留之人于时间尽头建立的堡垒所在，一切时间线的交汇之外。', 'The citadel at the end of time where He Who Remains ruled.', { designation: '—', nature: L2('抽象层面', 'Abstract plane'), status: L2('现存', 'Active') });

/* 宇宙间关系 */
E('uni-earth-616', 'uni-earth-1610', 'parallel-of');
E('uni-earth-199999', 'uni-earth-838', 'parallel-of');
E('uni-earth-199999', 'uni-earth-828', 'parallel-of');
E('uni-earth-96283', 'uni-earth-120703', 'parallel-of');
E('uni-earth-1610', 'uni-earth-616', 'collided-with', { event: 'ev-incursion-secret-wars-2015' });
E('uni-earth-10005', 'uni-earth-199999', 'collided-with', { event: 'ev-dw-tva-incident' });
E('uni-dark-dimension', 'uni-earth-199999', 'contains', {});

/* ============================== 种族 ============================== */
race('human', 'human', '人类', 'Humans', '银河中最常见的智慧生命之一，脆弱却适应力惊人，是绝大多数英雄的起点。', 'The galaxy\'s most widespread sapient species; fragile but remarkably adaptable.', { homeworld: L2('地球', 'Earth'), universe: L2('多宇宙', 'Multiversal'), status: L2('繁盛', 'Thriving') });
race('mutant', 'human', '变种人', 'Mutants', 'X 基因觉醒的人类亚种，天生拥有超能力，长期遭受恐惧与迫害。', 'Humans born with an active X-gene granting powers, long feared and persecuted.', { homeworld: L2('地球', 'Earth'), universe: L2('多宇宙', 'Multiversal'), status: L2('濒危→复兴', 'Endangered → rising') });
race('inhuman', 'human', '异人族', 'Inhumans', '克里实验改造的人类后裔，经泰瑞根迷雾蜕变出能力。', 'Kree-engineered human offshoots transformed by Terrigen Mist.', { homeworld: L2('阿提兰(月球)', 'Attilan (Moon)'), universe: L2('616 / ABC 剧集', '616 / ABC'), status: L2('零散', 'Scattered') });
race('eternal', 'human', '永恒族', 'Eternals', '天神组造出的不朽人形种族，数百年来隐匿人间引导文明。', 'Immortal humanoids engineered by the Celestials, guiding humanity in secret.', { homeworld: L2(' Olympia(奥林匹亚)', 'Olympia'), universe: L2('616 / 199999', '616 / 199999'), status: L2('分裂', 'Fractured') });
race('deviant', 'human', '变异族', 'Deviants', '天神组另一造物，永恒族的宿敌，形态多变被诬为怪物。', 'The Celestials\' other creation and Eternal nemeses, maligned as monsters.', { homeworld: L2('地球', 'Earth'), universe: L2('616 / 199999', '616 / 199999'), status: L2('复兴', 'Resurgent') });
race('asgardian', 'mythic', '阿斯加德人', 'Asgardians', '自称神明的长寿外星种族，驻守九界之树顶端的金城。', 'Long-lived beings worshipped as gods, ruling from golden Asgard atop Yggdrasil.', { homeworld: L2('阿斯加德', 'Asgard'), universe: L2('多宇宙', 'Multiversal'), status: L2('流亡后重建', 'Rebuilding after exile') });
race('kree', 'alien', '克里帝国人', 'Kree', '好战的蓝皮肤帝国种族，克里-斯克鲁战争的元凶之一。', 'Militaristic blue-skinned imperials, instigators of the Kree-Skrull War.', { homeworld: L2('哈拉', 'Hala'), universe: L2('多宇宙', 'Multiversal'), status: L2('帝制', 'Imperial') });
race('skrull', 'alien', '斯克鲁人', 'Skrulls', '天生变形者，因克里入侵而流亡，后部分与地球结盟。', 'Natural shapeshifters exiled by Kree conquest; some allied with Earth.', { homeworld: L2('斯克鲁洛斯(已毁)', 'Skrullos (destroyed)'), universe: L2('多宇宙', 'Multiversal'), status: L2('难民/结盟', 'Refugees / allied') });
race('celestial', 'cosmic', '天神组', 'Celestials', '播种生命的宇宙级巨神，其"涌现"会终结所在行星的既有文明。', 'Cosmic titans who seed life; their Emergence ends a planet\'s existing age.', { homeworld: L2('宇宙深空', 'Deep space'), universe: L2('多宇宙', 'Multiversal'), status: L2('存续', 'Enduring') });
race('watcher-race', 'cosmic', '观察者', 'Watchers', '立誓只观不涉的宇宙古老种族，乌阿图是其中最著名的地球观察者。', 'An ancient race sworn to non-interference; Uatu watches Earth.', { homeworld: L2('未知', 'Unknown'), universe: L2('多宇宙', 'Multiversal'), status: L2('存续', 'Enduring') });
race('symbiote-race', 'inorganic', '共生体种族', 'Symbiotes', '克伦塔星的液态寄生生命，与宿主结合赋予力量也放大暴虐。', 'Amorphous parasites from Klyntar that empower and corrupt their hosts.', { homeworld: L2('克林塔星', 'Klyntar'), universe: L2('多宇宙', 'Multiversal'), status: L2('扩张', 'Expanding') });
race('flora-colossus', 'inorganic', '植物巨体族', 'Flora Colossi', '格鲁特所属的植物智慧种族，语言只余"我是格鲁特"。', 'Groot\'s sapient plant species; their speech reduces to "I am Groot".', { homeworld: L2('X 星', 'Planet X'), universe: L2('多宇宙', 'Multiversal'), status: L2('稀有', 'Rare') });
race('frost-beast', 'mythic', '冰霜巨兽', 'Frost Beasts', '约顿海姆的巨兽，约顿海姆之战中涌现的古老力量。', 'Primeval beasts of Jotunheim unleashed in its war.', { homeworld: L2('约顿海姆', 'Jotunheim'), universe: L2('多宇宙', 'Multiversal'), status: L2('稀有', 'Rare') });
race('dark-elf', 'mythic', '黑暗精灵', 'Dark Elves', '玛勒基斯领导的太初种族，欲以以太重归宇宙黑暗。', 'Malekith\'s primordial race seeking to return all to darkness via the Aether.', { homeworld: L2('斯瓦塔尔法海姆', 'Svartalfheim'), universe: L2('多宇宙', 'Multiversal'), status: L2('近乎灭绝', 'Near-extinct') });
race('european-myth-god', 'mythic', '奥林匹斯神族', 'Olympians', '宙斯所在的希腊神族，与阿斯加德并存的地球信仰体系。', 'Zeus\'s Greek pantheon, a parallel divine house to Asgard.', { homeworld: L2('奥林匹斯', 'Olympus'), universe: L2('多宇宙', 'Multiversal'), status: L2('隐匿', 'Hidden') });
race('ennead', 'mythic', '九柱神', 'Ennead', '埃及九柱神，孔苏与阿米特所属的神话权柄体系。', 'The Egyptian Ennead — Khonshu and Ammit\'s divine order.', { homeworld: L2('杜阿特', 'Duat'), universe: L2('多宇宙', 'Multiversal'), status: L2('隐匿', 'Hidden') });
race('kakarantharaian', 'alien', '石头人族', 'Kronans', '科恩格所属的岩石巨种族，意志坚定力大无穷。', 'Korg\'s rock-skinned humanoid species.', { homeworld: L2('克拉恩', 'Ria'), universe: L2('多宇宙', 'Multiversal'), status: L2('存续', 'Enduring') });
race('zen-whoberi', 'alien', '泽侯贝里族', 'Zen-Whoberis', '卡魔拉与星云的种族，被灭霸屠戮殆尽。', 'Gamora and Nebula\'s species, butchered by Thanos.', { homeworld: L2('泽侯贝里', 'Zen-Whoberi'), universe: L2('多宇宙', 'Multiversal'), status: L2('近乎灭绝', 'Near-extinct') });
race('rigellian', 'alien', '雷戈里安人', 'Rigellians', '回收者塔纳斯·莱恩所属的殖民种族。', 'The colonizing race of the Recycler Taneleer Tivan\'s era.', { homeworld: L2('雷戈里安-3', 'Rigel-3'), universe: L2('多宇宙', 'Multiversal'), status: L2('存续', 'Enduring') });
race('titan-race', 'alien', '泰坦族', 'Titans', '灭霸的种族，母星泰坦星因资源枯竭而崩溃。', 'Thanos\'s race; their homeworld Titan collapsed from ruin.', { homeworld: L2('泰坦星', 'Titan'), universe: L2('多宇宙', 'Multiversal'), status: L2('灭绝', 'Extinct') });

/* ============================== 能力与力量体系 ============================== */
ab('super-strength', 'power', '超级力量', 'Super Strength', '超出常人极限的肌体力量，从美队到浩克构成完整强度光谱。', 'Strength beyond human limits, from Cap to Hulk.', { kind: L2('体质类', 'Physical'), origin: L2('血清 / 辐射 / 血统等', 'Serums / radiation / lineage') });
ab('flight', 'power', '飞行', 'Flight', '依靠科技、魔法或天生能力实现自由飞行。', 'Free flight via tech, magic or birthright.', { kind: L2('机动类', 'Mobility'), origin: L2('多源', 'Various') });
ab('energy-blast', 'power', '能量释放', 'Energy Projection', '以光束、爆炸等形式释放能量攻击。', 'Projecting energy as beams or blasts.', { kind: L2('攻击类', 'Offensive'), origin: L2('宇宙能量 / 科技', 'Cosmic / tech') });
ab('telepathy', 'power', '心灵感应', 'Telepathy', '读取与影响他人心智，X 教授与白皇后为代表。', 'Reading and influencing minds — Xavier\'s domain.', { kind: L2('精神类', 'Mental'), origin: L2('X 基因', 'X-gene') });
ab('telekinesis', 'power', '念动力', 'Telekinesis', '以意念操控物质运动。', 'Moving matter with the mind.', { kind: L2('精神类', 'Mental'), origin: L2('X 基因 / 魔法', 'X-gene / magic') });
ab('shapeshifting', 'power', '变形', 'Shapeshifting', '改变外貌形体，斯克鲁人天生的生存技能。', 'Altering one\'s form — the Skrull survival gift.', { kind: L2('体质类', 'Physical'), origin: L2('种族天赋', 'Species trait') });
ab('time-manipulation', 'power', '时间操控', 'Time Manipulation', '冻结、回溯或剪裁时间流，时间宝石与 TVA 的权柄。', 'Freezing, rewinding or pruning time — the Time Stone and TVA.', { kind: L2('时空类', 'Temporal'), origin: L2('时间宝石 / TVA 科技', 'Time Stone / TVA') });
ab('reality-warping', 'power', '现实改写', 'Reality Warping', '改写现实规则的最高阶力量，属于天神与无限宝石级别。', 'Rewriting reality itself — Celestial and Infinity-grade power.', { kind: L2('现实类', 'Reality'), origin: L2('无限宝石 / 天赋', 'Infinity Stones / innate') });
ab('portal-conjuring', 'magic', '传送门', 'Portal Conjuring', '卡玛泰姬法师以悬戒开启的空间之门。', 'Sling Ring gates taught at Kamar-Taj.', { kind: L2('魔法', 'Magic'), origin: L2('悬戒 + 法术', 'Sling Ring + spells') });
ab('astral-projection', 'magic', '灵体出窍', 'Astral Projection', '意识脱离肉体的古一标志性魔法。', 'The Ancient One\'s signature out-of-body art.', { kind: L2('魔法', 'Magic'), origin: L2('卡玛泰姬', 'Kamar-Taj') });
ab('eldritch-whips', 'magic', '秘术鞭刃', 'Eldritch Whips', '奇异博士的西托伦火焰鞭与武器构造。', 'Doctor Strange\'s Crimson Bands and whip constructs.', { kind: L2('魔法', 'Magic'), origin: L2('卡玛泰姬', 'Kamar-Taj') });
ab('darkhold-magic', 'magic', '暗神之书魔法', 'Darkhold Magic', '以自身灵魂为代价借用暗黑维度的禁术。', 'Forbidden sorcery borrowed from the Dark Dimension at a soul\'s price.', { kind: L2('黑魔法', 'Dark magic'), origin: L2('暗神之书', 'The Darkhold') });
ab('asgardian-magic', 'magic', '阿斯加德神术', 'Asgardian Sorcery', '洛基的幻术与奥丁的权能所代表的北欧神术。', 'Norse godcraft — Loki\'s illusions, Odin\'s might.', { kind: L2('神术', 'Divine'), origin: L2('阿斯加德血统', 'Asgardian lineage') });
ab('gamma-radiation', 'source', '伽马辐射', 'Gamma Radiation', '造就浩克一族的能量源头，愤怒越强力量越强。', 'The force behind the Hulk line; rage feeds power.', { kind: L2('辐射源', 'Radiation'), origin: L2('伽马实验事故', 'Gamma accident') });
ab('pym-particles', 'source', '皮姆粒子', 'Pym Particles', '改变原子间距实现缩小/放大的神奇粒子。', 'Size-changing wonder particles shrinking atomic spacing.', { kind: L2('科学造物', 'Science'), origin: L2('汉克·皮姆', 'Hank Pym') });
ab('vibranium-tech', 'source', '振金科技', 'Vibranium Technology', '瓦坎达以陨落振金构建的科技树，从黑豹战衣到舒芮实验室。', 'Wakanda\'s tech tree grown from fallen vibranium.', { kind: L2('材料科学', 'Materials'), origin: L2('振金陨石', 'Vibranium meteor') });
ab('extremis', 'source', '绝境病毒', 'Extremis', 'AIM 研发的再生强化剂，亦伴随爆炸风险。', 'A.I.M.\'s regenerative serum with explosive side effects.', { kind: L2('生化', 'Biochem'), origin: L2('A.I.M. 研发', 'A.I.M.') });
ab('super-soldier-serum', 'source', '超级士兵血清', 'Super Soldier Serum', '将凡人推向体能巅峰的血清，美队与红骷髅同源异果。', 'The serum perfecting human peaks — Cap and Red Skull\'s common root.', { kind: L2('生化', 'Biochem'), origin: L2('亚伯拉罕·厄斯金', 'Abraham Erskine') });
ab('arc-reactor', 'source', '方舟反应堆', 'Arc Reactor', '托尼·斯塔克的微型清洁能源心脏，驱动一切钢铁战甲。', 'Tony Stark\'s clean-energy heart powering every suit.', { kind: L2('能源科技', 'Energy tech'), origin: L2('斯塔克工业', 'Stark Industries') });
ab('ten-rings-power', 'source', '十环之力', 'Ten Rings Power', '文武千年来吸取天界能量的神秘指环，其来源成谜。', 'Wenwu\'s millennium-old rings siphoning unknown power.', { kind: L2('神秘造物', 'Mystic artifact'), origin: L2('未知', 'Unknown') });
ab('phoenix-force-ab', 'cosmic', '凤凰之力', 'Phoenix Force', '宇宙创生之初的原始力量，宿主将成为毁灭与新生的化身。', 'A primordial cosmic force turning hosts into destroyers and rebearers.', { kind: L2('宇宙力量', 'Cosmic'), origin: L2('宇宙创生', 'Creation itself') });
ab('infinity-stones-power', 'cosmic', '无限宝石之力', 'Infinity Stones', '六颗宝石齐聚可随意改写现实的宇宙终极力量。', 'The six-stone zenith of power over reality itself.', { kind: L2('宇宙力量', 'Cosmic'), origin: L2('宇宙大爆炸', 'The Big Bang') });
ab('godlike-might', 'cosmic', '神明伟力', 'Divine Might', '神明血统赋予的雷霆、神性与不朽。', 'Thunder, divinity and immortality of godly blood.', { kind: L2('神力', 'Divine'), origin: L2('神明血统', 'Divine lineage') });
ab('quantum-powers', 'cosmic', '量子之力', 'Quantum Powers', '从量子领域获得或源自其中的超常能力。', 'Powers drawn from or granted by the Quantum Realm.', { kind: L2('量子', 'Quantum'), origin: L2('量子领域', 'Quantum Realm') });
ab('magic-general', 'magic', '魔法', 'Magic', '以咒语、法器与维度借力实现超常效果的体系总称。', 'The umbrella of spells, relics and dimensional borrowings.', { kind: L2('体系总称', 'System'), origin: L2('多维度借力', 'Dimensional sources') });
ab('super-intellect', 'power', '超级智慧', 'Super Intellect', '以头脑为武器的天才：钢铁侠、毁灭博士、月亮骑士的双人格皆属此类。', 'Genius as a weapon: Stark, Doom, and fractured minds alike.', { kind: L2('心智类', 'Mental'), origin: L2('天赋 / 训练', 'Nature / nurture') });
ab('regeneration', 'power', '再生自愈', 'Regeneration', '金刚狼与死侍的招牌：伤势飞速愈合乃至不死。', 'Wolverine and Deadpool\'s trademark rapid healing.', { kind: L2('体质类', 'Physical'), origin: L2('X 基因 / 诅咒', 'X-gene / curse') });
ab('invisibility', 'power', '隐形', 'Invisibility', '隐形女苏珊的力场魔法之一，也可源于科技。', 'Sue Storm\'s signature, also achievable by tech.', { kind: L2('体质/科技', 'Physical / Tech'), origin: L2('宇宙射线 / 科技', 'Cosmic rays / tech') });
ab('web-slinging', 'power', '蛛丝发射', 'Web-Slinging', '生物蛛丝或发射器织就的空中网络，蜘蛛侠的机动核心。', 'Organic or mechanical webbing — the webhead\'s mobility.', { kind: L2('能力/装备', 'Power / Gear'), origin: L2('蛛咬变异 / 发射器', 'Spider-bite / shooters') });
ab('enchantment', 'magic', '附魔', 'Enchantment', '为器物注入魔法属性：雷神之锤的"配得上者"即奥丁附魔。', 'Imbuing objects with magic — Mjolnir\'s worthiness is Odin\'s enchantment.', { kind: L2('魔法', 'Magic'), origin: L2('奥丁等神明', 'Odin and peers') });

/* 关键能力关系示例 */
E('ch-thanos', 'ab-infinity-stones-power', 'has-ability', { level: L2('六宝石齐聚', 'All six stones') });
E('ch-wanda-maximoff', 'ab-reality-warping', 'has-ability', { level: L2('绯红女巫层级', 'Scarlet Witch tier') });
