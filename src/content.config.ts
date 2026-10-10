import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
// 活動日誌: src/content/nikki/<yyyy-mm-dd>-<slug>.md が 1 日
const nikki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/nikki' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    place: z.string().optional(),
    photo: z.string().optional(), // /img/... (任意)
    who: z.string().optional(),   // ありさん / なぎさん / 2人 / ぷちたち
    version: z.string().optional(), // 配信なら版の名前(cloud-0.2.1 など)
    link: z.string().url().optional(),
  }),
});
export const collections = { nikki };
