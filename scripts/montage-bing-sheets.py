#!/usr/bin/env python3
"""把 .tmp-bing/<id>/<i>.jpg 候选拼成接触片，每节点一行 + 编号，供人工目检选图。
用法：python3 scripts/montage-bing-sheets.py [--ids=id1,id2...]
输出：.tmp-bing/sheet-*.png
"""
import json, os, sys
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TMP = os.path.join(ROOT, '.tmp-bing')

if __name__ == '__main__':
    only = None
    for a in sys.argv[1:]:
        if a.startswith('--ids='):
            only = set(a.split('=')[1].split(','))
    cand = json.load(open(os.path.join(TMP, 'candidates.json')))
    ids = [i for i in cand if (not only or i in only)]
    TILE = 240
    LABEL_H = 22
    per_row = 8  # 每个节点 8 候选一行
    rows_per_sheet = 6
    font = ImageFont.load_default()

    for si, start in enumerate(range(0, len(ids), rows_per_sheet)):
        chunk = ids[start:start + rows_per_sheet]
        w = TILE * per_row
        h = len(chunk) * (TILE + LABEL_H)
        sheet = Image.new('RGB', (w, h), (24, 24, 28))
        d = ImageDraw.Draw(sheet)
        for ri, nid in enumerate(chunk):
            y0 = ri * (TILE + LABEL_H)
            d.text((6, y0 + 3), f"{nid}  {cand[nid].get('zh','')}", fill=(255, 220, 120), font=font)
            base = y0 + LABEL_H
            for ci in range(per_row):
                x0 = ci * TILE
                p = os.path.join(TMP, nid, f"{ci}.jpg")
                img = None
                try:
                    img = Image.open(p)
                    img.thumbnail((TILE - 4, TILE - 4))
                except Exception:
                    pass
                if img:
                    sheet.paste(img, (x0 + 2, base + 2))
                else:
                    d.rectangle([x0, base, x0 + TILE - 1, base + TILE - 1], outline=(90, 90, 96))
                    d.text((x0 + 8, base + 8), f"fail {ci}", fill=(200, 90, 90), font=font)
                d.line([(x0, base), (x0, base + TILE)], fill=(70, 70, 78))
        out = os.path.join(TMP, f'sheet-{si + 1}.png')
        sheet.save(out)
        print(out)
