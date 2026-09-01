/** 运行时图数据结构（build-data.ts 的输出契约，与 graph.json 对应） */

import type { L } from './taxonomy';

export interface GraphNode {
  id: string;
  type: string;
  sub: string;
  name: L;
  alias?: { zh: string[]; en: string[] };
  desc: L;
  props: Record<string, string | string[] | L>;
  img?: true; // 存在真实图片 /assets/images/<id>.jpg
  sources: string[];
}

export interface GraphEdge {
  id: string;
  s: string; // source node id
  t: string; // target node id
  r: string; // relation type key
  props?: Record<string, string | string[] | L>;
}

export interface GraphData {
  version: string;
  generatedAt: string;
  nodes: GraphNode[];
  edges: GraphEdge[];
  stats: { nodes: number; edges: number; byType: Record<string, number> };
}

export function wikiUrl(wiki: string): string {
  return `https://marvel.fandom.com/wiki/${encodeURIComponent(wiki.replace(/ /g, '_'))}`;
}
export function mcuWikiUrl(wiki: string): string {
  return `https://marvelcinematicuniverse.fandom.com/wiki/${encodeURIComponent(wiki.replace(/ /g, '_'))}`;
}
