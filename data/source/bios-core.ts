/** 人物介绍 · 核心 MCU+漫画主线人物（10 人）。事实源：Marvel Database 对应宇宙页。 */
import { bio } from './registry';

bio('ch-bruce-banner', [
  { zh: '罗伯特·布鲁斯·班纳是原子物理学家布莱恩·班纳博士之子。父亲坚信自己的辐射研究改变了基因、生下了"突变体儿子"，对妻子丽贝卡的痴爱转化为对孩子的疯狂嫉恨，布鲁斯自幼遭受家暴——四岁那年，父亲杀死了母亲，他被姨母苏珊抚养成人。',
    en: 'Robert Bruce Banner was the only son of atomic physicist Dr. Brian Banner. Convinced his radiation work had produced a mutant child, Brian consumed himself with jealous hatred; young Bruce was abused at home, and at four lost his mother to his father\'s madness, afterwards raised by his aunt Susan.' },
  { zh: '童年创伤让他形成了隐秘的解离性身份障碍（DID），"浩克"是他最早用来纾解痛苦的"想象朋友"。高中时代他已是化学与武器设计的天才，大学主修核物理；在罗斯将军监督的伽马炸弹测试中，他冲进爆心救下少年里克·琼斯，受到致命辐射，第一次化身为绿色巨兽。',
    en: 'His childhood trauma produced dissociative identity disorder, with "the Hulk" as his earliest coping alter-ego. A prodigy in chemistry and nuclear physics, he was irradiated in the gamma bomb test he helped design, diving in to save a young boy — and the Incredible Hulk was born.' },
  { zh: '此后的数十年里，他在"世界最聪明的头脑"与"最危险的怪物"之间反复横跳：加入复仇者、被光照会放逐太空、掀起浩克世界大战，又化身为智慧至上的"博士浩克"（Doc Green），直至现代篇章《不朽浩克》里直面与自己共生的黑暗神性。',
    en: 'For decades he oscillated between "the smartest mind alive" and "the most dangerous being alive": Avenger, exile to Sakaar, the World War Hulk, the super-intellectual Doc Green — and finally the dark divinity of the Immortal Hulk era.' },
  { zh: '浩克拥有随愤怒无限增长的力量与近乎不死的再生，被公认为地球最强大的物理存在、Omega 级威胁；而班纳本人则是超级天才核物理学家，托尼·斯塔克称他是全球最伟大的核科学家。他的双重诅咒，是失控的破坏与分裂的人格。',
    en: 'The Hulk\'s power scales with rage to virtually unlimited strength and immortality — an Omega-level threat, the strongest being on Earth; Banner himself is a super-genius in nuclear physics, praised by Stark as the world\'s greatest." His curse is the same duality: destruction and dissociative identity.' },
  { zh: '在不朽浩克的故事后期，他与浩克被迫分离、暂时失去变身能力；但他缔造的心脏之路（Gamma 传承）——包括表妹女浩克与后继者阿马杜斯·乔，仍在延续这场"愤怒的遗产"。',
    en: 'In the Immortal Hulk finale he has been cut off from the Hulk and momentarily powerless — but the legacy he started, from his cousin She-Hulk to Amadeus Cho, carries the gamma torch onward.' },
]);

bio('ch-tony-stark', [
  { zh: '安东尼·爱德华"托尼"·斯塔克是斯塔克工业创始人霍华德·斯塔克与玛丽亚之子，出生于 1930 年纽约的工业豪门。从小展现机械天才，15 岁考入麻省理工学院，22 岁接手濒临危机的家族企业，成为"军火商王子"——也沉迷名声、女人与酒。',
    en: 'Anthony Edward "Tony" Stark, son of Howard and Maria Stark, was born in 1930 into an industrial dynasty. A mechanical prodigy at MIT by fifteen and CEO by twenty-two, he rescued Stark Industries and became a famously reckless playboy-arms dealer.' },
  { zh: '在海外战场被炸伤后，他利用胸前弹片的动力之心与第一台微型电弧炉，在洞穴里造出了第一套动力装甲（Mark I），以此逃脱并重获新生。回到美国后他创立"铁人计划"：装甲不仅是武器，更是他自己灵魂的外衣。',
    en: 'Wounded in a battlefield cave, he built the first micro-arc reactor to power his shrapnel heart and forged the Mark I armor to escape. Reborn as Iron Man, he turned a weapon franchise into the vehicle of his own redemption.' },
  { zh: '他的人生主线是一场对抗自我的战争：装甲大战（Armor Wars）中他追回流散的技术；内战中他是"注册法案"一方的领袖，与美队的信任彻底破裂；在弑神者与复仇者命运中他数次濒死——包括被阿尔蒂米斯战甲改造、注射极限病毒（Extremis）与脑机接口化。',
    en: 'His story is a war within himself: Armor Wars, the Civil War leadership of the registration side against Cap, and several near-deaths — Extremis rewiring his body, and the R.T. node linking his mind to every suit.' },
  { zh: '他没有生化强化，装甲之外的力量是天才智力、亿万资产与自我修复的意志；他最大的弱点始终是酒精、骄傲与"为了对的目的做错误的决定"。',
    en: 'No biological superpowers — his assets are genius intellect, immense fortune and stubborn self-repair; his flaws are the same: alcohol, pride, and deciding wrong things for right reasons.' },
  { zh: '现代主线里，他从弑神、断肢与重生中一次次归来，仍站在科技与道德的交界处，成为复仇者历史里"最像凡人天才"的传奇。',
    en: 'In current continuity he keeps returning from apotheosis, mutilation and rebirth — still the mortal genius standing at the edge of technology and conscience.' },
]);

bio('ch-steve-rogers', [
  { zh: '史蒂文"史蒂夫"·罗杰斯 1922 年 9 月 28 日生于纽约，出身贫穷的爱尔兰移民家庭，在大萧条时期的布鲁克林长大。瘦弱多病的他，因纳粹在欧陆的暴行与亚洲的战火，五次报名从军被拒——直到政府让他成为"可憎小兵"的宣传画，却也把他送进了厄斯金博士的秘密实验室。',
    en: 'Steven "Steve" Rogers was born in 1922 to poor Irish immigrants in lower Manhattan, a frail youth through the Depression. Horrified by fascist atrocities, he tried to enlist and was rejected five times — until he became Dr. Erskine\'s experiment.' },
  { zh: '注射超级士兵血清并接受维塔射线后，他拥有了巅峰人力的体魄；随后他身着星条战衣横扫欧陆，成为传奇的"美国队长"。1945 年，在一次拯救数千战俘的迫降事故中坠入冰海，沉睡了将近六十年。',
    en: 'The Super-Soldier Serum and Vita-rays gave him a body at the human peak; as the star-spangled Captain America he tore through Europe — until 1945, when he crashed into the Arctic in a last-ditch rescue and slept for decades.' },
  { zh: '在复仇者时代苏醒后，他成为"时间错位者"：带着老式价值面对后现代的世道，先后经历五次内战的撕裂、克隆与秘密入侵的迷雾，并在近代主线里与政府、正义和"美国"本身的定义不断缠斗。',
    en: 'Awakening among the Avengers as a man out of time, he has carried vintage morality through modern cynicism — the Civil Wars, the Secret Invasion, and every battle about what "America" should mean.' },
  { zh: '能力为血清强化的巅峰体魄：迅捷、耐力、极限连跳，加上数十年的白刃格斗与战术带领。他的弱点与伟大同源——无论社会如何变化，他只会选择"做对的事"。',
    en: 'Peak-human strength, speed and agility, decades of combat mastery, and unshakeable tactics; his flaw and his greatness are the same thing: he will always do what is right, whatever the world says.' },
  { zh: '年迈远征之后，他一度卸下盾牌、在山姆·威尔逊之后重返队长之位——近年主线里他是未来线与现代线之间横穿的老兵，仍然"凡人之躯，比肩神明"。',
    en: 'After aging and handing over the shield, he returned to the mantle in present continuity — a soldier still crossing timelines, still the proof that ordinary man can stand beside gods.' },
]);

bio('ch-thor', [
  { zh: '托尔·奥丁森是九界之父奥丁与大地女神盖亚（乔德）之子，神族最强大王的血统与大地神性的双重继承者。他的诞生围绕诸神黄昏的古老循环，凡间流传着无数个版本的起源，而不变的是：他与被收养的弟弟洛基一起长大，八岁便被送入矮人国度督造雷神之锤与神族的宝物。',
    en: 'Thor Odinson, son of Odin the All-Father and Jord (Gaea) the Earth-Goddess, was born into the Ragnarok cycles and raised beside his adopted brother Loki. At eight he was sent to Nidavellir to commission the dwarves\' treasures — among them Mjolnir.' },
  { zh: '他的英雄之路始于被父王放逐凡间的"不敬之罪"：在凡人岁月里学得谦卑，以"值得举锤"为由重生为雷神。此后他历经与洛基的世代相争、诸神黄昏的数度轮回、弑神事件中"不配举锤"的丧失与赎罪，直到现代主线中成为锻造雷神之斧、直面宇宙诸神之战的战争之王。',
    en: 'Exiled to Midgard for hubris, he earned back the hammer — rebirth through humility. Then came the Loki wars, repeated Ragnaroks, the Unworthy Thor era and its redemption, and in modern continuity the wars that rebuilt Asgard and the battlefields of the gods.' },
  { zh: '作为奥丁之子与大地女神之子，他兼具阿斯加德体魄与上古神力：千年寿命由金苹果延续，能如同神父一样继承奥丁之力（Odinforce），并因幼年被凤凰复活而握有宇宙级的神焰。',
    en: 'As son of the All-Father and an Elder God, he holds Asgardian physiques and the Odinforce; his lifespan is kept by golden apples, and his infant resurrection by the Phoenix left him with cosmic flame.' },
  { zh: '他的弱点同样是神性的傲慢与"只配用锤子解决一切"的简单信条；而雷神之力真正的来源——正如奥丁的教诲——不是锤子，而是他愿意为自己的王国流血的那种"破而后立"。',
    en: 'His flaw is godly pride and the old shortcut: hammer first. Yet the true source of his power, Odin taught, is not the hammer — it is the willingness to break and be rebuilt for his people.' },
  { zh: '在千年轮回的现代起点，他仍站在阿斯加德诸神的前列，同时作为九界的守护者与宇宙诸神的战争风暴——雷神的故事永远不会"完结"，只会翻开新的轮回。',
    en: 'In current continuity he stands foremost among the Asgardians, keeper of the Nine Realms and a storm against cosmic war — a story that never ends, only turns to the next cycle.' },
]);

bio('ch-natasha-romanoff', [
  { zh: '娜塔莉亚·阿莉亚诺娃"娜塔莎"·罗曼诺娃，代号黑寡妇。她连出生的年份与父母都不为人知——有个版本说 1928 年斯大林格勒大火中她侥幸逃生，由养父伊万·彼得罗维奇带大；随后被斯特鲁克男爵掳走，交到马德里坡的刺客组织"手合会"与苏俄秘密的"红房"里。',
    en: 'Natalia Alianovna "Natasha" Romanova, codename Black Widow. Her birth year and parents are unknown — a legend puts her as survivor of the 1928 Stalingrad fire, raised by Ivan Petrovich, then sold by Baron Strucker to the Hand in Madripoor and the Soviet Red Room.' },
  { zh: '在红房她接受最高规格的间谍与格斗训练，成为"黑寡妇"这个名字的化身；之后她变节投向西方的神盾局，成为复仇者的宿敌兼最终盟友，并多次在冷战、脑控洗脑与意识形态的边缘任务中扮演「致命的布谷鸟」，独自在善恶之间走钢丝。',
    en: 'Trained in the Red Room as the ultimate operative, she defected to S.H.I.E.L.D., tangled with and finally joined the Avengers — walking the razor between East and West, brainwashing and redemption, forever the deadliest double agent.' },
  { zh: '她曾担任复仇者核心的探员、黑色行动的情报通道，也曾拥有共生体后裔"Sliver"的力量；她的行动范围从红房的老对手布克斯坦，一路打到格鲁曼的代号战役。',
    en: 'She has been the Avengers\' intelligence spearhead, has wielded the Sliver symbiote, and fought from the Red Room\'s rival Bucharest to the battles that ended world-spanning wires.' },
  { zh: '能力：孩童时期即被"黑寡妇行动"生化强化（红房计划），格斗、枪械、伪装、审讯全能；她的脆弱是那堵心墙——唯一的亲人要么是任务，要么是罗曼诺夫式的孤独。',
    en: 'Biochemically enhanced since infancy by the Black Widow Ops Program, a master of combat, stealth and espionage; her weakness is the wall itself — her only kin are missions and solitude.' },
  { zh: '现代连环事故中她曾"死亡"后回归，潜入黑暗行动界与新版"黑寡妇"计划作斗争——她至今仍是复仇者情报网中无法替代的那根针，活在阴影里，也终将死在阴影的尽头。',
    en: 'In modern continuity she returned from apparent death and fights the new Black Widow Program — still the needle the Avengers cannot replace: born in shadow, and fine with dying at its end.' },
]);

bio('ch-clint-barton', [
  { zh: '克林顿·弗朗西斯"克林特"·巴顿，代号鹰眼。出身马戏团的孤儿，在"流浪团"里自学箭术，由一个收留他的弓箭手养大——他的箭术因此近乎天赋，后被师长训练成跨越职业界的顶尖射手。',
    en: 'Clinton Francis "Clint" Barton, codename Hawkeye. A circus orphan raised by travelling performers, he taught himself archery as a boy and climbed to the very top of his craft.' },
  { zh: '他起初以"恶徒"之名打家劫舍，被钢铁侠劝服后加入复仇者，成为团队里最没有超能力的成员之一；此后他经历忠诚的轮回——作为弓箭手与"隐形人"参与历次大战，也曾因家庭与自责退出又归来。',
    en: 'A criminal turned Avenger by Iron Man\'s example, he became the team\'s uneasiest member: no powers, only skill — and a career of loyalty, estrangement and returns.' },
  { zh: '在近年主线中，他获得 "Hawkeye in the Cage" 的权利——训练出女箭手凯特·毕肖普继承名号，自己也卷入街头与洗脑大事件的对抗，作为"低级科技英雄"在神明战场上打出一条凡人射线的路。',
    en: 'In recent decades he has trained Kate Bishop to take the name, and kept walking the street-level route — the plain human archer making a mortal shot count among immortals.' },
  { zh: '能力：百发百中的箭术（各类特殊箭头的发明）、特工级近战与侦察；他的"弱点"是身为凡人，但他把这点凡人化成了复仇者的底噪。',
    en: 'Marksmanship beyond compare, custom arrow-tech, espionage and brawling; his weakness is being human — and he turned that into the Avengers\' grounding hum.' },
]);

bio('ch-peter-parker-616', [
  { zh: '彼得·帕克出生于 1940 年前的纽约（初始设定：高中少年），父母理查德与玛丽·帕克是神盾局特工，在他是婴儿时双双身故，由本·帕克叔叔与梅·帕克阿姨抚养。一个科学天才、温和的优等生兼"少年摄影记者"。',
    en: 'Peter Parker, born to Richard and Mary Parker — S.H.I.E.L.D. operatives who died in his infancy — was raised by Aunt May and Uncle Ben in Queens: a science whiz, a quiet honor student, and a teenage shutterbug.' },
  { zh: '一次科学展上，被放射性蜘蛛咬过（感染后）的他获得了蛛类力量——速度、力量、吸附与预知危险的"蜘蛛感应"；"伟大力量伴随重大责任"的启蒙来自叔叔的真言：原谅那个放走抢劫犯之夜——它最终带走了本叔叔。',
    en: 'Bitten by a radioactive spider at a science fair, he gained the powers: spider-strength, agility, wall-crawling, and the premonition of danger. "With great power comes great responsibility" arrived the hard way — the night he let a robber go, and Uncle Ben died.' },
  { zh: '此后半个世纪是蜘蛛侠的传奇：从对抗秃鹫、章鱼博士、毒液到格温之死与绿魔老对手；又经历战争机械时代（内战、秘密入侵、八臂事故）、"蜘蛛侠宇宙"破裂与重生，成为纽约的街坊英雄巅峰。',
    en: 'Fifty years of legend followed — the Vulture, Doc Ock, Venom, Gwen\'s fate and the Goblin; then the Civil War, Spider-Verse and its breaks, each time rebuilt as the neighborhood\'s own hero.' },
  { zh: '能力：辐射蜘蛛赋予的体魄、自动蛛索织网、敏捷预判与超级反应；他的弱点从来不是力量，而是那句话的分量——为了责任，他失去了亲生父母、叔叔、校长与爱人的巨大代价。',
    en: 'Spider-powers, web-slingers, spider-sense and peerless agility; his burden is not the power but the price — parents, uncle, mentors and loves lost to the responsibility he chose.' },
  { zh: '近代主线中，他挣脱黑暗时代（被"极端毒液"附体、被王视"失格"）后再次成为三湾区与多元宇宙社区的守护者，并仍在进行"第二十次"重建的平凡日常。',
    en: 'In modern continuity, after the dark eras and the multiverse scars, he is again the friendly neighborhood hero rebuilding ordinary life — for the twentieth time.' },
]);

bio('ch-stephen-strange', [
  { zh: '斯蒂芬·文森特·斯特兰奇博士，全球顶尖的神经外科医生之一，出身于 1950 年代美国中产阶层；一场在「山雨欲来的急弯」上造成双手粉碎的车祸，把他从手术台推向了神秘的卡玛泰姬。',
    en: 'Dr. Stephen Vincent Strange, one of the world\'s finest neurosurgeons, had his hands destroyed in a car crash — a ruin that pushed the genius from the operating theatre toward the mystic city of Kamar-Taj.' },
  { zh: '在卡玛泰姬，"古老者"（远古领主）点化他法术之路，让他几经考验最终成为至尊法师：收服血魔书、"神圣力量"守护世纪乃至亲手推开异维度大门的守卫者——从"信仰破碎的医生"到"神秘学大师"的蜕变。',
    en: 'At Kamar-Taj the Ancient One trained him in the mystic arts, and through trials he inherited the mantle of Sorcerer Supreme — the book of the dark ones, the guardianship of the earthly gates, and a journey from broken surgeon to master of the unseen.' },
  { zh: '他曾在死斗中击穿多玛姆的维度、用阿加摩托之眼与黄宝石时间封印宇宙的"灭世恶梦"；此后在黑暗魔法与"高维退化"的对决中甘愿背负因果重担，成为纽约圣殿最后可靠的防御者。',
    en: 'From facing Dormammu through the time loops of the Eye of Agamotto, to the wars against dark sorcerers and fallen dimensions, he has become the final reliable ward of the New York Sanctum and its oaths.' },
  { zh: '能力：法术体系（咒法、火焰咒印、星体投射、维度传送与封印）；他的"弱点"恰恰是知性——斯特兰奇往往因思考太深而成为自己最大的阻碍，直到"每个问题都还有别的路"。',
    en: 'Spells, astral projection, dimension crating and sealing; his flaw is the very intellect he serves — he thinks too deep, until he remembers there is always another step.' },
  { zh: '现代主线中，他依然是地球的至尊法师，坐镇纽约圣殿，在新旧维度与"绿之带"的混沌里守护凡人世界。',
    en: 'In current continuity he remains Earth\'s Sorcerer Supreme in the Manhattan Sanctum, holding the line against the chaos of old and new dimensions alike.' },
]);

bio('ch-wanda-maximoff', [
  { zh: '万达·马克西莫夫生于东欧一个寻常的小镇——传奇版设定中，她是万磁王（马克思·艾森哈特）的女儿，与双胞胎兄弟皮特罗一同在初代复仇者时代崭露头角，后成为复联无人能代班的核心法师成员。',
    en: 'Wanda Maximoff, born in the fictional Transian village to Max Eisenhardt (later the "magneto" lineage), was shaped into a sorceress-warrior beside her twin Pietro; she joined the Avengers after their debut, becoming one of the iconic 47th-issue members.' },
  { zh: '她与幻视相爱（并把他的"无机灵魂"当作伴侣）——"融合之石"的故事线谱写她命运的高潮：她逐渐被恶梦缠身，数次精神崩溃，演化出"复仇者解体"与"M 家"事件的全世界噩梦：把变种人一统抹去，几乎毁掉现实。',
    en: 'With Vision she found love, and through the "fusion-stone" storylines her fate spiraled: the breakdowns, the Dissassembled arc, and the House of M — the catastrophic wish that drained mutantkind from the world.' },
  { zh: '近年来她的故事转向爱与重生：《复仇者联盟 V 的战争》后她在"黑暗统治"与"寡妇之镜"等新篇里与亲妹妹（改名）和解、直面玛丽·盖尔阵营——法师万达真正学会"用魔法而非诅咒"修复自己的命运。',
    en: 'Recent years turned to healing: the Trials of the Darkhold, her sister\'s lost years, and finally the rebirth in which Wanda the witch chooses restoration over ruin.' },
  { zh: '能力：混沌魔法与绯红女巫之力的最高级实例——从念力、塑能到现实改写；她的“弱点”就是痛苦本身：她的力量爆发几乎总以她失去的一切为引信。',
    en: 'Chaos magic at its maximal instance — telekinesis, energy shaping, reality revision; her weakness is her own grief, the fuse of every catastrophe she has ever caused.' },
  { zh: '现代主线的她经历了死亡与复活的轮回，仍以「复仇者级法师」的身份断续归来——而和平与繁荣的版本里，她也终于拿到"赎罪与重生"的结局：一个愿意疗愈世界的女巫。',
    en: 'Through death and resurrection in current continuity, she keeps returning as the Avenger-level sorceress who finally chooses healer over weapon — the witch who chooses to mend the world.' },
]);

bio('ch-black-panther-tchalla', [
  { zh: '特查拉，瓦坎达的王储与黑豹。他的传奇从瓦坎达——非洲的古老白金之国——起：古老的传统让他必须服用心形草、化身黑豹，成为人神之间的沉默守卫。',
    en: 'T\'Challa, crown prince of Wakanda and the Black Panther. His legend begins in the ancient ageless land of vibranium: the Heart-Shaped Herb grants the Panther\'s power, and the mantle of king-god-guardian passes to him.' },
  { zh: '他的生涯多次与"外界文明"冲突：与兄长的岳父辈纠葛（小国王登基），又与复仇者的内战漩涡、风暴女（暴风）的婚约交织——黑豹与女皇联手便几乎是"人类最强夫妇"。',
    en: 'His reign crossed the outside world again and again: the wars with his usurpers, the Civil War of the Avengers, his marriage to Storm — together they were near-invincible in politics and battle.' },
  { zh: '在他的黄金时代之后（瓦坎达遭入侵、他与族人在暗黑统治期投敌阴影下），"宇宙之王"与"灾祸的王"两段插曲中，他一度离开地球、又最终归来重塑瓦坎达的未来。',
    en: 'He even left Earth behind in the cosmic arcs — the king-vaunted run that saw him ascend beyond the planet, then return to rebuild Wakanda\'s place among nations.' },
  { zh: '能力：心形草强化的体魄、振金战服的科技加成、顶级格斗与军事指挥；他的力量与负担同源——王室的责任与黑豹的神秘仪式。',
    en: 'Herb-boosted physique, vibranium tech, master combat and war-leadership; power and burden are the same thing: the throne and the Panther\'s rites.' },
  { zh: '现代主线中，他以 "瓦坎达之王与黑豹" 的双重身份矗立——既是地球最强的超级战士，又以神秘学顾问的冷静面对多元宇宙的危机（近年由新生代继承者并入多条时间线）。',
    en: 'In current continuity he stands as king-and-Panther — Earth\'s premier super-soldier, and the calm mystic-warrior facing a multiverse not yet done with him.' },
]);
