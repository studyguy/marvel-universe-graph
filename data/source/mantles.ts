/**
 * 全量名号体系：角色（名号）↔ 人物（担任者）。
 * 设计：名号为独立"名号与身份"节点（mnt-*），人物节点（ch-*）以"担任 held-mantle"关系连接。
 * 覆盖 MV 全部宇宙：MCU / 616 漫画 / 福克斯 X 战警 / SSU / 动画 / 游戏。
 * 纯人名（托尼·斯塔克、灭霸、洛基、卡魔拉…）与种族/组织不建模；演员保持"饰演"子属性。
 */
import { mantle, E } from './registry';
import { L2 } from '../taxonomy';

const NOW = L2('现任', 'Current');
const PAST = L2('前任', 'Former');
const S = { status: '永续传承' };

/* ============ 英雄名号 ============ */

/* 美国队长（多人传承） */
mantle('captain-america', 'hero', '美国队长', 'Captain America', '二战以来美国精神的第一面盾，历代传承：史蒂夫、山姆为其最著名的两位担任者。', 'The first shield of America’s spirit since WWII: Steve and Sam its most famous holders.', { 'first-held': 'ch-captain-america-616', debut: L2('Captain America Comics #1 (1941)', 'Captain America Comics #1 (1941)'), status: S, universe: L2('多宇宙', 'Multiversal') });
E('ch-steve-rogers', 'mnt-captain-america', 'held-mantle', { period: L2('MCU 1940s–2016', 'MCU 1940s–2016'), status: NOW, universe: 'uni-earth-199999' });
E('ch-captain-america-616', 'mnt-captain-america', 'held-mantle', { period: L2('漫画 1941–', 'Comics 1941–'), status: NOW });
E('ch-sam-wilson', 'mnt-captain-america', 'held-mantle', { period: L2('2025–', '2025–'), status: NOW, universe: 'uni-earth-199999' });
E('ch-john-walker', 'mnt-captain-america', 'held-mantle', { period: L2('2021 短暂', '2021 briefly'), status: PAST });
E('ch-isaiah-bradley', 'mnt-captain-america', 'held-mantle', { period: L2('漫画 1940s', 'Comics 1940s'), status: PAST });

/* 钢铁侠 */
mantle('iron-man', 'hero', '钢铁侠', 'Iron Man', '托尼·斯塔克的战甲之名，未来由钢铁之心等新血继承其精神。', 'Tony Stark’s armor legacy, echoed by Ironheart and successors.', { 'first-held': 'ch-tony-stark', debut: L2('钢铁侠 (2008)', 'Iron Man (2008)'), status: S });
E('ch-tony-stark', 'mnt-iron-man', 'held-mantle', { period: L2('MCU 2008–2023', 'MCU 2008–2023'), status: NOW });
E('ch-iron-man-616', 'mnt-iron-man', 'held-mantle', { period: L2('漫画 1963–', 'Comics 1963–'), status: NOW });

/* 战争机器 */
mantle('war-machine', 'hero', '战争机器', 'War Machine', '军方正统的钢铁重甲，罗迪上校的专属座驾。', 'The military-grade heavy armor of Colonel Rhodes.', { 'first-held': 'ch-james-rhodes', debut: L2('钢铁侠 (2008)', 'Iron Man (2008)'), status: S });
E('ch-james-rhodes', 'mnt-war-machine', 'held-mantle', { period: L2('2010s–', '2010s–'), status: NOW });

/* 雷神（含女雷神） */
mantle('thor', 'hero', '雷神', 'Thor', '阿斯加德雷霆之名：托尔守护千年，简·福斯特曾于风暴中崛起为女雷神。', 'Asgard’s thunder: Thor for ages, Jane Foster risen as the Mighty Thor.', { 'first-held': 'ch-thor', debut: L2('雷神 (2011)', 'Thor (2011)'), status: S });
E('ch-thor', 'mnt-thor', 'held-mantle', { period: L2('千年来–', 'Ages–'), status: NOW });
E('ch-jane-foster', 'mnt-thor', 'held-mantle', { period: L2('女雷神时期', 'Mighty Thor era'), status: PAST });

/* 黑寡妇 */
mantle('black-widow', 'hero', '黑寡妇', 'Black Widow', '红房训练出的致命代号：娜塔莎曾是它的名字，叶莲娜现已接棒。', 'The Red Room’s lethal designation: Natasha made it famous, Yelena now carries it.', { 'first-held': 'ch-natasha-romanoff', debut: L2('钢铁侠2 (2010)', 'Iron Man 2 (2010)'), status: S });
E('ch-natasha-romanoff', 'mnt-black-widow', 'held-mantle', { period: L2('2010–2023', '2010–2023'), status: PAST });
E('ch-yelena-belova', 'mnt-black-widow', 'held-mantle', { period: L2('2021–', '2021–'), status: NOW });

/* 鹰眼 */
mantle('hawkeye', 'hero', '鹰眼', 'Hawkeye', '百步传神的弓之名号：克林特的金箭之后，凯特·毕肖普接过箭袋。', 'The archer’s mantle: Kate Bishop now carries Clint’s quiver.', { 'first-held': 'ch-clint-barton', debut: L2('雷神 (2011)', 'Thor (2011)'), status: S });
E('ch-clint-barton', 'mnt-hawkeye', 'held-mantle', { period: L2('2011–2023', '2011–2023'), status: NOW });
E('ch-kate-bishop', 'mnt-hawkeye', 'held-mantle', { period: L2('2021–', '2021–'), status: NOW });

/* 猩红女巫 */
mantle('scarlet-witch', 'hero', '绯红女巫', 'Scarlet Witch', '混沌魔法的化身之名，旺达·马克西莫夫的宿命头衔。', 'The face of chaos magic — Wanda Maximoff’s fateful mantle.', { 'first-held': 'ch-wanda-maximoff', debut: L2('美国队长3 (2016)', 'Civil War (2016)'), status: S });
E('ch-wanda-maximoff', 'mnt-scarlet-witch', 'held-mantle', { period: L2('2016–', '2016–'), status: NOW });

/* 快银 */
mantle('quicksilver', 'hero', '快银', 'Quicksilver', '极速之名：皮特罗与福克斯宇宙的彼得，两个宇宙的同一个名字。', 'Speed incarnate: Pietro and Fox’s Peter, one name across universes.', { 'first-held': 'ch-pietro-maximoff', debut: L2('复仇者联盟2 (2015)', 'Avengers: AoU (2015)'), status: S });
E('ch-pietro-maximoff', 'mnt-quicksilver', 'held-mantle', { period: L2('MCU 2015', 'MCU 2015'), status: PAST });
E('ch-quicksilver-fox', 'mnt-quicksilver', 'held-mantle', { period: L2('福克斯宇宙 2014–', 'Fox 2014–'), status: NOW, universe: 'uni-earth-10005' });

/* 幻视 */
mantle('vision', 'hero', '幻视', 'Vision', '杰维斯与心灵宝石交融的合成生命之名。', 'The synthezoid name born of J.A.R.V.I.S. and the Mind Stone.', { 'first-held': 'ch-vision', debut: L2('复仇者联盟2 (2015)', 'Avengers: AoU (2015)'), status: S });
E('ch-vision', 'mnt-vision', 'held-mantle', { period: L2('2015–', '2015–'), status: NOW });

/* 蚁人 / 黄蜂女 / 黄衫侠 */
mantle('ant-man', 'hero', '蚁人', 'Ant-Man', '皮姆粒子的尺寸之名：汉克开创，斯科特延续传奇。', 'The Pym-particle mantle: Hank pioneered, Scott continues.', { 'first-held': 'ch-hank-pym', debut: L2('蚁人 (2015)', 'Ant-Man (2015)'), status: S });
E('ch-hank-pym', 'mnt-ant-man', 'held-mantle', { period: L2('初代 1980s–', 'First 1980s–'), status: PAST });
E('ch-scott-lang', 'mnt-ant-man', 'held-mantle', { period: L2('2015–', '2015–'), status: NOW });
mantle('wasp', 'hero', '黄蜂女', 'Wasp', '振翅之名：珍妮特失落于量子领域，霍普继承其翼。', 'The wing-maid mantle: Janet lost to the Quantum Realm, Hope now flies.', { 'first-held': 'ch-janet-van-dyne', debut: L2('蚁人 (2015)', 'Ant-Man (2015)'), status: S });
E('ch-janet-van-dyne', 'mnt-wasp', 'held-mantle', { period: L2('初代', 'First'), status: PAST });
E('ch-hope-van-dyne', 'mnt-wasp', 'held-mantle', { period: L2('2015–', '2015–'), status: NOW });
mantle('yellowjacket', 'villain', '黄衫侠', 'Yellowjacket', '黄蜂战衣的暗面之名，达伦·克罗斯的仿制品。', 'The wasp suit’s dark mirror, worn by Darren Cross.', { 'first-held': 'ch-darren-cross', debut: L2('蚁人 (2015)', 'Ant-Man (2015)'), status: S });
E('ch-darren-cross', 'mnt-yellowjacket', 'held-mantle', { period: L2('2015', '2015'), status: PAST });

/* 幽灵 / 哨兵 / 钢铁之心 / 女浩克 / 浩克 / 红浩克 */
mantle('ghost', 'villain', '幽灵', 'Ghost', '量子不稳的幽灵代号：阿娃·斯塔尔的身不由己。', 'The intangible ghost of Ava Starr.', { 'first-held': 'ch-ava-starr', debut: L2('蚁人2 (2018)', 'AM&W (2018)'), status: S });
E('ch-ava-starr', 'mnt-ghost', 'held-mantle', { period: L2('2018–', '2018–'), status: NOW });
mantle('sentry', 'hero', '哨兵', 'Sentry', '百万太阳之力的病人，鲍勃的黑暗底牌之名。', 'A million suns inside the broken man named Bob.', { 'first-held': 'ch-sentry-bob', debut: L2('雷霆特攻队* (2025)', 'Thunderbolts* (2025)'), status: S });
E('ch-sentry-bob', 'mnt-sentry', 'held-mantle', { period: L2('2025–', '2025–'), status: NOW });
mantle('ironheart', 'hero', '钢铁之心', 'Ironheart', '天才少女瑞里·威廉姆斯的自铸战甲之名。', 'Riri Williams’ self-built armor.', { 'first-held': 'ch-riri-williams', debut: L2('黑豹2 (2022)', 'WF (2022)'), status: S });
E('ch-riri-williams', 'mnt-ironheart', 'held-mantle', { period: L2('2022–', '2022–'), status: NOW });
mantle('she-hulk', 'hero', '女浩克', 'She-Hulk', '律师与巨人的双重人生，珍妮弗·沃尔特斯的伽马之名。', 'Jen Walters’ gamma double life.', { 'first-held': 'ch-jennifer-walters', debut: L2('女浩克 (2022)', 'She-Hulk (2022)'), status: S });
E('ch-jennifer-walters', 'mnt-she-hulk', 'held-mantle', { period: L2('2022–', '2022–'), status: NOW });
mantle('hulk', 'hero', '浩克', 'Hulk', '伽马之怒的化身：布鲁斯·班纳的另一个自我。', 'The gamma rage of Bruce Banner’s other self.', { 'first-held': 'ch-bruce-banner', debut: L2('无敌浩克 (2008)', 'Incredible Hulk (2008)'), status: S });
E('ch-bruce-banner', 'mnt-hulk', 'held-mantle', { period: L2('2008–', '2008–'), status: NOW });
mantle('red-hulk', 'villain', '红浩克', 'Red Hulk', '红色伽马之名：罗斯将军最终成为的愤怒体。', 'The crimson gamma; General Ross’s final form.', { 'first-held': 'ch-thaddeus-ross', debut: L2('美国队长4 (2025)', 'BNW (2025)'), status: S });
E('ch-thaddeus-ross', 'mnt-red-hulk', 'held-mantle', { period: L2('2025–', '2025–'), status: NOW });

/* 黑豹 */
mantle('black-panther', 'hero', '黑豹', 'Black Panther', '瓦坎达王室的豹之荣耀：特查拉之后，与其妹舒芮接任。', 'Wakanda’s leopard mantle: T’Challa, then his sister Shuri.', { 'first-held': 'ch-black-panther-tchalla', debut: L2('美国队长3 (2016)', 'Civil War (2016)'), status: S });
E('ch-black-panther-tchalla', 'mnt-black-panther', 'held-mantle', { period: L2('MCU 2016–2022', 'MCU 2016–2022'), status: PAST });
E('ch-shuri', 'mnt-black-panther', 'held-mantle', { period: L2('2022–', '2022–'), status: NOW });
E('ch-killmonger', 'mnt-black-panther', 'held-mantle', { period: L2('短暂 / 漫画', 'Brief / comics'), status: PAST });

/* 惊奇队长 / 光谱 / 惊奇少女 */
mantle('captain-marvel', 'hero', '惊奇队长', 'Captain Marvel', '宇宙级力量的呐喊之名：迈-威尔开创，卡罗尔使其名震星河。', 'The cosmic shout of power: Mar-Vell began it, Carol made it legendary.', { 'first-held': 'ch-mar-vell', debut: L2('Marvel Super-Heroes #12 (1967)', 'MSH #12 (1967)'), status: S });
E('ch-mar-vell', 'mnt-captain-marvel', 'held-mantle', { period: L2('漫画 1967–1982', 'Comics 1967–1982'), status: PAST });
E('ch-carol-danvers', 'mnt-captain-marvel', 'held-mantle', { period: L2('MCU 2019–', 'MCU 2019–'), status: NOW });
E('ch-monica-616-spectrum', 'mnt-captain-marvel', 'held-mantle', { period: L2('漫画 1983–', 'Comics 1983–'), status: PAST });
mantle('spectrum', 'hero', '光谱', 'Spectrum', '化光为形的能力之名，莫妮卡·兰博（616）的代表名号。', 'The living-light mantle of Monica Rambeau (616).', { 'first-held': 'ch-monica-616-spectrum', debut: L2('Amazing Spider-Man Annual #16 (1983)', 'ASM Annual #16 (1983)'), status: S });
E('ch-monica-616-spectrum', 'mnt-spectrum', 'held-mantle', { period: L2('1983–', '1983–'), status: NOW });
mantle('ms-marvel', 'hero', '惊奇少女', 'Ms. Marvel', '泽西城少女的传奇开端：卡玛拉·克汗先继承了名字，再继承了光。', 'The Jersey City spark: Kamala Khan took the name, then the light.', { 'first-held': 'ch-kamala-khan', debut: L2('惊奇少女 (2022)', 'Ms. Marvel (2022)'), status: S });
E('ch-kamala-khan', 'mnt-ms-marvel', 'held-mantle', { period: L2('2022–', '2022–'), status: NOW });

/* 奇异博士 / 至尊法师 */
mantle('doctor-strange', 'hero', '奇异博士', 'Doctor Strange', '卡玛泰姬法袍之名：从傲慢外科医生到多元宇宙守门人。', 'The Kamar-Taj robe: from arrogant surgeon to multiversal gatekeeper.', { 'first-held': 'ch-stephen-strange', debut: L2('奇异博士 (2016)', 'Doctor Strange (2016)'), status: S });
E('ch-stephen-strange', 'mnt-doctor-strange', 'held-mantle', { period: L2('MCU 2016–', 'MCU 2016–'), status: NOW });
E('ch-strange-supreme', 'mnt-doctor-strange', 'held-mantle', { period: L2('假如…宇宙', 'What If universe'), status: PAST });
E('ch-doctor-strange-616-illu', 'mnt-doctor-strange', 'held-mantle', { period: L2('漫画', 'Comics'), status: NOW });
mantle('sorcerer-supreme', 'title', '至尊法师', 'Sorcerer Supreme', '守护地球免受维度威胁的最高头衔：古一、斯特兰奇、王先后执掌。', 'Earth’s highest mystic office: the Ancient One, Strange, then Wong.', { 'first-held': 'ch-ancient-one', debut: L2('奇异博士 (2016)', 'Doctor Strange (2016)'), status: S });
E('ch-ancient-one', 'mnt-sorcerer-supreme', 'held-mantle', { period: L2('数世纪', 'Centuries'), status: PAST });
E('ch-stephen-strange', 'mnt-sorcerer-supreme', 'held-mantle', { period: L2('2016–2022', '2016–2022'), status: PAST });
E('ch-wong', 'mnt-sorcerer-supreme', 'held-mantle', { period: L2('2021–', '2021–'), status: NOW });

/* 街头系 */
mantle('daredevil', 'hero', '夜魔侠', 'Daredevil', '地狱厨房的审判之名：失明的马特以双棍行侠。', 'Hell’s Kitchen’s judgment: blind Matt with twin sticks.', { 'first-held': 'ch-matt-murdock', debut: L2('夜魔侠 (2015)', 'Daredevil (2015)'), status: S });
E('ch-matt-murdock', 'mnt-daredevil', 'held-mantle', { period: L2('2015–', '2015–'), status: NOW });
mantle('punisher', 'hero', '惩罚者', 'The Punisher', '以战争回应战争的骷髅之名，弗兰克·卡斯特的独行道。', 'War answered with war — Frank Castle’s skull-laden one-way path.', { 'first-held': 'ch-frank-castle', debut: L2('漫威蜘蛛侠 #129 (1974)', 'ASM #129 (1974)'), status: S });
E('ch-frank-castle', 'mnt-punisher', 'held-mantle', { period: L2('1970s–', '1970s–'), status: NOW });
mantle('kingpin', 'villain', '金并', 'Kingpin', '地狱厨房的建商与黑帮之王，威尔逊·菲斯克的尊号。', 'The builder-king of Hell’s Kitchen; Wilson Fisk’s title.', { 'first-held': 'ch-wilson-fisk', debut: L2('夜魔侠 (2015)', 'Daredevil (2015)'), status: S });
E('ch-wilson-fisk', 'mnt-kingpin', 'held-mantle', { period: L2('2015–', '2015–'), status: NOW });
mantle('echo', 'hero', '回声', 'Echo', '复印他人武艺之名，玛雅·洛佩兹的乔克托之魂。', 'Mirror of every fight — Maya Lopez’s Choctaw soul.', { 'first-held': 'ch-echo-maya', debut: L2('鹰眼 (2021)', 'Hawkeye (2021)'), status: S });
E('ch-echo-maya', 'mnt-echo', 'held-mantle', { period: L2('2021–', '2021–'), status: NOW });
mantle('moon-knight', 'hero', '月光骑士', 'Moon Knight', '月神孔苏的化身之名：马克与另一个自己共用一具身躯。', 'Khonshu’s avatar: Marc and his other self in one body.', { 'first-held': 'ch-moon-knight-marc', debut: L2('月亮骑士 (2022)', 'Moon Knight (2022)'), status: S });
E('ch-moon-knight-marc', 'mnt-moon-knight', 'held-mantle', { period: L2('MCU 2022–', 'MCU 2022–'), status: NOW });
E('ch-moon-knight-616', 'mnt-moon-knight', 'held-mantle', { period: L2('漫画 1975–', 'Comics 1975–'), status: NOW });
mantle('iron-fist', 'hero', '铁拳', 'Iron Fist', '昆仑气聚于拳之名，丹尼·兰德的禅武传承。', 'K’un-Lun’s living weapon: Danny Rand’s fist of qi.', { 'first-held': 'ch-danny-rand', debut: L2('Marvel Premiere #15 (1974)', 'MP #15 (1974)'), status: S });
E('ch-danny-rand', 'mnt-iron-fist', 'held-mantle', { period: L2('1974–', '1974–'), status: NOW });
mantle('luke-cage', 'hero', '卢克·凯奇', 'Luke Cage', '哈莱姆的刀枪不入之名，卡尔·卢卡斯的街头王座。', 'Harlem’s bulletproof mantle; Carl Lucas’s street crown.', { 'first-held': 'ch-luke-cage', debut: L2('Luke Cage #1 (1972)', 'LC #1 (1972)'), status: S });
E('ch-luke-cage', 'mnt-luke-cage', 'held-mantle', { period: L2('1972–', '1972–'), status: NOW });
mantle('valkyrie', 'hero', '女武神', 'Valkyrie', '瓦尔基里军团最后的幸存者，新阿斯加德之王的名号。', 'Last of the Valkyries; the New Asgard throne.', { 'first-held': 'ch-valkyrie-brunnhilde', debut: L2('雷神3 (2017)', 'Ragnarok (2017)'), status: S });
E('ch-valkyrie-brunnhilde', 'mnt-valkyrie', 'held-mantle', { period: L2('2017–', '2017–'), status: NOW });
mantle('us-agent', 'hero', '美国特工', 'U.S. Agent', '被钦点又失格的盾牌继承，约翰·沃克的过渡之名。', 'The sanctioned-and-fallen shield; John Walker’s interim name.', { 'first-held': 'ch-john-walker', debut: L2('猎鹰与冬兵 (2021)', 'F&WS (2021)'), status: S });
E('ch-john-walker', 'mnt-us-agent', 'held-mantle', { period: L2('2021–', '2021–'), status: NOW });
mantle('taskmaster', 'villain', '模仿大师', 'Taskmaster', '摄影记忆复刻万武之名：安东尼娅·德雷科夫被迫的行刑者。', 'Photographic reflexes made her the forced executioner Antonia Dreykov.', { 'first-held': 'ch-taskmaster', debut: L2('黑寡妇 (2021)', 'Black Widow (2021)'), status: S });
E('ch-taskmaster', 'mnt-taskmaster', 'held-mantle', { period: L2('2021', '2021'), status: PAST });
mantle('red-guardian', 'hero', '红色守卫者', 'Red Guardian', '苏联的红色队长之名，阿列克谢·肖斯塔科夫的吹牛与忠诚。', 'Russia’s red Cap: Alexei Shostakov’s bragging and loyalty.', { 'first-held': 'ch-red-guardian', debut: L2('黑寡妇 (2021)', 'Black Widow (2021)'), status: S });
E('ch-red-guardian', 'mnt-red-guardian', 'held-mantle', { period: L2('2021–', '2021–'), status: NOW });

/* 宇宙系 */
mantle('ghost-rider', 'hero', '恶灵骑士', 'Ghost Rider', '复仇之灵的骷髅之名：约翰尼与罗比，两代火焰。', 'The flaming skull of vengeance: Johnny and Robbie, two flames.', { 'first-held': 'ch-ghost-rider-johnny', debut: L2('Marvel Spotlight #5 (1972)', 'MS #5 (1972)'), status: S });
E('ch-ghost-rider-johnny', 'mnt-ghost-rider', 'held-mantle', { period: L2('1972–', '1972–'), status: NOW });
E('ch-ghost-rider-robbie', 'mnt-ghost-rider', 'held-mantle', { period: L2('2014–', '2014–'), status: NOW });
mantle('blade', 'hero', '刀锋战士', 'Blade', '日行者之名：半人半吸血鬼的猎手，银刃之王。', 'The Daywalker: half-vampire hunter of his own kind.', { 'first-held': 'ch-blade', debut: L2('Tomb of Dracula #10 (1973)', 'ToD #10 (1973)'), status: S });
E('ch-blade', 'mnt-blade', 'held-mantle', { period: L2('1973–', '1973–'), status: NOW });
mantle('star-lord', 'hero', '星爵', 'Star-Lord', '外星救援队起家的浪子名号，彼得·奎尔的领队头衔。', 'The out-worldly rogue title Peter Quill earned with his crew.', { 'first-held': 'ch-peter-quill', debut: L2('银河护卫队 (2014)', 'GotG (2014)'), status: S });
E('ch-peter-quill', 'mnt-star-lord', 'held-mantle', { period: L2('2014–', '2014–'), status: NOW });
mantle('drax', 'hero', '毁灭者德拉克斯', 'Drax the Destroyer', '为复仇而生的直率之名，德拉克斯的毁灭之力。', 'Born for revenge — Drax’s blunt annihilation.', { 'first-held': 'ch-drax', debut: L2('银河护卫队 (2014)', 'GotG (2014)'), status: S });
E('ch-drax', 'mnt-drax', 'held-mantle', { period: L2('2014–', '2014–'), status: NOW });
mantle('black-bolt', 'hero', '黑蝠王', 'Black Bolt', '一声碎星而选择沉默的异人族之王名号。', 'The Inhuman king whose whisper breaks worlds.', { 'first-held': 'ch-black-bolt-616', debut: L2('Fantastic Four #45 (1965)', 'FF #45 (1965)'), status: S });
E('ch-black-bolt-616', 'mnt-black-bolt', 'held-mantle', { period: L2('1965–', '1965–'), status: NOW });
mantle('captain-carter', 'hero', '卡特队长', 'Captain Carter', '自己注射血清的佩吉·卡特，星盾的英伦传奇。', 'The Peggy who took the serum: a British star-shield legend.', { 'first-held': 'ch-captain-carter', debut: L2('假如…? (2021)', 'What If…? (2021)'), status: S });
E('ch-captain-carter', 'mnt-captain-carter', 'held-mantle', { period: L2('假如…宇宙', 'What If universe'), status: NOW });

/* 蜘蛛侠系 */
mantle('spider-man', 'hero', '蜘蛛侠', 'Spider-Man', '织网者之名流传十界：从彼得·帕克到迈尔斯·莫拉莱斯，横跨全部宇宙。', 'The web-net warrior’s name spans ten worlds: from Peter Parker to Miles Morales.', { 'first-held': 'ch-peter-parker-616', debut: L2('神奇蜘蛛侠 #1 (1963)', 'ASM #1 (1963)'), status: S });
E('ch-peter-parker-616', 'mnt-spider-man', 'held-mantle', { period: L2('漫画 1962–', 'Comics 1962–'), status: NOW });
E('ch-peter-parker-mcu', 'mnt-spider-man', 'held-mantle', { period: L2('MCU 2016–', 'MCU 2016–'), status: NOW });
E('ch-peter-parker-raimi', 'mnt-spider-man', 'held-mantle', { period: L2('马奎尔宇宙 2002–', 'Raimi 2002–'), status: NOW, universe: 'uni-earth-96283' });
E('ch-peter-parker-tasm', 'mnt-spider-man', 'held-mantle', { period: L2('加菲宇宙 2012–', 'Webb 2012–'), status: NOW, universe: 'uni-earth-120703' });
E('ch-miles-morales', 'mnt-spider-man', 'held-mantle', { period: L2('终极宇宙 2011–', 'Ultimate 2011–'), status: NOW, universe: 'uni-earth-1610' });
E('ch-miguel-ohara', 'mnt-spider-man', 'held-mantle', { period: L2('2099', '2099'), status: NOW, universe: 'uni-earth-928' });
E('ch-peni-parker', 'mnt-spider-man', 'held-mantle', { period: L2('SP//dr 宇宙', 'SP//dr timeline'), status: NOW });
E('ch-spider-noir', 'mnt-spider-man', 'held-mantle', { period: L2('地下年代宇宙', 'Noir timeline'), status: NOW });
E('ch-spider-man-1602', 'mnt-spider-man', 'held-mantle', { period: L2('1602 宇宙', '1602 timeline'), status: NOW });
E('ch-peter-parker-insomniac', 'mnt-spider-man', 'held-mantle', { period: L2('Insomniac 宇宙', 'Insomniac'), status: NOW, universe: 'uni-insomniac' });
mantle('spider-gwen', 'hero', '蜘蛛格温', 'Spider-Gwen', 'Earth-65 被蜘蛛选中的格温·史黛西，鼓手与英雄的双重人生。', 'The drummer bitten on Earth-65; Gwen Stacy’s hero story.', { 'first-held': 'ch-gwen-stacy-65', debut: L2('Edge of Spider-Verse #2 (2014)', 'EoSV #2 (2014)'), status: S });
E('ch-gwen-stacy-65', 'mnt-spider-gwen', 'held-mantle', { period: L2('Earth-65', 'Earth-65'), status: NOW });
mantle('prowler', 'villain', '徘徊者', 'The Prowler', '暗夜潜行之名：亚伦·戴维斯在侄子的道路阴影里穿过。', 'The stealth prowl: Aaron Davis threading his nephew’s shadow.', { 'first-held': 'ch-the-prowler-1610', debut: L2('平行宇宙 (2018)', 'Spider-Verse (2018)'), status: S });
E('ch-the-prowler-1610', 'mnt-prowler', 'held-mantle', { period: L2('1610 宇宙', '1610'), status: NOW });
mantle('scorpion', 'villain', '蝎子人', 'Scorpion', '为猎蜘蛛而生的毒尾之名，麦克·加根的蝎刺。', 'Built to hunt spiders: Mac Gargan’s poison sting.', { 'first-held': 'ch-mac-gargan', debut: L2('Amazing Spider-Man #19 (1964)', 'ASM #19 (1964)'), status: S });
E('ch-mac-gargan', 'mnt-scorpion', 'held-mantle', { period: L2('1964–', '1964–'), status: NOW });

/* 蜘蛛侠反派名号（多宇宙共享） */
mantle('green-goblin', 'villain', '绿魔', 'Green Goblin', '奥斯本家族的疯狂之名：诺曼与哈利，两代绿魔同一面镜子。', 'The Osborn madness: Norman and Harry, two goblins in one mirror.', { 'first-held': 'ch-norman-osborn', debut: L2('Amazing Spider-Man #14 (1964)', 'ASM #14 (1964)'), status: S });
E('ch-norman-osborn', 'mnt-green-goblin', 'held-mantle', { period: L2('616 1964–', '616 1964–'), status: NOW });
E('ch-green-goblin-raimi', 'mnt-green-goblin', 'held-mantle', { period: L2('马奎尔宇宙 2002–', 'Raimi 2002–'), status: PAST });
E('ch-harry-osborn', 'mnt-green-goblin', 'held-mantle', { period: L2('漫画 1975 (第三代)', 'Comics 1975 (3rd)'), status: PAST });
mantle('doctor-octopus', 'villain', '章鱼博士', 'Doctor Octopus', '四臂天才与技术的融合之名：奥托·奥克塔维的永恒名号。', 'Four arms, one genius: Otto Octavius’s timeless mantle.', { 'first-held': 'ch-otto-octavius', debut: L2('Amazing Spider-Man #3 (1963)', 'ASM #3 (1963)'), status: S });
E('ch-otto-octavius', 'mnt-doctor-octopus', 'held-mantle', { period: L2('616 1963–', '616 1963–'), status: NOW });
E('ch-doc-ock-raimi', 'mnt-doctor-octopus', 'held-mantle', { period: L2('马奎尔宇宙', 'Raimi'), status: PAST });
mantle('electro', 'villain', '电光人', 'Electro', '活体闪电之名：麦克斯·狄龙被世界看见的轰鸣。', 'Living lightning: Max Dillon’s thunderous visibility.', { 'first-held': 'ch-max-dillon', debut: L2('Amazing Spider-Man #9 (1964)', 'ASM #9 (1964)'), status: S });
E('ch-max-dillon', 'mnt-electro', 'held-mantle', { period: L2('616 1964–', '616 1964–'), status: NOW });
E('ch-electro-tasm', 'mnt-electro', 'held-mantle', { period: L2('加菲宇宙 2014–', 'Webb 2014–'), status: PAST });
mantle('sandman', 'villain', '沙人', 'Sandman', '流沙之躯之名：弗林特·马尔科的悔恨与沙海。', 'The shifting body: Flint Marko’s remorse of sand.', { 'first-held': 'ch-flint-marko', debut: L2('Amazing Spider-Man #4 (1963)', 'ASM #4 (1963)'), status: S });
E('ch-flint-marko', 'mnt-sandman', 'held-mantle', { period: L2('616 1963–', '616 1963–'), status: NOW });
E('ch-sandman-raimi', 'mnt-sandman', 'held-mantle', { period: L2('马奎尔宇宙', 'Raimi'), status: PAST });
mantle('lizard', 'villain', '蜥蜴人', 'The Lizard', '再生与复失的蓝色悲剧：康纳斯教授的爬虫之身。', 'Regeneration and loss: Dr. Connors’s reptile form.', { 'first-held': 'ch-curt-connors', debut: L2('Amazing Spider-Man #6 (1963)', 'ASM #6 (1963)'), status: S });
E('ch-curt-connors', 'mnt-lizard', 'held-mantle', { period: L2('616 1963–', '616 1963–'), status: NOW });
E('ch-lizard-tasm', 'mnt-lizard', 'held-mantle', { period: L2('加菲宇宙', 'Webb'), status: PAST });
mantle('kraven', 'villain', '猎人克莱文', 'Kraven the Hunter', '以猎蜘蛛为至高荣誉的贵族之名，谢尔盖·克拉维诺夫。', 'The aristocrat hunts the Spider: Sergei Kravinoff’s honor.', { 'first-held': 'ch-kraven', debut: L2('Amazing Spider-Man #15 (1964)', 'ASM #15 (1964)'), status: S });
E('ch-kraven', 'mnt-kraven', 'held-mantle', { period: L2('616/SSU', '616/SSU'), status: NOW });
mantle('venom', 'villain', '毒液', 'Venom', '共生体的暴虐之名：埃迪·布洛克的不请自来，与加根的短暂寄生。', 'The symbiote’s wrath: Eddie Brock’s uninvited guest, briefly Gargan’s.', { 'first-held': 'ch-eddie-brock', debut: L2('Amazing Spider-Man #299 (1988)', 'ASM #299 (1988)'), status: S });
E('ch-eddie-brock', 'mnt-venom', 'held-mantle', { period: L2('616 1988–', '616 1988–'), status: NOW });
E('ch-venom-eddie-ssu', 'mnt-venom', 'held-mantle', { period: L2('SSU 2018–', 'SSU 2018–'), status: NOW, universe: 'uni-ssu' });
E('ch-mac-gargan', 'mnt-venom', 'held-mantle', { period: L2('漫画 2005–2011', 'Comics 2005–2011'), status: PAST });
mantle('carnage', 'villain', '屠杀', 'Carnage', '毒液之子的猩红之名：克莱图斯·卡萨迪的连环杀手皮肤。', 'Venom’s crimson spawn: Cletus Kasady’s killer skin.', { 'first-held': 'ch-cletus-kasady', debut: L2('Amazing Spider-Man #360 (1992)', 'ASM #360 (1992)'), status: S });
E('ch-cletus-kasady', 'mnt-carnage', 'held-mantle', { period: L2('616/SSU', '616/SSU'), status: NOW });
mantle('vulture', 'villain', '秃鹫', 'Vulture', '空中拾荒者的蓝领之名：图姆斯与 616 原版，同一种翼。', 'The scavenger wings: Toomes and the 616 original.', { 'first-held': 'ch-adrian-toomes', debut: L2('蜘蛛侠：英雄归来 (2017)', 'SMH (2017)'), status: S });
E('ch-adrian-toomes', 'mnt-vulture', 'held-mantle', { period: L2('MCU 2017–', 'MCU 2017–'), status: NOW });
E('ch-adrian-toomes-616', 'mnt-vulture', 'held-mantle', { period: L2('616 1963–', '616 1963–'), status: NOW });
mantle('mysterio', 'villain', '神秘客', 'Mysterio', '幻象大师之名：昆汀·贝克以说谎为生的戏法者。', 'The Illusionist: Quentin Beck, a liar by trade.', { 'first-held': 'ch-quentin-beck', debut: L2('蜘蛛侠：英雄远征 (2019)', 'FFH (2019)'), status: S });
E('ch-quentin-beck', 'mnt-mysterio', 'held-mantle', { period: L2('MCU 2019–', 'MCU 2019–'), status: NOW });
E('ch-quentin-beck-616', 'mnt-mysterio', 'held-mantle', { period: L2('616 1964–', '616 1964–'), status: NOW });
mantle('red-skull', 'villain', '红骷髅', 'Red Skull', '九头蛇元首的骷髅之名：约翰·施密特的永恒恐惧。', 'Hydra’s first son: Johann Schmidt’s eternal fear.', { 'first-held': 'ch-red-skull', debut: L2('美国队长 (2011)', 'TFA (2011)'), status: S });
E('ch-red-skull', 'mnt-red-skull', 'held-mantle', { period: L2('MCU 1940s–', 'MCU 1940s–'), status: NOW });
mantle('purple-man', 'villain', '紫色人', 'The Purple Man', '语言即命令之名，紫色人基尔格雷夫的蛇毒之声。', 'Words as commands: Zebediah Kilgrave’s viper voice.', { 'first-held': 'ch-kilgrave', debut: L2('Daredevil #4 (1964)', 'DD #4 (1964)'), status: S });
E('ch-kilgrave', 'mnt-purple-man', 'held-mantle', { period: L2('2015–2019', '2015–2019'), status: PAST });

/* 神奇四侠（616/828 双宇宙共享名号） */
mantle('mr-fantastic', 'hero', '神奇先生', 'Mister Fantastic', '宇宙最强大脑的延展之名：里德在 616 与 828 皆是首席工程师。', 'The universe’s greatest mind stretched across 616 and 828.', { 'first-held': 'ch-reed-richards', debut: L2('神奇四侠 #1 (1961)', 'FF #1 (1961)'), status: S });
E('ch-reed-richards', 'mnt-mr-fantastic', 'held-mantle', { period: L2('616 1961–', '616 1961–'), status: NOW });
E('ch-reed-richards-828', 'mnt-mr-fantastic', 'held-mantle', { period: L2('Earth-828', 'Earth-828'), status: NOW, universe: 'uni-earth-828' });
mantle('invisible-woman', 'hero', '隐形女', 'Invisible Woman', '力场与隐形的先声之名：苏珊·斯道姆的家国之盾。', 'Fields and invisibility: Sue Storm’s family shield.', { 'first-held': 'ch-sue-storm', debut: L2('神奇四侠 #1 (1961)', 'FF #1 (1961)'), status: S });
E('ch-sue-storm', 'mnt-invisible-woman', 'held-mantle', { period: L2('616 1961–', '616 1961–'), status: NOW });
E('ch-sue-storm-828', 'mnt-invisible-woman', 'held-mantle', { period: L2('Earth-828', 'Earth-828'), status: NOW, universe: 'uni-earth-828' });
mantle('human-torch', 'hero', '霹雳火', 'Human Torch', 'Flame On 之名：约翰尼·斯道姆的燃烧青春。', 'Flame on: Johnny Storm’s burning youth.', { 'first-held': 'ch-johnny-storm', debut: L2('神奇四侠 #1 (1961)', 'FF #1 (1961)'), status: S });
E('ch-johnny-storm', 'mnt-human-torch', 'held-mantle', { period: L2('616 1961–', '616 1961–'), status: NOW });
E('ch-johnny-storm-828', 'mnt-human-torch', 'held-mantle', { period: L2('Earth-828', 'Earth-828'), status: NOW, universe: 'uni-earth-828' });
mantle('thing', 'hero', '石头人', 'The Thing', '橙色岩石之躯的忠诚之名：本·格里姆的 clobberin 时刻。', 'The rocky heart: Ben Grimm’s clobberin’ time.', { 'first-held': 'ch-ben-grimm', debut: L2('神奇四侠 #1 (1961)', 'FF #1 (1961)'), status: S });
E('ch-ben-grimm', 'mnt-thing', 'held-mantle', { period: L2('616 1961–', '616 1961–'), status: NOW });
E('ch-ben-grimm-828', 'mnt-thing', 'held-mantle', { period: L2('Earth-828', 'Earth-828'), status: NOW, universe: 'uni-earth-828' });
mantle('silver-surfer', 'hero', '银影侠', 'Silver Surfer', '冲浪星海的传令官之名：从诺林·拉多到莎拉·巴尔。', 'The herald of waves: from Norrin Radd to Shalla-Bal.', { 'first-held': 'ch-silver-surfer', debut: L2('神奇四侠 #48 (1966)', 'FF #48 (1966)'), status: S });
E('ch-silver-surfer', 'mnt-silver-surfer', 'held-mantle', { period: L2('616 1966–', '616 1966–'), status: NOW });
E('ch-silver-surfer-828', 'mnt-silver-surfer', 'held-mantle', { period: L2('Earth-828', 'Earth-828'), status: NOW, universe: 'uni-earth-828' });
mantle('doctor-doom', 'villain', '毁灭博士', 'Doctor Doom', '魔法与科技的合体暴君之名：维克托·冯·杜姆的拉托维尼亚王冠。', 'Sorcery plus science: Victor von Doom’s Latverian crown.', { 'first-held': 'ch-victor-von-doom', debut: L2('神奇四侠 #5 (1962)', 'FF #5 (1962)'), status: S });
E('ch-victor-von-doom', 'mnt-doctor-doom', 'held-mantle', { period: L2('616 1962–', '616 1962–'), status: NOW });

/* X 战警名号（616 / 福克斯 / 动画共享） */
mantle('professor-x', 'hero', 'X教授', 'Professor X', '泽维尔天才学院的师者之名，查尔斯·泽维尔的世界最强心灵。', 'Xavier’s schoolmaster mantle: the world’s strongest telepath.', { 'first-held': 'ch-charles-xavier', debut: L2('X战警 #1 (1963)', 'X-Men #1 (1963)'), status: S });
E('ch-charles-xavier', 'mnt-professor-x', 'held-mantle', { period: L2('616 1963–', '616 1963–'), status: NOW });
mantle('magneto', 'villain', '万磁王', 'Magneto', '磁场之王的名号：埃里克·兰谢尔的兄弟会旗帜。', 'The master of magnetism: Erik Lehnsherr’s banner.', { 'first-held': 'ch-erik-lehnsherr', debut: L2('X战警 #1 (1963)', 'X-Men #1 (1963)'), status: S });
E('ch-erik-lehnsherr', 'mnt-magneto', 'held-mantle', { period: L2('616/FOX', '616/FOX'), status: NOW });
mantle('wolverine', 'hero', '金刚狼', 'Wolverine', '骨骼与复仇之名：洛根、X-23 与 10005 的另一个洛根。', 'Bone and vengeance: Logan, X-23, and the Other Logan.', { 'first-held': 'ch-wolverine', debut: L2('The Incredible Hulk #180 (1974)', 'IH #180 (1974)'), status: S });
E('ch-wolverine', 'mnt-wolverine', 'held-mantle', { period: L2('616/FOX 1974–', '616/FOX 1974–'), status: NOW });
E('ch-x23', 'mnt-wolverine', 'held-mantle', { period: L2('2015 接棒', '2015–'), status: NOW });
E('ch-wolverine-10005', 'mnt-wolverine', 'held-mantle', { period: L2('10005 变体', '10005 variant'), status: NOW, universe: 'uni-earth-10005' });
mantle('cyclops', 'hero', '镭射眼', 'Cyclops', '红色晶石下的指挥官之名：斯科特·萨默斯的战场凝视。', 'The commander’s ruby gaze: Scott Summers.', { 'first-held': 'ch-scott-summers', debut: L2('X战警 #1 (1963)', 'X-Men #1 (1963)'), status: S });
E('ch-scott-summers', 'mnt-cyclops', 'held-mantle', { period: L2('616 1963–', '616 1963–'), status: NOW });
E('ch-cyclops-616', 'mnt-cyclops', 'held-mantle', { period: L2('616 后期', '616 later era'), status: NOW });
mantle('storm', 'hero', '暴风女', 'Storm', '呼风唤雨的肯尼亚女神之名：奥萝罗·门罗。', 'The Kenyan weather goddess: Ororo Munro.', { 'first-held': 'ch-storm', debut: L2('Giant-Size X-Men #1 (1975)', 'GSXM #1 (1975)'), status: S });
E('ch-storm', 'mnt-storm', 'held-mantle', { period: L2('616 1975–', '616 1975–'), status: NOW });
mantle('rogue', 'hero', '罗刹女', 'Rogue', '一触即吸之名：安娜·玛丽（罗刹女的南方灵魂）。', 'The one-touch drain: Anna Marie’s southern soul.', { 'first-held': 'ch-rogue', debut: L2('Avengers Annual #10 (1981)', 'AA #10 (1981)'), status: S });
E('ch-rogue', 'mnt-rogue', 'held-mantle', { period: L2('1981–', '1981–'), status: NOW });
mantle('gambit', 'hero', '牌皇', 'Gambit', '扑克充能的名号：雷米·勒博的画作级盗窃艺术。', 'The charging card: Remy LeBeau’s art of theft.', { 'first-held': 'ch-gambit', debut: L2('Uncanny X-Men #266 (1990)', 'UXM #266 (1990)'), status: S });
E('ch-gambit', 'mnt-gambit', 'held-mantle', { period: L2('1990–', '1990–'), status: NOW });
mantle('beast', 'hero', '野兽', 'Beast', '蓝毛猿足的超级明星科学家之名：汉克·麦考伊。', 'The blue genius: Hank McCoy.', { 'first-held': 'ch-beast', debut: L2('X战警 #1 (1963)', 'X-Men #1 (1963)'), status: S });
E('ch-beast', 'mnt-beast', 'held-mantle', { period: L2('1963–', '1963–'), status: NOW });
E('ch-beast-616-illu', 'mnt-beast', 'held-mantle', { period: L2('光照会时期', 'Illuminati era'), status: NOW });
mantle('nightcrawler', 'hero', '夜行者', 'Nightcrawler', '蓝尾传送杂技之名：库尔特·瓦格纳。', 'The blue teleporting acrobat: Kurt Wagner.', { 'first-held': 'ch-nightcrawler', debut: L2('Giant-Size X-Men #1 (1975)', 'GSXM #1 (1975)'), status: S });
E('ch-nightcrawler', 'mnt-nightcrawler', 'held-mantle', { period: L2('1975–', '1975–'), status: NOW });
mantle('colossus', 'hero', '钢力士', 'Colossus', '有机钢之躯的农场之子名号：皮奥特·拉斯普廷。', 'Organic steel from a farm: Piotr Rasputin.', { 'first-held': 'ch-colossus', debut: L2('Giant-Size X-Men #1 (1975)', 'GSXM #1 (1975)'), status: S });
E('ch-colossus', 'mnt-colossus', 'held-mantle', { period: L2('1975–', '1975–'), status: NOW });
mantle('iceman', 'hero', '冰人', 'Iceman', 'Omega 级冰塑之名：鲍比·德雷克。', 'The Omega sculptor of frost: Bobby Drake.', { 'first-held': 'ch-iceman', debut: L2('X战警 #1 (1963)', 'X-Men #1 (1963)'), status: S });
E('ch-iceman', 'mnt-iceman', 'held-mantle', { period: L2('1963–', '1963–'), status: NOW });
mantle('psylocke', 'hero', '灵蝶', 'Psylocke', '紫发灵刃之名：伊丽莎白·布拉多克。', 'The purple psychic blade: Betsy Braddock.', { 'first-held': 'ch-psylocke', debut: L2('Uncanny X-Men #213 (1987)', 'UXM #213 (1987)'), status: S });
E('ch-psylocke', 'mnt-psylocke', 'held-mantle', { period: L2('1987–', '1987–'), status: NOW });
mantle('mystique', 'villain', '魔形女', 'Mystique', '千面蓝肤之名：拉文·达克霍姆的间谍面具。', 'The blue chameleon: Raven Darkhölme’s masks.', { 'first-held': 'ch-mystique', debut: L2('Ms. Marvel #16 (1978)', 'MM #16 (1978)'), status: S });
E('ch-mystique', 'mnt-mystique', 'held-mantle', { period: L2('1978–', '1978–'), status: NOW });
mantle('sabretooth', 'villain', '剑齿虎', 'Sabretooth', '猎手之名：维克托·克里德的犬牙。', 'The hunter: Victor Creed’s fangs.', { 'first-held': 'ch-sabretooth', debut: L2('Iron Fist #14 (1977)', 'IF #14 (1977)'), status: S });
E('ch-sabretooth', 'mnt-sabretooth', 'held-mantle', { period: L2('1977–', '1977–'), status: NOW });
mantle('juggernaut', 'villain', '红坦克', 'Juggernaut', '赛托拉克宝石的不可阻挡之名：凯因·马克。', 'Cyttorak’s unstoppable: Cain Marko.', { 'first-held': 'ch-juggernaut', debut: L2('X战警 #12 (1965)', 'X-Men #12 (1965)'), status: S });
E('ch-juggernaut', 'mnt-juggernaut', 'held-mantle', { period: L2('1965–', '1965–'), status: NOW });
mantle('apocalypse', 'villain', '天启', 'Apocalypse', '适者生存的第一位变种人之名：恩·沙巴·努尔。', 'Survival of the fittest: En Sabah Nur.', { 'first-held': 'ch-apocalypse', debut: L2('X-Factor #5 (1986)', 'XF #5 (1986)'), status: S });
E('ch-apocalypse', 'mnt-apocalypse', 'held-mantle', { period: L2('1986–', '1986–'), status: NOW });
mantle('white-queen', 'villain', '白皇后', 'White Queen', '钻肤心感之名：艾玛·佛罗斯特的康桥女王。', 'Diamond-skinned telepath: Emma Frost’s Cambridge reign.', { 'first-held': 'ch-emma-frost', debut: L2('Uncanny X-Men #129 (1980)', 'UXM #129 (1980)'), status: S });
E('ch-emma-frost', 'mnt-white-queen', 'held-mantle', { period: L2('1980–', '1980–'), status: NOW });
mantle('cable', 'hero', '电索', 'Cable', '未来归来的战争之子之名：内森·萨默斯。', 'The soldier from the future: Nathan Summers.', { 'first-held': 'ch-cable', debut: L2('New Mutants #87 (1990)', 'NM #87 (1990)'), status: S });
E('ch-cable', 'mnt-cable', 'held-mantle', { period: L2('1990–', '1990–'), status: NOW });
mantle('jubilee', 'hero', '李千欢', 'Jubilee', '烟花能量之名：朱比雷申·李的高校岁月。', 'Firework power: Jubilation Lee’s mall years.', { 'first-held': 'ch-jubilee', debut: L2('Uncanny X-Men #244 (1989)', 'UXM #244 (1989)'), status: S });
E('ch-jubilee', 'mnt-jubilee', 'held-mantle', { period: L2('1989–', '1989–'), status: NOW });
mantle('destiny', 'hero', '命运女', 'Destiny', '预见一切的盲眼先知之名：艾琳·艾德勒。', 'The blind precog: Irene Adler’s ledger.', { 'first-held': 'ch-destiny-irene', debut: L2('Uncanny X-Men #141 (1981)', 'UXM #141 (1981)'), status: S });
E('ch-destiny-irene', 'mnt-destiny', 'held-mantle', { period: L2('1981–', '1981–'), status: NOW });
mantle('shadowcat', 'hero', '幻影猫', 'Shadowcat', '穿透物质之名：凯蒂·普莱德的 X 之魂。', 'The phasing heart: Kitty Pryde.', { 'first-held': 'ch-kate-pryde', debut: L2('Uncanny X-Men #129 (1980)', 'UXM #129 (1980)'), status: S });
E('ch-kate-pryde', 'mnt-shadowcat', 'held-mantle', { period: L2('1980–', '1980–'), status: NOW });
mantle('nova', 'hero', '新星', 'Nova', '新星军团之力的地球青年名号：理查德·赖德。', 'The Nova Force’s Earth teen: Richard Rider.', { 'first-held': 'ch-richard-rider', debut: L2('Nova #1 (1976)', 'Nova #1 (1976)'), status: S });
E('ch-richard-rider', 'mnt-nova', 'held-mantle', { period: L2('1976–', '1976–'), status: NOW });

/* 其他英雄名号 */
mantle('blue-marvel', 'hero', '蓝奇', 'Blue Marvel', '反物质之力被时代埋没之名：亚当·布拉威尔。', 'The antimatter hero his era hid: Adam Brashear.', { 'first-held': 'ch-blue-marvel', debut: L2('Adam: Legend of the Blue Marvel (2008)', 'ALBM (2008)'), status: S });
E('ch-blue-marvel', 'mnt-blue-marvel', 'held-mantle', { period: L2('2008–', '2008–'), status: NOW });
mantle('squirrel-girl', 'hero', '松鼠少女', 'Squirrel Girl', '松鼠与乐观之名：多琳·格林的胜利战绩。', 'Squirrels and smiles: Doreen Green’s win columns.', { 'first-held': 'ch-squirrel-girl', debut: L2('Marvel Super-Heroes Vol.2 #8 (1992)', 'MSH #8 (1992)'), status: S });
E('ch-squirrel-girl', 'mnt-squirrel-girl', 'held-mantle', { period: L2('1992–', '1992–'), status: NOW });
mantle('moon-girl', 'hero', '月亮女孩', 'Moon Girl', '9 岁天才与魔鬼恐龙之名：卢内拉·拉斐特。', 'The smartest nine-year-old: Lunella Lafayette.', { 'first-held': 'ch-moon-girl', debut: L2('Moon Girl and Devil Dinosaur #1 (2015)', 'MGDD #1 (2015)'), status: S });
E('ch-moon-girl', 'mnt-moon-girl', 'held-mantle', { period: L2('2015–', '2015–'), status: NOW });
mantle('wiccan', 'hero', '巫术', 'Wiccan', '混沌魔法的继承者之名：威廉·卡普兰的转世与重生。', 'Chaos magic’s heir: Billy Kaplan reborn.', { 'first-held': 'ch-wiccan-616', debut: L2('Young Avengers #1 (2005)', 'YA #1 (2005)'), status: S });
E('ch-wiccan-616', 'mnt-wiccan', 'held-mantle', { period: L2('616 2005–', '616 2005–'), status: NOW });
E('ch-billy-maximoff', 'mnt-wiccan', 'held-mantle', { period: L2('MCU 2025–', 'MCU 2025–'), status: NOW });
mantle('patriot', 'hero', '爱国者', 'Patriot', '以赛亚·布拉德利之孙继承的名号：伊莱的年轻之盾。', 'Isaiah Bradley’s grandson: Eli’s young shield.', { 'first-held': 'ch-patriot-eli', debut: L2('Young Avengers #1 (2005)', 'YA #1 (2005)'), status: S });
E('ch-patriot-eli', 'mnt-patriot', 'held-mantle', { period: L2('2005–', '2005–'), status: NOW });
mantle('iron-lad', 'villain', '钢铁少年', 'Iron Lad', '少年康的闪亮铠甲之名：纳撒尼尔·理查兹。', 'Young Kang’s gleaming plates: Nathaniel Richards.', { 'first-held': 'ch-iron-lad', debut: L2('Young Avengers #1 (2005)', 'YA #1 (2005)'), status: S });
E('ch-iron-lad', 'mnt-iron-lad', 'held-mantle', { period: L2('2005 短暂', '2005 briefly'), status: PAST });
mantle('morbius', 'villain', '莫比亚斯', 'Morbius', '吸血鬼生化人之名：迈克尔·莫比亚斯的自救诅咒。', 'The living vampire: Michael Morbius’s self-cure curse.', { 'first-held': 'ch-michael-morbius', debut: L2('莫比亚斯 (2022)', 'Morbius (2022)'), status: S });
E('ch-michael-morbius', 'mnt-morbius', 'held-mantle', { period: L2('SSU 2022–', 'SSU 2022–'), status: NOW });
mantle('madame-web', 'hero', '蜘蛛夫人', 'Madame Web', '预见蜘蛛众生命的预言者之名：卡桑德拉·韦伯。', 'The seer of spider-lives: Cassandra Webb.', { 'first-held': 'ch-madame-web-cassandra', debut: L2('蜘蛛夫人 (2024)', 'Madame Web (2024)'), status: S });
E('ch-madame-web-cassandra', 'mnt-madame-web', 'held-mantle', { period: L2('SSU 2024–', 'SSU 2024–'), status: NOW });
