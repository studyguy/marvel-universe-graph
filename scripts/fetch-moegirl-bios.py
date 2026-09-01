#!/usr/bin/env python3
"""萌娘百科直连采集：抓取 30 个人物词条 HTML，提取正文段落，存 .tmp-bio/<chid>.txt。
仅作事实参考素材；正式双语内容由人工改写入 data/source/bios.ts。
"""
import urllib.request, urllib.parse, re, html as htmllib, os, json

UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36'}
ENTRIES = {
 'ch-bruce-banner': '浩克',
 'ch-tony-stark': '钢铁侠',
 'ch-steve-rogers': '美国队长',
 'ch-thor': '托尔',
 'ch-natasha-romanoff': '黑寡妇(漫威)',
 'ch-clint-barton': '鹰眼(漫威)',
 'ch-peter-parker-mcu': '蜘蛛侠',
 'ch-stephen-strange': '奇异博士',
 'ch-wanda-maximoff': '绯红女巫',
 'ch-black-panther-tchalla': '黑豹(漫威)',
 'ch-carol-danvers': '惊奇队长',
 'ch-loki': '洛基',
 'ch-thanos': '灭霸',
 'ch-scott-lang': '斯科特·朗',
 'ch-vision': '幻视(漫威)',
 'ch-nick-fury': '尼克·弗瑞',
 'ch-gamora': '卡魔拉',
 'ch-hank-pym': '汉克·皮姆',
 'ch-odin': '奥丁',
 'ch-hela': '海拉',
 'ch-miles-morales': '迈尔斯·莫拉莱斯',
 'ch-matt-murdock': '夜魔侠',
 'ch-wolverine': '金刚狼',
 'ch-charles-xavier': 'X教授',
 'ch-groot': '格鲁特',
 'ch-rocket': '火箭浣熊',
 'ch-nebula': '星云',
 'ch-venom-symbiote': '毒液',
 'ch-moon-knight-marc': '月光骑士',
 'ch-blade': '布莱德',
}

OUT = '.tmp-bio'
os.makedirs(OUT, exist_ok=True)

def fetch(name):
    url = 'https://zh.moegirl.org.cn/' + urllib.parse.quote(name)
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=15) as r:
        return r.read().decode('utf-8', 'ignore')

def strip_tags(s):
    s = re.sub(r'<script.*?</script>', '', s, flags=re.S)
    s = re.sub(r'<style.*?</style>', '', s, flags=re.S)
    s = re.sub(r'<[^>]+>', '', s)
    s = htmllib.unescape(s)
    s = s.replace('\u200b', '').strip()
    return s

def extract(html_doc):
    paras = []
    # 正文主体：取 mw-parser-output 之后的所有 <p> 与 <h2>/<h3> 标题
    cut = html_doc.find('mw-parser-output')
    body = html_doc[cut:] if cut >= 0 else html_doc
    for m in re.finditer(r'<(h2|h3|p)[^>]*>(.*?)</\1>', body, flags=re.S):
        txt = strip_tags(m.group(2))
        if txt and len(txt) >= 18:
            paras.append(txt)
    return paras

report = {}
for cid, name in ENTRIES.items():
    try:
        doc = fetch(name)
        paras = extract(doc)[:14]
        with open(os.path.join(OUT, cid + '.txt'), 'w', encoding='utf-8') as f:
            f.write(f'## 词条：{name}\n\n')
            for i, p in enumerate(paras):
                f.write(f'[{i}] {p}\n\n')
        report[cid] = len(paras)
        print(f'✓ {cid} ({name}): {len(paras)} 段')
    except Exception as e:
        print(f'✗ {cid} ({name}): {e}')
        report[cid] = 0
json.dump(report, open(os.path.join(OUT, 'report.json'), 'w'))
print('done')
