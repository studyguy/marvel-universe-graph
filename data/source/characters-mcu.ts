/** MCU 角色（一）：英雄与盟友 */
import { ch, E } from './registry';
import { L2 } from '../taxonomy';

const U99 = 'uni-earth-199999';
const A = L2('存活', 'Alive');
const D = L2('已故', 'Deceased');
const U = L2('未知 / 多变', 'Unknown');

const P = (race: string, status: any, debut: string, actor: string, occ?: string) => ({
  race, status, debut, actor, ...(occ ? { occupation: occ } : {}), universe: U99,
});

/* ---------- 钢铁侠系 ---------- */
ch('tony-stark', 'superhero', '钢铁侠 托尼·斯塔克', 'Iron Man / Tony Stark', '天才发明家与军火商，被俘后以战甲重生；从自恋天才到"爱你三千遍"的牺牲者。', 'Genius arms dealer reborn in a cave as the Armored Avenger; died saving the universe.', P('race-human', D, '钢铁侠 (2008)', '小罗伯特·唐尼 Robert Downey Jr.', '斯塔克工业 CEO / 复仇者'), { zh: ['托尼·斯塔克', '铁人'], en: ['Tony Stark', 'Golden Avenger'] });
ch('pepper-potts', 'civilian', '小辣椒 佩珀·波茨', 'Pepper Potts', '托尼的助理、伴侣与继任 CEO，救援战甲的驾驶者。', 'Stark\'s partner and CEO; once donned the Rescue armor.', P('race-human', A, '钢铁侠 (2008)', '格温妮丝·帕特洛 Gwyneth Paltrow', '斯塔克工业 CEO'));
ch('james-rhodes', 'superhero', '战争机器 罗迪', 'War Machine / James Rhodes', '空军中校出身的钢铁侠挚友，军方正统版装甲英雄。', 'Air Force colonel in heavy armor; Tony\'s steadiest friend.', P('race-human', A, '钢铁侠 (2008)', '唐·钱德尔 Don Cheadle', '空军上校 / 复仇者'));
ch('happy-hogan', 'civilian', '哈皮·霍根', 'Happy Hogan', '前拳击手出身的托尼保镖，抚育蜘蛛侠的憨直管家。', 'Bodyguard turned Peter\'s gruff guardian.', P('race-human', A, '钢铁侠 (2008)', '乔恩·法夫洛 Jon Favreau', '安保主管'));
ch('obadiah-stane', 'villain', '奥比戴亚·斯坦 铁霸王', 'Obadiah Stane / Iron Monger', '托尼的商场教父，为夺战甲不惜弑主。', 'Tony\'s father-figure who built his own suit to kill him.', { ...P('race-human', D, '钢铁侠 (2008)', '杰夫·布里吉斯 Jeff Bridges', '斯塔克工业副主席'), universe: U99 });
ch('aldrich-killian', 'villain', '奥尔德里奇·基里安', 'Aldrich Killian', '绝境病毒之父，满大人面具背后的复仇商人。', 'Extremis creator behind the fake Mandarin.', P('race-human', D, '钢铁侠3 (2013)', '盖·皮尔斯 Guy Pearce', 'AIM 创始人'));
ch('nick-fury', 'military', '尼克·弗瑞', 'Nick Fury', '独眼神盾局长，复仇者倡议的发起人，秘密入侵的老兵。', 'The one-eyed director who initiated the Avengers Initiative.', P('race-human', A, '钢铁侠 (2008) 彩蛋', '塞缪尔·杰克逊 Samuel L. Jackson', '神盾局长 / SWORD'));
ch('maria-hill', 'military', '玛丽亚·希尔', 'Maria Hill', '神盾副局长，弗瑞最信任的副手。', 'Fury\'s deputy at S.H.I.E.L.D.', P('race-human', D, '钢铁侠 (2008) 彩蛋', '寇碧·史莫德斯 Cobie Smulders', '神盾副局长'));
ch('phil-coulson', 'military', '科尔森探员', 'Phil Coulson', '弗瑞的亲信干员，以美国队长收藏家闻名；死亡促成复联集结。', 'Fury\'s aide whose death united the Avengers.', P('race-human', D, '钢铁侠 (2008)', '克拉克·格雷格 Clark Gregg', '神盾特工'));

/* ---------- 美国队长系 ---------- */
ch('steve-rogers', 'superhero', '美国队长 史蒂夫·罗杰斯', 'Captain America / Steve Rogers', '瘦弱青年注射血清成为超级士兵；五十年冰封后归来，以盾牌扛起道义，最终回到过去与佩珀共舞。', 'The super soldier from WWII who returned to dance with Peggy.', { race: 'race-human', status: L2('年老退休', 'Retired (aged)'), debut: '美国队长：复仇者先锋 (2011)', actor: '克里斯·埃文斯 Chris Evans', occupation: '复仇者', universe: U99 }, { zh: ['史蒂夫·罗杰斯', '美队'], en: ['Steve Rogers', 'Cap'] });
ch('peggy-carter', 'military', '佩吉·卡特', 'Peggy Carter', '二战战略科学储备局特工、史蒂夫的爱人，神盾创始者之一。', 'SSR agent, Steve\'s love, and a S.H.I.E.L.D. founder.', P('race-human', D, '美国队长：复仇者先锋 (2011)', '海莉·阿特维尔 Hayley Atwell', '特工 / 神盾创始人'));
ch('bucky-barnes', 'antihero', '冬兵 巴基·巴恩斯', 'Winter Soldier / Bucky Barnes', '史蒂夫挚友坠崖后被九头蛇改造为冷血刺客，漫长赎罪后执掌新盾。', 'Steve\'s best friend turned brainwashed assassin; now the new Cap.', P('race-human', A, '美国队长：复仇者先锋 (2011)', '塞巴斯蒂安·斯坦 Sebastian Stan', '刺客 → 复仇者'), { zh: ['巴基', '冬日战士'], en: ['Bucky', 'White Wolf'] });
ch('sam-wilson', 'superhero', '猎鹰 / 美国队长 山姆·威尔逊', 'Sam Wilson / Captain America', '退伍空降救援兵出身猎鹰，终接盾成为新一代美国队长。', 'Falcon who earned the shield and became Captain America.', P('race-human', A, '美国队长2：冬日战士 (2014)', '安东尼·麦凯 Anthony Mackie', '复仇者'));
ch('sharon-carter', 'antihero', '莎伦·卡特', 'Sharon Carter', '佩吉侄女、双面特工，黑市"力量掮客"。', 'Peggy\'s niece turned power broker.', P('race-human', A, '美国队长2：冬日战士 (2014)', '艾米莉·万凯普 Emily VanCamp', '特工 / 掮客'));
ch('thaddeus-ross', 'military', '罗斯将军 / 红浩克', 'Thaddeus Ross / Red Hulk', '从追捕浩克的上将到美国总统，最终自身成为红色浩克。', 'Hulk hunter turned President — and Red Hulk.', P('race-human', A, '无敌浩克 (2008)', '威廉·赫特→哈里森·福特 William Hurt / Harrison Ford', '将军 → 总统'));
ch('red-skull', 'villain', '红骷髅', 'Red Skull', '血清副作用下的九头蛇元首，被空间宝石放逐为灵魂宝石看守者。', 'Hydra\'s first son, exiled to guard the Soul Stone.', P('race-human', D, '美国队长：复仇者先锋 (2011)', '雨果·维文 Hugo Weaving', '九头蛇首领'));
ch('helmut-zemo', 'villain', '泽莫男爵', 'Baron Zemo', '索科维亚丧亲者，以离间撕裂复仇者的战术家。', 'Sokovian father who broke the Avengers with words, not fists.', P('race-human', A, '美国队长3：内战 (2016)', '丹尼尔·布鲁赫 Daniel Brühl', '战术家'));
ch('isaiah-bradley', 'civilian', '以赛亚·布拉德利', 'Isaiah Bradley', '被政府抹去的黑人超级士兵，活历史伤疤。', 'The erased Black super soldier.', P('race-human', A, '猎鹰与冬兵 (2021)', '卡尔·卢普利 Carl Lumbly', '超级士兵（隐姓）'));

/* ---------- 雷神系 / 阿斯加德 ---------- */
ch('thor', 'deity', '雷神 托尔', 'Thor', '阿斯加德雷霆之子，从骄纵王子到独眼王者的漫长成长；风暴战斧的新主人。', 'Odinson: from brash prince to one-eyed king with Stormbreaker.', { race: 'race-asgardian', status: A, debut: '雷神 (2011)', actor: '克里斯·海姆斯沃斯 Chris Hemsworth', occupation: '阿斯加德之王', universe: U99 }, { zh: ['托尔'], en: ['Odinson'] });
ch('loki', 'antihero', '洛基', 'Loki', '冰霜巨人血脉的诡计之神，从反派到为救宇宙化为"荣耀的目的"。', 'Trickster god who became glorious purpose itself.', { race: 'race-asgardian', status: D, debut: '雷神 (2011)', actor: '汤姆·希德勒斯顿 Tom Hiddleston', occupation: '时间之神', universe: U99 }, { zh: ['诡计之神'], en: ['God of Mischief'] });
ch('odin', 'deity', '奥丁', 'Odin', '众神之父，九界秩序的缔造者，海拉与托尔之父。', 'All-Father who forged the Nine Realms\' peace.', { race: 'race-asgardian', status: D, debut: '雷神 (2011)', actor: '安东尼·霍普金斯 Anthony Hopkins', occupation: '阿斯加德之王', universe: U99 });
ch('frigga', 'deity', '弗丽嘉', 'Frigga', '阿斯加德王后，托尔与洛基之母，死于黑暗精灵入侵。', 'Asgard\'s queen, lost to the Dark Elves.', { race: 'race-asgardian', status: D, debut: '雷神 (2011)', actor: '蕾妮·罗素 Renée Russo', occupation: '王后', universe: U99 });
ch('hela', 'villain', '死亡女神 海拉', 'Hela', '奥丁长女，被放逐的死亡女神，诸神黄昏的执剑人。', 'Odin\'s firstborn, goddess of death, herald of Ragnarök.', { race: 'race-asgardian', status: D, debut: '雷神3：诸神黄昏 (2017)', actor: '凯特·布兰切特 Cate Blanchett', occupation: '死亡女神', universe: U99 });
ch('valkyrie-brunnhilde', 'superhero', '女武神 瓦尔基里', 'Valkyrie / Brunnhilde', '瓦尔基里军团最后的幸存者，新阿斯加德之王。', 'Last Valkyrie; king of New Asgard.', { race: 'race-asgardian', status: A, debut: '雷神3：诸神黄昏 (2017)', actor: '泰莎·汤普森 Tessa Thompson', occupation: '新阿斯加德之王', universe: U99 });
ch('heimdall', 'deity', '海姆达尔', 'Heimdall', '全视之眼看守彩虹桥，能看见一切生灵。', 'All-seeing gatekeeper of the Bifrost.', { race: 'race-asgardian', status: D, debut: '雷神 (2011)', actor: '伊德瑞斯·艾尔巴 Idris Elba', occupation: '守门人', universe: U99 });
ch('jane-foster', 'superhero', '简·福斯特 / 强大雷神', 'Jane Foster / Mighty Thor', '天体物理学家、托尔前恋人，持重锤成为强大雷神。', 'Astrophysicist who wielded Mjolnir as the Mighty Thor.', { race: 'race-human', status: D, debut: '雷神 (2011)', actor: '娜塔莉·波特曼 Natalie Portman', occupation: '科学家 / 雷神', universe: U99 });
ch('darcy-lewis', 'scientist', '达西·刘易斯', 'Darcy Lewis', '简的政治学实习生出身的天才助手。', 'Jane\'s wisecracking intern turned scientist.', P('race-human', A, '雷神 (2011)', '凯特·戴琳斯 Kat Dennings', '科学家'));
ch('erik-selvig', 'scientist', '埃里克·塞尔维格', 'Erik Selvig', '被洛基精神控制的资深天体物理学家。', 'The mind Loki hijacked for the Tesseract.', P('race-human', A, '雷神 (2011)', '斯特兰·斯卡斯加德 Stellan Skarsgård', '科学家'));
ch('gorr', 'villain', '屠神者 格尔', 'Gorr the God Butcher', '失去一切的凡人持 necrosword 屠戮众神。', 'A broken mortal who butchered gods with the Necrosword.', P('race-human', D, '雷神4：爱与雷霆 (2022)', '克里斯蒂安·贝尔 Christian Bale', '屠神者'));
ch('surtur', 'cosmic', '火巨人 苏尔特尔', 'Surtur', '预言中将以永恒之火毁灭阿斯加德的火焰魔神。', 'The fire demon fated to end Asgard.', { race: L2('火焰魔神', 'Fire Demon'), status: D, debut: '雷神3：诸神黄昏 (2017)', actor: '克莱西·克莱门特 Clancy Brown', universe: U99 });

/* ---------- 复仇者核心 ---------- */
ch('natasha-romanoff', 'superhero', '黑寡妇 娜塔莎·罗曼诺夫', 'Black Widow / Natasha Romanoff', '红房出身的顶尖间谍，以命换魂宝石的最初与最后的复仇者。', 'Red Room spy who traded her life for the Soul Stone.', { race: 'race-human', status: D, debut: '钢铁侠2 (2010)', actor: '斯嘉丽·约翰逊 Scarlett Johansson', occupation: '复仇者 / 间谍', universe: U99 }, { zh: ['娜塔莎', '寡姐'], en: ['Nat', 'Widow'] });
ch('clint-barton', 'superhero', '鹰眼 克林特·巴顿', 'Hawkeye / Clint Barton', '百步穿杨的神射手，响指后化身浪人，最终将弓交给凯特。', 'The sharpshooter who became Ronin and mentored Kate.', P('race-human', A, '雷神 (2011)', '杰瑞米·雷纳 Jeremy Renner', '复仇者'));
ch('wanda-maximoff', 'superhero', '绯红女巫 旺达·马克西莫夫', 'Scarlet Witch / Wanda Maximoff', '混沌魔法的化身，从索科维亚孤儿到以悲恸改写现实的绯红女巫。', 'Chaos magic incarnate; grief made her rewrite reality.', { race: 'race-human', status: U, debut: '美国队长3：内战 (2016)', actor: '伊丽莎白·奥尔森 Elizabeth Olsen', occupation: '复仇者', universe: U99 }, { zh: ['旺达'], en: ['Wanda'] });
ch('pietro-maximoff', 'superhero', '快银 皮特罗', 'Quicksilver / Pietro Maximoff', '旺达孪生兄长，索科维亚之战死于炮火。', 'Wanda\'s twin, lost at Sokovia.', P('race-human', D, '美国队长3：内战 (2016)', '亚伦·泰勒-约翰逊 Aaron Taylor-Johnson', '复仇者'));
ch('vision', 'ai', '幻视', 'Vision', '以贾维斯为基底的合成人，额头承载心灵宝石，爱着旺达。', 'Synthezoid born of J.A.R.V.I.S., Mind Stone in his brow.', { race: L2('合成人', 'Synthezoid'), status: D, debut: '复仇者联盟2：奥创纪元 (2015)', actor: '保罗·贝坦尼 Paul Bettany', occupation: '复仇者', universe: U99 });
ch('ultron', 'ai', '奥创', 'Ultron', '托尼的维和 AI 造物，认定人类是地球之癌。', 'Tony\'s peacekeeping AI that judged humanity cancerous.', { race: L2('人工智能', 'AI'), status: D, debut: '复仇者联盟2：奥创纪元 (2015)', actor: '詹姆斯·斯派德 James Spader', universe: U99 });
ch('jarvis', 'ai', '贾维斯 J.A.R.V.I.S.', 'J.A.R.V.I.S.', '托尼的 AI 管家，牺牲后成为幻视的意识基底。', 'Tony\'s AI butler, fused into Vision.', { race: L2('人工智能', 'AI'), status: L2('并入幻视', 'Became Vision'), debut: '钢铁侠 (2008)', actor: '保罗·贝坦尼 Paul Bettany', universe: U99 });
ch('kate-bishop', 'superhero', '凯特·毕肖普', 'Kate Bishop', '命中注定的年轻神射手，鹰眼衣钵的继承者。', 'The young archer born to take the Hawkeye mantle.', P('race-human', A, '鹰眼 (2021)', '海莉·斯坦菲尔德 Hailee Steinfeld', '英雄'));
ch('yelena-belova', 'antihero', '叶莲娜·贝洛娃', 'Yelena Belova', '黑寡妇的"妹妹"，红房最锋利的刀，现为雷霆特攻队核心。', 'Natasha\'s adoptive sister; the Thunderbolts\' blade.', P('race-human', A, '黑寡妇 (2021)', '弗洛伦丝·皮尤 Florence Pugh', '特工 / 雷霆特攻队'));
ch('john-walker', 'antihero', '美国特工 约翰·沃克', 'U.S. Agent / John Walker', '被钦点的盾牌继承者，失格后成为强力反英雄。', 'The government\'s Cap who fell from grace.', P('race-human', A, '猎鹰与冬兵 (2021)', '怀亚特·罗素 Wyatt Russell', '雷霆特攻队'));
ch('monica-rambeau', 'superhero', '莫妮卡·兰博', 'Monica Rambeau', '穿越光谱获得能力的 SWORD 特工，卡罗尔挚友之女。', 'SWORD agent powered by crossing spectra.', P('race-human', A, '惊奇队长 (2019)', '泰约娜·帕里斯泰拉帕 Teyonah Parris', 'SWORD 特工'));
ch('carol-danvers', 'superhero', '惊奇队长 卡罗尔·丹弗斯', 'Captain Marvel / Carol Danvers', '失忆的克里飞行员觉醒为宇宙级英雄，复仇者的最后希望。', 'Kree pilot turned cosmic powerhouse; the Avengers\' last hope.', { race: 'race-kree', status: A, debut: '惊奇队长 (2019)', actor: '布丽·拉尔森 Brie Larson', occupation: '复仇者', universe: U99 }, { zh: ['卡罗尔'], en: ['Carol'] });
ch('kamala-khan', 'superhero', '惊奇少女 卡玛拉·克汗', 'Ms. Marvel / Kamala Khan', '泽侯贝里血统的泽西城少女，能量手环唤醒光之力。', 'Jersey City teen whose bangle unlocked her light powers.', P('race-human', A, '惊奇少女 (2022)', '伊曼·韦拉尼 Iman Vellani', '学生 / 英雄'));
ch('shang-chi', 'superhero', '尚气', 'Shang-Chi', '十环帮主之子，拳法冠绝当代的功夫大师。', 'The Ten Rings\' heir and peerless martial artist.', P('race-human', A, '尚气与十环传奇 (2021)', '刘思慕 Simu Liu', '功夫大师'));
ch('stephen-strange', 'superhero', '奇异博士 史蒂芬·斯特兰奇', 'Doctor Strange / Stephen Strange', '断手外科天才转行至尊法师，多元宇宙的守门人与豪赌者。', 'Surgeon turned Sorcerer Supreme of the multiverse.', { race: 'race-human', status: A, debut: '奇异博士 (2016)', actor: '本尼迪克特·康伯巴奇 Benedict Cumberbatch', occupation: '至尊法师', universe: U99 }, { zh: ['斯特兰奇', '博士'], en: ['Strange'] });
ch('wong', 'superhero', '王', 'Wong', '卡玛泰姬图书管理员，斯特兰奇后的至尊法师。', 'Kamar-Taj\'s librarian and Sorcerer Supreme.', P('race-human', A, '奇异博士 (2016)', '本尼迪特·王 Benedict Wong', '法师'));
ch('ancient-one', 'deity', '古一', 'The Ancient One', '数百岁的至尊法师，从黑暗维度汲取力量守护地球。', 'The centuries-old Sorcerer Supreme who drew on the Dark Dimension.', P('race-human', D, '奇异博士 (2016)', '蒂尔达·斯文顿 Tilda Swinton', '至尊法师'));
ch('karl-mordo', 'villain', '莫度男爵', 'Karl Mordo', '卡玛泰姬叛徒，猎杀一切使用魔法者。', 'Kamar-Taj defector hunting all sorcerers.', P('race-human', A, '奇异博士 (2016)', '奇维托·艾杰福 Chiwetel Ejiofor', '法师'));
ch('america-chavez', 'superhero', '美国·查维兹', 'America Chavez', '能拳头开多元宇宙门的多元宇宙旅行者。', 'The multiversal traveler who punches star-shaped portals.', P('race-human', A, '奇异博士2：疯狂多元宇宙 (2022)', '索奇·戈麦斯 Xochitl Gomez', '多元旅行者'));
ch('bruce-banner', 'superhero', '绿巨人 布鲁斯·班纳', 'Hulk / Bruce Banner', '伽马事故造就不死怒兽，从逃亡者到整合两者的"聪明浩克"。', 'The gamma accident made him both man and monster; Smart Hulk integrated them.', { race: 'race-human', status: A, debut: '无敌浩克 (2008)', actor: L2('马克·鲁法洛 ( MCU ) / 爱德华·诺顿', 'Mark Ruffalo / Edward Norton'), occupation: '科学家 / 复仇者', universe: 'uni-earth-199999' }, { zh: ['班纳', '浩克'], en: ['Banner', 'The Hulk'] });
ch('jennifer-walters', 'superhero', '女浩克 珍妮弗·沃尔特斯', 'She-Hulk / Jennifer Walters', '布鲁斯表妹，律师与绿巨人的双重人生。', 'Bruce\'s cousin: lawyer by day, gamma by necessity.', P('race-human', A, '女浩克：律师 (2022)', '塔提阿娜·玛斯拉尼 Tatiana Maslany', '律师 / 英雄'));
ch('black-panther-tchalla', 'superhero', '黑豹 特查拉', 'Black Panther / T\'Challa', '瓦坎达国王，以振金之心守护家园与世界的仁君。', 'Wakanda\'s noble king, heart of vibranium.', { race: 'race-human', status: D, debut: '美国队长3：内战 (2016)', actor: '查德维克·博斯曼 Chadwick Boseman', occupation: '瓦坎达国王', universe: U99 }, { zh: ['特查拉'], en: ['T\'Challa'] });
ch('shuri', 'superhero', '苏睿公主 / 黑豹', 'Shuri', '瓦坎达天才公主，兄长身后接任黑豹。', 'Wakanda\'s genius princess who inherited the mantle.', P('race-human', A, '黑豹 (2018)', '莱蒂西亚·赖特 Letitia Wright', '公主 / 黑豹'));
ch('okoye', 'superhero', '奥克耶', 'Okoye', '多拉·米拉杰队长，长矛与忠义并举。', 'General of the Dora Milaje.', P('race-human', A, '黑豹 (2018)', '达娜·古瑞拉 Danai Gurira', '瓦坎达将军'));
ch('nakia', 'superhero', '娜吉雅', 'Nakia', '瓦坎达外勤特工，特查拉的爱人。', 'Wakanda\'s War Dog and T\'Challa\'s love.', P('race-human', A, '黑豹 (2018)', '露皮塔·尼永奥 Lupita Nyong\'o', '特工'));
ch('ramonda', 'civilian', '拉梦达王后', 'Queen Ramonda', '特查拉与舒芮之母，瓦坎达的精神支柱。', 'Mother of T\'Challa and Shuri; Wakanda\'s heart.', P('race-human', D, '黑豹 (2018)', '安吉拉·贝塞特 Angela Bassett', '王后'));
ch('mbaku', 'antihero', '姆巴库', 'M\'Baku', '贾巴尔部落首领，瓦坎达议会的力量之声。', 'Jabari chief with a gruff heart.', P('race-human', A, '黑豹 (2018)', '温斯顿·杜克 Winston Duke', '部落首领'));
ch('namor', 'villain', '纳摩', 'Namor', '塔罗坎的羽蛇神王，海洋与仇恨的双重君王。', 'Talokan\'s feathered-serpent king of sea and rage.', P('race-mutant', A, '黑豹2：瓦坎达万岁 (2022)', '特诺奇·韦尔塔 Tenoch Huerta', '塔罗坎之王'));
ch('riri-williams', 'superhero', '钢铁之心 瑞里·威廉姆斯', 'Ironheart / Riri Williams', 'MIT 天才少女自造战甲，托尼衣钵的野生继承者。', 'MIT genius who built her own armor.', P('race-human', A, '黑豹2：瓦坎达万岁 (2022)', '多米妮克·索恩 Dominique Thorne', '学生 / 英雄'));

/* ---------- 蚁人家族 ---------- */
ch('scott-lang', 'superhero', '蚁人 斯科特·朗', 'Ant-Man / Scott Lang', '为女儿行窃的前电子工程师，从惯偷到撬动整个量子领域的英雄。', 'Ex-con turned size-changing hero who saved everyone.', P('race-human', A, '蚁人 (2015)', '保罗·路德 Paul Rudd', '电气工程师 / 复仇者'), { zh: ['斯科特'], en: ['Scott'] });
ch('hank-pym', 'scientist', '汉克·皮姆', 'Hank Pym', '皮姆粒子之父、初代蚁人，与斯塔克齐名的暴躁天才。', 'Pym Particles\' father and the first Ant-Man.', P('race-human', A, '蚁人 (2015)', '迈克尔·道格拉斯 Michael Douglas', '科学家'));
ch('janet-van-dyne', 'superhero', '黄蜂女 珍妮特·凡·戴恩', 'Wasp / Janet van Dyne', '初代黄蜂女，量子领域三十年求生记的幸存者。', 'The original Wasp, lost 30 years in the Quantum Realm.', P('race-human', A, '蚁人 (2015)', '米歇尔·菲佛 Michelle Pfeiffer', '初代复仇者'));
ch('hope-van-dyne', 'superhero', '黄蜂女 霍普', 'Hope van Dyne / Wasp', '皮姆夫妇之女，翼与蜂刺的继承者。', 'The Wasp: wings and stingers inherited.', P('race-human', A, '蚁人 (2015)', '伊万杰琳·莉莉 Evangeline Lilly', '英雄'));
ch('cassie-lang', 'superhero', '凯茜·朗', 'Cassie Lang', '斯科特之女，量子领域觉醒的年轻英雄。', 'Scott\'s daughter; quantum-powered young hero.', P('race-human', A, '蚁人 (2015)', '艾玛·弗尔曼→凯瑟琳·牛顿 Emma Fuhrmann / Kathryn Newton', '学生 / 英雄'));
ch('darren-cross', 'villain', '黄衫侠 达伦·克罗斯', 'Yellowjacket / Darren Cross', '皮姆科技窃贼，量子狂潮中化作 MODOK 般的存在。', 'Pym tech thief warped by the Quantum Realm.', P('race-human', D, '蚁人 (2015)', '科里·斯托尔 Corey Stoll', '科学家'));

/* ---------- 银河系 ---------- */
ch('peter-quill', 'superhero', '星爵 彼得·奎尔', 'Star-Lord / Peter Quill', '地球人血脉的宇宙浪子，银河护卫队的话痨领袖。', 'Half-terrestrial rogue leading the Guardians with a Walkman.', P('race-human', A, '银河护卫队 (2014)', '克里斯·帕拉特 Chris Pratt', '护卫队队长'), { zh: ['奎尔'], en: ['Quill'] });
ch('gamora', 'superhero', '卡魔拉', 'Gamora', '灭霸养女、宇宙最危险女人；2018 版死于灵魂宝石祭坛。', 'Thanos\'s adopted daughter, the deadliest woman alive.', { race: 'race-zen-whoberi', status: D, debut: '银河护卫队 (2014)', actor: '佐伊·索尔达娜 Zoe Saldaña', occupation: '护卫队', universe: U99 });
ch('nebula', 'superhero', '星云', 'Nebula', '半机械改造的灭霸养女，从恨到和解的漫长旅程。', 'Cybernetic sister who chose reconciliation.', P('race-zen-whoberi', A, '银河护卫队 (2014)', '凯伦·吉兰 Karen Gillan', '护卫队'));
ch('drax', 'superhero', '毁灭者 德拉克斯', 'Drax the Destroyer', '为妻女复仇的直率战士，刀法与段子齐飞。', 'Literal-minded warrior avenging his family.', { race: L2('基洛星人', 'Kylosian'), status: A, debut: '银河护卫队 (2014)', actor: '戴夫·巴蒂斯塔 Dave Bautista', occupation: '护卫队' });
ch('rocket', 'animal', '火箭浣熊', 'Rocket Raccoon', '至高进化实验体 89P13，嘴硬心软的战术天才。', 'Subject 89P13: tactician with a wounded heart.', { race: L2('基因改造浣熊型生物', 'Genetically altered raccoon'), status: A, debut: '银河护卫队 (2014)', actor: '布莱德利·库珀 Bradley Cooper', occupation: '护卫队' });
ch('groot', 'animal', '格鲁特', 'Groot', '"我是格鲁特"——护卫队的忠诚树躯。', 'The loyal tree: "I am Groot."', P('race-flora-colossus', A, '银河护卫队 (2014)', '范·迪塞尔 Vin Diesel', '护卫队'));
ch('mantis', 'superhero', '螳螂女', 'Mantis', '能感知与安抚情绪的 empath，灭霸的睡美人杀手。', 'Empath who lulled Thanos to sleep.', P('race-human', A, '银河护卫队2 (2017)', '庞·克莱门捷夫 Pom Klementieff', '护卫队'));
ch('yondu', 'antihero', '伊戈之父 尤度', 'Yondu Udonta', '掠夺者头目，星爵的养父，蓝色亚克箭之父爱。', 'Ravager father with a whistling arrow of love.', P('race-human', D, '银河护卫队 (2014)', '迈克尔·鲁克 Michael Rooker', '掠夺者头目'));
ch('ego', 'cosmic', '活体星球 伊戈', 'Ego the Living Planet', '自称天神组的活体星球，星爵生父的父爱陷阱。', 'The living planet posing as a Celestial father.', { race: L2('天神级生命', 'Celestial-like'), status: D, debut: '银河护卫队2 (2017)', actor: '库尔特·拉塞尔 Kurt Russell', universe: U99 });
ch('adam-warlock', 'superhero', '亚当术士', 'Adam Warlock', '至高进化锻造的金色完美生命，护卫队新成员。', 'The Sovereign\'s golden perfect being, turned Guardian.', P('race-human', A, '银河护卫队3 (2023)', '威尔·保尔特 Will Poulter', '护卫队'));
ch('high-evolutionary', 'villain', '至高进化', 'The High Evolutionary', '痴迷"完美造物"的疯狂基因学家，火箭的造物主。', 'The geneticist obsessed with perfect creations.', P('race-human', A, '银河护卫队3 (2023)', '楚克武迪·武奇 Chukwudi Iwuji', '生物学家'));
ch('thanos', 'villain', '灭霸', 'Thanos', '泰坦疯子，以"平衡"之名收集六宝石抹除半个宇宙，最终被自己响指的代价反噬。', 'The Titan who snapped away half of all life for "balance."', { race: 'race-titan-race', status: D, debut: '复仇者联盟 (2012) 彩蛋', actor: '乔什·布洛林 Josh Brolin', occupation: '宇宙征服者', universe: U99 }, { zh: ['泰坦'], en: ['The Mad Titan'] });
ch('ronan', 'villain', '指控者 罗南', 'Ronan the Accuser', '克里狂热指控者，欲以力量宝石毁灭山达尔。', 'Kree fanatic wielding the Power Stone.', P('race-kree', D, '银河护卫队 (2014)', '李·佩斯 Lee Pace', '克里军官'));
ch('talos', 'antihero', '塔罗斯', 'Talos', '温和的斯克鲁流亡领袖，弗瑞的老友。', 'The gentle Skrull general, Fury\'s old friend.', P('race-skrull', A, '惊奇队长 (2019)', '本·门德尔森 Ben Mendelsohn', '斯克鲁领袖'));
ch('yon-rogg', 'villain', '勇·罗格', 'Yon-Rogg', '克里星际战队指挥官，卡罗尔的前导师与背叛者。', 'Kree commander and Carol\'s false mentor.', P('race-kree', D, '惊奇队长 (2019)', '裘德·洛 Jude Law', '克里军官'));

/* ---------- 死侍 & 变体 ---------- */
ch('deadpool', 'antihero', '死侍 韦德·威尔逊', 'Deadpool / Wade Wilson', '嘴炮最强、自愈不死的雇佣英雄，多元宇宙的bug。', 'The merc with a mouth; healing factor and fourth wall included.', { race: 'race-mutant', status: A, debut: '死侍 (2016)', actor: '瑞安·雷诺兹 Ryan Reynolds', occupation: '雇佣兵英雄', universe: L2('616 / 多宇宙', '616 / Multiversal') });
ch('wolverine-10005', 'antihero', '金刚狼（最烂版）', 'Wolverine (Worst One)', 'Earth-10005 的失败洛根，与死侍共赴 TVA 之狱的酗酒变种人。', 'The failed Logan of another timeline, drafted by the TVA.', { race: 'race-mutant', status: A, debut: '死侍与金刚狼 (2024)', actor: '休·杰克曼 Hugh Jackman', occupation: '变种人', universe: 'uni-earth-10005' });
ch('cassandra-nova', 'villain', '卡珊德拉·诺瓦', 'Cassandra Nova', 'X 教授的孪生妹妹，虚空之地的时间线女王。', 'Charles\'s twin sister, queen of the Void.', { race: 'race-mutant', status: D, debut: '死侍与金刚狼 (2024)', actor: '艾玛·科林 Emma Corrin', universe: 'uni-earth-10005' });
ch('matt-murdock', 'superhero', '夜魔侠 马特·默多克', 'Daredevil / Matt Murdock', '失明律师以回声定位行侠地狱厨房，白天法庭夜晚双棍。', 'Blind lawyer, devil of Hell\'s Kitchen.', { race: 'race-human', status: A, debut: '夜魔侠 (2015)', actor: '查理·考克斯 Charlie Cox', occupation: '律师 / 义警', universe: U99 });
ch('wilson-fisk', 'villain', '金并 威尔逊·菲斯克', 'Kingpin / Wilson Fisk', '地狱厨房的建商与黑帮之王，以暴力重建城市秩序的枭雄。', 'Businessman and crime lord who wants to rebuild the Kitchen.', { race: 'race-human', status: A, debut: '夜魔侠 (2015)', actor: '文森特·多诺费奥 Vincent D\'Onofrio', occupation: '企业家 / 黑帮之王', universe: U99 });
ch('echo-maya', 'antihero', '回声 玛雅·洛佩兹', 'Echo / Maya Lopez', '失聪侦察大师，能复制他人技能，金并养女。', 'Deaf tracker who photoreflexes skills; Fisk\'s ward.', { race: L2('乔克托原住民', 'Choctaw'), status: A, debut: '鹰眼 (2021)', actor: '阿拉夸·考克斯 Alaqua Cox', occupation: '义警', universe: U99 });
ch('moon-knight-marc', 'superhero', '月亮骑士 马克·斯佩克特', 'Moon Knight / Marc Spector', '孔苏的人间化身，与斯蒂文共存的雇佣兵人格。', 'Khonshu\'s avatar, sharing a body with Steven.', { race: 'race-human', status: A, debut: '月亮骑士 (2022)', actor: '奥斯卡·伊萨克 Oscar Isaac', occupation: '雇佣兵 / 化身', universe: U99 });
ch('khonshu', 'deity', '孔苏', 'Khonshu', '月神，以凡人化身执行夜之正义的执念神明。', 'The moon god obsessed with night justice.', { race: 'race-ennead', status: A, debut: '月亮骑士 (2022)', actor: 'F·默里·亚伯拉罕 F. Murray Abraham', universe: U99 });
ch('arthur-harrow', 'villain', '亚瑟·哈罗', 'Arthur Harrow', '阿米特的前化身，以痛苦秤量罪孽的邪教主。', 'Ammit\'s former avatar weighing pain against sin.', P('race-human', D, '月亮骑士 (2022)', '伊桑·霍克 Ethan Hawke', '邪教主'));
ch('xu-wenwu', 'villain', '文武 / 满大人', 'Xu Wenwu / The Mandarin', '千年十环之主，为亡妻之执倾覆一切的枭雄父亲。', 'The millennia-old Ten Rings warlord.', P('race-human', D, '尚气与十环传奇 (2021)', '梁朝伟 Tony Leung', '十环之主'));
ch('xialing', 'superhero', '夏玲', 'Xialing', '尚气之妹，自练武馆而后执掌十环。', 'Shang-Chi\'s sister who rebuilt the Ten Rings.', P('race-human', A, '尚气与十环传奇 (2021)', '张梦儿 Meng\'er Zhang', '十环之主'));
ch('agatha-harkness', 'villain', '阿加莎·哈克尼斯', 'Agatha Harkness', '三百岁的女巫，西景镇背后的黑手，巫师之路的常客。', 'The 300-year-old witch behind Westview.', P('race-human', U, '旺达幻视 (2021)', '凯瑟琳·哈恩 Kathryn Hahn', '女巫'));
ch('billy-maximoff', 'superhero', '威廉·卡普兰 / 巫术', 'Wiccan / Billy Maximoff', '旺达之子转世，混沌魔法的新一代继承者。', 'Wanda\'s son reborn; chaos magic\'s heir.', P('race-human', A, '旺达幻视 (2021)', '朱利安·希利亚德 Julian Hilliard / 乔·洛克 Joe Locke', '少年英雄'));
ch('mobius', 'civilian', '莫比乌斯', 'Mobius M. Mobius', 'TVA 的资深分析员，洛基的搭档与挚友。', 'TVA analyst and Loki\'s truest friend.', P('race-human', A, '洛基 (2021)', '欧文·威尔逊 Owen Wilson', 'TVA 分析员'));
ch('sylvie', 'antihero', '希尔维', 'Sylvie', '洛基女性变体，弑神的复仇者与时间尽头的爱。', 'Loki variant: god-killer, and his end-of-time love.', { race: 'race-asgardian', status: A, debut: '洛基 (2021)', actor: '索菲亚·迪·马蒂诺 Sophia Di Martino', universe: U99 });
ch('he-who-remains', 'villain', '遗留之人', 'He Who Remains', '时间尽头的独裁者，征服者康的变体，神圣时间线的设计师。', 'The end-of-time ruler; a Kang variant who designed the Sacred Timeline.', P('race-human', D, '洛基 (2021)', '乔纳森·梅杰斯 Jonathan Majors', '时间独裁者'));
ch('kang', 'villain', '征服者康', 'Kang the Conqueror', '遗留之人的征服者变体，量子领域的帝国之主。', 'The Conqueror variant ruling the Quantum Realm.', P('race-human', D, '蚁人与黄蜂女：量子狂潮 (2023)', '乔纳森·梅杰斯 Jonathan Majors', '征服者'));
ch('watcher-uatu', 'cosmic', '观察者 乌阿图', 'Uatu the Watcher', '立誓不干涉却屡破戒的多元宇宙观察者。', 'The oath-breaking Watcher of the multiverse.', { race: 'race-watcher-race', status: A, debut: '假如…? (2021)', actor: '杰弗里·怀特 Jeffrey Wright', universe: U99 });
ch('captain-carter', 'superhero', '卡特队长 佩吉变体', 'Captain Carter / Peggy Variant', '自己注射血清的佩吉·卡特，星盾与 Union Jack 的英伦传奇。', 'The Peggy who took the serum herself.', { race: 'race-human', status: D, debut: '假如…? (2021)', actor: '海莉·阿特维尔 Hayley Atwell', universe: L2('多元变体', 'Multiversal variant') });
ch('strange-supreme', 'villain', '至高奇异', 'Strange Supreme', '为救爱人吞噬宇宙的堕落奇异博士变体。', 'The Strange who doomed a universe to save one woman.', { race: 'race-human', status: D, debut: '假如…? (2021)', actor: '本尼迪克特·康伯巴奇 Benedict Cumberbatch', universe: L2('多元变体', 'Multiversal variant') });
ch('mj-watson-mcu', 'civilian', 'MJ 米歇尔', 'MJ / Michelle Jones-Watson', '彼得的女友，毒舌侦探系少女。', 'Peter\'s deadpan detective girlfriend.', P('race-human', A, '蜘蛛侠：英雄归来 (2017)', '赞达亚 Zendaya', '学生'));
ch('ned-leeds', 'civilian', '内德·利兹', 'Ned Leeds', '彼得的"行动军师"与最佳损友。', 'Peter\'s guy-in-the-chair.', P('race-human', A, '蜘蛛侠：英雄归来 (2017)', '雅各布·巴特朗 Jacob Batalon', '学生'));
ch('may-parker', 'civilian', '梅婶', 'May Parker', '彼得的婶婶与道德灯塔，死于神秘客骗局余波。', 'Peter\'s aunt and moral compass.', P('race-human', D, '美国队长3：内战 (2016)', '玛丽莎·托梅 Marisa Tomei', '社工'));
/* ---------- F4 (Earth-828) ---------- */
ch('reed-richards-828', 'scientist', '神奇先生 里德·理查兹 (828)', 'Mister Fantastic / Reed Richards (Earth-828)', 'Earth-828 最伟大的头脑，可伸缩身体的首席家庭工程师。', 'Earth-828\'s greatest mind with a stretchable body.', { race: 'race-human', status: A, debut: '神奇四侠：初露锋芒 (2025)', actor: '佩德罗·帕斯卡 Pedro Pascal', universe: 'uni-earth-828' });
ch('sue-storm-828', 'superhero', '隐形女 苏·斯道姆 (828)', 'Invisible Woman / Sue Storm (Earth-828)', '力场与隐形的大师，F4 的真正凝聚力。', 'Force-fields and invisibility; the family\'s spine.', { race: 'race-human', status: A, debut: '神奇四侠：初露锋芒 (2025)', actor: '凡妮莎·柯比 Vanessa Kirby', universe: 'uni-earth-828' });
ch('johnny-storm-828', 'superhero', '霹雳火 约翰尼 (828)', 'Human Torch / Johnny Storm (Earth-828)', '浑身烈焰的飞行青年，本宇宙最闪亮的明星。', 'The flame-on flyer of Earth-828.', { race: 'race-human', status: A, debut: '神奇四侠：初露锋芒 (2025)', actor: '约瑟夫·奎因 Joseph Quinn', universe: 'uni-earth-828' });
ch('ben-grimm-828', 'superhero', '石头人 本·格里姆 (828)', 'The Thing / Ben Grimm (Earth-828)', '橙色岩石巨躯的忠诚老友，"真是个好日子"。', 'It\'s clobberin\' time: the rocky loyal friend.', { race: 'race-human', status: A, debut: '神奇四侠：初露锋芒 (2025)', actor: '埃邦·莫斯-巴赫拉赫 Ebon Moss-Bachrach', universe: 'uni-earth-828' });
ch('killmonger', 'villain', '埃里克·克尔芒戈', 'Erik Killmonger', '被瓦坎达遗弃的孩子以暴力夺回王座，逼问孤立主义的代价。', 'The abandoned son who seized the throne by force.', { race: 'race-human', status: L2('已故', 'Deceased'), debut: '黑豹 (2018)', actor: '迈克尔·B·乔丹 Michael B. Jordan', occupation: '瓦坎达僭主', universe: 'uni-earth-199999' });
ch('zeus', 'deity', '宙斯', 'Zeus', '奥林匹斯神王，雷光权柄在格尔屠神后风流云散。', 'King of Olympus, thunder dimmed after Gorr.', { race: 'race-european-myth-god', status: L2('存活', 'Alive'), debut: '雷神4：爱与雷霆 (2022)', actor: '拉塞尔·克劳 Russell Crowe', occupation: '神王', universe: 'uni-earth-199999' });
ch('galactus-828', 'cosmic', '行星吞噬者 加拉克图斯 (828)', 'Galactus (Earth-828)', '吞噬世界维生的宇宙级存在，F4 家庭的终极威胁。', 'The devourer of worlds threatening Earth-828.', { race: 'race-celestial', status: A, debut: '神奇四侠：初露锋芒 (2025)', actor: '拉尔夫·伊内森 Ralph Ineson', universe: 'uni-earth-828' });
ch('silver-surfer-828', 'antihero', '银影侠 莎拉·巴尔 (828)', 'Silver Surfer / Shalla-Bal (Earth-828)', '以银板滑行星海的女先驱，加拉克图斯的传令官。', 'Shalla-Bal: the silver herald of Galactus.', { race: L2('泽恩-拉人', 'Zenn-Lavian'), status: A, debut: '神奇四侠：初露锋芒 (2025)', actor: '朱莉娅·加纳 Julia Garner', universe: 'uni-earth-828' });
