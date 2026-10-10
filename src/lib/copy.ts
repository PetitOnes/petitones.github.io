// トップの文を src/content/top/*.txt から読む。改行 = <br>、空行 = 段落。
const files = import.meta.glob('../content/top/*.txt', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/** 段落ごとの配列。各段落は行の配列 */
export function paras(name: string): string[][] {
  const raw = files[`../content/top/${name}.txt`];
  if (raw === undefined) throw new Error(`src/content/top/${name}.txt が無い`);
  return raw.replace(/\r/g, '').trim().split(/\n\s*\n/).map((p) => p.split('\n').map((l) => l.trim()).filter(Boolean));
}
/** <p>…<br>…</p> の HTML */
export function html(name: string, cls = ''): string {
  return paras(name).map((p) => `<p${cls ? ` class="${cls}"` : ''}>${p.map(esc).join('<br />')}</p>`).join('\n');
}
/** 1段落だけを <br> でつないだ HTML(見出し用) */
export function lines(name: string): string {
  return paras(name).flat().map(esc).join('<br />');
}
