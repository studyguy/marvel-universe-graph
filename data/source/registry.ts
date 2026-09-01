/** 数据源构建器：所有 source/*.ts 通过这里登记实体与关系 */
import { L2 } from '../taxonomy';
import type { L } from '../taxonomy';

export interface NodeSeed {
  id: string;
  type: string;
  sub: string;
  name: L;
  alias?: { zh: string[]; en: string[] };
  desc: L;
  props: Record<string, any>;
  sources: string[];
}
export interface EdgeSeed {
  s: string;
  t: string;
  r: string;
  props?: Record<string, any>;
}

export const seeds: NodeSeed[] = [];
export const edgeSeeds: EdgeSeed[] = [];

type AliasInput = { zh?: string | string[]; en?: string | string[] };
function normAlias(a?: AliasInput): { zh: string[]; en: string[] } | undefined {
  if (!a) return undefined;
  const arr = (v?: string | string[]) => (v ? (Array.isArray(v) ? v : [v]) : []);
  const zh = arr(a.zh);
  const en = arr(a.en);
  return zh.length || en.length ? { zh, en } : undefined;
}

function add(
  id: string,
  type: string,
  sub: string,
  zh: string,
  en: string,
  descZh: string,
  descEn: string,
  props: Record<string, any> = {},
  aliasIn?: AliasInput,
  sources?: string[]
): string {
  seeds.push({ id, type, sub, name: L2(zh, en), alias: normAlias(aliasIn), desc: L2(descZh, descEn), props, sources: sources ?? [] });
  return id;
}

export const ch = (id: string, sub: string, zh: string, en: string, dz: string, de: string, props: Record<string, any> = {}, alias?: AliasInput, src?: string[]) =>
  add(`ch-${id}`, 'character', sub, zh, en, dz, de, props, alias, src);
export const team = (id: string, sub: string, zh: string, en: string, dz: string, de: string, props: Record<string, any> = {}, alias?: AliasInput, src?: string[]) =>
  add(`team-${id}`, 'team', sub, zh, en, dz, de, props, alias, src);
export const loc = (id: string, sub: string, zh: string, en: string, dz: string, de: string, props: Record<string, any> = {}, alias?: AliasInput, src?: string[]) =>
  add(`loc-${id}`, 'location', sub, zh, en, dz, de, props, alias, src);
export const item = (id: string, sub: string, zh: string, en: string, dz: string, de: string, props: Record<string, any> = {}, alias?: AliasInput, src?: string[]) =>
  add(`item-${id}`, 'item', sub, zh, en, dz, de, props, alias, src);
export const wk = (id: string, sub: string, zh: string, en: string, dz: string, de: string, props: Record<string, any> = {}, alias?: AliasInput, src?: string[]) =>
  add(`wk-${id}`, 'work', sub, zh, en, dz, de, props, alias, src);
export const ev = (id: string, sub: string, zh: string, en: string, dz: string, de: string, props: Record<string, any> = {}, alias?: AliasInput, src?: string[]) =>
  add(`ev-${id}`, 'event', sub, zh, en, dz, de, props, alias, src);
export const uni = (id: string, sub: string, zh: string, en: string, dz: string, de: string, props: Record<string, any> = {}, alias?: AliasInput, src?: string[]) =>
  add(`uni-${id}`, 'universe', sub, zh, en, dz, de, props, alias, src);
export const chan = (id: string, sub: string, zh: string, en: string, dz: string, de: string, props: Record<string, any> = {}, alias?: AliasInput, src?: string[]) =>
  add(`chan-${id}`, 'channel', sub, zh, en, dz, de, props, alias, src);
export const race = (id: string, sub: string, zh: string, en: string, dz: string, de: string, props: Record<string, any> = {}, alias?: AliasInput, src?: string[]) =>
  add(`race-${id}`, 'race', sub, zh, en, dz, de, props, alias, src);
export const mantle = (id: string, sub: string, zh: string, en: string, dz: string, de: string, props: Record<string, any> = {}, alias?: AliasInput, src?: string[]) =>
  add(`mnt-${id}`, 'mantle', sub, zh, en, dz, de, props, alias, src);
export const ab = (id: string, sub: string, zh: string, en: string, dz: string, de: string, props: Record<string, any> = {}, alias?: AliasInput, src?: string[]) =>
  add(`ab-${id}`, 'ability', sub, zh, en, dz, de, props, alias, src);

/** 登记一条关系；s/t 为完整节点 id */
export const E = (s: string, t: string, r: string, props?: Record<string, any>) => {
  edgeSeeds.push({ s, t, r, props });
};
