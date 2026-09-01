/** 事件 */
import { ev, E } from './registry';
import { L2 } from '../taxonomy';

const U99 = 'uni-earth-199999';

ev('formation-avengers', 'origin', '复仇者组建', 'The Avengers Initiative', '纽约之战迫在眉睫，弗瑞的倡议正式把六个孤胆者拧成一支队伍。', 'Fury\'s initiative assembled six loners into a team (2012).', { time: L2('2012', '2012'), universe: U99, outcome: L2('复仇者联盟成立', 'The Avengers formed') });
ev('battle-of-new-york', 'war', '纽约之战', 'The Battle of New York', '奇塔瑞大军借虫洞入侵曼哈顿，复仇者的第一次集体亮相。', 'The Chitauri poured through a wormhole over Manhattan (2012).', { time: L2('2012', '2012'), universe: U99, outcome: L2('虫洞关闭，入侵失败', 'Wormhole closed') });
ev('winter-soldier-reveal', 'political', '冬日战士身份揭晓', 'The Winter Soldier Unmasked', '史蒂夫认出冰冷的杀手是巴基，神盾局随之崩塌。', 'Steve recognized Bucky under the mask as S.H.I.E.L.D. fell (2014).', { time: L2('2014', '2014'), universe: U99, outcome: L2('神盾解散', 'S.H.I.E.L.D. disbanded') });
ev('ultron-offensive', 'cosmic', '奥创叛乱', 'The Ultron Offensive', '维和 AI 判定人类是病灶，举国升空又坠落的索科维亚之夜。', 'Ultron lifted Sokovia to extinction-event height (2015).', { time: L2('2015', '2015'), universe: U99, outcome: L2('奥创被灭，索科维亚坠落', 'Ultron destroyed; Sokovia fell') });
ev('sokovia-accords', 'political', '索科维亚协议', 'The Sokovia Accords', '联合国为超人类活动戴上镣铐，复仇者从此分道扬镳。', 'UN shackles for enhanced persons split the team (2016).', { time: L2('2016', '2016'), universe: U99, outcome: L2('复联分裂', 'Team split') });
ev('ragnarok', 'cosmic', '诸神黄昏', 'Ragnarök', '海拉归来，苏尔特尔的永恒之火终结了阿斯加德本身。', 'Hela\'s return and Surtur\'s fire ended Asgard (2017).', { time: L2('2017', '2017'), universe: U99, outcome: L2('阿斯加德毁灭', 'Asgard destroyed') });
ev('snap', 'cosmic', '无限响指', 'The Snap', '灭霸集齐六宝石，一个响指让半个宇宙化为飞灰。', 'Thanos\'s fingers dusted half of all life (2018).', { time: L2('2018', '2018'), universe: U99, outcome: L2('半数生灵消失', 'Half of life erased') });
ev('battle-of-wakanda', 'war', '瓦坎达之战', 'The Battle of Wakanda', '为护幻视额头宝石，瓦坎达军团迎战黑暗军团。', 'Wakanda\'s armies vs. the Black Order for the Mind Stone (2018).', { time: L2('2018', '2018'), universe: U99, outcome: L2('响指无法阻止', 'The Snap happened') });
ev('battle-of-titan', 'war', '泰坦之战', 'The Battle of Titan', '泰坦废土上的围剿差一寸成功，钢铁侠留下疤痕。', 'The failed ambush of Thanos on Titan (2018).', { time: L2('2018', '2018'), universe: U99, outcome: L2('失败，托尼受伤', 'Failed') });
ev('vormir-sacrifice', 'personal', '沃米尔祭坛', 'The Sacrifice at Vormir', '娜塔莎以命换魂宝石；五天后卡魔拉亦被灭霸献祭于此。', 'Natasha fell for the Soul Stone; Gamora followed days later.', { time: L2('2018', '2018'), universe: U99, outcome: L2('获得灵魂宝石', 'Soul Stone obtained') });
ev('time-heist', 'timeline', '时间劫持', 'The Time Heist', '残存的复仇者穿越时空借回宝石，重写响指的结局。', 'The Avengers time-traveled to borrow the stones back (2023).', { time: L2('2023', '2023'), universe: U99, outcome: L2('宝石到手', 'Stones gathered') });
ev('blip', 'timeline', '归来者潮', 'The Blip', '浩克响指让五年灰烬尽数归来，世界从此分成"五年前"与"五年后"。', 'Hulk\'s snap returned the dusted after five years (2023).', { time: L2('2023', '2023'), universe: U99, outcome: L2('半数生灵归来', 'Half of life returned') });
ev('battle-of-earth', 'cosmic', '终局之战', 'The Battle of Earth', '2023 版灭霸大军对上集结的全体英雄，钢铁侠打出最后的响指。', '2014 Thanos vs. every hero; Tony snapped last (2023).', { time: L2('2023', '2023'), universe: U99, outcome: L2('灭霸灰飞烟灭，钢铁侠牺牲', 'Thanos dusted; Tony died') });
ev('death-of-stark', 'personal', '钢铁侠之死', 'The Death of Iron Man', '"And I… am… Iron Man."——托尼以生命为宇宙合上无限传奇。', '"I am Iron Man": Tony closed the Infinity Saga with his life.', { time: L2('2023', '2023'), universe: U99, outcome: L2('宇宙最伟大英雄谢幕', 'The greatest hero fell') });
ev('multiverse-breach-nwh', 'timeline', '多元裂缝事件', 'The Multiversal Breach', '斯特兰奇的咒语失控，两个宇宙的蜘蛛侠反派涌入 MCU。', 'A botched spell pulled two universes\' villains in (2024).', { time: L2('2024', '2024'), universe: U99, outcome: L2('裂缝闭合，彼得隐姓埋名', 'Breaches sealed; Peter erased') });
ev('westview-incident', 'political', '西景镇事件', 'The Westview Anomaly', '旺达以悲恸圈养一座小镇，SWORD 强行介入。', 'Wanda\'s grief hexed a whole town (2023).', { time: L2('2023', '2023'), universe: U99, outcome: L2('结界解除，旺达遁走', 'Hex lifted') });
ev('emergence-celestial', 'cosmic', '天神涌现危机', 'The Emergence', '提亚马特在地球腹中孕育，永恒族的抉择暂缓了行星的新生。', 'Tiamat gestated in Earth\'s core until the Eternals chose (2024).', { time: L2('2024', '2024'), universe: U99, outcome: L2('涌现被阻止', 'Emergence stalled') });
ev('quantum-accident', 'origin', '量子隧道事故', 'The Quantum Tunnel Incident', '复仇者借量子隧道完成时间劫持，也把斯科特困在了时间之外。', 'The tunnel that enabled the Heist also stranded Scott.', { time: L2('2018–2023', '2018-2023'), universe: U99, outcome: L2('薛定谔的五小时', 'Five hours outside time') });
ev('dark-elf-invasion', 'war', '黑暗精灵入侵', 'The Dark Elf Invasion', '玛勒基斯欲以以太让宇宙重归黑暗，弗丽嘉殒命。', 'Malekith\'s bid to return all to darkness (2013).', { time: L2('2013', '2013'), universe: U99, outcome: L2('以太保住，弗丽嘉阵亡', 'Frigga fell') });
ev('mandarin-attacks', 'war', '满大人轰炸案', 'The Mandarin Bombings', '基里安借恐怖分子面具宣泄复仇。', 'Killian\'s false-flag terrorism (2012).', { time: L2('2012', '2012'), universe: U99, outcome: L2('AIM 覆灭', 'A.I.M. destroyed') });
ev('tva-loki-branch', 'timeline', '洛基的 TVA 之旅', 'Loki at the TVA', '洛基从"被裁剪的变体"一路走到时间尽头，亲手托住所有时间线。', 'From pruned variant to the god holding the timelines (2021-2023).', { time: L2('时间之外', 'Outside time'), universe: 'uni-sacred-timeline', outcome: L2('神圣时间线成为世界树', 'Timeline → Yggdrasil') });
ev('multiversal-war', 'timeline', '多元宇宙战争', 'The Multiversal War', '康的无数变体互相征伐，遗留之人笑到最后并冻结了时间。', 'Kang variants fought; He Who Remains froze time itself.', { time: L2('远古（时间线外）', 'Ancient'), universe: 'uni-tvq-line', outcome: L2('TVA 建立', 'TVA founded') });
ev('dw-tva-incident', 'timeline', '死侍的 TVA 事件', 'Deadpool\'s TVA Incident', '韦德的时间线被标记"锚点"，他绑架洛基坐标拖上最烂金刚狼。', 'Wade\'s timeline marked for pruning; he found a "worst" Wolverine (2024).', { time: L2('2024', '2024'), universe: 'uni-earth-10005', outcome: L2('锚点宇宙获救', 'Anchor universe saved') });
ev('incursion-secret-wars-2015', 'cosmic', '宇宙碰撞（616×1610）', 'The Incursion (616 × 1610)', '两个宇宙相撞前的最后八小时，杜姆以神力缝合碎片。', 'Two Earths collided; Doom stitched the fragments (comics 2015).', { time: L2('漫画 Secret Wars (2015)', 'Secret Wars (2015)'), universe: L2('616 / 1610', '616 / 1610'), outcome: L2('战争世界诞生', 'Battleworld born') });
ev('civil-war-comics-event', 'political', '内战（漫画）', 'Civil War (comics)', '超人类登记法案撕裂英雄阵营，美国队长 vs 钢铁侠。', 'The Registration Act split heroes; Cap vs. Iron Man (2006-07).', { time: L2('2006–2007', '2006-07'), universe: 'uni-earth-616', outcome: L2('登记派胜利，队长投降', 'Pro-Registration won') });
ev('m-day', 'timeline', 'M 日', 'M-Day', '绯红女巫一句"不要再有变种人"，瞬间抹除九成变种能力。', '"No more mutants": Wanda depowered 90% of mutantkind.', { time: L2('漫画 House of M 后', 'Post House of M'), universe: 'uni-earth-616', outcome: L2('变种人濒危', 'Mutants endangered') });
ev('hickman-incursions', 'cosmic', '宇宙坍缩潮', 'The Incursions', '无数宇宙在碰撞中湮灭，光照会背负不可言之罪。', 'Universes collided and died; the Illuminati sinned in secret.', { time: L2('漫画 2012–2015', 'Comics 2012-15'), universe: 'uni-earth-616', outcome: L2('走向秘密战争', 'Led to Secret Wars') });
ev('battle-of-hala', 'war', '哈拉解放', 'The Liberation of Hala', '惊奇队长2的终局：卡罗尔直面至高智慧对克里人的谎言。', 'Carol faced the Supreme Intelligence\'s lies on Hala (2026).', { time: L2('2026', '2026'), universe: U99, outcome: L2('至高智慧覆灭', 'Supreme Intelligence fell') });
ev('talokan-war', 'war', '塔罗坎之战', 'The Talokan Conflict', '振金探测器打破深海寂静，瓦坎达与塔罗坎全面开战。', 'A vibranium detector woke Namor\'s wrath (2025).', { time: L2('2025', '2025'), universe: U99, outcome: L2('休战，舒芮继位', 'Truce; Shuri took the mantle') });
ev('ten-rings-reckoning', 'personal', '十环清算', 'The Ten Rings Reckoning', '尚气回到父亲面前，十环易主。', 'Shang-Chi faced Wenwu; the Rings changed hands (2024).', { time: L2('2024', '2024'), universe: U99, outcome: L2('夏玲接管十环', 'Xialing took the Rings') });
ev('witches-road', 'personal', '巫师之路', 'The Witches\' Road', '阿加莎的民谣是真的：一歌一路一试炼。', 'Agatha\'s ballad was real: a song, a road, a trial (2026).', { time: L2('2026', '2026'), universe: U99, outcome: L2('绿巫揭晓', 'The Green Witch revealed') });

/* 事件因果 */
E('ev-formation-avengers', 'ev-battle-of-new-york', 'led-to', { kind: L2('直接', 'Direct') });
E('ev-ultron-offensive', 'ev-sokovia-accords', 'led-to', { kind: L2('直接', 'Direct') });
E('ev-sokovia-accords', 'ev-snap', 'led-to', { kind: L2('间接', 'Indirect') });
E('ev-snap', 'ev-blip', 'led-to', { kind: L2('直接', 'Direct') });
E('ev-blip', 'ev-time-heist', 'led-to', { kind: L2('直接', 'Direct') });
E('ev-time-heist', 'ev-battle-of-earth', 'led-to', { kind: L2('直接', 'Direct') });
E('ev-battle-of-earth', 'ev-death-of-stark', 'led-to', { kind: L2('直接', 'Direct') });
E('ev-snap', 'ev-battle-of-wakanda', 'led-to', { kind: L2('直接', 'Direct') });
E('ev-snap', 'ev-vormir-sacrifice', 'led-to', { kind: L2('间接', 'Indirect') });
E('ev-battle-of-new-york', 'ev-mandarin-attacks', 'led-to', { kind: L2('间接', 'Indirect') });
E('ev-multiverse-breach-nwh', 'ev-dw-tva-incident', 'led-to', { kind: L2('间接', 'Indirect') });
E('ev-tva-loki-branch', 'ev-multiversal-war', 'led-to', { kind: L2('间接', 'Indirect') });
E('ev-hickman-incursions', 'ev-incursion-secret-wars-2015', 'led-to', { kind: L2('直接', 'Direct') });
E('ev-m-day', 'ev-civil-war-comics-event', 'triggered-by', {});
E('ev-quantum-accident', 'ev-time-heist', 'led-to', { kind: L2('直接', 'Direct') });
E('ev-ragnarok', 'ev-snap', 'led-to', { kind: L2('间接', 'Indirect') });

/* 事件发生地 */
E('ev-battle-of-new-york', 'loc-new-york', 'battlefield-of');
E('ev-battle-of-wakanda', 'loc-wakanda', 'battlefield-of');
E('ev-battle-of-titan', 'loc-titan', 'battlefield-of');
E('ev-vormir-sacrifice', 'loc-vormir', 'battlefield-of');
E('ev-battle-of-earth', 'loc-avengers-compound', 'battlefield-of');
E('ev-ultron-offensive', 'loc-sokovia', 'battlefield-of');
E('ev-ragnarok', 'loc-asgard', 'battlefield-of');
E('ev-westview-incident', 'loc-westview', 'battlefield-of');
E('ev-dark-elf-invasion', 'loc-london', 'battlefield-of');
E('ev-talokan-war', 'loc-wakanda', 'battlefield-of');
E('ev-ten-rings-reckoning', 'loc-ta-lo', 'battlefield-of');
