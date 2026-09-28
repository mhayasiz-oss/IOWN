// IOWN紹介（単票）——deck-plan.json の文言をそのまま使う
const path = require("path");
const DD = process.env.DD || "/root/.claude/skills/synced/2018707e-7749-4e82-a212-e967eb255b3c_72d22daa-069c-4b5b-8f7c-f27da54693a5/deck-designer";
const K = require(path.join(DD, "scripts/deck_kit.js"));
const plan = require("./deck-plan.json");
const S = plan.slides[0];

(async () => {
  const pres = K.createDeck();
  K.stair(pres, {
    title: S.title,
    head: S.head[0],
    axis: { now: "現在", next: "これから" },
    banner: "ネットワークからコンピューティングへ",
    // 土台から順（配列の先頭が最下段）
    steps: [
      { label: "DC間・サーバ間の接続", note: "IOWN 1.0・2023年／APN", lane: "ネットワーク", state: "now", targets: ["遅延1/200"] },
      { label: "ボード間の接続", note: "IOWN 2.0・2025年", lane: "コンピューティング" },
      { label: "パッケージ間の接続", note: "IOWN 3.0・2028年", lane: "コンピューティング", targets: ["容量125倍"] },
      { label: "ダイ間の接続", note: "IOWN 4.0・2032年", lane: "コンピューティング", targets: ["電力効率100倍"] },
    ],
    source: S.source,
    footnotes: S.footnotes,
  });
  await K.save(pres, "IOWN紹介_1枚.pptx");
})();
