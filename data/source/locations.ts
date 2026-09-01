/** 地点与场景 */
import { loc, E } from './registry';
import { L2 } from '../taxonomy';

const U99 = 'uni-earth-199999';

loc('new-york', 'city', '纽约市', 'New York City', '复仇者的大本营与战场中心：从纽约之战到圣所与非凡大街。', 'HQ and battlefield of the Avengers, from the Chitauri invasion onward.', { region: L2('美国东海岸', 'US East Coast'), universe: U99, first: '美国队长：复仇者先锋 (2011)' });
loc('brooklyn', 'city', '布鲁克林', 'Brooklyn', '史蒂夫与巴基的故乡街区。', 'Home borough of Steve and Bucky.', { region: L2('纽约', 'New York'), universe: U99, first: '美国队长：复仇者先锋 (2011)' });
loc('queens', 'city', '皇后区', 'Queens', '彼得·帕克长大的法拉盛街区。', 'Peter Parker\'s Forest Hills home.', { region: L2('纽约', 'New York'), universe: U99, first: '美国队长3：内战 (2016)' });
loc('wakanda', 'city', '瓦坎达', 'Wakanda', '振金科技之国，藏身非洲群山的隐秘王国。', 'The vibranium kingdom hidden in African mountains.', { region: L2('非洲', 'Africa'), universe: U99, first: '美国队长3：内战 (2016)' }, { zh: ['瓦坎达王国'], en: ['Kingdom of Wakanda'] });
loc('golden-city', 'facility', '黄金之城', 'Birnin Zana (Golden City)', '瓦坎达首都，王宫与舒芮实验室所在。', 'Wakanda\'s capital: palace and Shuri\'s lab.', { region: L2('瓦坎达', 'Wakanda'), universe: U99, first: '黑豹 (2018)' });
loc('avengers-compound', 'facility', '复仇者基地', 'Avengers Compound', '纽约上州的复仇者总部与量子隧道所在。', 'Upstate HQ with the Quantum Tunnel.', { region: L2('纽约州', 'New York State'), universe: U99, first: '蚁人 (2015)' });
loc('stark-tower', 'facility', '斯塔克大厦', 'Stark Tower / Avengers Tower', '曼哈顿中城的复联第一总部，后卖给消失的"神秘买家"。', 'Midtown HQ of the early Avengers, later sold.', { region: L2('曼哈顿', 'Manhattan'), universe: U99, first: '复仇者联盟 (2012)' });
loc('sanctum', 'facility', '至圣所', 'Sanctum Sanctorum', '177A 布利克街的法师据点，守护地球的三圣所之一。', '177A Bleecker Street: New York\'s mystic bastion.', { region: L2('曼哈顿', 'Manhattan'), universe: U99, first: '奇异博士 (2016)' });
loc('kamar-taj-loc', 'facility', '卡玛泰姬', 'Kamar-Taj', '尼泊尔加德满都的法师修行圣地。', 'The mystic academy in Kathmandu.', { region: L2('尼泊尔', 'Nepal'), universe: U99, first: '奇异博士 (2016)' });
loc('westview', 'city', '西景镇', 'Westview', '被旺达情境魔法包裹的新泽西小镇。', 'The New Jersey town inside Wanda\'s sitcom Hex.', { region: L2('新泽西', 'New Jersey'), universe: U99, first: '旺达幻视 (2021)' });
loc('sokovia', 'city', '索科维亚', 'Sokovia', '奥创升空又坠毁的东欧小国，内战与泽莫悲剧的起点。', 'The Eastern European country Ultron lifted and dropped.', { region: L2('东欧', 'Eastern Europe'), universe: U99, first: '美国队长2：冬日战士 (2014)' });
loc('siberia', 'city', '西伯利亚基地', 'Siberian Facility', '九头蛇雪地基地，冬兵旧巢与托尼的悲剧现场。', 'Hydra\'s snowy bunker of Bucky\'s past.', { region: L2('俄罗斯', 'Russia'), universe: U99, first: '美国队长3：内战 (2016)' });
loc('asgard', 'mythic', '阿斯加德', 'Asgard', '金桥尽头的神域之城，诸神黄昏后已毁，遗民流落地球。', 'The golden realm at the end of the Bifrost; destroyed at Ragnarök.', { region: L2('九界之树', 'Yggdrasil'), universe: U99, first: '雷神 (2011)' });
loc('new-asgard', 'city', '新阿斯加德', 'New Asgard', '挪威海滨的阿斯加德遗民村。', 'The Norwegian fishing village of Asgardian refugees.', { region: L2('挪威', 'Norway'), universe: U99, first: '复仇者联盟4：终局之战 (2019)' });
loc('jotunheim', 'mythic', '约顿海姆', 'Jotunheim', '冰霜巨人的冻土界域。', 'The frost-giant realm.', { region: L2('九界', 'Nine Realms'), universe: U99, first: '雷神 (2011)' });
loc('vormir', 'planet', '沃米尔星', 'Vormir', '灵魂宝石的看守之地，"以魂换魂"的祭坛。', 'The Soul Stone altar: "a soul for a soul."', { region: L2('宇宙深空', 'Deep space'), universe: U99, first: '复仇者联盟3：无限战争 (2018)' });
loc('titan', 'planet', '泰坦星', 'Titan', '灭霸的废土母星，泰坦之战的战场。', 'Thanos\'s ruined homeworld; battlefield of Titan.', { region: L2('宇宙深空', 'Deep space'), universe: U99, first: '复仇者联盟3：无限战争 (2018)' });
loc('garden', 'planet', '花园星', 'The Garden', '灭霸卸甲归田的农耕行星，终被雷神斩首。', 'Thanos\'s quiet farm planet.', { region: L2('宇宙深空', 'Deep space'), universe: U99, first: '复仇者联盟4：终局之战 (2019)' });
loc('xandar', 'planet', '山达尔星', 'Xandar', '新星军团的母星，力量宝石曾经的守护者。', 'Nova Corps homeworld, once keeper of the Power Stone.', { region: L2('宇宙深空', 'Deep space'), universe: U99, first: '银河护卫队 (2014)' });
loc('knowhere', 'planet', '虚无之地', 'Knowhere', '宇宙之脑残骸上的走私港，护卫队的新家。', 'A smuggler\'s port inside a Celestial\'s severed head.', { region: L2('宇宙深空', 'Deep space'), universe: U99, first: '银河护卫队 (2014)' });
loc('hala', 'planet', '哈拉星', 'Hala', '克里帝国的铁血母星。', 'The Kree imperial homeworld.', { region: L2('宇宙深空', 'Deep space'), universe: U99, first: '惊奇队长 (2019)' });
loc('ego-planet', 'planet', '伊戈之星', 'Ego\'s Planet', '活体星球伊戈的躯壳表面。', 'The living surface of Ego.', { region: L2('宇宙深空', 'Deep space'), universe: U99, first: '银河护卫队2 (2017)' });
loc('sakaar', 'planet', '萨卡星', 'Sakaar', '虫洞尽头的垃圾星与角斗场，浩克的王座之地。', 'The wormhole junk planet with its gladiator arena.', { region: L2('宇宙深空', 'Deep space'), universe: U99, first: '雷神3：诸神黄昏 (2017)' });
loc('counter-earth', 'planet', '反地球', 'Counter-Earth', '至高进化打造的"完美"地球复制体。', 'The High Evolutionary\'s "perfect" Earth replica.', { region: L2('宇宙深空', 'Deep space'), universe: U99, first: '银河护卫队3 (2023)' });
loc('ta-lo', 'mythic', '塔罗秘境', 'Ta Lo', '十环背后的东方神话村落，守卫噬魂兽之门。', 'The mythic Chinese village guarding the Dweller-In-Darkness gate.', { region: L2('东方结界', 'Eastern gate'), universe: U99, first: '尚气与十环传奇 (2021)' });
loc('talokan', 'city', '塔罗坎', 'Talokan', '纳米水下的玛雅后裔王国。', 'The underwater Mesoamerican kingdom.', { region: L2('墨西哥湾', 'Gulf of Mexico'), universe: U99, first: '黑豹2：瓦坎达万岁 (2022)' });
loc('red-room-facility', 'facility', '红房总部', 'Red Room Academy', '漂浮在空中的黑寡妇训练基地。', 'The skyborne Black Widow academy.', { region: L2('全球机动', 'Airborne'), universe: U99, first: '黑寡妇 (2021)' });
loc('prison-raft', 'facility', '木筏监狱', 'The Raft', '深海的超级反派监狱。', 'The underwater superhuman prison.', { region: L2('大西洋', 'Atlantic'), universe: U99, first: '美国队长3：内战 (2016)' });
loc('pym-tech-hq', 'facility', '皮姆科技总部', 'Pym Technologies', '旧金山湾区的皮姆科技旧总部，第一代黄衫侠之战现场。', 'Pym Technologies HQ in San Francisco.', { region: L2('旧金山', 'San Francisco'), universe: U99, first: '蚁人 (2015)' });
loc('ten-rings-hq', 'facility', '十环总部', 'Ten Rings Headquarters', '文武的隐世王庭。', 'Wenwu\'s hidden court.', { region: L2('未知山区', 'Unknown mountains'), universe: U99, first: '尚气与十环传奇 (2021)' });
loc('tva-hq', 'facility', 'TVA 总部', 'TVA Headquarters', '时间尽头的橙白官僚巨构。', 'The orange bureaucracy at the end of time.', { region: L2('时间之外', 'Outside time'), universe: 'uni-sacred-timeline', first: '洛基 (2021)' });
loc('void-tva', 'dimension', '虚空之地', 'The Void', '被裁剪时间线与废弃变体的尽头垃圾场。', 'Where pruned timelines and variants rot.', { region: L2('时间之外', 'Outside time'), universe: 'uni-tva-prune-void', first: '死侍与金刚狼 (2024)' });
loc('cassandra-throne', 'facility', '卡珊德拉王座', 'Cassandra\'s Throne', '虚空之地的军座与狮身人面像残骸。', 'The Void\'s sphinx throne.', { region: L2('虚空之地', 'The Void'), universe: 'uni-tva-prune-void', first: '死侍与金刚狼 (2024)' });
loc('ocean-earth-828', 'city', 'Earth-828 哈德逊湾', 'Hudson (Earth-828)', '初露锋芒宇宙的纽约湾与巴克斯特大厦。', 'Earth-828\'s Baxter-adjacent bay.', { region: L2('Earth-828', 'Earth-828'), universe: 'uni-earth-828', first: '神奇四侠：初露锋芒 (2025)' });
loc('baxter-828', 'facility', '巴克斯特大厦', 'Baxter Building', '神奇四侠的家与总部（828 宇宙）。', 'The F4 home tower.', { region: L2('Earth-828', 'Earth-828'), universe: 'uni-earth-828', first: '神奇四侠：初露锋芒 (2025)' });
loc('golden-daggers', 'city', '金匕首俱乐部', 'Golden Daggers Club', '尚气在澳门的地下拳场，夏玲经营的灰色帝国。', 'Xialing\'s Macau underground fight club.', { region: L2('澳门', 'Macau'), universe: U99, first: '尚气与十环传奇 (2021)' });
loc('san-francisco', 'city', '旧金山', 'San Francisco', '皮姆科技与蚁人的城市舞台。', 'Pym Tech and Ant-Man\'s turf.', { region: L2('美国西海岸', 'US West Coast'), universe: U99, first: '蚁人 (2015)' });
loc('washington-dc', 'city', '华盛顿特区', 'Washington, D.C.', '神盾局三飞行母舰事件的漩涡中心。', 'Center of the S.H.I.E.L.D. helicarrier crisis.', { region: L2('美国东海岸', 'US East Coast'), universe: U99, first: '美国队长2：冬日战士 (2014)' });
loc('london', 'city', '伦敦', 'London', '黑暗精灵入侵与格雷斯通的圣所。', 'Site of the Dark Elf attack and its Sanctum.', { region: L2('英国', 'United Kingdom'), universe: U99, first: '雷神2：黑暗世界 (2013)' });
loc('hong-kong-sanctum', 'facility', '香港圣所', 'Hong Kong Sanctum', '多玛姆时间循环的战场。', 'Dormammu\'s loop battlefield.', { region: L2('中国香港', 'Hong Kong'), universe: U99, first: '奇异博士 (2016)' });
loc('jersey-city', 'city', '泽西城', 'Jersey City', '卡玛拉的家乡街区。', 'Kamala\'s hometown.', { region: L2('新泽西', 'New Jersey'), universe: U99, first: '惊奇少女 (2022)' });
loc('illuminati-hq-838', 'facility', '光照会总部', 'Illuminati HQ', 'Earth-838 的英雄理事会大厅。', 'The council hall of Earth-838.', { region: L2('Earth-838', 'Earth-838'), universe: 'uni-earth-838', first: '奇异博士2：疯狂多元宇宙 (2022)' });
loc('mount-olympus', 'mythic', '奥林匹斯山', 'Mount Olympus', '宙斯的云端王座。', 'Zeus\'s clouded throne.', { region: L2('九界外', 'Beyond'), universe: U99, first: '雷神4：爱与雷霆 (2022)' });

/* 地点关系 */
E('loc-wakanda', 'uni-earth-199999', 'located-in-universe');
E('loc-asgard', 'uni-earth-199999', 'located-in-universe');
E('loc-void-tva', 'uni-tva-prune-void', 'located-in-universe');
E('loc-baxter-828', 'uni-earth-828', 'located-in-universe');
E('loc-new-york', 'loc-brooklyn', 'contains', {});
