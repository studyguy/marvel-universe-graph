/**
 * 人物名规范化（build-data 自动重构①）。
 * 核心规则：'名号 真名'/'名号 / 名号 真名'/'A / B' → 取真名段；原名字段不入名，而写入 alias 检索。
 */

/** 少数规则不适用的人物名修正表（人工维护，优先级高于自动规范化） */
export const PERSON_NAME_OVERRIDE: Record<string, { zh?: string; en?: string }> = {
  'ch-james-rhodes': { en: 'James Rhodes', zh: '詹姆斯·罗兹' },
  'ch-happy-hogan': { en: 'Happy Hogan' },
  'ch-adrian-toomes': { en: 'Adrian Toomes' },
  'ch-quentin-beck': { en: 'Quentin Beck' },
  'ch-peter-parker-mcu': { en: 'Peter Parker (MCU)', zh: '彼得·帕克 (MCU)' },
  'ch-peter-parker-raimi': { en: 'Peter Parker (Raimi)', zh: '彼得·帕克 (马奎尔版)' },
  'ch-peter-parker-tasm': { en: 'Peter Parker (Webb)', zh: '彼得·帕克 (加菲版)' },
  'ch-miles-morales': { en: 'Miles Morales', zh: '迈尔斯·莫拉莱斯' },
  'ch-peter-parker-616': { en: 'Peter Parker (Earth-616)', zh: '彼得·帕克 (616)' },
  'ch-gwen-stacy-65': { en: 'Gwen Stacy (Earth-65)', zh: '格温·史黛西 (Earth-65)' },
  'ch-miguel-ohara': { en: "Miguel O'Hara", zh: '米格尔·奥哈拉' },
  'ch-spider-noir': { en: 'Spider-Man Noir', zh: '暗影蜘蛛侠' },
  'ch-peni-parker': { en: 'Peni Parker', zh: '佩妮·帕克' },
  'ch-spider-man-1602': { en: 'Peter Parquagh (1602)', zh: '彼得·帕克 (1602)' },
  'ch-peter-parker-insomniac': { en: 'Peter Parker (Insomniac)', zh: '彼得·帕克 (Insomniac版)' },
  'ch-miles-insomniac': { en: 'Miles Morales (Insomniac)', zh: '迈尔斯·莫拉莱斯 (Insomniac版)' },
  'ch-reed-richards-828': { en: 'Reed Richards (Earth-828)', zh: '里德·理查兹 (828)' },
  'ch-sue-storm-828': { en: 'Sue Storm (Earth-828)', zh: '苏·斯道姆 (828)' },
  'ch-johnny-storm-828': { en: 'Johnny Storm (Earth-828)', zh: '约翰尼·斯道姆 (828)' },
  'ch-ben-grimm-828': { en: 'Ben Grimm (Earth-828)', zh: '本·格里姆 (828)' },
  'ch-silver-surfer-828': { en: 'Shalla-Bal (Earth-828)', zh: '莎拉·巴尔 (828)' },
  'ch-venom-eddie-ssu': { en: 'Eddie Brock (SSU)', zh: '埃迪·布洛克 (SSU)' },
  'ch-captain-america-616': { en: 'Steve Rogers (Earth-616)', zh: '史蒂夫·罗杰斯 (616)' },
  'ch-iron-man-616': { en: 'Tony Stark (Earth-616)', zh: '托尼·斯塔克 (616)' },
  'ch-black-panther-tchalla': { en: "T'Challa", zh: '特查拉' },
  'ch-echo-maya': { en: 'Maya Lopez', zh: '玛雅·洛佩兹' },
  'ch-moon-knight-marc': { en: 'Marc Spector', zh: '马克·斯佩克特' },
  'ch-moon-knight-616': { en: 'Marc Spector (616)', zh: '马克·斯佩克特 (616)' },
  'ch-wilson-fisk': { en: 'Wilson Fisk', zh: '威尔逊·菲斯克' },
  'ch-matt-murdock': { en: 'Matt Murdock', zh: '马特·默多克' },
  'ch-danny-rand': { en: 'Danny Rand', zh: '丹尼·兰德' },
  'ch-luke-cage': { en: 'Carl Lucas', zh: '卡尔·卢卡斯' },
  'ch-frank-castle': { en: 'Frank Castle', zh: '弗兰克·卡斯特' },
  'ch-killmonger': { en: 'Erik Killmonger', zh: '埃里克·克尔芒戈' },
  'ch-charles-xavier': { en: 'Charles Xavier', zh: '查尔斯·泽维尔' },
  'ch-erik-lehnsherr': { en: 'Erik Lehnsherr', zh: '埃里克·兰谢尔' },
  'ch-sam-wilson': { en: 'Sam Wilson', zh: '山姆·威尔逊' },
  'ch-jane-foster': { en: 'Jane Foster', zh: '简·福斯特' },
  'ch-hope-van-dyne': { en: 'Hope van Dyne', zh: '霍普·凡·戴恩' },
  'ch-thaddeus-ross': { en: 'Thaddeus Ross', zh: '撒迪厄斯·罗斯' },
  'ch-shuri': { en: 'Shuri', zh: '苏睿' },
  'ch-mar-vell': { en: 'Mar-Vell', zh: '迈-威尔' },
  'ch-monica-616-spectrum': { en: 'Monica Rambeau (616)', zh: '莫妮卡·兰博 (616)' },
  'ch-doctor-strange-616-illu': { en: 'Stephen Strange (616)', zh: '斯特兰奇 (616 漫画)' },
  'ch-sentry-bob': { en: 'Robert Reynolds', zh: '罗伯特·雷诺兹' },
  'ch-black-bolt-616': { en: 'Blackagar Boltagon (616)', zh: '布莱克·博尔塔贡 (616)' },
  'ch-captain-carter': { en: 'Peggy Carter (Variant)', zh: '佩吉·卡特 (变体)' },
  'ch-cyclops-616': { en: 'Scott Summers (Later Era)', zh: '斯科特·萨默斯 (后期)' },
  'ch-beast-616-illu': { en: 'Hank McCoy (Illuminati)', zh: '汉克·麦考伊 (光照会)' },
  'ch-wiccan-616': { en: 'William Kaplan (616)', zh: '威廉·卡普兰 (616)' },
  'ch-billy-maximoff': { en: 'Billy Maximoff', zh: '比利·马克西莫夫' },
  'ch-patriot-eli': { en: 'Eli Bradley', zh: '伊莱·布拉德利' },
  'ch-iron-lad': { en: 'Nathaniel Richards', zh: '纳撒尼尔·理查兹' },
  'ch-red-guardian': { en: 'Alexei Shostakov', zh: '阿列克谢·肖斯塔科夫' },
  'ch-michael-morbius': { en: 'Michael Morbius', zh: '迈克尔·莫比亚斯' },
  'ch-kate-pryde': { en: 'Kitty Pryde', zh: '凯蒂·普莱德' },
  'ch-wolverine-10005': { en: 'James Howlett (10005)', zh: '詹姆斯·豪利特 (10005)' },
  'ch-emma-frost': { en: 'Emma Frost', zh: '艾玛·佛罗斯特' },
  'ch-rogue': { en: 'Anna Marie', zh: '安娜·玛丽' },
  'ch-kilgrave': { en: 'Kilgrave', zh: '基尔格雷夫' },
  'ch-jenny-walters_na': {},
  'ch-natasha-romanoff': { en: 'Natasha Romanoff', zh: '娜塔莎·罗曼诺夫' },
  'ch-clint-barton': { en: 'Clint Barton', zh: '克林特·巴顿' },
  'ch-wanda-maximoff': { en: 'Wanda Maximoff', zh: '旺达·马克西莫夫' },
  'ch-pietro-maximoff': { en: 'Pietro Maximoff', zh: '皮特罗·马克西莫夫' },
  'ch-quicksilver-fox': { en: 'Peter Maximoff (Fox)', zh: '彼得·马克西莫夫 (Fox)' },
  'ch-kate-bishop': { en: 'Kate Bishop', zh: '凯特·毕肖普' },
  'ch-yelena-belova': { en: 'Yelena Belova', zh: '叶莲娜·贝洛娃' },
  'ch-john-walker': { en: 'John Walker', zh: '约翰·沃克' },
  'ch-isaiah-bradley': { en: 'Isaiah Bradley', zh: '以赛亚·布拉德利' },
  'ch-ghost-rider-johnny': { en: 'Johnny Blaze', zh: '约翰尼·布雷泽' },
  'ch-ghost-rider-robbie': { en: 'Robbie Reyes', zh: '罗比·雷耶斯' },
  'ch-venom-symbiote': { en: 'Symbiote (Venom)' },
  'ch-eddie-brock': { en: 'Eddie Brock', zh: '埃迪·布洛克' },
  'ch-mac-gargan': { en: 'Mac Gargan', zh: '麦克·加根' },
  'ch-cletus-kasady': { en: 'Cletus Kasady', zh: '克莱图斯·卡萨迪' },
  'ch-red-skull': { en: 'Johann Schmidt', zh: '约翰·施密特' },
  'ch-norman-osborn': { en: 'Norman Osborn', zh: '诺曼·奥斯本' },
  'ch-harry-osborn': { en: 'Harry Osborn', zh: '哈利·奥斯本' },
  'ch-otto-octavius': { en: 'Otto Octavius', zh: '奥托·奥克塔维' },
  'ch-max-dillon': { en: 'Max Dillon', zh: '麦克斯·狄龙' },
  'ch-flint-marko': { en: 'Flint Marko', zh: '弗林特·马尔科' },
  'ch-curt-connors': { en: 'Curt Connors', zh: '库尔特·康纳斯' },
  'ch-kraven': { en: 'Sergei Kravinoff', zh: '谢尔盖·克拉维诺夫' },
  'ch-adrian-toomes-616': { en: 'Adrian Toomes (616)', zh: '艾德里安·图姆斯 (616)' },
  'ch-quentin-beck-616': { en: 'Quentin Beck (616)', zh: '昆汀·贝克 (616)' },
  'ch-green-goblin-raimi': { en: 'Norman Osborn (Raimi)', zh: '诺曼·奥斯本 (马奎尔宇宙)' },
  'ch-doc-ock-raimi': { en: 'Otto Octavius (Raimi)', zh: '奥托·奥克塔维 (马奎尔宇宙)' },
  'ch-electro-tasm': { en: 'Max Dillon (Webb)', zh: '麦克斯·狄龙 (加菲宇宙)' },
  'ch-sandman-raimi': { en: 'Flint Marko (Raimi)', zh: '弗林特·马尔科 (马奎尔宇宙)' },
  'ch-lizard-tasm': { en: 'Curt Connors (Webb)', zh: '库尔特·康纳斯 (加菲宇宙)' },
  'ch-ghost-rider-robbie_na': {},
};

/** 人物名规范化：'名号 真名' / '名号 / 名号 真名' / 'A / B' → 真名段 */
export function normalizePersonName(zh: string, en: string): { zh: string; en: string } {
  const clean = (s: string, isEn: boolean): string => {
    let out = s.trim();
    // 1) 取 "/" 最后段（Iron Man / Tony Stark → Tony Stark）
    if (out.includes(' / ')) out = out.split(' / ').pop()!.trim();
    // 2) 中文再取首个空格后的真名段（美国队长 山姆·威尔逊 → 山姆·威尔逊）
    if (!isEn && out.includes(' ')) out = out.split(/\s+/).slice(1).join(' ');
    return out.trim();
  };
  let nzh = clean(zh, false);
  let nen = clean(en, true);
  if (!nzh) nzh = zh;
  if (!nen) nen = en;
  return { zh: nzh, en: nen };
}
