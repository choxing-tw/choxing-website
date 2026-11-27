# 專案說明（給 Claude Code）

- 這是秋星有限公司（英文名 Choxing）的官網，純靜態 HTML/CSS/JS，無建置流程，請維持這個做法。
- 與使用者溝通用繁體中文（台灣用語）。
- 網站兩大目標：**凸顯公司專利**、**讓客戶能在 Google 搜尋到**。修改時請優先顧及這兩點。
- 每個頁面的頁首、頁尾是重複的 HTML；改導覽列或頁尾時，所有 `*.html` 都要一起改。
- 新增頁面時：同步加入導覽列、`sitemap.xml`，並寫好 `<title>`、`description`、`canonical`、OG 標籤。
- 暫代內容標有 `class="todo"`（黃底虛線），填入真實內容後移除該 class。
- 樣式集中在 `css/style.css`，品牌色定義在 `:root`。
