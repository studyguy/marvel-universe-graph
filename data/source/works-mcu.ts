/** MCU 作品全集：电影、剧集、特别篇（含待映） */
import { wk, E } from './registry';
import { L2 } from '../taxonomy';

const MCU = 'chan-mcu';
const U = 'uni-earth-199999';

/* ============================== Phase 1 ============================== */
wk('im1', 'film', '钢铁侠', 'Iron Man', '2008 年托尼·斯塔克被俘后打造战甲自我救赎，开启整个漫威电影宇宙的第一块多米诺。', 'Tony Stark builds a suit in captivity (2008), the domino that starts the MCU.', { year: '2008', phase: '第一阶段 Phase 1', status: L2('已上映', 'Released'), creator: 'Jon Favreau' });
wk('hulk', 'film', '无敌浩克', 'The Incredible Hulk', '布鲁斯· banner 躲避军方追捕并与憎恶对决的孤狼式绿灯之作。', 'Bruce Banner evades the military and battles the Abomination (2008).', { year: '2008', phase: '第一阶段 Phase 1', status: L2('已上映', 'Released'), creator: 'Louis Leterrier' });
wk('im2', 'film', '钢铁侠2', 'Iron Man 2', '钯中毒与军备听证内外交困，托尼直面惠普与寡妇的登场。', 'Palladium poisoning and Whiplash; Black Widow debuts (2010).', { year: '2010', phase: '第一阶段 Phase 1', status: L2('已上映', 'Released'), creator: 'Jon Favreau' });
wk('thor1', 'film', '雷神', 'Thor', '被放逐人间的雷神王子学会谦卑，九界格局首次展开。', 'The exiled thunder god learns humility on Earth (2011).', { year: '2011', phase: '第一阶段 Phase 1', status: L2('已上映', 'Released'), creator: 'Kenneth Branagh' });
wk('ca-tfa', 'film', '美国队长：复仇者先锋', 'Captain America: The First Avenger', '二战 skinny Steve 注射血清成为超级士兵，为挫败红骷髅长眠冰海。', 'Skinny Steve becomes the super soldier and sleeps in ice to stop Red Skull (2011).', { year: '2011', phase: '第一阶段 Phase 1', status: L2('已上映', 'Released'), creator: 'Joe Johnston' });
wk('avengers1', 'film', '复仇者联盟', 'The Avengers', '宇宙魔方危机迫使群雄首次集结，纽约之战奠定复联传奇。', 'The Tesseract crisis assembles Earth\'s Mightiest Heroes; the Battle of New York (2012).', { year: '2012', phase: '第一阶段 Phase 1', status: L2('已上映', 'Released'), creator: 'Joss Whedon' });
/* ============================== Phase 2 ============================== */
wk('im3', 'film', '钢铁侠3', 'Iron Man 3', '焦虑症缠身的托尼在满大人迷局中证明"我就是钢铁侠"。', 'A rattled Tony proves "I am Iron Man" in the Mandarin mystery (2013).', { year: '2013', phase: '第二阶段 Phase 2', status: L2('已上映', 'Released'), creator: 'Shane Black' });
wk('thor2', 'film', '雷神2：黑暗世界', 'Thor: The Dark World', '以太（现实宝石）现世，黑暗精灵欲令宇宙重归黑暗。', 'The Aether surfaces; Dark Elves seek eternal darkness (2013).', { year: '2013', phase: '第二阶段 Phase 2', status: L2('已上映', 'Released'), creator: 'Alan Taylor' });
wk('ca-tws', 'film', '美国队长2：冬日战士', 'Captain America: The Winter Soldier', '神盾局被九头蛇渗透，冬兵身份揭晓的现代谍战经典。', 'Hydra eats S.H.I.E.L.D. from within; the Winter Soldier revealed (2014).', { year: '2014', phase: '第二阶段 Phase 2', status: L2('已上映', 'Released'), creator: 'Russo Brothers' });
wk('gotg1', 'film', '银河护卫队', 'Guardians of the Galaxy', '星爵率乌合之众夺取宇宙灵球（力量宝石），首支太空超英团成立。', 'Star-Lord\'s misfits secure the Power Stone; a spacefaring team is born (2014).', { year: '2014', phase: '第二阶段 Phase 2', status: L2('已上映', 'Released'), creator: 'James Gunn' });
wk('avengers2', 'film', '复仇者联盟2：奥创纪元', 'Avengers: Age of Ultron', '托尼的维和 AI 奥创失控，绯红女巫与幻视登场，索科维亚坠落。', 'Tony\'s peacekeeping AI goes rogue; Wanda and Vision debut as Sokovia falls (2015).', { year: '2015', phase: '第二阶段 Phase 2', status: L2('已上映', 'Released'), creator: 'Joss Whedon' });
wk('antman1', 'film', '蚁人', 'Ant-Man', '前科惯偷斯科特·朗穿上皮姆战衣，微观世界的大门打开。', 'Ex-con Scott Lang dons the Pym suit and shrinks into a heist (2015).', { year: '2015', phase: '第二阶段 Phase 2', status: L2('已上映', 'Released'), creator: 'Peyton Reed' });
/* ============================== Phase 3 ============================== */
wk('ca-cw', 'film', '美国队长3：内战', 'Captain America: Civil War', '索科维亚协议撕裂复联，机场大战成为宇宙分水岭。', 'The Sokovia Accords split the Avengers over the airport battlefield (2016).', { year: '2016', phase: '第三阶段 Phase 3', status: L2('已上映', 'Released'), creator: 'Russo Brothers' });
wk('doctor-strange1', 'film', '奇异博士', 'Doctor Strange', '外科天才断手后求医卡玛泰姬，从傲慢医生到法师守门人。', 'A surgeon\'s ruined hands lead him to Kamar-Taj and the mystic arts (2016).', { year: '2016', phase: '第三阶段 Phase 3', status: L2('已上映', 'Released'), creator: 'Scott Derrickson' });
wk('gotg2', 'film', '银河护卫队2', 'Guardians of the Galaxy Vol. 2', '星爵生父活体星球伊戈的父爱陷阱与家族和解。', 'Star-Lord meets his celestial father Ego — a paternal trap (2017).', { year: '2017', phase: '第三阶段 Phase 3', status: L2('已上映', 'Released'), creator: 'James Gunn' });
wk('smh', 'film', '蜘蛛侠：英雄归来', 'Spider-Man: Homecoming', '少年帕克在托尼的 mentorship 下对上拾荒反派秃鹫。', 'Teenage Peter balances homework and the Vulture under Stark\'s wing (2017).', { year: '2017', phase: '第三阶段 Phase 3', status: L2('已上映', 'Released'), creator: 'Jon Watts' });
wk('thor3', 'film', '雷神3：诸神黄昏', 'Thor: Ragnarok', '海拉归来毁灭阿斯加德，雷神在萨卡星失去锤子找回自己。', 'Hela destroys Asgard; Thor loses the hammer and finds himself (2017).', { year: '2017', phase: '第三阶段 Phase 3', status: L2('已上映', 'Released'), creator: 'Taika Waititi' });
wk('black-panther1', 'film', '黑豹', 'Black Panther', '特查拉继位瓦坎达国王，Killmonger 逼问孤立主义的代价。', 'T\'Challa\'s throne challenged by Killmonger and Wakanda\'s isolation (2018).', { year: '2018', phase: '第三阶段 Phase 3', status: L2('已上映', 'Released'), creator: 'Ryan Coogler' });
wk('infinity-war', 'film', '复仇者联盟3：无限战争', 'Avengers: Infinity War', '灭霸集齐六宝石一个响指抹除半个宇宙生命，史诗级惨败。', 'Thanos completes the Gauntlet and dusts half of all life (2018).', { year: '2018', phase: '第三阶段 Phase 3', status: L2('已上映', 'Released'), creator: 'Russo Brothers' });
wk('antman2', 'film', '蚁人2：黄蜂女现身', 'Ant-Man and the Wasp', '营救量子领域中的初代黄蜂女，与响指擦肩的彩蛋结局。', 'Rescuing Janet from the Quantum Realm — seconds from the Snap (2018).', { year: '2018', phase: '第三阶段 Phase 3', status: L2('已上映', 'Released'), creator: 'Peyton Reed' });
wk('captain-marvel1', 'film', '惊奇队长', 'Captain Marvel', '90 年代卡罗尔的失忆与觉醒，宇宙魔方的另一段旅程。', 'Carol Danvers rediscovers herself in 1995, Tesseract in tow (2019).', { year: '2019', phase: '第三阶段 Phase 3', status: L2('已上映', 'Released'), creator: 'Anna Boden, Ryan Fleck' });
wk('endgame', 'film', '复仇者联盟4：终局之战', 'Avengers: Endgame', '时间劫持逆转响指，"Avengers, assemble"下的最后一战。', 'The Time Heist undoes the Snap; the last "Avengers assemble" (2019).', { year: '2019', phase: '第三阶段 Phase 3', status: L2('已上映', 'Released'), creator: 'Russo Brothers' });
wk('ffh', 'film', '蜘蛛侠：英雄远征', 'Spider-Man: Far From Home', '后终局时代的欧洲之旅，神秘客的幻象骗局与身份暴露。', 'Peter\'s European trip undone by Mysterio\'s illusions and a doxxed identity (2019).', { year: '2019', phase: '第三阶段 Phase 3', status: L2('已上映', 'Released'), creator: 'Jon Watts' });
/* ============================== Phase 4 ============================== */
wk('black-widow', 'film', '黑寡妇', 'Black Widow', '娜塔莎直面红房与德雷科夫，妹妹叶莲娜接过衣钵。', 'Natasha torched the Red Room; Yelena inherits the mantle (2021).', { year: '2021', phase: '第四阶段 Phase 4', status: L2('已上映', 'Released'), creator: 'Cate Shortland' });
wk('shang-chi', 'film', '尚气与十环传奇', 'Shang-Chi and the Legend of the Ten Rings', '文武之子尚气逃离十环，最终在塔罗直面父亲与噬魂兽。', 'Wenwu\'s son escapes the Ten Rings and faces him at Ta Lo (2021).', { year: '2021', phase: '第四阶段 Phase 4', status: L2('已上映', 'Released'), creator: 'Destin Daniel Cretton' });
wk('eternals', 'film', '永恒族', 'Eternals', '天神组造物七千年后聚首，抉择阻止"涌现"还是牺牲地球。', 'The Eternals reunite to stop the Emergence — or let Earth die (2021).', { year: '2021', phase: '第四阶段 Phase 4', status: L2('已上映', 'Released'), creator: 'Chloé Zhao' });
wk('nwh', 'film', '蜘蛛侠：英雄无归', 'Spider-Man: No Way Home', '身份暴露引发多元裂缝，三代蜘蛛侠同框拯救彼此。', 'A botched spell cracks the multiverse open; three Spider-Men unite (2021).', { year: '2021', phase: '第四阶段 Phase 4', status: L2('已上映', 'Released'), creator: 'Jon Watts' });
wk('mom', 'film', '奇异博士2：疯狂多元宇宙', 'Doctor Strange in the Multiverse of Madness', '美国·查维兹的逃亡之旅，绯红女巫追逐暗神之书的疯狂巡游。', 'America Chavez on the run from a Darkhold-corrupted Wanda (2022).', { year: '2022', phase: '第四阶段 Phase 4', status: L2('已上映', 'Released'), creator: 'Sam Raimi' });
wk('love-thunder', 'film', '雷神4：爱与雷霆', 'Thor: Love and Thunder', '屠神者格尔追杀众神，简·福斯特举起重锤成为女雷神。', 'Gorr the God Butcher hunts gods; Jane lifts Mjolnir (2022).', { year: '2022', phase: '第四阶段 Phase 4', status: L2('已上映', 'Released'), creator: 'Taika Waititi' });
wk('wakanda-forever', 'film', '黑豹2：瓦坎达万岁', 'Black Panther: Wakanda Forever', '特查拉身后，舒芮接棒黑豹，深海王国塔罗坎浮出水面。', 'Shuri takes the mantle as Talokan surfaces from the deep (2022).', { year: '2022', phase: '第四阶段 Phase 4', status: L2('已上映', 'Released'), creator: 'Ryan Coogler' });
/* ============================== Phase 5 ============================== */
wk('the-marvels', 'film', '惊奇队长2', 'The Marvels', '卡罗尔、莫妮卡与卡玛拉的光互换轨迹，领袖气场的接力。', 'Carol, Monica and Kamala swap places with every light jump (2023).', { year: '2023', phase: '第五阶段 Phase 5', status: L2('已上映', 'Released'), creator: 'Nia DaCosta' });
wk('quantumania', 'film', '蚁人与黄蜂女：量子狂潮', 'Ant-Man and the Wasp: Quantumania', '一家三口误入量子领域，征服者康的帝国初露獠牙。', 'The Lang-Van Dyne family meets Kang the Conqueror in the Quantum Realm (2023).', { year: '2023', phase: '第五阶段 Phase 5', status: L2('已上映', 'Released'), creator: 'Peyton Reed' });
wk('gotg3', 'film', '银河护卫队3', 'Guardians of the Galaxy Vol. 3', '火箭浣熊的出身悲剧与至高进化的高塔，护卫队温情告别。', 'Rocket\'s tragic origin vs. the High Evolutionary; a heartfelt farewell (2023).', { year: '2023', phase: '第五阶段 Phase 5', status: L2('已上映', 'Released'), creator: 'James Gunn' });
wk('deadpool-wolverine', 'film', '死侍与金刚狼', 'Deadpool & Wolverine', '韦德为救自己的时间线拖上"最烂金刚狼"，大战卡珊德拉与TVA。', 'Wade drags the "worst Wolverine" against Cassandra Nova and the TVA (2024).', { year: '2024', phase: '第五阶段 Phase 5', status: L2('已上映', 'Released'), creator: 'Shawn Levy' });
wk('ca-bnw', 'film', '美国队长4：美丽新世界', 'Captain America: Brave New World', '山姆·威尔逊首部个人队长电影，与红色浩克的对决。', 'Sam Wilson\'s first solo Cap film against Red Hulk (2025).', { year: '2025', phase: '第五阶段 Phase 5', status: L2('已上映', 'Released'), creator: 'Julius Onah' });
wk('thunderbolts', 'film', '雷霆特攻队*', 'Thunderbolts*', '一队边缘反英雄被瓦伦蒂娜拼凑成"新复仇者"。', 'Valentina assembles misfit antiheroes into the "New Avengers" (2025).', { year: '2025', phase: '第五阶段 Phase 5', status: L2('已上映', 'Released'), creator: 'Jake Schreier' });
wk('fantastic-four-fs', 'film', '神奇四侠：初露锋芒', 'The Fantastic Four: First Steps', 'Earth-828 的初代家庭迎战行星吞噬者与银影侠莎拉·巴尔。', 'Earth-828\'s first family faces Galactus and Shalla-Bal (2025).', { year: '2025', phase: '第六阶段 Phase 6', status: L2('已上映', 'Released'), creator: 'Matt Shakman' });
wk('sm-bnd', 'film', '蜘蛛侠：崭新之日', 'Spider-Man: Brand New Day', '身份重置后的帕克独自迎接崭新街头篇章（2026）。', 'A reset Peter opens a fresh street-level chapter (2026).', { year: '2026', phase: '第六阶段 Phase 6', status: L2('已上映', 'Released'), creator: 'Destin Daniel Cretton' });
wk('avengers-doomsday', 'film', '复仇者联盟5：毁灭日', 'Avengers: Doomsday', '毁灭博士降临多元宇宙的集结大战（定档 2026-12-18）。', 'Doctor Doom descends on the multiverse (Dec 18, 2026).', { year: '2026（待映 Upcoming）', phase: '第六阶段 Phase 6', status: L2('待映', 'Upcoming'), creator: 'Russo Brothers' });
wk('avengers-secret-wars', 'film', '复仇者联盟6：秘密战争', 'Avengers: Secret Wars', '多元宇宙传奇的终章（定档 2027-12-17）。', 'The Multiversal Saga finale (Dec 17, 2027).', { year: '2027（待映 Upcoming）', phase: '第六阶段 Phase 6', status: L2('待映', 'Upcoming'), creator: 'Russo Brothers' });

/* ============================== MCU 剧集与特别篇 ============================== */
wk('wandavision', 'series', '旺达幻视', 'WandaVision', '情境喜剧外壳下的悲恸之书：旺达以悲伤改写西景镇现实。', 'A sitcom-shaped grief study: Wanda rewrites Westview (2021).', { year: '2021', phase: '第四阶段 Phase 4', status: L2('已播出', 'Released'), creator: 'Jac Schaeffer' });
wk('falcon-ws', 'series', '猎鹰与冬兵', 'The Falcon and the Winter Soldier', '盾牌的继承权之争与以赛亚·布拉德利的历史清算。', 'The shield\'s inheritance and Isaiah Bradley\'s reckoning (2021).', { year: '2021', phase: '第四阶段 Phase 4', status: L2('已播出', 'Released'), creator: 'Malcolm Spellman' });
wk('loki', 'series', '洛基', 'Loki', '洛基被 TVA 逮捕，一路走到时间尽头的自我救赎史诗（两季）。', 'Loki, arrested by the TVA, walks to the end of time (2 seasons, 2021-23).', { year: '2021–2023', phase: '第四阶段 Phase 4', status: L2('已播出', 'Released'), creator: 'Michael Waldron' });
wk('what-if', 'animation', '假如…？', 'What If...?', '观察者乌阿图讲述多元宇宙的"如果"：卡特队长、至高奇异等（三季）。', 'Uatu narrates the multiverse\'s what-ifs: Captain Carter, Strange Supreme (3 seasons).', { year: '2021–2024', phase: '第四阶段 Phase 4', status: L2('已播出', 'Released'), creator: 'A.C. Bradley' });
wk('hawkeye', 'series', '鹰眼', 'Hawkeye', '圣诞纽约，克林特与凯特·毕肖普的师徒搭档与浪人清算。', 'A NYC Christmas: Clint and Kate\'s mentor-partnership (2021).', { year: '2021', phase: '第四阶段 Phase 4', status: L2('已播出', 'Released'), creator: 'Jonathan Igla' });
wk('moon-knight', 'series', '月亮骑士', 'Moon Knight', '多重人格马克/斯蒂文在孔苏的权柄下追猎阿米特。', 'Marc/Steven\'s fractured minds serve Khonshu against Ammit (2022).', { year: '2022', phase: '第四阶段 Phase 4', status: L2('已播出', 'Released'), creator: 'Jeremy Slater' });
wk('ms-marvel', 'series', '惊奇少女', 'Ms. Marvel', '泽侯贝里血统的卡玛拉以能量手环开启英雄之路。', 'Kamala Khan\'s bangle unlocks her Zen-Whoberi legacy (2022).', { year: '2022', phase: '第四阶段 Phase 4', status: L2('已播出', 'Released'), creator: 'Bisha K. Ali' });
wk('she-hulk', 'series', '女浩克：律师', 'She-Hulk: Attorney at Law', '律师珍在超级人类法庭与自身伽马身份间的喜剧拉扯。', 'Lawyer Jen juggles gamma life and superhuman law (2022).', { year: '2022', phase: '第四阶段 Phase 4', status: L2('已播出', 'Released'), creator: 'Jessica Gao' });
wk('secret-invasion', 'series', '秘密入侵', 'Secret Invasion', '斯克鲁人渗透危机下的神盾余晖与背叛。', 'Skrull infiltration and the last days of Fury\'s trust (2023).', { year: '2023', phase: '第五阶段 Phase 5', status: L2('已播出', 'Released'), creator: 'Kyle Bradstreet' });
wk('i-am-groot', 'animation', '我是格鲁特', 'I Am Groot', '格鲁特宝宝的单集短篇喜剧（两季）。', 'Baby Groot shorts (2 seasons).', { year: '2022–2023', phase: '第四阶段 Phase 4', status: L2('已播出', 'Released'), creator: 'Kirsten Lepore' });
wk('echo', 'series', '回声', 'Echo', '玛雅·洛佩兹回到故乡直面金并与祖辈记忆。', 'Maya Lopez returns home to face Fisk and her ancestors (2024).', { year: '2024', phase: '第五阶段 Phase 5', status: L2('已播出', 'Released'), creator: 'Marion Dayre' });
wk('agatha', 'series', '女巫阿加莎', 'Agatha All Along', '阿加莎率女巫团重走巫师之路，绿巫真身揭晓。', 'Agatha walks the Witches\' Road; the Green Witch revealed (2024).', { year: '2024', phase: '第五阶段 Phase 5', status: L2('已播出', 'Released'), creator: 'Jac Schaeffer' });
wk('daredevil-ba', 'series', '夜魔侠：重生', 'Daredevil: Born Again', '马特与金并的政坛重逢，地狱厨房再燃战火。', 'Matt and Fisk reunite in politics; Hell\'s Kitchen burns again (2025).', { year: '2025', phase: '第五阶段 Phase 5', status: L2('已播出', 'Released'), creator: 'Dario Scardapane' });
wk('ironheart', 'series', '钢铁之心', 'Ironheart', '天才少女瑞里·威廉姆斯的战甲与魔法纠葛。', 'Riri Williams\' armor entangles with magic (2025).', { year: '2025', phase: '第五阶段 Phase 5', status: L2('已播出', 'Released'), creator: 'Chinaka Hodge' });
wk('eyes-of-wakanda', 'animation', '瓦坎达之眼', 'Eyes of Wakanda', '纵横历史的瓦坎达特工战线（动画）。', 'Wakandan agents across history (animation, 2025).', { year: '2025', phase: '第五阶段 Phase 5', status: L2('已播出', 'Released'), creator: 'Todd Harris' });
wk('werewolf-by-night', 'special', '狼人之夜', 'Werewolf by Night', '怪物猎人聚会上的狼人夜惊（黑白特别篇）。', 'Monster hunters meet a werewolf (B&W special, 2022).', { year: '2022', phase: '第四阶段 Phase 4', status: L2('已播出', 'Released'), creator: 'Michael Giacchino' });
wk('gotg-holiday', 'special', '银河护卫队：节日特别篇', 'The Guardians of the Galaxy Holiday Special', '护卫队为星爵偷圣诞礼物的假日闹剧。', 'The team kidnaps an actor for Star-Lord\'s Christmas (2022).', { year: '2022', phase: '第四阶段 Phase 4', status: L2('已播出', 'Released'), creator: 'James Gunn' });
wk('visionquest', 'series', '幻视探索', 'VisionQuest', '白色幻视追寻记忆的旅程（2026-10 待播）。', 'White Vision seeks his memories (Oct 2026).', { year: '2026（待播 Upcoming）', phase: '第六阶段 Phase 6', status: L2('待播', 'Upcoming'), creator: 'Terry Matalas' });
wk('xmen97', 'animation', 'X战警97', 'X-Men \'97', '1992 动画正传续作：万磁王掌校与强过化的泽诺布拉特危机。', 'The TAS continuity continues: Magneto\'s school, Bastion\'s siege (2024).', { year: '2024', phase: '—', status: L2('已播出', 'Released'), creator: 'Beau DeMayo' });
wk('yfnsm', 'animation', '你的友好邻居蜘蛛侠', 'Your Friendly Neighborhood Spider-Man', '另类起源的少年帕克与诺曼导师线（动画）。', 'An alt-origin Peter mentored by Norman (animation, 2025).', { year: '2025', phase: '—', status: L2('已播出', 'Released'), creator: 'Jeff Trammell' });

/* ---------- 频道归属与设定宇宙 ---------- */
const mcuWorks = [
  'im1', 'hulk', 'im2', 'thor1', 'ca-tfa', 'avengers1', 'im3', 'thor2', 'ca-tws', 'gotg1',
  'avengers2', 'antman1', 'ca-cw', 'doctor-strange1', 'gotg2', 'smh', 'thor3', 'black-panther1',
  'infinity-war', 'antman2', 'captain-marvel1', 'endgame', 'ffh', 'black-widow', 'shang-chi',
  'eternals', 'nwh', 'mom', 'love-thunder', 'wakanda-forever', 'the-marvels', 'quantumania',
  'gotg3', 'deadpool-wolverine', 'ca-bnw', 'thunderbolts', 'fantastic-four-fs', 'sm-bnd',
  'avengers-doomsday', 'avengers-secret-wars',
  'wandavision', 'falcon-ws', 'loki', 'what-if', 'hawkeye', 'moon-knight', 'ms-marvel', 'she-hulk',
  'secret-invasion', 'i-am-groot', 'echo', 'agatha', 'daredevil-ba', 'ironheart', 'eyes-of-wakanda',
  'werewolf-by-night', 'gotg-holiday', 'visionquest',
];
for (const w of mcuWorks) E(`wk-${w}`, MCU, 'belongs-to-channel');
E('wk-xmen97', 'chan-anime', 'belongs-to-channel');
E('wk-yfnsm', 'chan-anime', 'belongs-to-channel');
for (const w of mcuWorks.filter((x) => x !== 'avengers-doomsday' && x !== 'avengers-secret-wars')) E(`wk-${w}`, U, 'set-in');
E('wk-fantastic-four-fs', 'uni-earth-828', 'set-in');
E('wk-avengers-doomsday', 'uni-earth-199999', 'set-in');
E('wk-avengers-secret-wars', 'uni-earth-199999', 'set-in');

/* ---------- 时间线骨架（作品因果） ---------- */
E('wk-im1', 'wk-im2', 'sequel-of');
E('wk-im2', 'wk-im3', 'sequel-of');
E('wk-thor1', 'wk-thor2', 'sequel-of');
E('wk-thor2', 'wk-thor3', 'sequel-of');
E('wk-thor3', 'wk-love-thunder', 'sequel-of');
E('wk-ca-tfa', 'wk-ca-tws', 'sequel-of');
E('wk-ca-tws', 'wk-ca-cw', 'sequel-of');
E('wk-ca-cw', 'wk-ca-bnw', 'sequel-of');
E('wk-avengers1', 'wk-avengers2', 'sequel-of');
E('wk-avengers2', 'wk-infinity-war', 'sequel-of');
E('wk-infinity-war', 'wk-endgame', 'sequel-of');
E('wk-endgame', 'wk-avengers-doomsday', 'same-series');
E('wk-avengers-doomsday', 'wk-avengers-secret-wars', 'sequel-of');
E('wk-gotg1', 'wk-gotg2', 'sequel-of');
E('wk-gotg2', 'wk-gotg3', 'sequel-of');
E('wk-gotg1', 'wk-gotg-holiday', 'same-series');
E('wk-antman1', 'wk-antman2', 'sequel-of');
E('wk-antman2', 'wk-quantumania', 'sequel-of');
E('wk-smh', 'wk-ffh', 'sequel-of');
E('wk-ffh', 'wk-nwh', 'sequel-of');
E('wk-nwh', 'wk-sm-bnd', 'sequel-of');
E('wk-black-panther1', 'wk-wakanda-forever', 'sequel-of');
E('wk-doctor-strange1', 'wk-mom', 'sequel-of');
E('wk-captain-marvel1', 'wk-the-marvels', 'sequel-of');
E('wk-black-widow', 'wk-hawkeye', 'same-timeline');
E('wk-wandavision', 'wk-agatha', 'spinoff-of');
E('wk-wandavision', 'wk-mom', 'same-timeline');
E('wk-falcon-ws', 'wk-thunderbolts', 'same-timeline');
E('wk-loki', 'wk-deadpool-wolverine', 'same-timeline');
E('wk-what-if', 'wk-loki', 'same-timeline');
E('wk-moon-knight', 'wk-echo', 'same-timeline');
E('wk-nwh', 'wk-daredevil-ba', 'same-timeline');
E('wk-im1', 'wk-fantastic-four-fs', 'crossover-with', {});
E('wk-eternals', 'wk-black-panther1', 'same-timeline');
E('wk-hulk', 'wk-avengers1', 'same-timeline');
E('wk-quantumania', 'wk-avengers-doomsday', 'led-to', { kind: L2('间接', 'Indirect') });
E('wk-deadpool-wolverine', 'wk-avengers-doomsday', 'led-to', { kind: L2('间接', 'Indirect') });
E('wk-loki', 'wk-avengers-doomsday', 'led-to', { kind: L2('间接', 'Indirect') });
