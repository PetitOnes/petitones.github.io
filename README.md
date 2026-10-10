# petitones.github.io

ぷちたちのサイト **https://petitones.github.io/**。PetitOnes(ありさん)のプロジェクト。

- 作り: [Astro](https://astro.build)。`src/pages/` がページ、`src/components/` が部品、`src/content/nikki/` が活動日誌(Markdown 1本 = 1日。配信やお知らせもここ)
- 色・書体・顔は [petit-brand](https://petitones.github.io/petit-brand/) の `tokens.css` と `assets/` を読む。ここに色を作らない
- 版は `VERSION`(= `package.json` の version)。main に入ると CI が build → Pages(公開)に出し、同じ名前のタグと Release を作る。手元で見るのは `npm run dev`
- 中身の正しさ: 決めたこと → 事実の表 → このサイト。「まだ」は正直に書く。金額と個人の姓は書かない

```sh
npm ci
npm run dev      # http://localhost:4321/
npm run build    # dist/
```

**トップの文を直す**: `src/content/top/*.txt`(改行はそのまま改行、空行で段落)。一覧は `src/content/top/README.md`。GitHub の画面の鉛筆マークで直して保存すれば反映される。

直すときは PR で(文の直しは main に直接でもよい)。トップは長い1枚(ぷちたち → 暮らし → なかみ → 活動 → お迎え → ご近所さん → FAQ)、下層は `/satooya/` `/petit/` `/nikki/` `/ouendan/` `/team/` `/make/` の6枚。
