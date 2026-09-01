/**
 * 人物介绍（Fandom 式详情 · 可选增强）。
 * 叙事模板（与 Fandom 人物页段落顺序一致，每人 4-6 段）：
 *   ① 身份与起源  ② 主要经历/故事线  ③ 能力与弱点  ④ 现状与结局
 * 版权策略：内容为对所采集素材（萌娘百科 CC BY-NC-SA / Fandom CC BY-SA）的事实引用与
 * 自行改写，措辞为本站原创；本站为非商业粉丝向用途。
 * id 必须为完整节点 id（ch-xxx）；缺失者详情不显示介绍区（不影响校验）。
 * 待补人物清单见文件尾部注释。
 */
import { bio } from './registry';

/* ============ 第 1 批：MCU 核心（10 人） ============ */

bio('ch-carol-danvers', [
  { zh: '卡罗尔·丹弗斯，惊奇队长，由布丽·拉尔森饰演。前美国空军战斗机飞行员，在一次克里帝国与斯克鲁人的试验爆炸中被宇宙能量融合，化身漫威宇宙最强大的「惊奇队长」。',
    en: 'Carol Danvers, Captain Marvel, played by Brie Larson. A former U.S. Air Force pilot whom a Kree-Skrull experiment fused with cosmic energy, becoming one of the most powerful beings in the Marvel universe.' },
  { zh: '早年因被星舰能量击中而失忆，被克里人「勇·罗格」改造训练为战斗机器「Vers」；切回地球、找回被封印的记忆后，她选择站到斯克鲁人（被屠戮的难民）一方，还回应了弗瑞的传呼机。',
    en: 'Amnesia after the explosion left her trained as the Kree soldier "Vers"; recovering her Earth memories, she chose the hunted Skrull refugees and answered Fury\'s pager at the end of Infinity War.' },
  { zh: '终局之战里她拆掉了一整艘灭霸的母舰，从此在宇宙间巡守（《惊奇队长2》里继续处理克里-宇宙契约的烂摊子）。她做英雄极少回头——因为知道该救谁。',
    en: 'She tore a hole in Thanos\'s flagship during Endgame and patrols the cosmos since (The Marvels), rarely looking back — because she always knew whom to save.' },
  { zh: '超能力：能量吸收与释放、光速飞行、外星体魄与知觉；她的弱点与强大同源——对「保护」的执着。论硬实力，她与「宇宙最强者」名单永远并列。',
    en: 'Powers: cosmic energy absorption and projection, light-speed flight, alien-level physiology — her strength and her flaw both come from the drive to protect. In raw power, she ranks with the cosmos\' strongest.' },
]);

bio('ch-loki', [
  { zh: '洛基·劳菲森，奥丁的养子、法布里的王子，诡计之神，由汤姆·希德勒斯顿饰演。他从「索尔的弟弟」长成故事本身，是漫威最复杂的角色弧线之一。',
    en: 'Loki Laufeyson, Odin\'s son by adoption, God of Mischief, played by Tom Hiddleston — from "Thor\'s brother" to the story itself, with one of the most complex arcs in the franchise.' },
  { zh: '他的前半生都在「活成符合奥丁期望的继承人」：背叛阿斯加德、驾着诡计骗局夺取王座，被绿巨人像布偶一样摔过、被灭霸的泰坦之手掐住脖子——直到他找到比王座更重要的东西。',
    en: 'His first life was a string of betrayals — schemes for the throne, tricks against Thor — until Thanos made him swallow his own prophecy. Then he found something more important than a throne.' },
  { zh: '《洛基》剧集是他的重生：时间管理局里发现自己的一切「都是剧本」，面对更强大的自己「他洛基」，最终在时间尽头做出选择——一个牺牲自己的责任者，恰是诡计之神最诚实的版本。',
    en: 'The Loki series re-created him: at the TVA he learned every pain was scripted, met his own variants, and at the end of time chose sacrifice — the trickster god finally honest.' },
  { zh: '能力：阿斯加德体魄、魔咒、分身与幻象诡计；弱点是把「被爱」误读为「被看见」。今日的他维持着时间线——是坐在世界树下的新「时间之神」。',
    en: 'Powers: Asgardian constitution, sorcery, illusions and trickery; his flaw read love as being seen. Today he keeps the timeline as the new god of time.' },
]);

bio('ch-thanos', [
  { zh: '灭霸，萨诺斯，泰坦星最后的永恒族之子，漫威电影宇宙的终极反派，由乔什·布洛林饰演。「一半的生命仍是多余的」，他的理想扭曲却自洽——也因此比任何爆米花反派都沉重。',
    en: 'Thanos, son of Titan, the MCU\'s ultimate villain, played by Josh Brolin. "Half of life is still an excess" — a twisted but self-consistent ideal, which made him heavier than any popcorn villain.' },
  { zh: '他先后收集空间、心灵、现实与力量宝石，在无限战争中以「以理服人」的狂怒横扫宇宙，只留下他的信念与随之而来的弹指：一半的生命在灰烬中消逝。',
    en: 'He gathered the Infinity Stones, defeated Earth\'s mightiest with reason-and-fury both, and snapped half of all life into dust — the Infinity War — leaving only his philosophy behind.' },
  { zh: '终局之际他带着更狠的动机回归：「我要摧毁宇宙，重新创造一个」。复仇者们把他战胜，雷神斩首，最终史塔克的响指连他的军队化为乌有——「不可磨灭的誓言终有终结」。',
    en: 'He returned with a crueller plan — to destroy everything and remake it. The Avengers stood, Thor took his head, and at last Stark\'s snap undid his armies and his rule.' },
  { zh: '他的力量冠绝宇宙：超人的力量、体魄与谋略；弱点却正是固执于「平衡」的逻辑——复仇者输给他两次，赢他的不是拳头而是「我们都活着」的群像。',
    en: 'His power was legion — strength, longevity, strategy — but his real weakness was the stubborn logic of "balance"; he won twice and lost at last not to fists but to the ensemble\'s promise: everyone lives.' },
]);

bio('ch-scott-lang', [
  { zh: '斯科特·朗，前电子工程师、前窃贼，第二代蚁人，由保罗·路德饰演。以「世界上最会讲段子的超级英雄」著称——用皮姆粒子让身体与元素缩放自如的平民英雄。',
    en: 'Scott Lang, former engineer and thief, the second Ant-Man, played by Paul Rudd — the franchise\'s most quotable hero, shrinking at will with Pym particles.' },
  { zh: '因想见女儿偷了蚁人战衣而卷入汉克·皮姆的计划，与霍普的母仇与亡妻一起对抗黄色马蜂；他后来被皮姆家人「带走」当了几年在量子领域的客人，出狱时世界已过去了二十年。',
    en: 'He stole the suit to see his daughter, got drafted into Hank Pym\'s plan, fought the Yellowjacket with Hope; decades later the quantum realm made him miss the blip — world aged five years, timeline far more.' },
  { zh: '量子领域能穿越时间：他在终局里成为「时间劫持」的钥匙，与复仇者们改写了无限战争；《蚁人3》里他与一家人被放逐进量子领域，与征服者康打了个照面——并见证了「康没死、故事没完」。',
    en: 'The quantum realm opens time: he was the key to Endgame\'s time heist; in Quantumania the whole family was exiled into it, meeting Kang the Conqueror — who was defeated but far from finished.' },
  { zh: '能力：缩小与放大（质量可变）、与蚂蚁伙伴沟通、普通人体格之外的聪明才智；他的缺点与魅力同源——「不完美却永远为了孩子」的普通父亲。',
    en: 'Giant-shrinking, mass shifting, ant communication — his charm is the same as his weakness: an ordinary dad, imperfect, always trying for his daughter.' },
]);

bio('ch-vision', [
  { zh: '幻视，由保罗·贝坦尼饰演。托尼·斯塔克与班纳在奥创危机中创造的「合成人」，拥有贾维斯的心智与心灵宝石的力量——一具机器的壳、一颗灵魂的心。',
    en: 'Vision, played by Paul Bettany. The synthetic being Tony Stark and Bruce Banner created during the Ultron crisis: JARVIS\'s mind, the Mind Stone\'s power — a machine\'s shell with a soul\'s heart.' },
  { zh: '在索科维亚他举起雷神之锤（证明资格），随后与旺达相爱；无限战争里他守护心灵宝石一路逃亡，最终由女友亲手了结——那一刻他让「石头」变成了「人心」。',
    en: 'He lifted Mjolnir at Sokovia, then loved Wanda; in Infinity War he fled with the Stone, and at the end watched his beloved destroy him — turning a gem into a heart in the process.' },
  { zh: '《旺达幻视》让这片温柔有了重量的结局：旺达复活他、又亲手送走他，而他离开前说「告别是最疼的词」，留给世界的只是一句慈爱的提醒。',
    en: 'WandaVision gave him a third act: revived and returned to memory, he spoke the line "what is grief, if not love persevering" — a farewell that changed the show and the audience both.' },
  { zh: '能力：心灵宝石驱动的飞行、密度操控、能量束击、超脑力；他的限制是「非人」的身份与宝石的引力——但正如他在剧中所证：爱定义存在，胜过定义本质。',
    en: 'Mind-Stone flight, density and energy control, vast intellect; his limit is being "not human" and bound to the stone — yet as the show taught, love defines one\'s being better than biology.' },
]);

bio('ch-nick-fury', [
  { zh: '尼克·弗瑞，独眼神盾局局长，由塞缪尔·杰克逊饰演。他在凡人视角里编成「复仇者联盟」这份计划：把神明、怪物与天才放进一个屋子里，让世界安全一点。',
    en: 'Nick Fury, the one-eyed Director of S.H.I.E.L.D., played by Samuel L. Jackson. He built the Avengers Initiative from a human\'s view: put gods, monsters and geniuses in one room and make the world a bit safer.' },
  { zh: '从冷战间谍到神盾局长，他对付九头蛇、复活伊万、追外星遗产；他的笑点在于「导演级指挥」：几乎是整个电影宇宙的引进人与裁缝。',
    en: 'Cold War spy to director: he fought HYDRA, resurrected monsters, hunted alien relics — the MCU\'s own casting agent and tailor, and its best straight man and strategist.' },
  { zh: '「复仇者计划」既是他的得意之作，也是他的悔恨：大事件后他看似消失，其实一直在暗处组织宇宙级联防，并亲自举着传呼机邀请惊奇队长。',
    en: 'The Initiative was his pride and guilt; he is still organizing cosmic defense from the dark, and it was his pager that called Captain Marvel to the Avengers\' rescue.' },
  { zh: '能力：顶级特工的战力，不是斗士而是棋手——他的武器是信息与信任。弱点：永远按「最坏打算」行事；但他的底线是「不给黑暗世界加一把火」。',
    en: 'No powers — a master spy, an information-and-trust player; his weakness is always planning for the worst case, his virtue is never setting that dark plan loose.' },
]);

bio('ch-gamora', [
  { zh: '卡魔拉，泽霍贝雷尔族最后的孩子，灭霸的养女之一，头号女刺客，由佐伊·索尔达娜饰演。「她是从一颗碎掉的心开始长大的。」',
    en: 'Gamora, the last daughter of Zehoberei, adopted daughter of Thanos and his finest assassin, played by Zoe Saldana — raised from a broken heart into a broken universe.' },
  { zh: '她从小被灭霸训练成没有感情的武器；星爵的银河护卫队给了她第一段信任：一起偷球、打赢开罗，从「灭霸的刀」变成「护卫队的脊梁」。',
    en: 'Trained emotionless by Thanos, she found trust with the Guardians — the ball heist, the Kyln, the Korath fight — and turned from Thanos\'s blade into the team\'s spine.' },
  { zh: '无限战争中她为救星爵而牺牲——灭霸以她为代价换灵魂宝石；终局时一个「穿越时间回来后」的卡魔拉带着未知未来离开，留下开放式的新船票。',
    en: 'Thanos traded her for the Soul Stone in Infinity War; in Endgame a timeline-remnant Gamora went off with a different future, leaving the Guardians a new chapter.' },
  { zh: '能力：半机械改造的格斗与刀术、非凡的追踪与战术——全宇宙最危险的女人，正是在每场逃亡中学会把「活下去」变成为「值得活」。',
    en: 'Cyber-enhanced combat, assassination, tracking: the galaxy\'s most dangerous woman, who in every escape has turned staying alive into being worth saving.' },
]);

bio('ch-hank-pym', [
  { zh: '汉克·皮姆，矩阵物理学家、初代蚁人与第一代黄蜂女的丈夫，由迈克尔·道格拉斯饰演。皮姆粒子缩放的发明者，也是一个儿子与父辈错误的负担者。',
    en: 'Hank Pym, quantum physicist, the original Ant-Man, husband of the first Wasp, played by Michael Douglas — inventor of Pym particles and a father carrying his own history.' },
  { zh: '他与妻子珍妮特在冷战任务中失散（父女误会多年），因发明被神盾局「不信任」而隐退；多年后他收下斯科特·朗作为徒弟，踏上解救妻子的量子冒险。',
    en: 'He lost his wife Janet on a mission long ago and grew bitter against S.H.I.E.L.D.; decades later, mentoring Scott Lang, he finally returned to the quantum realm to bring her home.' },
  { zh: '回到量子领域的「三角家庭」里，他重新学习温柔与放手：《蚁人3》中他亲手与「跨世纪的老父」康的化身打完全场——那位「时间尽头」的对手似乎正是外孙的提醒：历史不可复原。',
    en: 'Reunited in Quantumania with his own estranged memories and his daughter, he faced Kang — a lesson on how history is never really retold, and a fight that will echo through the multiverse.' },
  { zh: '能力：皮姆粒子缩放（与心智增益）、昆虫通讯、天才量子物理学；弱点：太固执地自己做一切——但正因如此，他教的徒弟都青出于蓝。',
    en: 'Pym particles, quantum science, ant control; his flaw is doing everything himself — which is exactly why his students outgrow him.' },
]);

bio('ch-odin', [
  { zh: '奥丁，阿斯加德众神之父，九界的守护者，由安东尼·霍普金斯饰演。他是开垦宇宙的战争之王，也是把儿子们「放逐到凡间」的一堂深课主讲师。',
    en: 'Odin, Allfather of Asgard, protector of the Nine Realms, played by Anthony Hopkins — a king who hewed his own realm with war, and also the teacher who exiled his sons to become better.' },
  { zh: '他率领阿斯加德战胜过冰霜巨人与黑暗精灵，也为独占宇宙的秘密——收养了对手之子洛基；当他因暮年昏睡而醒来时，九界已是儿孙的战场。',
    en: 'He warred the Frost Giants and Dark Elves, took Loki as his own to end an old war; when he returned from his Odinsleep, the realms had become his sons\' battlefield.' },
  { zh: '他最著名的谢幕是在《雷神3》的流亡里与索尔重话：那段「阿斯加德不是一座城，是人民」——跟着一句「雷神之力不在雨里」成为了全三部曲的轴线。',
    en: 'His legend retold in exile in Ragnarök — "Asgard is not a place, it\'s its people", and "the power you hold is not a hammer\'s" — became the spine of the whole trilogy.' },
  { zh: '拥有奥丁之力：宇宙级魔法、天父级体魄与千年的智识；他的软肋是权力的执念与家族的黑暗——像所有古老的神，他的「陨落」也是神话重新出生的开始。',
    en: 'Odinforce, allfather-level power and millennia of wisdom; his failings — power obsession and family darkness — made his fall the beginning of myth reborn.' },
]);

bio('ch-hela', [
  { zh: '海拉，死亡女神，奥丁的长女，由凯特·布兰切特饰演。她帮助奥丁统治九界，后被父亲夺权放逐——奥丁一死，她从地狱之门中归来，来参加她父亲的葬礼和「拿回一切」。',
    en: 'Hela, Goddess of Death, Odin\'s firstborn, played by Cate Blanchett. She conquered the realms with her father until he exiled her — returning from Hel the moment Odin died, to claim everything.' },
  { zh: '她单手捏碎雷神之锤、单手砸开阿斯加德，是雷神一系电影中的终极压迫感来源；她统治冥界万年，拥有凶戾的白骨军团。',
    en: 'She crushed Mjolnir with one hand and lay open Asgard\'s gates, the franchise\'s most imposing menace, ruling Hel with a legion of the bone-horsed dead.' },
  { zh: '诸神黄昏的火焰最终终结了她：苏尔特尔的剑落在阿斯加德——她最后一个敌人，是承诺「毁灭这座城」的末日火焰。',
    en: 'Ragnarök\'s flame ended her: Surtur\'s sword sank into the realm — her final foe was the fire she herself had summoned to destroy it.' },
  { zh: '能力：死者的权柄、宇宙级巫术、对九界的至尊威压；她的局限是奥丁的枷锁与阿斯加德本身的反噬——与爱无关，与权成谜。',
    en: 'Powers over the dead, cosmic sorcery, dominion over the realm; her limit is Odin\'s binding and Asgard\'s own curse — a story of power, not of love.' },
]);

bio('ch-bruce-banner', [
  { zh: '布鲁斯·班纳是 1962 年《不可思议的绿巨人》中诞生的漫威经典角色，电影宇宙里由马克·鲁法洛（早期为爱德华·诺顿）饰演：一位天才生物化学家，因实验室伽马炸弹事故被辐射改造，愤怒或心跳加速时就会化作绿色巨兽「浩克」。',
    en: 'Bruce Banner, a Marvel classic born in The Incredible Hulk (1962), is played in the MCU by Mark Ruffalo (Edward Norton in the first attempt): a genius biochemist irradiated in a gamma-bomb accident, turning into the green behemoth "Hulk" whenever his heart rate spikes.' },
  { zh: '多年逃亡后，班纳在复仇者集结中学会与浩克共处：纽约大战时他一度置身核弹危机，奥创纪元中败于索科维亚，失望之下搭乘昆式战机消失太空，直到被萨卡星血战的索尔带回。',
    en: 'After years on the run, Banner learned to coexist with Hulk: he nearly detonated over New York during the battle, then lost with Ultron at Sokovia and vanished into space, only to be brought back by Thor from the gladiator pits of Sakaar.' },
  { zh: '在萨卡星的伽马设备中，他让身体与巨兽达成和解，成为「聪明浩克」：两米有余的体格兼具头脑与力量，终局之战中作为六枚无限宝石的承载者，打响了救回半数生灵的响指。',
    en: 'On Sakaar, gamma tech reconciled man and monster into "Smart Hulk" — massive yet brilliant, and in the Endgame battle he wore the Infinity Gauntlet and snapped away the half of life that was lost.' },
  { zh: '力量随愤怒无限增长，再生能力近乎不死之身是浩克的核心能力；他最大的弱点反而是自身失控带来的破坏，以及变异后「班纳」与「浩克」两重人格的长期拉锯。',
    en: 'The Hulk\'s strength grows without limit with rage, and his regeneration borders on immortality; his true weakness is the destruction of his own losing control, and the long tug-of-war between the "Banner" and "Hulk" personas.' },
  { zh: '终局之后，他已学会稳定转化，过着半退休生活，出现在《女浩克》中指导表妹珍妮弗·沃尔特斯驾驭伽马之力——并以「班纳懂得最少、女浩克懂得最多」的姿态自嘲收场。',
    en: 'After Endgame he stabilised his transformations and lives in semi-retirement, coaching his cousin Jennifer Walters in She-Hulk — cheerfully concluding that his family member turned out to be smarter at being a Hulk than he is.' },
]);

bio('ch-tony-stark', [
  { zh: '托尼·斯塔克，斯塔克工业的继承人、天才发明家与亿万富翁，2008 年《钢铁侠》开启整个电影宇宙的起点，由小罗伯特·唐尼饰演。他的形象标志是金色与红色相间的动力装甲。',
    en: 'Tony Stark, heir to Stark Industries, genius inventor and billionaire, launched the entire MCU in Iron Man (2008), played by Robert Downey Jr. His signature is the gold-and-red power armor.' },
  { zh: '在阿富汗被绑架后，他胸中的弹片与脚下的第一代战衣重塑了人生：从军火商转身为自诩「保护世界的钢铁侠」。此后他制造了数十代战衣，创立奥创（酿成大祸），内战又让他与老友分道扬镳。',
    en: 'Kidnapped in Afghanistan, shrapnel against his heart and the Mark I at his feet remade him: from arms dealer to self-declared "Iron Man protecting the world". Dozens of suits followed, then Ultron — his creation gone rogue — and the Civil War split the Avengers.' },
  { zh: '与灭霸一役是他人生的顶点与终点：泰坦星上拼死一搏，终局之战中他亲手戴上无限手套打了响指，以一句「我是钢铁侠」为宇宙赢得和平，也付出生命。',
    en: 'Thanos defined his endgame: a desperate fight on Titan, and in Endgame he took the gauntlet himself, declared "I am Iron Man", and paid with his life for the universe.' },
  { zh: '能力层面，他以凡人躯壳成为复仇者核心：天才思维、战甲科技、资金与领导力。他没有超能力，靠的是每一次破产式创新的硬核勇气——这正是他区别于所有英雄之处。',
    en: 'As a mortal he became the Avengers\' centre: genius intellect, armor tech, money and leadership. No superpowers — just bankrupting-innovation-level courage, which sets him apart from every other hero.' },
  { zh: '《复仇者联盟4》之后电影宇宙仍在讲述他的遗产：佩珀与摩根、彼得·帕克背负他的精神，以及无数的技术遗产与平行世界的变体。',
    en: 'After Endgame the MCU still tells his legacy: Pepper and Morgan, Peter Parker carrying his spirit, and endless variants across the multiverse.' },
]);

bio('ch-steve-rogers', [
  { zh: '史蒂夫·罗杰斯，布鲁克林的小个子士兵，因超级士兵血清而成为「美国队长」，由克里斯·埃文斯饰演。史上最强的超级士兵，也是「正义不因时代而定」的忠诚象征。',
    en: 'Steve Rogers, a scrawny Brooklyn soldier transformed by the Super-Soldier Serum into "Captain America", played by Chris Evans. The strongest super-soldier and the emblem of standing for what is right, not what is popular.' },
  { zh: '二战期间他带领嚎啕突击队对抗九头蛇，1945 年为阻止战锤坠毁而坠入冰海；2011 年被神盾局解冻，此后经历了纽约大战、奥创索科维亚、与托尼决裂的内战。',
    en: 'In WWII he led the Howling Commandos against HYDRA and went down with a sabotaged plane in 1945, frozen in the Arctic until 2011. He then weathered the Battle of New York, Sokovia, and the Civil War that tore him from Tony Stark.' },
  { zh: '灭霸之战是他最重要的篇章：以凡人之躯举起了雷神之锤（蕴含巨大天意），并在终局选择留在过去，与佩吉·卡特度过了一生——「谢谢你，托尼」是他对时代的告别。',
    en: 'Thanos became his greatest chapter: lifting Thor\'s hammer in the final battle, and in Endgame choosing to stay in the past, finally living the dance with Peggy Carter he owed her.' },
  { zh: '他没有破坏性超能力，但拥有惊人的混战格斗、统帅力与终极信念；中年时失去血清，却依然是一位超越常人的老战士，如今把盾牌——连同信念——交给了山姆·威尔逊。',
    en: 'No superpowers but superb brawling, command and conviction; aged and serum-less, he remains an old warrior beyond most men, and has passed the shield — and the faith — to Sam Wilson.' },
]);

bio('ch-thor', [
  { zh: '托尔·奥丁森，阿斯加德王储、雷神之锤与风暴战斧的主人，由克里斯·海姆斯沃斯饰演。以凡人的骄傲收场，却在漫长岁月里长成阿斯加德真正的王。',
    en: 'Thor Odinson, prince of Asgard, master of Mjolnir and Stormbreaker, played by Chris Hemsworth. He began as arrogance and grew into the true king of Asgard.' },
  { zh: '被父王放逐地球后他从凡人手中学会谦卑，此后一次次拯救九界与地球：与洛基相爱相杀、对抗黑暗精灵与马勒基斯、在诸神黄昏中带着幸存的阿斯加德人踏上流亡之路，也是这场流亡的终点——灭霸的屠杀。',
    en: 'Exiled to Earth, he learned humility, then saved the Nine Realms time and again — Loki\'s treachery, the Dark Elves, and Ragnarök, after which he led the surviving Asgardians into exile, straight into Thanos\'s massacre.' },
  { zh: '五年颓废后的终局之战里，他带着过去的沉重与风暴战斧归来，最后亲手封神之战，把王位留给瓦尔基里，随银护的飞船离去——「那是你们人类说的：我还有什么好失去」是他新的起点。',
    en: 'Broken after Infinity War, he returned with Stormbreaker to Endgame, crowned Valkyrie as ruler and sailed off with the Guardians — his new start after believing he had nothing left to lose.' },
  { zh: '雷神之力：操控雷霆闪电、飞行、千年的阿斯加德体魄与战神实力；弱点是曾亲手放走的重担、愤怒与抑郁——最新的成长叙事就是向他一生未愈的伤疤「正面出拳」：仍值得被爱。',
    en: 'Power of lightning, flight, an Asgardian physique and millennia of war-craft; his wounds — guilt, rage, apathy — are the real foe, and the latest story is a comedy about healing: he is worthy still.' },
]);

bio('ch-natasha-romanoff', [
  { zh: '娜塔莎·罗曼诺夫，代号黑寡妇，由斯嘉丽·约翰逊饰演。前苏联红房培养的顶级特工，神盾局的完美剪刀手，复仇者创始人之一，一个没有「家人」却把复仇者当家人的女人。',
    en: 'Natasha Romanoff, codename Black Widow, played by Scarlett Johansson. A Red-Room-raised master spy, S.H.I.E.L.D.\'s perfect instrument, founding Avenger — a woman who claimed no family yet treated the team as hers.' },
  { zh: '她在布达佩斯的黑暗过去与鹰眼的救赎交织成她的人生哲学：替人民挡枪。纽约大战、索科维亚、内战、索科维亚的她都是团队的粘合剂；直到她被灭霸的战争终结。',
    en: 'Her Budapest past and Clint\'s redemption taught her one rule: it\'s the job to be the shield. New York, Sokovia, Civil War — the team\'s glue; until Thanos\'s war demanded her price.' },
  { zh: '终局之战中她为灵魂宝石纵身跃下的那一跃，是整部电影中最重要的祭献：「这是你的使命，也是你的偿还。」一位秘密英雄的谢幕。',
    en: 'In Endgame her dive for the Soul Stone was the film\'s true sacrifice — "it\'s what I owe." The quiet hero\'s exit.' },
  { zh: '她的专长是格斗、伪装、谍报与军火；没有超能力，却有超越常人的意志。叶莲娜·贝洛娃继承了她的遗产；她在《黑寡妇》电影里的真实家庭也终于等到她的最后之战。',
    en: 'Expertise: combat, disguise, intelligence, arms. No powers, but will beyond measure. Yelena now carries her legacy — and the family she finally found in the Black Widow film.' },
]);

bio('ch-clint-barton', [
  { zh: '克林特·巴顿，代号鹰眼，由杰瑞米·雷纳饰演。神盾局的神射手，复联创始成员，纽约大战的钢铁雨下的「凡人英雄」，一个从不以超级英雄自居的顶梁柱。',
    en: 'Clint Barton, codename Hawkeye, played by Jeremy Renner. S.H.I.E.L.D.\'s marksman, founding Avenger, the "ordinary man in a god war" — a pillar who never called himself a hero.' },
  { zh: '布达佩斯任务让他同时救下与欠下娜塔莎，两人成为半生搭档；索科维亚的失利是他的一次沉沦：化名浪人横扫亚洲罪犯，直到娜塔莎把他带回。',
    en: 'Budapest bound him to Natasha for life; losing her at Sakovia broke him — as the Winter-Soldier-like Ronin he hunted crime syndicates, until Natasha brought him back.' },
  { zh: '终局之战后他卸甲归田，却因《鹰眼》故事被拖回街头：一边是昔日黑寡妇杀手凯特·毕肖普的莽撞徒弟，一边是杰克的家庭秘密——他终于把「鹰眼」传承下去。',
    en: 'Retired after Endgame, he was dragged back in Hawkeye: mentoring Kate Bishop, untangling a family crime boss, and finally passing on the hood and the quiver.' },
  { zh: '他的核心能力是百发百中的射术与特种部队出身的一身本领；强项在于「普通士兵」的真——没有超能力的复仇者，反而构成团队对普通人的承诺。',
    en: 'Archery beyond compare, special-forces training, and the only Avenger with no powers — which makes him the promise the team keeps for ordinary people.' },
]);

bio('ch-peter-parker-mcu', [
  { zh: '彼得·帕克，由汤姆·赫兰德饰演的蜘蛛侠。被辐射蜘蛛咬过、被托尼·斯塔克选中、被全世界遗忘，却依然选择「能力越大，责任越大」的少年英雄。',
    en: 'Peter Parker, the Spider-Man played by Tom Holland. Bitten by a radioactive spider, mentored by Tony Stark, forgotten by the world — and still choosing "with great power comes great responsibility".' },
  { zh: '他在《内战》中第一次展露拳脚，随后在「快乐」的高中岁月里对抗秃鹫、神秘客；身份暴露与神秘客的造谣让他跌入谷底，最终因逃避追击被全世界遗忘。',
    en: 'He debuted against Captain America in Civil War, then fought the Vulture and Mysterio through high school; his identity was exposed, his name slandered, and in the end the world forgot him.' },
  { zh: '《蜘蛛侠：无路可归》是少年英雄的成人礼：他拒绝了奇异博士的强行为他忘却记忆，选择「让所有人记住、我独自承担」；失去梅姨也失去一切，他在破败的公寓里重新穿上战衣。',
    en: 'No Way Home was his coming-of-age: refused Strange\'s mind-wipe, chose to carry the world\'s memory alone — losing Aunt May and everything, he rebuilt from a run-down apartment.' },
  { zh: '蜘蛛侠的招牌能力：蛛丝摆荡、蜘蛛感应（第六感）、超人的敏捷与力量；但他的真实力量是「善良」——在所有人的巅峰之战中，他是救下每个对手、也给每个敌人救赎机会的那个人。',
    en: 'Web-swinging, spider-sense, superhuman agility and strength — but his real power is the kindness that saved opponents and offered redemption in every battle.' },
]);

bio('ch-stephen-strange', [
  { zh: '斯蒂芬·斯特兰奇，顶尖但也自傲的神经外科医生，因车祸失去双手、转投卡玛泰姬修习秘法，成为至尊法师（奇异博士），由本尼迪克特·康伯巴奇饰演。',
    en: 'Stephen Strange, a brilliant but arrogant neurosurgeon whose crippled hands pushed him to Kamar-Taj and the mystic arts, the Sorcerer Supreme eventually, played by Benedict Cumberbatch.' },
  { zh: '他学会使用悬戒与镜像空间，打了多玛姆的「无限套娃」谈判；随后在无限战争中开启时空传送，并在终局把自己变成唯一看过 14000605 种结局的人。',
    en: 'He mastered sling rings and mirror dimensions, out-negotiated Dormammu with an infinite time loop; in Infinity War he opened portals, and in Endgame he was the one who saw 14,000,605 futures.' },
  { zh: '在《疯狂多元宇宙》里，他拿「我选择给你自由」的决断顶上了光明会的黑暗：多元宇宙的代价、现实的破坏冲撞，让他从「好胜的医生」长成「背负真相的法师」。',
    en: 'In the Multiverse of Madness he learned the price running the multiverse in one person demands, and grew from a competitive doctor into the wizard who carries impossible truths.' },
  { zh: '他拥有至尊法师的秘法：魔咒、星体投射、时间宝石的操控（至终局归还）、悬戒传送；弱点是对「胜利」的执念毁了他一次——也正因如此，每次抉择都更令人信服。',
    en: 'Mystic arts, astral projection, the Time Stone (until he returned it), and portal magic; his flaw — the need to win at any cost — once destroyed him, which makes every next choice honest.' },
]);

bio('ch-wanda-maximoff', [
  { zh: '旺达·马克西莫夫，绯红女巫，由伊丽莎白·奥尔森饰演。九头蛇的试验品、复仇者、杀心难平的遗孀，直至《旺达幻视》后以「混沌魔法」化身黑暗女神。',
    en: 'Wanda Maximoff, the Scarlet Witch, played by Elizabeth Olsen. A HYDRA experiment, an Avenger, a grieving widow, and after WandaVision the wielder of chaos magic.' },
  { zh: '她与双胞胎哥哥皮特罗在索科维亚的废墟中被九头蛇改造并获得意念操控能力；复仇者内战中与索尔并肩，但亲眼看着他被奥创的机器城抹去，此后她的力量随痛苦一路沸腾。',
    en: 'Twins Pietro and Wanda were mutated by HYDRA in shattered Sokovia; she gained telekinesis and probability control. After losing Pietro to Ultron\'s city, her grief burned a straight line through her story.' },
  { zh: '《旺达幻视》中她以魔咒强留幻视与孩子，把西景镇拉入情景喜剧牢笼；在告别一切之后，《奇异博士2》里她因「想再见孩子」的黑化波及整个多元宇宙，最终亲手砸碎黑暗神书。',
    en: 'In WandaVision she trapped Westview in a sitcom to hold Vision and her children alive; in Multiverse of Madness that longing turned her into a multiverse threat — until she destroyed the Darkhold herself.' },
  { zh: '她的核心力量是混沌魔法：从塑能、念力到改写现实（改写超概率）；弱点在于被情绪驱动——正是她「至亲都离开」的命运，让她成为漫威里层次最深的悲剧人物。',
    en: 'Chaos magic — energy manipulation, telekinesis, reality rewriting — but each surge is grief-driven: the tragedy of losing everyone is what made her the deepest character in the franchise.' },
]);

bio('ch-black-panther-tchalla', [
  { zh: '特查拉，瓦坎达国王、黑豹，由已被历史记住的查德维克·博斯曼饰演。《黑豹》是第一部由黑人导演执导、全非裔主创的漫威电影，这个角色是现代电影的符号性遗产。',
    en: 'T\'Challa, king of Wakanda, the Black Panther, played by the late Chadwick Boseman. Black Panther was the first Marvel film with a Black director and predominantly African-American cast — an enduring cultural landmark.' },
  { zh: '「继承者是为不负先辈」，他继位后以伪装身份在联合国扬名，与弟弟身处的旧国冲突决战，又与复仇者一起打了内战、终局。他在《黑豹2》的暗处离世——由妹妹苏睿继承。',
    en: 'Ascending "as the mantle should be passed", he fought for his country\'s secret, clashed with his estranged brother Killmonger, and stood with the Avengers in Civil War and Endgame; his passing in Wakanda Forever passed the crown to Shuri.' },
  { zh: '黑豹之力来自心形草：虎的力量、敏捷与感官增幅；科技上，瓦坎达的振金文明给了他半全世界的尖端装备——而他的「和平答案」是「世界应该分享进步」。',
    en: 'The Panther\'s power comes from the Heart-Shaped Herb: strength, agility, senses — and Wakandan vibranium tech that beat the world\'s; his answer to the world was sharing, not isolation.' },
  { zh: '他去世后作品依然延续：苏睿接任黑豹与君王，瓦坎达在新领袖照料的旧盟友、旧敌与多元宇宙的新篇章中继续前行——传奇不灭。',
    en: 'The story continues: Shuri now wears the mantle, and Wakanda steps from grief toward new worlds, new alliances and new kings — the legend endures.' },
]);

/* ============ 第 2 批：漫画与多宇宙（10 人） ============ */

bio('ch-miles-morales', [
  { zh: '迈尔斯·莫拉莱斯，布鲁克林市学生，第二任蜘蛛侠——第一位非裔拉丁血统的蜘蛛侠。他在漫威漫画中于 2011 年登场（《终极蜘蛛侠》），电影《蜘蛛侠：平行宇宙》让他成为全球粉丝心中的传奇。',
    en: 'Miles Morales, a Brooklyn student turned Spider-Man — the first Afro-Latino to swing through the webs. Debuting in 2011 in Ultimate Spider-Man, he became a global icon through the animated film Into the Spider-Verse.' },
  { zh: '在 2018 年的大银幕上，他被另一只蜘蛛侠（暗影版）卷入平行宇宙的碰撞，与全"蜘蛛家族"一起拯救了多元宇宙；2023 年的《纵横宇宙》里，他独闯平行宇宙，面对「拯救银河或救家人」的难题。',
    en: 'In 2018\'s Into the Spider-Verse he teamed with every Spider-Person to save the multiverse; in 2023\'s Across the Spider-Verse he travelled dimensions alone, facing a choice between saving the universe — or his family.' },
  { zh: '他的经历不只是「另一个蜘蛛侠」：爵士乐与涂鸦的布鲁克林气质、隐瞒身份与父亲（警察）的日常，是他作为少年英雄最柔软的底层叙事。',
    en: 'His story adds jazz and graffiti, a cop father to protect from the truth — the most tender layer of the young hero\'s tale.' },
  { zh: '能力：与彼得·帕克相似，还有两样独门本领：毒刺（放电）与隐身；他的动力不是来自被辐射的蜘蛛，而是来自「你在想做对的事吗？」那一问。',
    en: 'Like Peter\'s spider powers plus two extras: venom blasts and invisibility. And the real power isn\'t the spider — it\'s answering "what is the right thing?"' },
]);

bio('ch-matt-murdock', [
  { zh: '马特·默多克，地狱厨房盲眼律师，化名夜魔侠，由查理·考克斯饰演（Netflix 剧集）。「感官都提升、只有眼睛看不见」——他是捍卫者联盟的精神核心。',
    en: 'Matt Murdock, the blind lawyer of Hell\'s Kitchen, as the vigilante Daredevil, played by Charlie Cox in the Netflix series — "one sense missing, all others sharpened", the moral core of The Defenders.' },
  { zh: '从小被放射性物质弄瞎，并从父亲(拳击手)身上得到正义教育；神父的教诲、母亲的离去与「惩罚者」的极端主义，让他一次次在法庭与屋顶之间选择「不杀」的道路。',
    en: 'Blinded in a childhood accident, he learned justice from his boxer father; the priests, his mother\'s exile and the Punisher\'s extremism forced him to choose the "no killing" path between courtrooms and rooftops.' },
  { zh: '纽约街头成为他的战场：金并、叶莲娜与女律师页的刀锋——以及最终在《夜魔侠：重生》中的自我重生，他做了「凡人侠」的最诚实的版本：一位总是迟到的守护者。',
    en: 'Fisk, Yelena, lawyers and blades — in Daredevil: Born Again he returns as the honest vigilante: always late, always there for the kitchen.' },
  { zh: '能力：音波雷达、顶尖格斗与拳击，加上过人的痛觉忍耐（比人高数级）；弱点是他盲目的执念——也正因如此，他所守护的街区从不缺少「人味」。',
    en: 'Sonic radar, elite boxing and street fighting, extreme pain tolerance; his flaw is also his faith: the unwavering need to protect, which keeps the kitchen alive.' },
]);

bio('ch-wolverine', [
  { zh: '金刚狼，本名詹姆斯·豪利特（罗根），由休·杰克曼扮演（17 年 9 部电影）。这个角色定义了什么叫「艾德曼金属骨架＋变种再生因子」的雄风。',
    en: 'Wolverine, born James Howlett aka Logan, played by Hugh Jackman across nine films for seventeen years. He defined all-black and adamantium-claw cool through his solo films and the X-Men saga.' },
  { zh: '他出生于加拿大一个富家庄园，变形过程中被发现是被兄弟和父亲同时抛弃的「暗生子」，从此遁入加拿大军队，参加 X 武器改造计划——那正是把金刚狼之爪永铸的源头。',
    en: 'Born a wealthy Canadian heir, he fled war, family and betrayal, then joined the Weapon X program — the experiments that bonded adamantium to his skeleton and gave him the claws.' },
  { zh: '《罗根》是他的与观众道别：褪去英雄光环、衰老、受疾病缠绕；他最后一段路护送一群变种孩子，跨过边境——「不要变成你以为该成为的样子」。',
    en: 'Logan (2017) was his farewell: aging, poisoned by adamantium, fading — yet dragging a caravan of mutant children across a border, teaching them "don\'t become what you think you should be".' },
  { zh: '能力：艾德曼合金利爪、自愈因子、野性感官与百年记忆；弱点：创伤与愤怒的成瘾（变形者之痛），以及「孤独」这个古老的诅咒。',
    en: 'Claws, healing, animal senses and a century of memory; his wounds are rage and the old curse of solitude.' },
]);

bio('ch-charles-xavier', [
  { zh: '查尔斯·泽维尔，X教授，由帕特里克·斯图尔特（老版）与詹姆斯·麦卡沃伊（年轻版）饰演。变种人的希望之父，轮椅上的斯坦福——泽维尔天赋学院。',
    en: 'Charles Xavier, Professor X, played by Patrick Stewart and James McAvoy across two eras — the father of mutant hope, and the mind behind Xavier\'s School for Gifted Youngsters.' },
  { zh: '他的毕生理想是把变种人与人类共存写进法律：他与挚友埃里克·兰谢尔（万磁王）一生反目又相爱，从「蓝旗先崛起」到「人类先毁灭」是两条路的极致。',
    en: 'His lifelong dream is coexistence: his friendship with Erik Lehnsherr (Magneto) became the franchise\'s engine — one path toward human-mutant peace, the other toward mutant superiority.' },
  { zh: '《逆转未来》里他完成「不可能」：与万磁王一同改写时间线救下变种人；《金刚狼3》里他因脑疾杀掉同伴、失智游荡，死在罗根的车里——“一个温暖的结尾”。',
    en: 'In Days of Future Past he rewrote the timeline with Erik to save mutantkind; in Logan, seizing and broken, he died in a hospital car — a warm ending to a cold century.' },
  { zh: '能力：心灵感应、精神操控与最强的灵能；弱点正是把世界看得太懂、把自己放得太远——他总说「独处分心」，却比谁都渴望一个「家」。',
    en: 'Telepathy and psychic mastery; his flaw is thinking too clearly about the world and too little about himself — he always keeps the world at mind\'s edge, yet craves a home.' },
]);

bio('ch-groot', [
  { zh: '格鲁特，树人（长得像树，英语说的也是原版那句「I am Groot」），由范·迪塞尔配音。星系最高智商的双排生物——银河护卫队里最温柔的心。',
    en: 'Groot, the adorable tree-creature voiced by Vin Diesel — the galaxy\'s most anthropomorphic sapling, and its gentlest heart, whose only line is "I am Groot".' },
  { zh: '他在第一部《银护》中以血肉牺牲保护团队：为救伙伴化身盆栽；第二部的「小格鲁特」调皮登场，第三部里他已是高个少年，依然把兄弟们护在树荫下。',
    en: 'In Guardians Vol. 1 he planked himself into a shield, ending as a potted sprout; Vol. 2 introduced Baby Groot, Vol. 3 a taller teen who still shields his brothers.' },
  { zh: '他的身世在《银护3》里补齐：至高进化者的实验品，一个接一个的「人造树生命」——格鲁特却选择「成为有名字的」那一支：护卫队。',
    en: 'Vol. 3 revealed his origin: a High Evolutionary experiment among countless lab-grown trees — Groot chose to be the one with a name: a Guardian.' },
  { zh: '能力：可控生长的树枝与再生、超人级力量；弱点（也是萌点）：词库只有「I am Groot」——但正如星爵所说，他永远在用不同的语气和语调向你讲述自己。',
    en: 'Tree-breathing strength and regeneration; his vocabulary is only "I am Groot" — which, as Quill says, always says something new in tone, matter and love.' },
]);

bio('ch-rocket', [
  { zh: '火箭浣熊，来自半人马座四号星的一只基因改造浣熊，由布拉德利·库珀配音。银河帮的武器专家、小偷、工程师：一个「迷你身躯藏着叛变发动机」的角色。',
    en: 'Rocket, a genetically-engineered raccoon from Halfworld, voiced by Bradley Cooper — the team\'s engineer, thief and gunner: a small body with a rebel engine inside.' },
  { zh: '他原是至高进化者的实验品，被「第一次创造」的失败品；第三部给他的眼睛那场人生课最多：一场被切开的童年，一场无休止的自证——而他说「这是我第一次觉得自己是英雄」。',
    en: 'An experiment of the High Evolutionary\'s first "failed species", his third film gave him the arc that finally said "I\'m fine" — and made him the Guardians\' captain.' },
  { zh: '能力：天才级武器与工程、对银河秘密的嗅觉；他的「弱点」是碎心童年带来的自毁，也是最后他选择「做爸爸的爸爸」的那一步——现已是护卫队的新一代队长。',
    en: 'Genius-level munitions, engineering and smuggling; his flaw is his broken origin — and his ending: he chose to become the dad the boys deserve, now co-captain of the Guardians.' },
]);

bio('ch-nebula', [
  { zh: '星云，灭霸的养女之一、卡魔拉的妹妹，由凯伦·吉兰饰演。一个因「输掉比赛就被拆掉一块」而半机械化的悲惨女孩，一场没有皮肤的手术铸成的战士。',
    en: 'Nebula, Thanos\'s other adopted daughter, Karen Gillan\'s steel-and-scar "sister to Gamora" — rebuilt each time she lost a childhood competition, a warrior forged by surgery without anaesthesia.' },
  { zh: '她前半生「赢了姐姐才有存在感」：《银护》后她完成救赎——与卡魔拉修复、背叛灭霸、《终局》时亲手拦截了旧自己的救援并给复仇者们带来时间线，最后与旧星云一同离开。',
    en: 'Her first life was "beating Gamora to exist"; hers became redemption: reconciling with her sister, defying their father, and in Endgame even talking down her own past self to save the team.' },
  { zh: '能力：神经接口机械臂的精准格斗与黑客、战术思维；她的伤口是「被比较」的童年；而她证明：复仇不是终点，原谅才能自由。',
    en: 'Cybernetic precision, hacking, strategy; her scar is a childhood of comparison. And she proved that vengeance is not the end — forgiveness is the freedom.' },
]);

bio('ch-venom-symbiote', [
  { zh: '毒液，共生体——来自远离地球的外星生命体「Klyntar 星球的格伦塔（Symbiote）」，与宿主共生、又因饥饿失控。哥伦比亚影业以「毒液」开启 SSU宇宙，由汤姆·哈迪扮演艾迪·布洛克。',
    en: 'Venom, an alien symbiote from the planet Klyntar, bonded with journalist Eddie Brock — played by Tom Hardy in the SSU films that turned the creature into a lovesick anti-hero.' },
  { zh: '地球任务起初只是「饥荒横扫」，中毒液遇到失败者艾迪：两只「病牙」彼此舔舐，渐渐变成一对「不合时宜」的组合——托尼·斯塔克的世界里最不乖的一位。',
    en: 'A conquest mission turned obsession when the symbiote met freelance loser Eddie Brock: two broken sides healing into one improbable, foul-mouthed team.' },
  { zh: '从《毒液》到《毒液3》他经历了与卡耐基（屠杀）的斗兽、黑暗世界与病毒岛的冒险；在《蜘蛛侠：秃鹫后的宇宙》尾声他开玩笑说「我要开始传讯了」——为未来的「蜘蛛侠」故事铺路。',
    en: 'Across his films he battled Carnage, went to the deep, and in a post-credits scene teased meeting Spider-Man — in the right universe, the right way.' },
  { zh: '能力：无限变形的黑色液态躯体、同化与重击；他的「弱点」其实是那把双刃剑：太饿、太吵、太爱宿主——但正因如此，他成了自嘲式人设里的顶级浪漫。',
    en: 'A liquid black body that transforms into whips, jaws and armor; his weakness is the same thing that makes him loveable — he is loud, hungry, and too attached to his host.' },
]);

bio('ch-moon-knight-marc', [
  { zh: '月光骑士（马克·斯佩克特），由奥斯卡·伊萨克饰演。受过雇佣兵、间谍与月神使者三重身份的现代骑士——一个白天黑夜交替的「英雄-人格」集合体。',
    en: 'Moon Knight (Marc Spector), played by Oscar Isaac. Mercenary, spy and avatar of the moon god Khonshu — a modern paladin whose daylight and darkness share one body.' },
  { zh: '片中他分裂出「马克·斯佩克特」（雇佣兵）、「史蒂文·格兰特」（博物馆店员）与「杰克·洛克利」（租车司机）三个面孔，在英国猎杀女神（亚玛塔）与月神委托之间周旋。',
    en: 'The show split him into Marc Spector, Steven Grant and Jake Lockley, part-time bounty hunter — sailing between London museums and otherworldly gods\' missions.' },
  { zh: '精神分裂的表象之下，是他作为犹太人的家庭创伤：一次次的「自己救自己」——直到他承认两个人格都真实：我是 Marc，也是 Steven——这才是他变身「月神圣战士」的钥匙。',
    en: 'Beneath the masks lies his trauma: his family, his faith, and the boy who had to save himself — until he accepted both selves as real, which became the key that made the avatar worthy.' },
  { zh: '能力：白袍月神的全月力量——夜晚恢复、战力暴涨、与死者的信使身份；弱点：三位人格的自我冲突。超英雄史上最诚实的一次「两个人」叙事。',
    en: 'Khonshu\'s moon-granted powers: night recovery, force amplification, a connection to the dead. His flaw is his own multiplicity — the most honest two-in-one in superhero storytelling.' },
]);

bio('ch-blade', [
  { zh: '刀锋战士（布莱德），半人半吸血鬼的吸血鬼猎手，由韦斯利·斯奈普斯（三部曲电影）演绎。以刀、银与太阳之血打击黑暗——「我从不是为了吸血鬼而生」。',
    en: 'Blade, the Daywalker — half-human, half-vampire vampire hunter, played by Wesley Snipes in the classic trilogy. Knives, silver and sunlight: "a new kind of blade."' },
  { zh: '1998 年大银幕开门红：现代动作片史上第一部吸血鬼题材超级英雄片；2010 年代他随《刀锋战士》系列成为漫威「午夜之子」的招牌——并在新版中由马赫沙拉·阿里出演。',
    en: 'His 1998 film was the first hit vampire-superhero movie; he anchored Marvel\'s "Midnight Sons" later, and a new live-action reboot with Mahershala Ali is in the works.' },
  { zh: '能力：吸血鬼的体能（白天免疫阳光）、银器武器专精与黑暗世界的将军式领导；他的宿命是母亲的诅咒——一个以黑暗对抗黑暗，最终把「黑暗」变成「规则」的人。',
    en: 'Vampire physiology minus their sunlight vulnerability, mastery of silver weapons and the dark; his curse is his mother\'s turning — he fights dark with dark until his laws rule.' },
]);

/* ============ 待补人物清单（下一批，共 219 人中的高价值者）： ============
 * ch-cy-clops? 无此 id。首批名单外的后续批次建议：
 *  ch-kang / ch-drax / ch-mantis / ch-yondu / ch-okoye / ch-iron-man-616 /
 *  ch-peter-parker-616 / ch-reed-richards / ch-thaddeus-ross / ch-storm /
 *  ch-emma-frost / ch-gambit / ch-punisher / ch-carnage / ch-ultron /
 *  ch-quicksilver-fox / ch-wong / ch-sanctuary…
 * （规则：每条 bio 4-6 段，两段为事实；补完后删去本注释）
 */
