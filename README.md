# petitones.github.io

ぷちたちのサイト **https://petitones.github.io/**。PetitOnes(ありさん)のプロジェクト。

- 作り: [Astro](https://astro.build)。`src/pages/` がページ、`src/components/` が部品、`src/content/news/` がお知らせ(Markdown 1本 = 1件)
- 色・書体・顔は [petit-brand](https://petitones.github.io/petit-brand/) の `tokens.css` と `assets/` を読む。ここに色を作らない
- 版は `VERSION`(= `package.json` の version)。main に入ると CI が build し、**ありさんが Actions で承認すると** Pages(公開)に出て、同じ名前のタグと Release ができる
- **公開の前に見る(プレビュー)**: `npm run build && npm run preview:deploy` で Cloudflare Workers(`petitones-preview`、Access で運営のメールだけ)に出る。手引きと同じ仕組み。初回だけ `npx wrangler login`
- 中身の正しさ: 決めたこと → 事実の表 → このサイト。「まだ」は正直に書く。金額と個人の姓は書かない

```sh
npm ci
npm run dev      # http://localhost:4321/
npm run build    # dist/
```

直すときは、枝(branch)で直す → プレビューに出して見る → PR を main に入れる → Actions の承認で公開、の順。トップは長い1枚(ぷちとは → ぷちたち → 暮らし → なかみ → お迎え → ご近所さん → FAQ → お知らせ)、下層は `/satooya/` `/petit/` `/make/` `/news/` の4枚。
