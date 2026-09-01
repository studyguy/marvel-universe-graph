/** 物品与神器 */
import { item, E } from './registry';
import { L2 } from '../taxonomy';

const U99 = 'uni-earth-199999';
const A = L2('现存', 'Active');
const DES = L2('已毁 / 用尽', 'Destroyed / Spent');

item('space-stone', 'cosmic-artifact', '空间宝石（宇宙魔方）', 'Space Stone (Tesseract)', '六宝石之一，掌控空间传送；以宇宙魔方形态贯穿了整个无限传奇。', 'The cube casing the Space Stone across the Infinity Saga.', { status: DES, universe: U99 });
item('mind-stone', 'cosmic-artifact', '心灵宝石（权杖）', 'Mind Stone (Scepter)', '曾藏于洛基权杖，后被托尼用于创造幻视。', 'Once in Loki\'s scepter, later Vision\'s brow.', { status: DES, universe: U99 });
item('reality-stone', 'cosmic-artifact', '现实宝石（以太）', 'Reality Stone (Aether)', '液态的以太，能改写现实，收藏家曾代为保管。', 'The liquid Aether that rewrites reality.', { status: A, universe: U99 });
item('power-stone', 'cosmic-artifact', '力量宝石（宇宙灵球）', 'Power Stone (Orb)', '毁灭性的原始力量，曾毁灭莫拉格星文明。', 'Raw destructive power inside the Orb of Morag.', { status: A, universe: U99 });
item('time-stone', 'cosmic-artifact', '时间宝石（阿戈摩托之眼）', 'Time Stone (Eye of Agamotto)', '掌控时间的绿色宝石，奇异博士用它看见了唯一的胜利。', 'The green gem that showed Strange the one winning path.', { status: DES, universe: U99 });
item('soul-stone', 'cosmic-artifact', '灵魂宝石', 'Soul Stone', '沃米尔的祭坛之石，索求"以魂换魂"的代价。', 'The Vormir stone demanding a soul for a soul.', { status: DES, universe: U99 });
item('infinity-gauntlet', 'cosmic-artifact', '无限手套', 'Infinity Gauntlet', '承载六宝石的黄金手套，一个响指抹除半个宇宙。', 'The golden gauntlet holding all six stones.', { creator: L2('矮人王艾崔', 'Eitri'), status: L2('损毁', 'Damaged'), universe: U99 });
item('mjolnir', 'mythic-weapon', '雷神之锤 姆乔尔尼尔', 'Mjolnir', '奥丁附魔的乌卢之锤，"配得上者"方可举起；简与佩吉也曾执掌。', 'The enchanted uru hammer; worthiness required.', { creator: L2('奥丁', 'Odin'), status: A, universe: U99 });
item('stormbreaker', 'mythic-weapon', '风暴战斧', 'Stormbreaker', '尼达维勒为雷神打造的国王级战斧，能召唤彩虹桥。', 'Eitri\'s king-grade axe that summons the Bifrost.', { creator: L2('矮人王艾崔', 'Eitri'), status: A, universe: U99 });
item('gungnir', 'mythic-weapon', '永恒之枪 冈格尼尔', 'Gungnir', '奥丁的王权之枪。', 'Odin\'s spear of kingship.', { creator: L2('阿斯加德王匠', 'Asgardian smiths'), status: L2('毁于诸神黄昏', 'Lost at Ragnarök'), universe: U99 });
item('necrosword', 'mythic-weapon', '弑神者黑剑', 'The Necrosword', '屠神者格尔的黑刃，以神血为食。', 'Gorr\'s god-slaying black blade.', { creator: L2('共生体之神', 'Knull'), status: DES, universe: U99 });
item('yaka-arrow', 'mythic-weapon', '亚克箭', 'Yaka Arrow', '尤度的哨声控制箭，父爱的延伸。', 'Yondu\'s whistle-guided arrow.', { status: A, universe: U99 });
item('cap-shield', 'tech', '美国队长之盾', 'Captain America\'s Shield', '振金圆盾，弹跳、防御与象征的三合一。', 'The vibranium disc: weapon, armor, symbol.', { creator: L2('霍华德·斯塔克', 'Howard Stark'), status: L2('两代传承', 'Inherited'), universe: U99 });
item('iron-man-armor', 'tech', '钢铁战甲 MK 系列', 'Iron Man Armor (Mark I–LXXXV)', '从山洞废料到纳米科技的八十五代战甲，托尼的第二次生命。', 'Eighty-five suits from cave scrap to nanotech.', { creator: L2('托尼·斯塔克', 'Tony Stark'), status: L2('传承', 'Legacy'), universe: U99 });
item('black-panther-suit', 'tech', '黑豹战衣', 'Panther Habit', '吸收动能再释放的振金战衣。', 'The kinetic-absorbing vibranium suit.', { creator: L2('舒芮', 'Shuri'), status: A, universe: U99 });
item('antman-suit', 'tech', '蚁人战衣', 'Ant-Man Suit', '以皮姆粒子改变体型的经典战衣。', 'The size-changing Pym suit.', { creator: L2('汉克·皮姆', 'Hank Pym'), status: A, universe: U99 });
item('arc-reactor', 'tech', '方舟反应堆', 'Arc Reactor', '托尼胸口的微型聚变太阳。', 'The glowing heart in Tony\'s chest.', { creator: L2('安东尼·斯塔克家族', 'Stark family'), status: L2('退役', 'Retired'), universe: U99 });
item('web-shooters', 'tech', '蛛网发射器', 'Web-Shooters', '彼得自制的高分子蛛丝发射装置。', 'Peter\'s homemade web fluid shooters.', { creator: L2('彼得·帕克', 'Peter Parker'), status: A, universe: U99 });
item('sling-ring', 'magic', '悬戒', 'Sling Ring', '开启传送门的法师戒指。', 'The sorcerer\'s portal ring.', { creator: L2('卡玛泰姬', 'Kamar-Taj'), status: A, universe: U99 });
item('eye-of-agamoto', 'magic', '阿戈摩托之眼', 'Eye of Agamotto', '封存时间宝石的圣物护匣。', 'The relic housing the Time Stone.', { creator: L2('阿戈托', 'Agamotto'), status: A, universe: U99 });
item('darkhold', 'magic', '暗神之书', 'The Darkhold', '以黑肉纸写成的禁书，每个读过的人都会被腐蚀。', 'The corrupted book written in Chthon\'s flesh.', { creator: L2('克同', 'Chthon'), status: L2('已焚毁', 'Burned'), universe: L2('多宇宙均有抄本', 'Multiversal copies') });
item('ten-rings', 'magic', '十环', 'The Ten Rings', '文武的十枚神秘指环，来源成谜的千年神器。', 'Wenwu\'s ten mysterious rings of unknown origin.', { status: A, universe: U99 });
item('heart-shaped-herb', 'bio', '心形药草', 'Heart-Shaped Herb', '赋予历代黑豹神速与力量的瓦坎达圣植。', 'Wakanda\'s mantley herb of kings.', { status: A, universe: U99 });
item('vibranium', 'material', '振金', 'Vibranium', '坠入瓦坎达的陨星金属：吸收振动、坚不可摧。', 'The meteoric metal that absorbs vibration.', { status: A, universe: U99 });
item('symbiote-sample', 'bio', '共生体样本', 'Symbiote Sample', '从克林塔流出的液态生命样本。', 'A sliver of living ooze from Klyntar.', { status: A, universe: L2('多宇宙', 'Multiversal') });
item('silver-board', 'tech', '银影滑板', 'Silver Surfer\'s Board', '莎拉·巴尔的宇宙滑板，比光更快的冲浪板。', 'Shalla-Bal\'s faster-than-light board.', { status: A, universe: 'uni-earth-828' });
item('tempad', 'tech', '时间平板', 'TemPad', 'TVA 的跨时间线门禁设备。', 'The TVA\'s timeline-hopping tablet.', { creator: L2('TVA', 'TVA'), status: A, universe: 'uni-sacred-timeline' });
item('time-stone-casing', 'mundane', '宇宙魔方外壳', 'Tesseract Casing', '收纳空间宝石的蓝色立方外壳（与空间宝石同体）。', 'The blue cube shell of the Space Stone.', { status: A, universe: U99 });

/* 物品构成与锻造 */
E('item-space-stone', 'item-infinity-gauntlet', 'component-of');
E('item-mind-stone', 'item-infinity-gauntlet', 'component-of');
E('item-reality-stone', 'item-infinity-gauntlet', 'component-of');
E('item-power-stone', 'item-infinity-gauntlet', 'component-of');
E('item-time-stone', 'item-infinity-gauntlet', 'component-of');
E('item-soul-stone', 'item-infinity-gauntlet', 'component-of');
E('item-space-stone', 'item-time-stone-casing', 'component-of');
E('item-time-stone', 'item-eye-of-agamoto', 'component-of');
E('item-cap-shield', 'item-vibranium', 'made-of');
E('item-black-panther-suit', 'item-vibranium', 'made-of');
E('item-mjolnir', 'loc-asgard', 'forged-in');
E('item-stormbreaker', 'loc-asgard', 'forged-in');
E('item-ten-rings', 'ab-ten-rings-power', 'grants-ability');
E('item-darkhold', 'ab-darkhold-magic', 'grants-ability');
E('item-heart-shaped-herb', 'ab-super-strength', 'grants-ability');
E('item-infinity-gauntlet', 'ab-infinity-stones-power', 'grants-ability');
E('item-arc-reactor', 'ab-arc-reactor', 'grants-ability');
