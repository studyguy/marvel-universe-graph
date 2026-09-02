/** 人物介绍 · 地点（location）批次 P3。事实源：Marvel Database 地点页 + 漫威正典。 */
import { bio } from './registry';

/* ============ P3 地点：批 1（17 个地球/城市） ============ */

bio('loc-new-york', [
  { zh: '纽约市是漫威宇宙的核心舞台：复仇者总部、至圣所、斯塔克大厦与无数超级英雄的家乡，2012 年外星入侵之战的现场。',
    en: 'New York City is Marvel\'s central stage: home to the Avengers, the Sanctum and Stark Tower, and the site of the 2012 alien invasion.' },
  { zh: '曼哈顿中城的斯塔克大厦（后为复仇者大厦）与格林威治村的至圣所是其标志性地标。',
    en: 'Stark Tower (later Avengers Tower) in Midtown and the Greenwich Village Sanctum are its icons.' },
  { zh: '城市象征"英雄的日常"：蜘蛛侠的皇后区、夜魔侠的地狱厨房、金并的地下帝国——超级英雄密度最高的城市。',
    en: 'The city is heroes\' everyday: Spider-Man\'s Queens, Daredevil\'s Hell\'s Kitchen, Kingpin\'s empire.' },
  { zh: '纽约之战（复仇者联盟1）确立其为漫威电影宇宙的守护中心，此后多次成为多元宇宙危机的现场。',
    en: 'The Battle of New York made it the MCU\'s defended heart, scene of many multiversal crises since.' },
  { zh: '纽约是 MCU 的心脏：斯塔克大厦、至圣所与无数英雄的地面战场都坐落于此。', en: 'New York is the MCU\'s heart — Stark Tower, the Sanctum, and countless street battles.' },
  { zh: '纽约之战让这座城成为外星威胁的前线，也让‘守护家园’成为此后所有灾难叙事的坐标。', en: 'The 2012 battle makes the city the invasion frontline — \'protect home\' the saga\'s compass.' },
]);

bio('loc-brooklyn', [
  { zh: '布鲁克林是美国队长的故乡：史蒂夫·罗杰斯成长于大萧条时期的布鲁克林街头。',
    en: 'Brooklyn is Captain America\'s home: Steve Rogers grew up on its Depression-era streets.' },
  { zh: '《美国队长1》中瘦弱的史蒂夫在此屡次报名参军被拒，也在小巷中守护弱者。',
    en: 'In Captain America: TFA, a scrawny Steve kept enlisting and kept fighting bullies here.' },
  { zh: '街区象征"平民英雄的起点"：布鲁克林的巷战塑造了美队的品格——"我只会做对的事"。',
    en: 'The borough is the everyman hero\'s start: its alleys forged Cap\'s "do what\'s right" code.' },
  { zh: '终局之战后美队回到过去在此与佩吉共度一生，布鲁克林承载他完整的弧光。',
    en: 'Endgame\'s Steve returned here to live out his life with Peggy — Brooklyn holds his full arc.' },
]);

bio('loc-queens', [
  { zh: '皇后区是蜘蛛侠的家乡：彼得·帕克与梅姨的温馨公寓所在地，邻家英雄的日常半径。',
    en: 'Queens is Spider-Man\'s home: Peter Parker and Aunt May\'s apartment, the neighborhood hero\'s radius.' },
  { zh: 'MCU 中彼得在皇后区的学校、公寓与街区之间摆荡，蜘蛛侠的"友善邻居"人设由此而来。',
    en: 'In the MCU Peter swings between school, home and block — the source of "friendly neighborhood."' },
  { zh: '街区象征"平凡与伟大"：蜘蛛侠的战场不在宇宙而在街角——最接地气的英雄叙事。',
    en: 'The borough is ordinary greatness: Peter\'s battles are street-corner, not cosmic.' },
  { zh: '《无路可归》后彼得搬离皇后区，但这里仍是蜘蛛侠神话的起点。',
    en: 'Peter left after No Way Home, yet Queens remains his myth\'s origin.' },
]);

bio('loc-wakanda', [
  { zh: '瓦坎达是漫威最富有的虚构国度：位于非洲的振金之国，科技领先世界数代的黑豹领地。',
    en: 'Wakanda, Marvel\'s wealthiest fictional nation, is the hidden African kingdom of vibranium and hyper-tech.' },
  { zh: '首都黄金之城（Birnin Zana）与王室、多拉·米拉杰亲卫队构成其权力核心；特查拉与苏睿相继为王。',
    en: 'The Golden City, the royal house and the Dora Milaje anchor it; T\'Challa then Shuri ruled.' },
  { zh: '国度象征"藏锋的文明"：对外伪装贫弱、对内振金科技——孤立主义与守护传统的平衡。',
    en: 'The nation is hidden might: poor on the surface, vibranium-deep — isolation and tradition.' },
  { zh: '无限战争的瓦坎达之战与《黑豹2》的塔洛坎冲突让这个国度成为 MCU 的军事中心。',
    en: 'The Wakanda Battle and the Talokan war made it the MCU\'s martial center.' },
  { zh: '瓦坎达是振金科技铸就的隐秘王国，长期以‘第三世界农业国’伪装，实为地球最先进文明之一。', en: 'Wakanda hides the world\'s most advanced nation behind a farming-state facade, built on vibranium.' },
  { zh: '从黑豹到复仇者，它的开放与守护贯穿多部电影，也成为非洲未来主义的银幕图腾。', en: 'From Black Panther to the Avengers, its openness and defense recur — an Afrofuturist icon.' },
]);

bio('loc-golden-city', [
  { zh: '黄金之城（Birnin Zana）是瓦坎达的首都：悬浮列车、振金建筑与高山瀑布环抱的科技之都。',
    en: 'Birnin Zana, the Golden City, is Wakanda\'s capital — maglevs, vibranium towers, waterfall-wreathed.' },
  { zh: '《黑豹》中特查拉的加冕、王位争夺与查拉湖边的仪式都在此展开。',
    en: 'Black Panther\'s coronation, the throne struggle and the lake rites all unfold here.' },
  { zh: '城市象征"非洲未来主义"：传统服饰与量子科技共存——漫威最惊艳的虚构城市。',
    en: 'The city is Afrofuturism: tradition and quantum tech together — Marvel\'s most stunning city.' },
  { zh: '灭霸响指后黄金之城一度蒙尘，苏睿继位后重建并开放。',
    en: 'Dusted after the Snap, the Golden City was rebuilt and opened under Shuri.' },
]);

bio('loc-avengers-compound', [
  { zh: '复仇者基地是复仇者的秘密总部：位于纽约州北部的训练、研究与居住综合体。',
    en: 'The Avengers Compound is the team\'s upstate New York headquarters: training, research and living quarters.' },
  { zh: '《奥创纪元》后取代斯塔克大厦成为主基地，终局之战的时间劫持与决战都在此展开。',
    en: 'It replaced Avengers Tower after Age of Ultron; the Endgame time heist launched from here.' },
  { zh: '基地象征"团队的归属"：训练场、无限宝石实验室与"复仇者集结"的集结地。',
    en: 'The base is the team\'s home: training floors, the Stones lab, the place Avengers assemble.' },
  { zh: '终局之战后基地在《猎鹰与冬兵》与《雷霆特攻队》中易主，成为政府设施的象征。',
    en: 'Post-Endgame it passed to government hands in FATWS and Thunderbolts.' },
]);

bio('loc-stark-tower', [
  { zh: '斯塔克大厦是托尼·斯塔克的地标总部：曼哈顿中城的弧形科技大厦，复仇者早期的集结地。',
    en: 'Stark Tower, Tony Stark\'s Midtown landmark, was the Avengers\' early rally point.' },
  { zh: '《复仇者联盟1》纽约之战后更名为"复仇者大厦"，装点 A 字标志直至《奥创纪元》。',
    en: 'After the Battle of New York it became Avengers Tower with its A logo until Age of Ultron.' },
  { zh: '大厦象征"技术与慷慨"：方舟反应堆供电、战衣实验室与亿万富翁的超级英雄日常。',
    en: 'The tower is tech and largesse: arc-reactor power, suit labs, a billionaire\'s hero HQ.' },
  { zh: 'MCU 中复仇者搬迁后大厦易主（《蜘蛛侠》系列暗示售出），其历史地位依旧。',
    en: 'Sold after the Avengers moved on, the tower\'s legacy remains.' },
]);

bio('loc-sanctum', [
  { zh: '至圣所是奇异博士的居所与圣殿：位于格林威治村的魔法建筑，保护地球免受维度入侵。',
    en: 'The Sanctum Sanctorum, Doctor Strange\'s Greenwich Village home, guards Earth from dimensional threats.' },
  { zh: '至圣所内部空间无限扩张：魔法图书馆、法器室与无数秘门；王与斯特兰奇先后驻守。',
    en: 'Its interior is infinite: the mystic library, relic vaults, countless doors; Wong and Strange hold it.' },
  { zh: '建筑象征"现实的门槛"：镜像维度、悬戒传送与"至尊法师之家"——魔法的地标。',
    en: 'The building is reality\'s threshold: mirror dimensions, portals, the Sorcerer Supreme\'s home.' },
  { zh: '《疯狂多元宇宙》中至圣所遭旺达袭击，王继任后仍以它为纽约的魔法枢纽。',
    en: 'Wanda attacked it in MoM; Wong keeps it New York\'s mystic hub.' },
]);

bio('loc-kamar-taj-loc', [
  { zh: '卡玛泰姬是秘法学院的所在地：喜马拉雅山中的魔法圣地，训练历代至尊法师。',
    en: 'Kamar-Taj, the mystic academy in the Himalayas, trains the Sorcerer Supremes.' },
  { zh: '远古者在此执教数世纪，奇异博士、王与莫度皆在此学艺；《奇异博士1》以此为舞台。',
    en: 'The Ancient One taught here for centuries; Strange, Wong and Mordo studied here.' },
  { zh: '圣地象征"魔法的传承"：悬戒、星体投射与多维宇宙的智慧——地球秘法的源头。',
    en: 'The sanctum is magic\'s lineage: sling rings, astral arts, multiversal wisdom — the mystic source.' },
  { zh: '《奇异博士2》后卡玛泰姬在多元宇宙危机中成为枢纽，法师团扩大。',
    en: 'After MoM it became a multiversal hub; the Masters expanded.' },
  { zh: '卡玛泰姬是喜马拉雅深处的法师圣殿，历代至尊法师在此训练守护维度的法师团。', en: 'Kamar-Taj, high in the Himalayas, trains the sorcerers who guard Earth\'s dimension.' },
  { zh: '藏书阁、镜像维度的修习与悬戒传送，让这里成为漫威魔法体系的源头与中心。', en: 'Its library, Mirror Dimension training, and sling-ring portals make it the wellspring of Marvel magic.' },
]);

bio('loc-westview', [
  { zh: '西景镇是新泽西州的小镇，《旺达幻视》的舞台：旺达以混沌魔法将其改写为情景喜剧现实。',
    en: 'Westview, the New Jersey town of WandaVision, was rewritten into a sitcom reality by Wanda\'s chaos magic.' },
  { zh: '全镇居民被困在"电视乐园"中，只有少数人保有自我；旺达的悲伤以全镇为代价。',
    en: 'The townsfolk were trapped in the TV fantasy; Wanda\'s grief ran on their freedom.' },
  { zh: '小镇象征"悲伤的牢笼"：50 年代到 00 年代的情景喜剧片段，实为创伤的层层伪装。',
    en: 'The town is grief\'s cage: decades of sitcom tropes masking layers of trauma.' },
  { zh: '旺达解除魔法后西景镇获释，《阿加莎》剧集继续此地魔法线的故事。',
    en: 'Freed when the hex lifted, Westview\'s magic thread continues in Agatha.' },
]);

bio('loc-sokovia', [
  { zh: '索科维亚是东欧的虚构国家：奥创纪元中被奥创托举升空的悲剧之地。',
    en: 'Sokovia, a fictional Eastern European nation, was the city Ultron lifted skyward.' },
  { zh: '《奥创纪元》中复仇者疏散居民后将其炸毁，180 万平民死伤；旺达与皮特罗的故乡。',
    en: 'The Avengers destroyed the airborne city after evacuation — 180,000 dead; Wanda and Pietro\'s home.' },
  { zh: '国家象征"代价的重量"：超级英雄行动的附带伤害——索科维亚协议由此诞生。',
    en: 'The nation is collateral weight: the Sokovia Accords were born from its ashes.' },
  { zh: '索科维亚难民流亡（含《猎鹰与冬兵》的卡莉·摩根索线），其阴影贯穿 MCU。',
    en: 'Its refugees (Karli Morgenthau in FATWS) carry the shadow through the MCU.' },
]);

bio('loc-siberia', [
  { zh: '西伯利亚基地是九头蛇的冬兵设施：位于俄罗斯冰原的地下实验室，冬兵计划的执行地。',
    en: 'The Siberian Facility, HYDRA\'s Winter Soldier base, is where the Winter Soldier program ran.' },
  { zh: '《美国队长3》中钢铁侠在此发现父母遇害真相，与美队、冬兵爆发内战决战。',
    en: 'In Civil War, Stark learned his parents\' fate here — the Civil War\'s climactic fight.' },
  { zh: '基地象征"历史的冰层"：被冷冻的冬兵们与不可告人的暗杀档案。',
    en: 'The base is history\'s ice: frozen Winter Soldiers and buried assassination files.' },
  { zh: '内战一役后基地废弃，但冬兵计划的遗产仍困扰巴基与政府。',
    en: 'Abandoned after the Civil War fight, its legacy still haunts Bucky.' },
]);

bio('loc-asgard', [
  { zh: '阿斯加德是北欧神域的都城：金宫之下的彩虹桥连接九界，奥丁与托尔的王国。',
    en: 'Asgard, the Norse realm\'s capital, sits beyond the Bifrost — home of Odin and Thor.' },
  { zh: '金宫、英灵殿与彩虹桥是其标志；《雷神》三部曲与诸神黄昏在此上演。',
    en: 'The Golden Palace, Valhalla and the Bifrost define it; the Thor trilogy and Ragnarok unfold here.' },
  { zh: '神域象征"神话的尊严"：阿斯加德人不是神而是长寿的异星文明——"阿斯加德是人民，不是地方"。',
    en: 'The realm is myth\'s dignity: Asgardians are long-lived aliens, not gods — "Asgard is its people."' },
  { zh: '诸神黄昏中阿斯加德被苏尔特尔摧毁，幸存者在托尔带领下流亡地球。',
    en: 'Surtur destroyed it in Ragnarok; survivors fled to Earth with Thor.' },
  { zh: '阿斯加德是九界的王都，彩虹桥连接诸域，金宫之下藏着诸神黄昏的预言。', en: 'Asgard, capital of the Nine Realms, bridges worlds by the Bifrost — Ragnarok\'s prophecy under the gold.' },
  { zh: '《雷神3》中苏尔特尔毁城、幸存者远航，它的覆灭成为 MCU 神域叙事的分水岭。', en: 'Ragnarok\'s fire and the survivors\' exodus turn Asgard\'s fall into the saga\'s mythic watershed.' },
]);

bio('loc-new-asgard', [
  { zh: '新阿斯加德是阿斯加德难民在地球的定居点：位于挪威海岸的小渔镇。',
    en: 'New Asgard is the Asgardian refugees\' Earth settlement: a Norwegian coastal town.' },
  { zh: '《终局之战》五年后托尔在此颓废度日，阿斯加德人经营旅游业；女武神布伦希尔德后来统治此地。',
    en: 'Thor moped here for five years post-Snap; Valkyrie Brunnhilde later rules it.' },
  { zh: '小镇象征"流亡与重生"：神话文明降落凡间——英雄的退场与日常。',
    en: 'The town is exile reborn: myth landing in mundane life.' },
  { zh: '《爱与雷霆》中新阿斯加德成为旅游胜地，简·福斯特在此举起雷神之锤。',
    en: 'Love and Thunder made it a tourist spot; Jane Foster lifted Mjolnir here.' },
]);

bio('loc-jotunheim', [
  { zh: '约顿海姆是冰霜巨人的国度：九界中最寒冷的领域，劳菲与洛基的故乡。',
    en: 'Jotunheim, realm of the Frost Giants, is the coldest of the Nine Realms — home of Laufey and Loki\'s birth.' },
  { zh: '《雷神1》中托尔与洛基的约顿海姆之行引发阿斯加德与冰霜巨人的战争。',
    en: 'Thor and Loki\'s visit in Thor (2011) sparked war with the Frost Giants.' },
  { zh: '国度象征"寒冰的威胁"：冰霜巨人的诅咒之匣（远古冬棺）是阿斯加德的宿敌遗物。',
    en: 'The realm is frozen threat: the Casket of Ancient Winters, Asgard\'s relic-foe.' },
  { zh: '诸神黄昏后约顿海姆随九界动乱而变，洛基的冰霜血统贯穿其身份之谜。',
    en: 'Post-Ragnarok it shifts with the realms; Loki\'s Frost Giant blood haunts his identity.' },
]);

bio('loc-vormir', [
  { zh: '沃米尔星是灵魂宝石的所在：位于宇宙尽头的孤寂星球，红骷髅的流放之地。',
    en: 'Vormir, the soul planet at the universe\'s edge, holds the Soul Stone — Red Skull\'s exile.' },
  { zh: '《无限战争》中灭霸在此以卡魔拉之死换取灵魂宝石；《终局之战》中黑寡妇为鹰眼牺牲。',
    en: 'Thanos traded Gamora here; in Endgame, Natasha gave her life for Clint.' },
  { zh: '星球象征"以爱换石"：灵魂宝石的规则是"以所爱之人换取"——最沉重的仪式。',
    en: 'The planet is love\'s price: the Soul Stone demands a loved one — the heaviest rite.' },
  { zh: '黑寡妇之死让沃米尔成为 MCU 最令人心碎的地标。',
    en: 'Natasha\'s sacrifice made Vormir the MCU\'s most heartbreaking landmark.' },
]);

bio('loc-titan', [
  { zh: '泰坦星是灭霸的故乡：土星卫星，曾是永恒族的乌托邦，因资源枯竭而毁灭。',
    en: 'Titan, Thanos\'s home moon of Saturn, was an Eternal utopia destroyed by resource exhaustion.' },
  { zh: '《无限战争》中钢铁侠、蜘蛛侠与奇异博士在此迎战灭霸；泰坦之战的失败成为转折。',
    en: 'Iron Man, Spider-Man and Strange fought Thanos here — the failed Titan battle.' },
  { zh: '星球象征"灭霸的执念"：他目睹母星毁灭，因此坚信"随机抹除一半生命"是救赎。',
    en: 'The moon is Thanos\'s conviction: watching it die, he believed random half-erasure saves.' },
  { zh: '泰坦之战后星球荒芜，灭霸的"花园"则成为其终局隐居地。',
    en: 'Titan lies barren after the battle; the Mad Titan\'s "garden" became his final retreat.' },
]);

/* ============ P3 地点：批 2（17 个宇宙/异界） ============ */

bio('loc-garden', [
  { zh: '花园星是灭霸的隐居之地：无限战争后他在此退休种田，目睹自己"使命完成"。',
    en: 'The Garden is Thanos\'s retreat: farming retirement after the Snap, his "mission accomplished."' },
  { zh: '《终局之战》开头复仇者在此找到他，却发现宝石已被摧毁——"我毁掉了它们"。',
    en: 'Endgame\'s opening finds him here — with the Stones destroyed: "I used them to destroy them."' },
  { zh: '星球象征"毁灭者的平静"：灭霸眼中的田园牧歌，实则半个宇宙的坟场。',
    en: 'The planet is the destroyer\'s peace: an idyll built on half the universe\'s ashes.' },
  { zh: '托尔在此斩首灭霸，花园星成为终局的起点。',
    en: 'Thor beheaded Thanos here — the starting point of the Endgame heist.' },
]);

bio('loc-xandar', [
  { zh: '山达尔星是新星军团的总部：宇宙秩序的象征，克里帝国的千年对手。',
    en: 'Xandar, home of the Nova Corps, symbolizes cosmic order — the Kree Empire\'s ancient foe.' },
  { zh: '《银护1》中星爵团队在此交出力量宝石；《无限战争》前奏中山达尔被灭霸摧毁。',
    en: 'The Guardians delivered the Power Stone here in Vol. 1; Thanos destroyed Xandar pre-IW.' },
  { zh: '星球象征"秩序的代价"：新星军团的星际法律在灭霸的暴力面前不堪一击。',
    en: 'The planet is order\'s cost: Nova law shattered by Thanos\'s might.' },
  { zh: '漫画中山达尔多次重建，MCU 版在《惊奇队长》等线中留有历史。',
    en: 'Comics rebuilt Xandar often; the MCU version lingers in history.' },
]);

bio('loc-knowhere', [
  { zh: '虚无之地是收藏者的基地：一颗被挖空的远古天神头颅，宇宙的走私与交易中心。',
    en: 'Knowhere, the Collector\'s base, is a hollowed Celestial skull — the galaxy\'s trading post.' },
  { zh: '《银护1》中收藏家在此展示无限宝石；《银护3》中虚无之地成为掠夺者的新总部。',
    en: 'The Collector displayed the Stone here in Vol. 1; the Ravagers took it over in Vol. 3.' },
  { zh: '地点象征"宇宙的市集"：酒吧、赌场与各色外星人——秩序与混乱的交界。',
    en: 'The place is the cosmic bazaar: bars, casinos, aliens — order meets chaos.' },
  { zh: '《复联3》中收藏家的藏品被灭霸洗劫，虚无之地在《银护3》重生为掠夺者家园。',
    en: 'Thanos ransacked it; Vol. 3 rebirthed it as Ravager home.' },
  { zh: '虚无之地是远古天神头颅改造的星际市集，收藏家与各方势力在此交易宇宙奇珍。', en: 'Knowhere, a dead Celestial\'s head turned space bazaar, hosts the Collector and every species\' trade.' },
  { zh: '《银护》系列与《复联3》都以它为坐标，见证灭霸夺石与护卫队的聚散。', en: 'A Guardians fixture and Infinity War\'s opening stage — hub of the team\'s comings and goings.' },
]);

bio('loc-hala', [
  { zh: '哈拉星是克里帝国的母星：蓝色皮肤的军事文明首都，至高智慧的所在。',
    en: 'Hala, the Kree Empire\'s homeworld, is the blue-skinned military civilization\'s capital.' },
  { zh: '《惊奇队长》中卡罗尔在此接受训练；《惊奇队长2》中哈拉因至高智慧之战而衰竭。',
    en: 'Carol trained here in Captain Marvel; The Marvels saw Hala\'s ecological collapse.' },
  { zh: '星球象征"征服的代价"：克里军国主义耗尽母星资源——帝国衰落的隐喻。',
    en: 'The planet is conquest\'s cost: Kree militarism drained it — an empire\'s fall.' },
  { zh: '漫画中哈拉是克里政治斗争的中心，MCU 版在《惊奇队长2》后开启重建线。',
    en: 'Comics center Kree politics here; the MCU rebuilds after The Marvels.' },
]);

bio('loc-ego-planet', [
  { zh: '伊戈之星是星爵生父伊戈的本体：一颗拥有意识的行星，以"扩张"为天职。',
    en: 'Ego\'s Planet is Star-Lord\'s father Ego himself: a sentient planet driven to expand.' },
  { zh: '《银护2》中伊戈试图以"光之种子"吞噬宇宙，被星爵与护卫队阻止。',
    en: 'In Vol. 2, Ego\'s Expansion Plan was stopped by Quill and the Guardians.' },
  { zh: '星球象征"父亲的阴影"：伊戈的"爱"是征服的伪装——星爵的弑父之战。',
    en: 'The planet is the father\'s shadow: Ego\'s "love" masked conquest — Quill\'s patricide.' },
  { zh: '伊戈毁灭后其星域化为残骸，《银护3》中再无踪迹。',
    en: 'Destroyed, Ego\'s remains fade by Vol. 3.' },
]);

bio('loc-sakaar', [
  { zh: '萨卡星是宇宙的垃圾场与角斗场：时间裂缝尽头的混乱星球，宗师统治的竞技场。',
    en: 'Sakaar, the cosmos\'s junkyard, is a chaos planet of time rifts — Grandmaster\'s arena.' },
  { zh: '《雷神3》中浩克与托尔在此角斗，女武神、石头人 Korg 相伴脱逃。',
    en: 'Thor and Hulk fought here in Ragnarok, escaping with Valkyrie and Korg.' },
  { zh: '星球象征"强者的赌局"：角斗士文化与宗师的玩乐——被遗弃者的角斗场。',
    en: 'The planet is the strong\'s gamble: gladiator culture, the Grandmaster\'s games.' },
  { zh: '萨卡星帮（Korg 与 Miek）后来加入新阿斯加德，Sakaar 的余韵贯穿 MCU。',
    en: 'Sakaar\'s survivors joined New Asgard; its echoes run through the MCU.' },
]);

bio('loc-counter-earth', [
  { zh: '反地球是至高进化者的实验星球：复制地球的"完美世界"，《银护3》的悲剧舞台。',
    en: 'Counter-Earth, the High Evolutionary\'s experiment, replicates Earth as a "perfect" world — Vol. 3\'s tragedy.' },
  { zh: '至高进化者在此创造"人类"作为生物实验，反地球最终被火箭解放的动物们摧毁。',
    en: 'The High Evolutionary bred humans here; the liberated animals burned it down.' },
  { zh: '星球象征"完美的暴政"：为"完美"而抹除不完美——实验伦理的极端。',
    en: 'The planet is perfection\'s tyranny: erasing the imperfect for the "ideal."' },
  { zh: '反地球的毁灭让至高进化者一无所有，成为《银护3》的复仇主题。',
    en: 'Its fall left the High Evolutionary with nothing — Vol. 3\'s vengeance core.' },
]);

bio('loc-ta-lo', [
  { zh: '塔罗秘境是《尚气》中的神话之乡：位于异空间的古代村落，守护神龙与十环的故乡。',
    en: 'Ta Lo, Shang-Chi\'s mythic realm, is an ancient village in a pocket dimension, home of the Great Protector.' },
  { zh: '尚气之母映丽出身于此；《尚气》高潮中十环帮与守护者在此决战。',
    en: 'Shang-Chi\'s mother Ying Li came from here; the film\'s climax rages in Ta Lo.' },
  { zh: '秘境象征"东方的神话"：麒麟、凤凰与龙——漫威对中国神话的敬意。',
    en: 'The realm is Eastern myth: qilin, fenghuang, dragons — Marvel\'s homage to Chinese lore.' },
  { zh: '塔罗秘境的传送门与守护者线为 MCU 的魔法体系增添东方维度。',
    en: 'Its portals add an Eastern dimension to the MCU\'s mystic system.' },
  { zh: '塔罗是山海经式的结界秘境，九尾狐、麒麟与神龙栖息于此，镇守着封印噬魂兽的巨门。', en: 'Ta Lo is a mythic pocket realm of qilin and dragons, guarding the gate that seals the Dweller.' },
  { zh: '《尚气》让十环与龙鳞在此碰撞，也让东方神话第一次成为 MCU 的正式舞台。', en: 'Shang-Chi\'s rings and dragon-scale clash here — Eastern myth entering the MCU proper.' },
]);

bio('loc-talokan', [
  { zh: '塔罗坎是《黑豹2》的海底王国：玛雅后裔以振金维生的水下文明，纳摩的领地。',
    en: 'Talokan, Wakanda Forever\'s underwater realm, is a Maya-descended vibranium civilization ruled by Namor.' },
  { zh: '纳摩率塔罗坎军浮出水面，与瓦坎达争夺振金与地表世界的话语权。',
    en: 'Namor\'s Talokan clashed with Wakanda over vibranium and the surface world.' },
  { zh: '王国象征"被压迫者的复仇"：殖民时代的幸存者藏在深海——水下的瓦坎达。',
    en: 'The kingdom is the oppressed\'s vengeance: colonial survivors hidden in the deep — Wakanda under water.' },
  { zh: '《黑豹2》结尾塔罗坎与瓦坎达结盟，成为 MCU 的新势力。',
    en: 'Talokan allied with Wakanda — a new MCU power.' },
]);

bio('loc-red-room-facility', [
  { zh: '红房总部是苏联黑寡妇计划的训练设施：漂浮于空中的秘密基地。',
    en: 'The Red Room Academy is the Soviet Black Widow program\'s floating training base.' },
  { zh: '《黑寡妇》中娜塔莎与叶莲娜攻入红房，摧毁德雷科夫的洗脑帝国。',
    en: 'Black Widow saw Natasha and Yelena storm it, destroying Dreykov\'s empire.' },
  { zh: '设施象征"童年的剥夺"：芭蕾舞、格斗与生化改造——特工从女孩开始。',
    en: 'The facility is stolen childhood: ballet, combat, bio-modification — agents from girlhood.' },
  { zh: '红房毁灭后其训练体系（含模仿大师）仍在外散落。',
    en: 'After its fall, its training tree (Taskmaster et al.) scattered.' },
]);

bio('loc-prison-raft', [
  { zh: '木筏监狱是 MCU 的超能力罪犯监狱：位于海上的浮动设施。',
    en: 'The Raft is the MCU\'s superhuman prison: a floating facility at sea.' },
  { zh: '《美国队长3》中违反索科维亚协议的复仇者被囚于此，美队劫狱救出他们。',
    en: 'Civil War\'s renegade Avengers were jailed here until Cap broke them out.' },
  { zh: '监狱象征"英雄的枷锁"：协议、玻璃牢房与政府监管——自由与秩序的角力。',
    en: 'The prison is heroism caged: Accords, glass cells, state control.' },
  { zh: '《雷霆特攻队》中木筏成为瓦尔与政府关押反英雄的场所。',
    en: 'Thunderbolts repurposed the Raft for its anti-heroes.' },
]);

bio('loc-pym-tech-hq', [
  { zh: '皮姆科技总部是汉克·皮姆的实验室与公司：量子科技与皮姆粒子的研发中心。',
    en: 'Pym Technologies is Hank Pym\'s lab and company — the cradle of Pym particles and quantum tech.' },
  { zh: '《蚁人》中斯科特·朗在此盗取战衣并阻止黄蜂计划；《蚁人3》中量子隧道的出发点。',
    en: 'Scott Lang stole the suit here in Ant-Man; Quantumania\'s quantum tunnel launches from it.' },
  { zh: '地点象征"微观的智慧"：缩小技术、量子领域研究——皮姆家族的遗产。',
    en: 'The HQ is micro-wisdom: shrinking tech, quantum research — the Pym legacy.' },
  { zh: 'MCU 中皮姆科技在《蚁人2》后随量子研究持续扩张。',
    en: 'It grew with the quantum research through Ant-Man 2 and 3.' },
]);

bio('loc-ten-rings-hq', [
  { zh: '十环总部是文武与十环帮的基地：《尚气》中的地下要塞与军火库。',
    en: 'The Ten Rings HQ is Wenwu\'s base in Shang-Chi: an underground fortress and armory.' },
  { zh: '十环帮总部藏于深山，尚气在此受训长大。',
    en: 'Hidden in the mountains, Shang-Chi grew up training here.' },
  { zh: '基地象征"父亲的帝国"：武术、暗杀与千年野心——十环的权柄。',
    en: 'The base is the father\'s empire: martial arts, assassination, millennial ambition.' },
  { zh: '《尚气》后十环落入尚气之手，总部改组。',
    en: 'After Shang-Chi, the Rings pass to him; the HQ reorganizes.' },
]);

bio('loc-tva-hq', [
  { zh: 'TVA 总部是时间变异管理局的办公场所：存在于时间之外的无尽官僚大楼。',
    en: 'The TVA HQ, the Time Variance Authority\'s offices, exists outside time — endless bureaucracy.' },
  { zh: '《洛基》中洛基与莫比乌斯在此调查时间犯；第二季中总部直面康之战争。',
    en: 'Loki and Mobius worked here; Season 2 faced the Multiversal War.' },
  { zh: '大楼象征"时间的秩序"：剪枝装置、记忆清除与"神圣时间线"的档案室。',
    en: 'The building is time\'s order: pruning, memory wipes, the Sacred Timeline\'s files.' },
  { zh: '洛基成为时间之神后，TVA 的使命由"修剪"转向"守护"多元宇宙。',
    en: 'With Loki as time-god, the TVA\'s mission shifted from pruning to guarding.' },
]);

bio('loc-void-tva', [
  { zh: '虚空之地是 TVA 剪枝时间线的垃圾场：时间尽头的废弃领域，"遗留之人"的动物园。',
    en: 'The Void is the TVA\'s timeline junkyard: a realm at time\'s end, the "He Who Remains" menagerie.' },
  { zh: '《洛基》第一季中被剪枝的洛基变体在此对抗艾里奥斯；第二季再次成为战场。',
    en: 'Loki\'s pruned variants fought Alioth here in S1; S2 returned to it.' },
  { zh: '领域象征"被遗忘者的最后舞台"：无数时间变体在此挣扎求生。',
    en: 'The realm is the forgotten\'s stage: variants scrabbling for survival.' },
  { zh: '艾里奥斯（时间风暴兽）与卡桑德拉·诺娃让虚空之地在多元宇宙线中延续。',
    en: 'Alioth and Cassandra Nova keep the Void alive in the multiverse saga.' },
]);

bio('loc-cassandra-throne', [
  { zh: '卡珊德拉王座是《死侍3》中卡珊德拉·诺娃的基地：位于虚空之地的王座厅。',
    en: 'Cassandra\'s Throne, from Deadpool & Wolverine, is Nova\'s Void headquarters.' },
  { zh: '死侍与金刚狼在此对抗卡珊德拉，最终以"时空之刃"终结其统治。',
    en: 'Deadpool and Wolverine fought Cassandra here, ending her rule with the Time Ripper.' },
  { zh: '地点象征"虚空之王"：被遗弃者的统治者——多元宇宙垃圾场的君主。',
    en: 'The throne is the Void\'s king: ruler of the abandoned.' },
  { zh: '卡珊德拉殒命后其追随者（如烈焰战警）仍活跃。',
    en: 'Her followers (Pyro et al.) linger after her fall.' },
]);

bio('loc-ocean-earth-828', [
  { zh: 'Earth-828 的哈德逊湾是神奇四侠（828 版）遭遇宇宙射线的地方：漂浮在海洋中的空间站残骸。',
    en: 'Earth-828\'s Hudson Bay is where the Fantastic Four (828) met cosmic rays aboard a space station.' },
  { zh: '《奇异博士2》的 838 宇宙光照会版本暗示多元宇宙的神奇四侠线。',
    en: 'The MoM Illuminati version hints at the multiverse\'s FF line.' },
  { zh: '地点象征"起源的偶然"：一次太空任务改变了四个人的命运。',
    en: 'The site is origin\'s accident: one mission, four fates changed.' },
  { zh: 'MCU 神奇四侠重启有望重演此起源。',
    en: 'The FF reboot may revisit this origin.' },
]);

bio('loc-baxter-828', [
  { zh: '巴克斯特大厦是神奇四侠的总部：位于曼哈顿的科技地标。',
    en: 'The Baxter Building, the Fantastic Four\'s Manhattan HQ, is a tech landmark.' },
  { zh: '《奇异博士2》838 宇宙版（神奇先生登场）；漫画中它是 FF 的家与实验室。',
    en: 'The MoM 838 version appeared with Reed; comics make it the FF\'s home.' },
  { zh: '大厦象征"科学的家"：里德的实验室、时空门与神奇四侠的日常。',
    en: 'The tower is science\'s home: Reed\'s labs, the time platform, FF family life.' },
  { zh: 'MCU 重启后巴克斯特大厦将成为新 FF 的核心地标。',
    en: 'The MCU reboot will anchor on the Baxter Building.' },
]);

/* ============ P3 地点：批 3（收尾 16 个） ============ */

bio('loc-golden-daggers', [
  { zh: '金匕首俱乐部是《月光骑士》中的伦敦地下场所：超自然罪犯的交易地。',
    en: 'The Golden Daggers Club is Moon Knight\'s London underworld haunt for supernatural crime.' },
  { zh: '马克/史蒂文在此追踪哈罗的邪教，也是月光骑士的街头起点。',
    en: 'Marc/Steven traced Harrow\'s cult here; Moon Knight\'s street origin.' },
  { zh: '地点象征"夜晚的伦敦"：地下搏击、咒物交易与阴影中的英雄。',
    en: 'The club is London\'s night: fights, relic trades, heroes in shadow.' },
  { zh: '《月光骑士》后该场所线暂歇，等待第二季回归。',
    en: 'Its thread rests, awaiting a Moon Knight S2.' },
]);

bio('loc-san-francisco', [
  { zh: '旧金山是《毒液》系列的城市舞台：艾迪·布洛克与共生体的家。',
    en: 'San Francisco is the Venom films\' stage: Eddie Brock and the symbiote\'s home.' },
  { zh: '圣昆廷监狱、街区追逐与《毒液3》的纽约迁移——毒液的城市漫游。',
    en: 'From San Quentin to street chases and Venom 3\'s New York move — the symbiote\'s city tour.' },
  { zh: '城市象征"反英雄的日常"：记者、房东与共生体室友的黑色喜剧。',
    en: 'The city is the anti-hero\'s routine: reporter, landlord, symbiote roommate.' },
  { zh: '毒液系列以旧金山为基地展开 SSU 宇宙。',
    en: 'The SSU universe anchors on San Francisco.' },
]);

bio('loc-washington-dc', [
  { zh: '华盛顿特区是《美国队长2》的主要舞台：神盾局总部（三曲翼大楼）所在地。',
    en: 'Washington D.C. anchors Captain America 2: home of the Triskelion, S.H.I.E.L.D. HQ.' },
  { zh: '美队在林肯纪念堂、国会山与神盾局总部揭露九头蛇渗透。',
    en: 'Cap exposed HYDRA\'s infiltration across the Mall and the Triskelion.' },
  { zh: '城市象征"美国的权力"：政治中心与超级英雄的交汇——宪法与盾牌的对话。',
    en: 'The city is American power: politics meeting heroes — Constitution and shield.' },
  { zh: '《猎鹰与冬兵》与《美丽新世界》继续以华盛顿为政治舞台。',
    en: 'FATWS and Brave New World keep it the political stage.' },
]);

bio('loc-london', [
  { zh: '伦敦是 MCU 的重要城市：雷神黑暗精灵之战的现场、奇异博士的伦敦圣所所在地。',
    en: 'London hosts the Dark Elf battle and Doctor Strange\'s London Sanctum.' },
  { zh: '《雷神2》的格林尼治决战、《奇异博士》的伦敦圣所与《月光骑士》的街头。',
    en: 'Thor 2\'s Greenwich fight, Strange\'s London Sanctum, Moon Knight\'s streets.' },
  { zh: '城市象征"魔法与神话"：圣所网络、北欧诸神与英伦怪谈。',
    en: 'The city is myth and magic: Sanctums, Norse gods, British lore.' },
  { zh: '伦敦在多元宇宙危机中多次成为圣所防线。',
    en: 'London repeatedly holds the Sanctum line in the multiverse saga.' },
]);

bio('loc-hong-kong-sanctum', [
  { zh: '香港圣所是三大圣所之一：守护东亚维度的魔法据点。',
    en: 'The Hong Kong Sanctum is one of the three Sanctums guarding Earth\'s Eastern dimensions.' },
  { zh: '《奇异博士》中香港圣所的传送门大战守护现实；王曾在此驻守。',
    en: 'Strange\'s Hong Kong portal battle saved reality; Wong once held it.' },
  { zh: '圣所象征"全球防线"：纽约、伦敦、香港构成地球的魔法三角。',
    en: 'The Sanctum is the global line: New York, London, Hong Kong — Earth\'s mystic triangle.' },
  { zh: '《奇异博士2》后香港圣所随多元宇宙危机继续运作。',
    en: 'It keeps operating through the multiversal crisis.' },
]);

bio('loc-jersey-city', [
  { zh: '泽西城是惊奇少女卡玛拉·汗的家乡：《惊奇少女》剧集的主要舞台。',
    en: 'Jersey City is Ms. Marvel\'s Kamala Khan\'s home — the series\' main stage.' },
  { zh: '卡玛拉的学校、清真寺与社区庆典构成她的日常半径。',
    en: 'Her school, mosque and community festivals fill the series\' radius.' },
  { zh: '城市象征"移民的纽约"：巴基斯坦裔社区的成长故事——邻家英雄的另一面。',
    en: 'The city is immigrant America: a Pakistani-American teen\'s coming-of-age.' },
  { zh: '卡玛拉从泽西城走向《惊奇队长2》的宇宙冒险。',
    en: 'Kamala leapt from Jersey City to The Marvels\' cosmic scale.' },
]);

bio('loc-illuminati-hq-838', [
  { zh: '光照会总部（838 宇宙）是《奇异博士2》中的秘密议事厅。',
    en: 'The Illuminati HQ (Earth-838) is MoM\'s secret council chamber.' },
  { zh: '838 光照会在此审判并流放宇宙威胁（如奇异博士变体）。',
    en: 'The 838 Illuminati judged and exiled threats (Strange variants included).' },
  { zh: '地点象征"精英的法庭"：为"最小伤害"做出的最高裁决。',
    en: 'The chamber is the elite\'s court: supreme judgment for "least harm."' },
  { zh: '绯红女巫攻陷光照会后，838 总部沦为废墟。',
    en: 'The Scarlet Witch sacked it — the HQ lies in ruins.' },
]);

bio('loc-mount-olympus', [
  { zh: '奥林匹斯山是漫威众神（希腊神话）的居所：天父宙斯的领域。',
    en: 'Mount Olympus is home to Marvel\'s Greek gods — Zeus\'s realm.' },
  { zh: '《雷神4》中宙斯与众神在此举行"神之聚会"，托尔在此偷走风暴战斧的升级。',
    en: 'Thor 4\'s god-summit saw Zeus here; Thor swiped his upgraded weapons.' },
  { zh: '神山象征"众神的傲慢"：神权、享乐与对凡人的漠视。',
    en: 'The mountain is gods\' pride: divinity, indulgence, mortal indifference.' },
  { zh: '《雷神4》后奥林匹斯与阿斯加德关系微妙，等待后续登场。',
    en: 'Olympus-Asgard relations simmer post-Love & Thunder.' },
]);

bio('loc-latveria', [
  { zh: '拉托维尼亚是毁灭博士的国家：东欧的小国，杜姆的钢铁王座。',
    en: 'Latveria, Doctor Doom\'s Eastern European nation, is his iron throne.' },
  { zh: '杜姆以铁腕治国的同时保护子民；漫画中多次成为复仇者与神奇四侠的战场。',
    en: 'Doom rules with iron hand yet shields his people; the FF and Avengers clash here.' },
  { zh: '国家象征"杜姆的悖论"：暴君与救世主一体——"拉托维尼亚繁荣，世界恐惧"。',
    en: 'The nation is Doom\'s paradox: tyrant and savior — "Latveria prospers, the world fears."' },
  { zh: 'MCU《神奇四侠》与《复仇者5》或将引入拉托维尼亚。',
    en: 'The FF reboot and Avengers 5 may introduce Latveria.' },
]);

bio('loc-kun-lun', [
  { zh: '昆仑是铁拳的故乡：位于喜马拉雅异空间的永恒之城，六十年一现于人间。',
    en: 'K\'un-Lun, Iron Fist\'s home, is an immortal Himalayan city appearing every decade.' },
  { zh: '丹尼·兰德在此习武成为铁拳；《铁拳》剧集以其为背景。',
    en: 'Danny Rand trained here to become Iron Fist; the Netflix series uses it.' },
  { zh: '城市象征"武学圣地"：七都之一、龙之心的守护者。',
    en: 'The city is martial sanctity: one of the Seven Capital Cities, keeper of Shou-Lao\'s heart.' },
  { zh: '漫画中昆仑与铁拳传承紧密，MCU 街头线或回归。',
    en: 'K\'un-Lun and the Fist stay linked; the MCU street line may return.' },
]);

bio('loc-genosha', [
  { zh: '基诺沙是变种人的国家：漫画中曾作为变种人避风港的岛国。',
    en: 'Genosha, the mutant nation, was comics\' island haven for mutantkind.' },
  { zh: '变种人曾在此自治，后被哨兵机器人毁灭（《新X战警》），成为变种人悲剧的象征。',
    en: 'Mutants self-governed here until the Sentinels annihilated it — a mutant tragedy.' },
  { zh: '岛屿象征"避难所的代价"：变种人建国的理想与毁灭的惨痛记忆。',
    en: 'The island is sanctuary\'s cost: the dream of a mutant nation, and its ashes.' },
  { zh: '克拉科亚时代后基诺沙的遗产被并入变种人建国史。',
    en: 'Krakoa folded Genosha\'s legacy into mutant nationhood.' },
]);

bio('loc-krakoa', [
  { zh: '喀拉喀瓦是变种人的活体岛屿：克拉科亚时代的变种人国家核心。',
    en: 'Krakoa, the living mutant island, anchored the Krakoa-era mutant nation.' },
  { zh: '变种人以喀拉喀瓦为首都，建立复活协议与静默议会；2023 年《X的陨落》中崩塌。',
    en: 'Mutants built resurrection protocols and the Quiet Council here; the Fall of X (2023) broke it.' },
  { zh: '岛屿象征"变种人的应许之地"：复活的奇迹、权力与政治的复杂实验。',
    en: 'The island is mutantkind\'s promised land: resurrection, power, a grand political experiment.' },
  { zh: '喀拉喀瓦时代的终结开启 X 战警的新篇章，岛屿本体仍存活于海中。',
    en: 'Its end opened a new X-Men era; the island itself still lives.' },
]);

bio('loc-halfworld', [
  { zh: '半世界是火箭浣熊的故乡：位于宇宙边缘的精神病院星球。',
    en: 'Halfworld, Rocket\'s homeworld, is a lunatic-asylum planet at the galaxy\'s edge.' },
  { zh: '火箭在此被创造（漫画设定），动物居民管理精神病院；《银护3》揭示至高进化者的实验版本。',
    en: 'Rocket was created here in comics; Vol. 3 revealed the High Evolutionary\'s version.' },
  { zh: '星球象征"破碎的童年"：火箭的创伤源头——被实验、被遗弃。',
    en: 'The planet is a broken childhood: experimented on, abandoned.' },
  { zh: '火箭的复仇之旅让半世界的阴影在《银护3》中落幕。',
    en: 'Rocket\'s vengeance closed Halfworld\'s shadow in Vol. 3.' },
]);

bio('loc-x-mansion', [
  { zh: '泽维尔学院（X大宅）是 X 战警的基地：位于纽约州韦斯特切斯特的变种人学校。',
    en: 'Xavier\'s School (the X-Mansion) is the X-Men\'s Westchester base and mutant school.' },
  { zh: '查尔斯·泽维尔在此教导变种人少年；危险屋、脑波放大器与地下基地一应俱全。',
    en: 'Xavier taught mutant youth here, with the Danger Room, Cerebro and sub-basements.' },
  { zh: '大宅象征"家与希望"：变种人的避风港——"X战警的家"。',
    en: 'The mansion is home and hope: mutantkind\'s haven — "the X-Men\'s home."' },
  { zh: '大宅多次被毁又重建，克拉科亚时代后其地位由活岛取代。',
    en: 'Destroyed and rebuilt often; Krakoa replaced it during the nation era.' },
]);

bio('loc-attilan', [
  { zh: '阿提兰是异人族的首都：漂浮于地球与月球的移动城市。',
    en: 'Attilan, the Inhumans\' capital, is a floating city between Earth and the Moon.' },
  { zh: '黑蝠王与异人王室在此统治；《异人族》剧集以其为舞台。',
    en: 'Black Bolt and the royal family ruled here; the Inhumans show used it.' },
  { zh: '城市象征"隐藏的王国"：泰瑞根迷雾与异人族的千年隔离。',
    en: 'The city is the hidden kingdom: Terrigen mists, millennial isolation.' },
  { zh: '漫画中阿提兰多次迁移（月球/地球），异人族命运多舛。',
    en: 'Attilan moved between Moon and Earth; the Inhumans\' fate is turbulent.' },
]);

/* ============ P3 地点：补充（X-Men 系列地点） ============ */

bio('loc-genosha', [
  { zh: '基诺沙位于非洲东海岸，是X战警故事中"变种人分离主义"的实验场。最初由X教授的旧敌马格尼奥与政府合作，让变种人以隔离的方式生存，但最终沦为政治工具。',
    en: 'Genosha, off the African coast, was established as a mutant "separation" experiment—where mutants were forced to live apart from humans, later turned political.' },
  { zh: '该岛的历史极为动荡：从奴役变种人的农场国度，到成为马格尼托的"变种人天堂"，再到被哨兵机器人摧毁，基诺沙承载了变种人史上最深的创伤。',
    en: 'Genosha\'s history is turbulent: from a mutant-enslaving state to Magneto\'s "mutant paradise," until Sentinels razed it, inflicting the deepest wound in mutant history.' },
  { zh: '在《E is for Extinction》等故事中，基诺沙的毁灭成为变种人政治叙事的转折点——一个国家的覆灭催生了后来的喀拉喀瓦主权实验。',
    en: 'Its destruction in "E is for Extinction" became a turning point in mutant political narrative — a nation\'s fall that foreshadowed the later Krakoa experiment.' },
  { zh: '如今基诺沙的废墟仍是X战警故事中"乌托邦为何失败"的永恒提问，也是马格尼托政策失败的无声见证。',
    en: 'Today Genosha\'s ruins pose the eternal question "why do utopias fail?" — a silent witness to the failure of Magneto\'s policies.' },
]);

bio('loc-krakoa', [
  { zh: '喀拉喀瓦是一座有意识的活体岛屿，作为变种人的主权国家出现于《House of X / Powers of X》(2019)。通过莫拉·莫拉莱斯的时间循环知识与X教授、万磁王的合作，变种人将这座太平洋上的活岛转变为主权国家。',
    en: 'Krakoa is a living, sentient island that became the sovereign mutant nation in "House of X / Powers of X" (2019), realized through Moira MacTaggert\'s knowledge and the alliance of Xavier and Magneto.' },
  { zh: '岛上的花粉使变种人获得不朽：通过复活花坛，任何死去的变种人都可以被重生。喀拉喀瓦同时建立了自己的法律（"不可制造奴隶""不可杀死人类"）与流通全球的药物经济。',
    en: 'The island granted mutants immortality via resurrection lotus gardens, established sovereign laws ("make no more slaves, kill no man"), and built a global drug economy.' },
  { zh: '喀拉喀瓦代表"乌托邦的代价"：它实现了变种人数十年的建国梦想，却也带来了新的道德困境——谁被邀请、谁被遗忘，以及活岛本身的意志。',
    en: 'Krakoa represents the cost of utopia: the long-awaited mutant homeland brought new moral dilemmas — who is invited, who is forgotten, and the will of the living island itself.' },
  { zh: '在《X的陨落》(2024) 中，喀拉喀瓦陷落，变种人再次流亡，但这座活岛的记忆与力量依然是X战警叙事的核心。',
    en: 'With the fall of Krakoa, mutants were exiled once more, yet the living island remains central to X-Men narratives.' },
]);

bio('loc-x-mansion', [
  { zh: '泽维尔学院（X战警大宅）位于纽约州塞勒姆中心，是X战警的训练基地与变种人青少年的学校，由X教授查尔斯·泽维尔建立。',
    en: 'Xavier\'s School for Gifted Youngsters in Westchester County, New York, is the X-Men\'s base — a school for young mutants founded by Professor X.' },
  { zh: '大宅地下藏着"危险屋"训练室与脑波增幅器"大脑"（Cerebro），前者模拟战斗训练学生，后者让泽维尔探测全球每一个新生变种人。',
    en: 'Beneath the mansion lies the Danger Room combat simulator and Cerebro, which allows Xavier to detect every mutant on Earth.' },
  { zh: '作为场所，它代表"教育的力量"：不仅是战斗训练基地，更是让年轻变种人学会控制力量、接纳自我的家园。',
    en: 'The mansion is education as refuge: a place where young mutants learn control, acceptance, and belonging.' },
  { zh: '大宅屡次被摧毁又重建，在《Dark Phoenix》《Days of Future Past》等关键故事中扮演核心角色。',
    en: 'Destroyed and rebuilt repeatedly, the mansion played pivotal roles in "Dark Phoenix" and "Days of Future Past."' },
]);

bio('loc-hala', [
  { zh: '哈拉星是克里帝国的首都：位于大麦哲伦云的蓝色星球，克里文明的政治与军事中枢。',
    en: 'Hala is the capital of the Kree Empire: the blue-skinned militaristic civilization\'s political and military heart.' },
  { zh: '星球上有"至高智慧"（Supreme Intelligence）——一个由历代克里最伟大头脑合成的人工智能体，统治着整个帝国。',
    en: 'Hala hosts the Supreme Intelligence, an artificial ruler composed of the greatest Kree minds.' },
  { zh: '哈拉象征"帝国的铁幕"：军国主义、征服文化以及对个体自由的压制——克里文明的黑暗面。',
    en: 'Hala embodies imperial tyranny: militarism, expansionism, and suppression of individual freedom.' },
  { zh: '在《惊奇队长》的故事中，卡罗尔·丹弗斯正是意识到哈拉的侵略本质，才转而反抗至高智慧。',
    en: 'Carol Danvers\'s realization of Hala\'s侵略性 drove her rebellion against the Supreme Intelligence.' },
]);

bio('loc-attilan', [
  { zh: '阿提兰是异人族（Inhumans）的都城：最初位于大西洋，后迁至喜马拉雅，最终移至月球蓝区。',
    en: 'Attilan is the capital of the Inhumans: a mobile city first in the Atlantic, later moved to the Blue Area of the Moon.' },
  { zh: '城市由黑蝠王家族统治，居民通过泰瑞根迷雾获得超能力，形成了严格的种姓制度社会。',
    en: 'Ruled by Black Bolt\'s royal family, Attilan society is structured by Terrigen mist transformation and genetic castes.' },
  { zh: '城市象征"隔离的文明"：封闭、等级森严、与外界隔绝——异人族社会的优越与脆弱并存。',
    en: 'Attilan is an isolationist civilization: genetic caste system, royal intrigue, and cultural isolation.' },
  { zh: '在《异人族 vs X战警》等故事中，阿提兰的命运与整个异人族种族的存续紧密相连。',
    en: 'Attilan\'s fate is tied to the Inhuman royal family\'s trials across Marvel\'s cosmic narratives.' },
]);



bio('loc-titan', [
  { zh: '泰坦星是土星卫星，也是灭霸的故乡：曾经的永恒族殖民地，最终因人口过剩与资源枯竭而毁灭。',
    en: 'Titan, moon of Saturn and Thanos\'s homeworld, was a thriving Eternal colony destroyed by overpopulation and collapse.' },
  { zh: '灭霸亲眼目睹母星因资源枯竭而崩坏，这段经历塑造了他"宇宙一半生命必须消亡以拯救另一半"的极端哲学。',
    en: 'Watching his homeworld collapse convinced Thanos that random half-erasure could save existence itself.' },
  { zh: '星球象征"灾难的预言者"：泰坦的毁灭成为灭霸无尽屠杀的"合理化"根源。',
    en: 'Titan is the birthplace of Thanos\'s obsession: a survivor\'s guilt twisted into galactic genocide.' },
  { zh: '《无限战争》泰坦之战中，钢铁侠、奇异博士与蜘蛛侠在此与灭霸正面交锋。',
    en: 'The Battle of Titan in Infinity War marked a pivotal confrontation between Thanos and Earth\'s heroes.' },
]);

