import { describe, expect, it } from 'vitest';
import { normalizePersonName, PERSON_NAME_OVERRIDE } from '../scripts/graph-normalize';

describe('normalizePersonName 人物名规范化', () => {
  it('中文 “名号 真名” 取真名段', () => {
    expect(normalizePersonName('美国队长 山姆·威尔逊', 'Sam Wilson').zh).toBe('山姆·威尔逊');
  });

  it('英文 “名号 / 真名” 取斜杠后段', () => {
    expect(normalizePersonName('美国队长 山姆·威尔逊', 'Captain America / Sam Wilson').en).toBe('Sam Wilson');
  });

  it('“名号 / 名号 真名” 取最后段', () => {
    const r = normalizePersonName('钢铁侠 / 托尼·斯塔克', 'Iron Man / Tony Stark');
    expect(r.zh).toBe('托尼·斯塔克');
    expect(r.en).toBe('Tony Stark');
  });

  it('多空格真名合并（中文按首个空格切，后续保留）', () => {
    const r = normalizePersonName('奇异博士 史蒂芬 斯特兰奇', 'Dr. Strange Stephen Strange');
    expect(r.zh).toBe('史蒂芬 斯特兰奇');
    expect(r.en).toBe('Dr. Strange Stephen Strange'); // 英文不加空格切分
  });

  it('无斜杠/空格的名称原样返回', () => {
    const r = normalizePersonName('灭霸', 'Thanos');
    expect(r).toEqual({ zh: '灭霸', en: 'Thanos' });
  });

  it('空字符串兜底为原值', () => {
    const r = normalizePersonName('', '');
    expect(r).toEqual({ zh: '', en: '' });
  });

  it('前后空格被去除', () => {
    const r = normalizePersonName('  奇异博士 史蒂芬·斯特兰奇  ', '  Dr. Strange / Stephen Strange  ');
    expect(r.zh).toBe('史蒂芬·斯特兰奇');
    expect(r.en).toBe('Stephen Strange');
  });
});

describe('PERSON_NAME_OVERRIDE 修正表', () => {
  it('覆盖关键条目且必含双语/单语', () => {
    expect(PERSON_NAME_OVERRIDE['ch-james-rhodes']).toEqual({ en: 'James Rhodes', zh: '詹姆斯·罗兹' });
    expect(PERSON_NAME_OVERRIDE['ch-iron-lad'].zh).toBe('纳撒尼尔·理查兹');
    expect(PERSON_NAME_OVERRIDE['ch-venom-symbiote'].en).toBe('Symbiote (Venom)');
  });

  it('除 _na 占位外都有有效内容', () => {
    for (const [id, ov] of Object.entries(PERSON_NAME_OVERRIDE)) {
      if (id.endsWith('_na')) continue; // 空覆盖占位（保持原名）
      expect(ov.en || ov.zh, `${id} 空覆盖`).toBeTruthy();
    }
  });
});
