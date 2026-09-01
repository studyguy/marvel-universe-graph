/** 其他频道角色（SSU / 福克斯 / 动画 / 游戏） */
import { ch, E } from './registry';
import { L2 } from '../taxonomy';

const A = L2('存活', 'Alive');
const D = L2('已故', 'Deceased');
const NOW = L2('当前', 'Current');
const PAST = L2('历史', 'Past');

ch('michael-morbius', 'antihero', '莫比亚斯', 'Michael Morbius', '以吸血鬼血清自救的生物化学家。', 'The biochemist who cured himself into a vampire.', { race: 'race-human', status: A, debut: '莫比亚斯 (2022)', actor: '杰瑞德·莱托 Jared Leto', occupation: '生化学家', universe: 'uni-ssu' });
ch('madame-web-cassandra', 'superhero', '蜘蛛夫人 卡桑德拉·韦伯', 'Madame Web / Cassandra Webb', '能预见未来的救护员，SSU 的预言者。', 'The paramedic who sees the future.', { race: 'race-human', status: A, debut: '蜘蛛夫人 (2024)', actor: '达科塔·约翰逊 Dakota Johnson', occupation: '急救员 / 预言者', universe: 'uni-ssu' });
ch('venom-eddie-ssu', 'antihero', '毒液 (SSU)', 'Venom (SSU)', 'SSU 宇宙的毒液与埃迪共生体组合。', 'The SSU Eddie-and-Venom duo.', { race: 'race-symbiote-race', status: A, debut: '毒液：致命守护者 (2018)', actor: '汤姆·哈迪 Tom Hardy', occupation: '调查记者 / 毒液宿主', universe: 'uni-ssu' });
ch('peter-parker-insomniac', 'superhero', '蜘蛛侠 (Insomniac 版)', 'Spider-Man (Insomniac)', '游戏宇宙的成熟彼得，与迈尔斯并肩守卫纽约。', 'The seasoned game-universe Peter.', { race: 'race-human', status: A, debut: '漫威蜘蛛侠 (2018)', actor: '尤里·洛文索 Yuri Lowenthal', occupation: '科学家 / 英雄', universe: 'uni-insomniac' });
ch('miles-insomniac', 'superhero', '蜘蛛侠 迈尔斯 (Insomniac 版)', 'Spider-Man / Miles (Insomniac)', '游戏宇宙的迈尔斯，毒刺与隐身的纽约新守护者。', 'The game-universe Miles guarding Harlem.', { race: 'race-human', status: A, debut: '蜘蛛侠：迈尔斯·莫拉莱斯 (2020)', actor: '纳杰·杰特 Nadji Jeter', occupation: '学生 / 英雄', universe: 'uni-insomniac' });
ch('spider-man-1602', 'superhero', '1602 蜘蛛侠', 'Spider-Man (1602)', '漫威 1602 极简宇宙的克里崇拜者皮特。', 'The 1602 reality\'s Peter Parquagh.', { race: 'race-human', status: A, debut: '漫威争锋 (2024)', occupation: '学徒', universe: L2('Earth-311', 'Earth-311') });
ch('peni-parker', 'superhero', '佩妮·帕克', 'Peni Parker', '驾驶 SP//dr 机甲的日本少女蜘蛛侠。', 'The girl piloting the SP//dr mech.', { race: 'race-human', status: A, debut: '蜘蛛侠：平行宇宙 (2018)', actor: L2('喜多村英梨', 'Kimiko Glenn'), occupation: '学生 / 机师', universe: L2('Earth-14512', 'Earth-14512') });
ch('spider-noir', 'antihero', '暗影蜘蛛侠', 'Spider-Man Noir', '大萧条时代的黑白义警。', 'The black-and-white vigilante of the Depression.', { race: 'race-human', status: A, debut: '蜘蛛侠：平行宇宙 (2018)', actor: L2('尼古拉斯·凯奇', 'Nicolas Cage'), occupation: '记者 / 义警', universe: L2('Earth-90214', 'Earth-90214') });
ch('the-prowler-1610', 'antihero', '徘徊者 亚伦·戴维斯', 'The Prowler / Aaron Davis', '迈尔斯的叔叔，徘徊者。', 'Miles\'s uncle, the Prowler.', { race: 'race-human', status: D, debut: '蜘蛛侠：平行宇宙 (2018)', actor: L2('马赫沙拉·阿里', 'Mahershala Ali'), occupation: '佣兵', universe: 'uni-earth-1610' });
ch('jefferson-davis', 'military', '杰斐逊·戴维斯警员', 'Jefferson Davis', '迈尔斯的父亲，纽约警员。', 'Miles\'s father, an NYPD officer.', { race: 'race-human', status: A, debut: '漫威蜘蛛侠 (2018)', occupation: '警员', universe: 'uni-insomniac' });

/* ---------- SSU / 游戏 / 动画关系 ---------- */
E('ch-eddie-brock', 'ch-venom-eddie-ssu', 'variant-of', { universe: 'SSU' });
E('ch-venom-symbiote', 'ch-venom-eddie-ssu', 'variant-of', { universe: 'SSU' });
E('ch-carnage', 'ch-cletus-kasady', 'symbiote-bond', { period: '2021', status: PAST });
E('ch-venom-eddie-ssu', 'ch-carnage', 'killed', { when: L2('毒液2 (2021)', 'Let There Be Carnage') });
E('ch-michael-morbius', 'ch-madame-web-cassandra', 'affiliated-with', { status: NOW });
E('ch-venom-eddie-ssu', 'uni-earth-199999', 'traveled-to', { status: PAST });
E('ch-peter-parker-insomniac', 'ch-peter-parker-616', 'variant-of', { universe: 'Earth-1048' });
E('ch-miles-insomniac', 'ch-miles-morales', 'variant-of', { universe: 'Earth-1048' });
E('ch-miles-insomniac', 'ch-peter-parker-insomniac', 'mentor-of', { status: NOW });
E('ch-peter-parker-insomniac', 'ch-mary-jane-watson', 'ex-lover', { status: NOW });
E('ch-peter-parker-insomniac', 'ch-jefferson-davis', 'ally', { status: PAST });
E('ch-the-prowler-1610', 'ch-miles-morales', 'kin', { kind: L2('叔侄', 'Uncle & nephew'), status: PAST });
E('ch-the-prowler-1610', 'ch-miles-morales', 'mentor-of', { status: PAST });
E('ch-peni-parker', 'ch-miles-morales', 'ally', { status: NOW });
E('ch-spider-noir', 'ch-miles-morales', 'ally', { status: NOW });
E('ch-spider-man-1602', 'ch-miles-morales', 'ally', { status: NOW });
E('ch-miguel-ohara', 'ch-peni-parker', 'affiliated-with', { status: NOW });
E('ch-miles-morales', 'ch-the-prowler-1610', 'victim-of', { status: PAST });
E('ch-kraven', 'ch-michael-morbius', 'nemesis', { since: L2('莫比亚斯 (2022)', 'Morbius'), status: PAST });
