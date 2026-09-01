/** 人物介绍 · 团队（team）批次 P2。事实源：Marvel Database 团队页 + 漫威正典。 */
import { bio } from './registry';

/* ============ P2 团队：批 1（11 个核心） ============ */

bio('team-avengers', [
  { zh: '复仇者联盟是漫威宇宙最核心的英雄团队，1963 年《复仇者》创刊由斯坦·李与杰克·科比创立：钢铁侠、雷神、浩克、蚁人与黄蜂女的"地球上最强大的英雄"。',
    en: 'The Avengers, Marvel\'s central hero team, debuted in 1963 by Lee and Kirby: Iron Man, Thor, Hulk, Ant-Man and the Wasp — "Earth\'s Mightiest Heroes."' },
  { zh: '队伍阵容随时代更迭：美国队长解冻后成为核心，黑寡妇、鹰眼、绯红女巫、幻视、黑豹、惊奇队长等相继加入；MCU 自 2012 年电影起成为流行文化现象。',
    en: 'The roster evolved through the ages — Captain America, Black Widow, Hawkeye, Scarlet Witch, Vision, Black Panther, Captain Marvel; the MCU made it a pop-culture phenomenon from 2012.' },
  { zh: '团队象征"团结即力量"：成员背景天差地别（神、科学家、特工、变种人），却为守护地球并肩作战——也是内战等冲突的舞台。',
    en: 'The team is unity in diversity: gods, scientists, spies and mutants fighting side by side for Earth — and the stage of Civil War\'s rifts.' },
  { zh: '终局之战后复仇者进入新纪元（MCU 第四至六阶段重组），漫画线中始终是漫威英雄谱系的轴心。',
    en: 'After Endgame the Avengers enter a new MCU era; in comics they remain the axis of the hero mythos.' },
]);

bio('team-gotg', [
  { zh: '银河护卫队是漫威的宇宙英雄团队，2008 年现代版《银河护卫队》由丹·阿布内特与安迪·兰宁重塑：星爵领衔的"宇宙浪子"组合。',
    en: 'The Guardians of the Galaxy, Marvel\'s cosmic crew, were modernized in 2008 by Abnett and Lanning: Star-Lord\'s band of space misfits.' },
  { zh: '经典阵容：星爵、卡魔拉、毁灭者德拉克斯、火箭浣熊与格鲁特；MCU 电影（2014 起）将其推向全球。',
    en: 'The classic roster: Star-Lord, Gamora, Drax, Rocket and Groot; the MCU films (2014+) made them worldwide icons.' },
  { zh: '团队象征"废柴的逆袭"：一群各怀创伤的边缘人，以"家人"之名守护宇宙——漫威最有人情味的团队。',
    en: 'The team is misfits redeemed: wounded outcasts who call themselves family while saving the cosmos.' },
  { zh: '《银护3》后老班底暂别、火箭接任队长，新"宇宙复仇者"阵容延续传奇。',
    en: 'After Vol. 3, Rocket leads a new generation — the cosmic legend continues.' },
]);

bio('team-shield', [
  { zh: '神盾局（S.H.I.E.L.D.）是漫威世界的顶级情报与维和组织：1965 年由斯坦·李与杰克·科比创建，全称"战略国土干预、执法与后勤局"。',
    en: 'S.H.I.E.L.D., Marvel\'s premier intelligence agency, was created in 1965 by Lee and Kirby — the Strategic Homeland Intervention, Enforcement and Logistics Division.' },
  { zh: '尼克·弗瑞长期执掌神盾局，吸纳黑寡妇、鹰眼等特工；MCU 中由科尔森、希尔等特工构成庞大体系。',
    en: 'Nick Fury long led it, fielding Black Widow and Hawkeye; the MCU built a vast agency around Coulson and Hill.' },
  { zh: '组织象征"盾后的世界"：监视超人类、筹备复仇者计划、对抗九头蛇渗透——灰色地带的守护者。',
    en: 'The agency is the world behind the shield: watching superhumans, seeding the Avengers, fighting HYDRA from within.' },
  { zh: '《美国队长2》揭露九头蛇渗透后神盾局解体又重组，MCU 与漫画中始终是英雄体系的基础设施。',
    en: 'After Winter Soldier\'s HYDRA reveal it fell and rose again — infrastructure of the hero world.' },
]);

bio('team-hydra', [
  { zh: '九头蛇是漫威最著名的反派组织：1941 年《美国队长》中纳粹的秘密科学分支，口号"砍掉一个头，再生出两个"。',
    en: 'HYDRA, Marvel\'s most iconic villain organization, began as the Nazis\' secret science arm in 1941 — "cut off a head, two more shall take its place."' },
  { zh: '红骷髅创立并长期主导，后由泽莫男爵、斯特拉克男爵等相继执掌；MCU 中深潜神盾局数十年。',
    en: 'Red Skull founded it, with Baron Zemo and Strucker among its leaders; the MCU had it infiltrate S.H.I.E.L.D. for decades.' },
  { zh: '组织象征"永恒的渗透"：科学改造、洗脑计划（冬兵）、极端秩序崇拜——英雄们最顽固的敌人。',
    en: 'The organization is eternal infiltration: super-science, the Winter Soldier program, order-worship — the heroes\' most stubborn foe.' },
  { zh: 'MCU 中九头蛇随红骷髅的消亡与"九头蛇队长"变体仍存在于多元宇宙。',
    en: 'HYDRA persists in the MCU through variants and the multiverse.' },
]);

bio('team-ssr', [
  { zh: '战略科学储备局（S.S.R.）是二战时期美国对超自然与尖端科技的军事机构，神盾局的前身。',
    en: 'The Strategic Scientific Reserve was the WWII-era military agency for super-science — S.H.I.E.L.D.\'s predecessor.' },
  { zh: '卡特探员、飞利浦斯上校与嚎叫突击队在此运作，与九头蛇正面交锋；MCU《特工卡特》以其为舞台。',
    en: 'Agent Carter, Colonel Phillips and the Howling Commandos operated here against HYDRA; the MCU\'s Agent Carter series is set here.' },
  { zh: '组织象征"时代的黎明"：超级士兵计划、方舟技术的摇篮——现代超人类世界的地基。',
    en: 'The agency is the dawn of the superhuman age: cradle of the Super-Soldier program.' },
  { zh: '战后改组为神盾局，S.S.R. 的遗产贯穿整个 MCU 历史。',
    en: 'It became S.H.I.E.L.D. after the war — its legacy runs through MCU history.' },
]);

bio('team-thunderbolts', [
  { zh: '雷霆特攻队是漫威"反派洗白"的招牌团队：1997 年由泽莫男爵组建，假扮英雄的超级罪犯团队。',
    en: 'The Thunderbolts, Marvel\'s signature reformed-villain team, debuted in 1997 under Baron Zemo — villains posing as heroes.' },
  { zh: '历代阵容包括泽莫、月光石、模仿大师、红浩克、冬兵等；MCU 电影（2025）集结叶莲娜、巴基等反英雄。',
    en: 'Rosters spanned Zemo, Moonstone, Taskmaster, Red Hulk, Winter Soldier; the 2025 MCU film unites Yelena, Bucky and more.' },
  { zh: '团队象征"救赎的可能性"：罪犯换装成英雄，面具之下是真实或虚伪——漫威对英雄定义的灰色拷问。',
    en: 'The team is redemption tested: villains in hero costumes, genuine or fake — Marvel\'s grey question on heroism.' },
  { zh: '漫画中雷霆特攻队多次改组（含政府监管版），MCU 版成为第五阶段收官之作。',
    en: 'The roster reshuffled many times; the MCU film closes Phase 5.' },
]);

bio('team-black-order', [
  { zh: '黑暗军团是灭霸的私人战队：2013 年《新复仇者》中登场，由黑曜五将组成——亡刃将军、暗夜比邻星、黑矮星、乌木喉与超巨星。',
    en: 'The Black Order, Thanos\'s elite, debuted in 2013: the Black Order generals — Corvus Glaive, Proxima Midnight, Cull Obsidian, Ebony Maw and Supergiant.' },
  { zh: '军团为灭霸收集无限宝石、屠戮文明；MCU《无限战争》中全员登场并相继战死。',
    en: 'They collected the Infinity Stones and slaughtered worlds for Thanos; the MCU\'s Infinity War featured them all.' },
  { zh: '组织象征"暴政的刀锋"：灭霸意志的延伸，每个成员都是星际级的毁灭者。',
    en: 'The Order is tyranny\'s blade: extensions of Thanos\'s will, each a cosmic destroyer.' },
  { zh: '漫画中黑曜五将在灭霸死后仍以独立势力活动，MCU 版则随灭霸的响指而灭。',
    en: 'The generals outlived Thanos in comics; the MCU snapped them away.' },
]);

bio('team-ten-rings', [
  { zh: '十环帮是漫威电影宇宙的原创反派组织：以十枚魔法戒指为标志的千年恐怖集团，2021 年《尚气》正式登场。',
    en: 'The Ten Rings, the MCU\'s original villain organization, rose to prominence in Shang-Chi (2021), named for ten magical rings.' },
  { zh: '文武（徐文武）是十环帮之主，尚气之父；MCU 揭示其历史贯穿千年。',
    en: 'Wenwu is the Rings\' master and Shang-Chi\'s father; the MCU revealed their millennial history.' },
  { zh: '组织象征"力量与传承"：武术、暗杀与全球地下网络——东方功夫片的暗面。',
    en: 'The organization is power and legacy: martial arts, assassination, a global underworld — kung-fu\'s dark side.' },
  { zh: '《尚气》后十环帮在 MCU 中改组，十环下落成为悬念。',
    en: 'After Shang-Chi the Ten Rings reorganize; the rings\' fate is an MCU thread.' },
]);

bio('team-tva', [
  { zh: '时间变异管理局（TVA）是 MCU《洛基》剧集中的时间警察机构：维护"神圣时间线"、审判时间犯的官僚化组织。',
    en: 'The Time Variance Authority, from the MCU\'s Loki series, polices the timeline — a bureaucracy judging time-criminals.' },
  { zh: 'TVA 由"时间守护者"（后揭晓为遗留之人/征服者康的变体）管理；洛基与莫比乌斯在此展开时间冒险。',
    en: 'Run by the Time Keepers (revealed as He Who Remains), it hosted Loki and Mobius\'s adventures.' },
  { zh: '组织象征"秩序的暴政"：时间线修剪、记忆清除与无尽官僚——自由的代价。',
    en: 'The TVA is order\'s tyranny: timeline pruning, memory wipes, endless bureaucracy — the cost of free will.' },
  { zh: '《洛基》第二季后洛基成为时间之神，TVA 重组并直面多元宇宙的康之战争。',
    en: 'After Loki S2, Loki becomes the god of time; the TVA faces the Multiversal War.' },
]);

bio('team-kamar-taj', [
  { zh: '卡玛泰姬是漫威魔法世界的中心：位于喜马拉雅山脉的秘法学院，教导地球的守护法师（奇异博士的师门）。',
    en: 'Kamar-Taj, Marvel\'s mystic center, is the Himalayan school of sorcery training Earth\'s guardian mages.' },
  { zh: '远古者（Ancient One）数世纪执掌，奇异博士、王、莫度男爵皆出于此；MCU 中由蒂尔达·斯文顿饰演的远古者引领。',
    en: 'The Ancient One led for centuries; Strange, Wong and Mordo trained here (Tilda Swinton in the MCU).' },
  { zh: '组织象征"守护现实"：悬戒传送、镜像维度与圣殿网络——抵御维度入侵的第一道防线。',
    en: 'The school guards reality: sling rings, mirror dimensions, the Sanctums — first line against dimensional invasion.' },
  { zh: '《奇异博士2》后王成为至尊法师，卡玛泰姬在多元宇宙危机中扩展。',
    en: 'Wong became Sorcerer Supreme after MoM; Kamar-Taj expands amid multiversal threats.' },
]);

bio('team-ravagers', [
  { zh: '掠夺者是银河系的太空海盗联盟：由勇度·乌东塔领衔的"蓝色脸庞"赏金猎手团伙，星爵的养父家族。',
    en: 'The Ravagers are the galaxy\'s pirate alliance: Yondu Udonta\'s blue-faced bounty hunters, Star-Lord\'s adoptive family.' },
  { zh: 'MCU《银护》中勇度养大彼得·奎尔，终局之战中掠夺者舰队驰援复仇者。',
    en: 'In the MCU Yondu raised Peter Quill; Ravager fleets answered the call in Endgame.' },
  { zh: '组织象征"自由与义气"：星际走私、劫掠与荣誉准则——海盗也有原则。',
    en: 'The Ravagers are freedom and loyalty: smuggling, raiding, a pirate code.' },
  { zh: '《银护2》勇度牺牲后，掠夺者名号由克拉格林等继承。',
    en: 'After Yondu\'s sacrifice, Kraglin and others carry the name.' },
]);

/* ============ P2 团队：批 2（11 个） ============ */

bio('team-red-room', [
  { zh: '红房是漫威的苏联间谍训练机构：培养"黑寡妇"女特工的冷酷学府，娜塔莎·罗曼诺夫的故乡。',
    en: 'The Red Room is Marvel\'s Soviet spy academy: the cold school of Black Widows, Natasha Romanoff\'s origin.' },
  { zh: '德雷科夫将军执掌红房（MCU《黑寡妇》），其"红房计划"以生化强化与精神操控培养顶级特工。',
    en: 'General Dreykov ran it in the MCU\'s Black Widow, breeding enhanced operatives through the Black Widow Program.' },
  { zh: '组织象征"体制的恶"：特工的童年被剥夺、身体被改造——黑寡妇们以牺牲者的身份复仇。',
    en: 'The Room is institutional evil: stolen childhoods, rebuilt bodies — Widows who take revenge as victims.' },
  { zh: '《黑寡妇》中红房被娜塔莎与叶莲娜摧毁，但余党仍在暗处活动。',
    en: 'Natasha and Yelena destroyed it in Black Widow; remnants linger.' },
]);

bio('team-nova-corps', [
  { zh: '新星军团是山达尔星球的宇宙维和部队：1976 年《新星》中登场，以新星之力（Xandarian Worldmind）为士兵赋能。',
    en: 'The Nova Corps, Xandar\'s cosmic peacekeepers, debuted in Nova (1976), empowering soldiers via the Worldmind.' },
  { zh: '理查德·赖德是其传奇百夫长；MCU《银护》中由格伦·克洛斯饰演的罗曼·戴统领。',
    en: 'Richard Rider is its legendary centurion; Glenn Close\'s Nova Prime led it in the MCU.' },
  { zh: '组织象征"宇宙的秩序"：星际执法、新星之力与山达尔的荣耀——克里帝国的对手。',
    en: 'The Corps is cosmic order: interstellar law, the Nova Force, Xandar\'s pride — Kree Empire\'s foe.' },
  { zh: '《银护》中山达尔被灭霸摧毁，新星军团在漫画中重建并延续。',
    en: 'Xandar fell to Thanos in the MCU; comics rebuilt the Corps.' },
]);

bio('team-dora-milaje', [
  { zh: '多拉·米拉杰是瓦坎达王室的女子亲卫队：黑豹的贴身护卫，瓦坎达最强的女战士团体。',
    en: 'The Dora Milaje are Wakanda\'s royal guard: the Black Panther\'s elite female warriors.' },
  { zh: '奥克耶将军长期统领多拉·米拉杰，MCU《黑豹》中成为银幕经典；成员阿由等亦受关注。',
    en: 'General Okoye long led them, iconic in the MCU\'s Black Panther; Ayo and others shine too.' },
  { zh: '组织象征"王权的锋芒"：振金武器、近身格斗与绝对忠诚——黑豹身后的盾。',
    en: 'The Dora are the crown\'s edge: vibranium arms, elite combat, absolute loyalty — the Panther\'s shield.' },
  { zh: '苏睿继位后多拉·米拉杰继续侍奉新王，瓦坎达的军力中坚。',
    en: 'They serve Queen Shuri now — Wakanda\'s martial core.' },
]);

bio('team-wakandan-royal', [
  { zh: '瓦坎达王室是漫威最富有的君主制家族：世代以黑豹之名守护振金之国。',
    en: 'The House of Wakanda, Marvel\'s wealthiest monarchy, has guarded the vibranium nation through generations of Black Panthers.' },
  { zh: '特查拉国王（MCU 查德维克·博斯曼）与苏睿公主、拉蒙达太后构成王室核心；《黑豹2》后苏睿继位。',
    en: 'King T\'Challa (Chadwick Boseman), Princess Shuri and Queen Ramonda anchored it; Shuri took the throne in Wakanda Forever.' },
  { zh: '家族象征"传统与未来"：心形草仪式、振金科技与"瓦坎达永不屈服"的骄傲。',
    en: 'The family is tradition and future: Heart-Shaped Herb rites, vibranium tech, "Wakanda Forever" pride.' },
  { zh: '瓦坎达王室在 MCU 中主导对抗塔洛坎，漫画中黑豹血脉延续千年。',
    en: 'The royal house led against Talokan in the MCU; the Panther line spans millennia in comics.' },
]);

bio('team-talokan', [
  { zh: '塔洛坎王国是 MCU《黑豹2》原创的水下文明：由纳摩（海王）统治、以振金维生的海底帝国。',
    en: 'Talokan, the MCU\'s underwater civilization from Wakanda Forever, is ruled by Namor and powered by vibranium.' },
  { zh: '纳摩（特诺奇·韦尔塔饰演）是塔洛坎之王，因瓦坎达的振金争端浮出水面。',
    en: 'Namor (Tenoch Huerta) rules Talokan, surfacing over the vibranium dispute.' },
  { zh: '组织象征"深海的复仇"：水底文明、玛雅血统与对地表世界的警惕。',
    en: 'Talokan is the deep\'s vengeance: an underwater Maya civilization wary of the surface.' },
  { zh: '《黑豹2》结尾纳摩与瓦坎达停战结盟，塔洛坎成为 MCU 新势力。',
    en: 'Talokan and Wakanda made peace — a new MCU power bloc.' },
]);

bio('team-fantastic-four-828', [
  { zh: '神奇四侠是漫威第一家庭：1961 年《神奇四侠》创刊，里德、苏、约翰尼与本在宇宙射线中觉醒。',
    en: 'The Fantastic Four, Marvel\'s First Family, debuted in 1961 — Reed, Sue, Johnny and Ben empowered by cosmic rays.' },
  { zh: 'MCU《奇异博士2》出现地球-838 版（约翰·卡拉辛斯基等客串）；正式重启版 2025 年由佩德罗·帕斯卡主演。',
    en: 'The MCU\'s MoM showed the Earth-838 version; the 2025 reboot stars Pedro Pascal.' },
  { zh: '团队象征"探索与家庭"：科学与冒险一体，四人互为家人也互为对手——漫威宇宙的基石团队。',
    en: 'The team is exploration and family: science and adventure fused, four heroes who are each other\'s foil.' },
  { zh: '神奇四侠重启将正式接入 MCU 主线（第六阶段）。',
    en: 'The FF reboot enters MCU Phase 6 canon.' },
]);

bio('team-illuminati-838', [
  { zh: '光照会（838 宇宙）是 MCU《奇异博士2》中的秘密决策团：集结各维度守护者，以"最小伤害"原则行事。',
    en: 'The Illuminati of Earth-838, from Multiverse of Madness, gathers dimensional guardians ruling by "least harm."' },
  { zh: '成员包括至尊法师斯特兰奇（838）、黑蝠王、神奇先生、X教授、惊奇队长与卡特队长——被绯红女巫逐一击败。',
    en: 'Its roster — Strange, Black Bolt, Reed, Xavier, Captain Marvel, Captain Carter — fell one by one to the Scarlet Witch.' },
  { zh: '组织象征"精英的傲慢"：为大局牺牲个体——理想主义与暴政的一线之隔。',
    en: 'The council is elite hubris: sacrificing individuals for the greater good — the line between idealism and tyranny.' },
  { zh: '838 光照会的覆灭警示多元宇宙联盟的危险，MCU 多元宇宙线继续展开。',
    en: 'Their fall warns of multiverse alliances; the MCU\'s multiversal saga unfolds.' },
]);

bio('team-master-of-mystic', [
  { zh: '魔力大师团是卡玛泰姬法师体系的正式组织：由至尊法师统领，分散于全球圣殿守护维度。',
    en: 'The Masters of the Mystic Arts are Kamar-Taj\'s formal order: sorcerers across global Sanctums, led by the Sorcerer Supreme.' },
  { zh: '奇异博士、王、莫度、卡西利厄斯（叛逃）皆为成员；MCU 中伦敦、纽约、香港三大圣殿构成防御网。',
    en: 'Strange, Wong, Mordo and the traitor Kaecilius belong to it; London, New York and Hong Kong Sanctums form the MCU network.' },
  { zh: '组织象征"魔法的秩序"：悬戒传送、护盾咒与维度公约——秘法的守护与滥用一线之隔。',
    en: 'The Masters are magic\'s order: portals, shield spells, dimensional pacts — guardianship or abuse, one step apart.' },
  { zh: '《奇异博士2》后王任至尊法师，魔力大师团在多元宇宙危机中扩编。',
    en: 'Wong now leads; the Order expands amid multiversal threats.' },
]);

bio('team-sovereign', [
  { zh: '至高族是 MCU《银护2》中的金色人种文明：基因完美、科技至上的自恋种族。',
    en: 'The Sovereign, from Guardians Vol. 2, are a golden-skinned race of genetic perfection and vanity.' },
  { zh: '阿耶莎大祭司统领至高族，因银护偷走电池而结仇；其"完美实验体"亚当术士在《银护3》登场。',
    en: 'High Priestess Ayesha rules them; their perfect experiment Adam Warlock appears in Vol. 3.' },
  { zh: '种族象征"完美的傲慢"：生物电池、基因工程与"宇宙最优雅"的自居。',
    en: 'The race is perfection\'s pride: bio-batteries, gene-craft, cosmic elegance.' },
  { zh: '《银护3》中至高族遭反地球破坏，阿耶莎殒命，亚当成为新守护者。',
    en: 'Counter-Earth broke them; Ayesha died and Adam joined the Guardians.' },
]);

bio('team-kree-empire', [
  { zh: '克里帝国是漫威宇宙三大星际帝国之一：蓝色皮肤的外星军事文明，漫威电影宇宙与漫画的核心宇宙势力。',
    en: 'The Kree Empire, one of Marvel\'s three great space empires, is the blue-skinned militarist civilization across comics and MCU.' },
  { zh: '至高智慧（Supreme Intelligence）统治克里；迈-威尔、勇·罗格、卡罗尔·丹弗斯（混血）皆与其相关。',
    en: 'The Supreme Intelligence rules; Mar-Vell, Yon-Rogg and Carol Danvers all tie to it.' },
  { zh: '帝国象征"征服的理性"：超级士兵改造、星际扩张与斯克鲁人的千年战争。',
    en: 'The Empire is rational conquest: soldier engineering, expansion, the eternal Kree-Skrull war.' },
  { zh: '《惊奇队长》揭示克里对斯克鲁人的屠戮，MCU 中克里帝国在《惊奇队长2》与"哈拉之死"后衰落。',
    en: 'Captain Marvel exposed their Skrull genocide; Hala\'s fall in The Marvels ended their era.' },
]);

bio('team-westview-residents', [
  { zh: '西景镇居民是《旺达幻视》中被绯红女巫的魔法困在情景喜剧现实中的小镇居民。',
    en: 'The Westview residents were trapped in Wanda\'s sitcom reality throughout WandaVision.' },
  { zh: '全镇被旺达的混沌魔法改写为"电视乐园"，只有多蒂、阿格尼丝等少数人保有自我意识。',
    en: 'The town became a TV fantasy; only Dottie and Agnes kept some awareness.' },
  { zh: '群体象征"牺牲的代价"：旺达的悲伤以全镇人的自由为燃料——英雄行为的伦理阴影。',
    en: 'The townsfolk embody the cost of grief: Wanda\'s comfort, their captivity — heroism\'s moral shadow.' },
  { zh: '旺达解除魔法后西景镇居民获释，阿加莎的诅咒线在《阿加莎》剧集中延续。',
    en: 'They were freed when Wanda lifted the hex; Agatha\'s curse continues in her own series.' },
]);

bio('team-champions', [
  { zh: '少年冠军小队是漫威的新生代英雄团队：2016 年由惊奇少女、蜘蛛侠（迈尔斯）、新星（山姆）、幻景等组建。',
    en: 'The Champions, Marvel\'s teen hero team, formed in 2016: Ms. Marvel, Miles, Nova (Sam) and Viv among them.' },
  { zh: '他们因对成年英雄的失望而自立门户，以"不做妥协"为信条。',
    en: 'They formed out of disillusionment with adult heroes, vowing not to compromise.' },
  { zh: '团队象征"下一代的声音"：少年英雄的价值观、社交媒体时代的英雄主义。',
    en: 'The team is the next generation\'s voice: youthful ideals, social-media-age heroics.' },
  { zh: '漫画中冠军小队与复仇者、X战警频繁联动，是漫威少年线的中坚。',
    en: 'They cross over with the Avengers and X-Men — the junior vanguard.' },
]);

/* ============ P2 团队：批 3（收尾 11 个） ============ */

bio('team-deviants-horde', [
  { zh: '变异族是漫威的古老反派种族：数百万年前天神组在人类基因中创造的"变数"，以毁灭人类为使命。',
    en: 'The Deviants are Marvel\'s ancient villain race: created by the Celestials as genetic variance, driven to destroy humanity.' },
  { zh: '漫画中与永恒族世仇千年；MCU《永恒族》中变异族以"怪物"形态登场并被剿灭。',
    en: 'They warred with the Eternals for millennia; the MCU\'s Eternals featured them as monsters.' },
  { zh: '种族象征"进化的失控"：基因畸变、怪兽形态与对秩序的本能仇恨。',
    en: 'The Deviants are evolution unbound: mutation, monster forms, hatred of order.' },
  { zh: 'MCU 版变异族被揭示为天神组实验的副产品，其威胁在《永恒族》后暂歇。',
    en: 'The MCU revealed them as Celestial byproducts; their threat lingers.' },
]);

bio('team-scarlet-witch-cult', [
  { zh: '绯红女巫信徒是《奇异博士2》中的狂热邪教：崇拜绯红女巫（旺达）为"混沌之主"。',
    en: 'The Scarlet Witch cult in Multiverse of Madness venerates Wanda as the chaos-wielding mistress.' },
  { zh: '该教派以《黑暗神书》为经、以多玛姆的仪式召唤旺达夺取美国·查维斯的穿越之力。',
    en: 'The cult used the Darkhold to summon Wanda and seize America Chavez\'s multiverse power.' },
  { zh: '组织象征"信仰的扭曲"：把悲剧英雄神化为灾厄之源——崇拜与恐惧的一体两面。',
    en: 'The cult is faith warped: hero deified into catastrophe — worship and fear as one.' },
  { zh: '旺达摧毁黑暗神书后教派瓦解，其影响力随多元宇宙线消散。',
    en: 'Wanda destroyed the Darkhold; the cult dissolved.' },
]);

bio('team-nova-prime', [
  { zh: '新星核心议会是山达尔星的最高权力机关：由新星至尊（Nova Prime）领导的九人委员会。',
    en: 'Nova Prime is Xandar\'s ruling council: nine members led by the Nova Prime.' },
  { zh: 'MCU《银护》中格伦·克洛斯饰演的罗曼·戴任新星至尊，负责与罗南的战争。',
    en: 'Glenn Close\'s Romen-Dey led it through the Ronan war in the MCU.' },
  { zh: '组织象征"文明的秩序"：星际法律、新星军团指挥权与宇宙外交。',
    en: 'The council is civilizational order: space law, Nova Corps command, cosmic diplomacy.' },
  { zh: '山达尔遭灭霸毁灭后，新星核心议会残余在漫画与 MCU 中艰难重建。',
    en: 'After Xandar\'s fall, remnants rebuild in comics and the MCU.' },
]);

bio('team-xmen', [
  { zh: 'X战警是漫威最伟大的变种人团队：1963 年《X战警》创刊，泽维尔教授以"人类与变种人和平共处"为理想。',
    en: 'The X-Men, Marvel\'s greatest mutant team, debuted in 1963 under Xavier\'s dream of human-mutant peace.' },
  { zh: '经典阵容：镭射眼、琴·葛蕾、冰人、天使、野兽（初代）+ 金刚狼、暴风女、夜行者等（巨型X战警世代）。',
    en: 'The roster spans the originals (Cyclops, Jean, Iceman, Beast, Angel) and the Giant-Size generation (Wolverine, Storm, Nightcrawler).' },
  { zh: '团队象征"少数群体的抗争"：变种人的隐喻——偏见、恐惧与生存之战，漫威最有现实重量的一线。',
    en: 'The X-Men are the struggle of the marginalized: mutant metaphor for prejudice and survival — Marvel\'s most resonant line.' },
  { zh: '克拉科亚时代（2019-2023）让变种人建国又崩塌，MCU 正在重启X战警。',
    en: 'The Krakoa era built and broke the mutant nation; the MCU reboot looms.' },
]);

bio('team-brotherhood', [
  { zh: '变种人兄弟会是万磁王的阵营：1963 年《X战警》创刊同期成立，主张"变种人至上"。',
    en: 'The Brotherhood of Mutants, Magneto\'s faction, formed alongside the X-Men in 1963 — mutant supremacy by force.' },
  { zh: '历代成员包括万磁王、快银、绯红女巫（早期）、魔形女、剑齿虎、蟾蜍人等。',
    en: 'Members spanned Magneto, Quicksilver, early Scarlet Witch, Mystique, Sabretooth, Toad.' },
  { zh: '组织象征"X教授的镜像"：与X战警同源却选择武力——漫威最深刻的哲学对撞。',
    en: 'The Brotherhood mirrors Xavier\'s dream with force — Marvel\'s deepest philosophical duel.' },
  { zh: '兄弟会多次改组（含魔形女领导期），克拉科亚时代后势力式微。',
    en: 'It reshuffled many times; after Krakoa it faded.' },
]);

bio('team-defenders', [
  { zh: '捍卫者联盟是漫威街头英雄团队：奇异博士、绿巨人、纳摩与银影侠的"非团队"组合。',
    en: 'The Defenders, Marvel\'s street-mystic team, unite Doctor Strange, Hulk, Namor and the Silver Surfer — a "non-team."' },
  { zh: 'MCU Netflix 版则由夜魔侠、杰茜卡·琼斯、卢克·凯奇与铁拳组成（2017 剧集）。',
    en: 'The MCU\'s Defenders (2017) teamed Daredevil, Jessica Jones, Luke Cage and Iron Fist.' },
  { zh: '团队象征"自由组合"：没有章程的超级英雄——各打各的，必要时并肩。',
    en: 'The team is anti-team: heroes without a charter, together when needed.' },
  { zh: '漫画捍卫者多次重组（含地狱猫、刀锋战士版），MCU 街头线正回归。',
    en: 'Comics re-formed it often; the MCU\'s street heroes are returning.' },
]);

bio('team-illuminati-616', [
  { zh: '光照会（616）是漫画中的秘密组织：2005 年《新复仇者》中由神奇先生发起，六位智者决定宇宙大事。',
    en: 'The Illuminati (616) formed in New Avengers (2005): six minds deciding cosmic policy in secret.' },
  { zh: '成员：神奇先生、钢铁侠、奇异博士、黑蝠王、X教授与纳摩（曾）。',
    en: 'Members: Reed, Stark, Strange, Black Bolt, Xavier and (formerly) Namor.' },
  { zh: '组织象征"精英决定论"：为"大局"流放绿巨人、隐瞒真相——秘密统治的傲慢。',
    en: 'The council is elite determinism: exiling the Hulk, hiding truths — the arrogance of secret rule.' },
  { zh: '光照会的失败决策（引发浩克世界大战）成为漫画经典教训，组织多次解散重组。',
    en: 'Their missteps triggered World War Hulk — a classic lesson; the group dissolved and reformed.' },
]);

bio('team-young-avengers', [
  { zh: '青年复仇者是漫威的新生代团队：2005 年创刊，由复仇者的子女与后继者组成。',
    en: 'The Young Avengers, Marvel\'s junior team, debuted in 2005 — children and heirs of the Avengers.' },
  { zh: '成员：钢铁少年、巫术、浩克林、爱国者、幻视之女（幻景）、鹰眼之女（凯特·毕肖普）等。',
    en: 'Roster: Iron Lad, Wiccan, Hulkling, Patriot, Vision\'s daughter Viv, Kate Bishop and more.' },
  { zh: '团队象征"继承与自我"：在父辈阴影下寻找自己的英雄身份——漫威的青春宣言。',
    en: 'The team is legacy and identity: young heroes finding themselves beyond their parents — Marvel\'s youth manifesto.' },
  { zh: 'MCU 正铺设青年复仇者（凯特、卡玛拉、比利等），漫画线持续连载。',
    en: 'The MCU is seeding the Young Avengers (Kate, Kamala, Billy); comics continue.' },
]);

bio('team-sinister-six', [
  { zh: '邪恶六人组是蜘蛛侠反派的经典联盟：1964 年《神奇蜘蛛侠》年度创刊，章鱼博士集结五位宿敌。',
    en: 'The Sinister Six, Spider-Man\'s classic villain alliance, debuted in 1964: Doc Ock uniting five rogues.' },
  { zh: '经典阵容：章鱼博士、秃鹫、电光人、沙人、神秘客与猎人克莱文——历代阵容多有更替。',
    en: 'The classic six: Doc Ock, Vulture, Electro, Sandman, Mysterio, Kraven — with many lineups since.' },
  { zh: '组织象征"群狼战术"：蜘蛛侠最大的梦魇——单个反派已致命，六人齐上近乎无解。',
    en: 'The Six are the pack: each deadly alone, six together nearly unstoppable.' },
  { zh: '索尼 SSU 曾计划《邪恶六人组》电影，漫画中该组织多次重组。',
    en: 'Sony once planned a Sinister Six film; comics keep regrouping them.' },
]);

bio('team-midnight-sons', [
  { zh: '午夜之子是漫威的超自然英雄团队：1992 年组建，对抗超自然威胁的"暗夜复仇者"。',
    en: 'The Midnight Sons, Marvel\'s supernatural team, formed in 1992 against occult threats.' },
  { zh: '成员：恶灵骑士、刀锋战士、奇异博士、莫比亚斯、暗夜狼人、地狱风暴等。',
    en: 'Roster: Ghost Rider, Blade, Doctor Strange, Morbius, Werewolf by Night, Hellstorm.' },
  { zh: '组织象征"黑暗中的守护"：以更黑暗的手段对抗黑暗——超自然线的最强集结。',
    en: 'The Sons guard the dark with darker means — the occult\'s mightiest muster.' },
  { zh: '《月光骑士》剧集与《刀锋战士》重启或将午夜之子引入 MCU。',
    en: 'Moon Knight and Blade\'s MCU projects may herald the Sons.' },
]);
