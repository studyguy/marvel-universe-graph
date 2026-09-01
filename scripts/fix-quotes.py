"""扫描 data/source 下 TS 单引号字符串中未转义的撇号并自动修复。"""
import io, glob, re

FIX = True
for f in glob.glob('data/source/*.ts'):
    s = io.open(f, encoding='utf-8').read()
    # 匹配：单引号开头字符串内的 word's word（撇号前后都是字母且未转义）
    pat = re.compile(r"([A-Za-z])'([a-z])")
    out = []
    pos = 0
    changed = False
    # 逐行处理更安全：定位处于两个单引号之间的撇号
    for line in s.split('\n'):
        # 跳过已是 \' 的情况
        fixed = []
        i = 0
        in_str = False
        while i < len(line):
            c = line[i]
            if c == '\\' and in_str:
                fixed.append(line[i:i+2]); i += 2; continue
            if c == "'":
                in_str = not in_str
                fixed.append(c); i += 1; continue
            fixed.append(c); i += 1
        # 简单法：直接查找 's ' 或 't 等：如果撇号前是字母、后是小写字母，且不是 \'，则视为字符串内撇号
        new = re.sub(r"([A-Za-z])'(?=[a-z])", lambda m: m.group(1) + "\\'", line)
        if new != line:
            changed = True
            ln = s.split('\n').index(line) + 1
            print(f, ln, repr(line[:80]))
        out.append(new)
    if changed and FIX:
        io.open(f, 'w', encoding='utf-8').write('\n'.join(out))
print('done')
