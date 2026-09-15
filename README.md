# 電子學四級題庫

以 111–115 學年度四技二專「專業科目（一）」試題製作的電子學練習網站，依 Sedra/Smith《微電子電路》第八版章節分類。

## 目前進度

- 電子學相關題目：121 題
- 已完成網站題目：60 題
- 已完成章節：第 4、5、6、7 章
- 製作中：第 9 章

每題以原始試題切圖呈現，並提供選擇題、少量填空、中量填空及大量填空四級訓練。計算題包含 LaTeX 完整推導、數值與單位分開判分、作答回饋及瀏覽器內的個人學習統計。

## 專案結構

```text
.
├─ .github/workflows/pages.yml  # GitHub Pages 自動部署
├─ site/                        # 可直接發布的靜態網站
│  ├─ index.html                # 主要入口
│  ├─ quiz.html                 # 共用測驗頁
│  ├─ chapters/                 # 章節頁
│  ├─ data/                     # 題目與解答資料
│  └─ assets/                   # 題目切圖
├─ .gitignore
└─ README.md
```

## 本機預覽

可直接開啟 `site/index.html`，或在專案根目錄執行：

```bash
python -m http.server 8000 --directory site
```

然後開啟 `http://localhost:8000/`。

## GitHub Pages 部署

推送到 `main` 後，GitHub Actions 會自動部署 `site/`。第一次使用請至 repository 的 **Settings → Pages**，將 Source 設為 **GitHub Actions**。

## 注意事項

- 題目需通過官方答案核對及獨立驗算後才標記完成。
- 題目切圖源自公開考試資料；公開或再利用前請確認來源標示與授權需求。
- MathJax 由 CDN 載入，顯示公式時需要網路連線。
