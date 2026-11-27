# 秋星有限公司 Choxing 官方網站

純 HTML + CSS 的靜態網站，不需要安裝或編譯，直接用瀏覽器打開 `index.html` 就能預覽。

## 檔案結構

| 檔案 | 內容 |
| --- | --- |
| `index.html` | 首頁：定位、專利亮點、產品、關於 |
| `jack.html` | 工程用千斤頂：用途、規格表 |
| `earth-pressure-gauge.html` | 土壓計（新型專利 M655534）：用途、規格表 |
| `patents.html` | 專利：M655534 資料與證書（點擊放大） |
| `projects.html` | 工程實績與測試 |
| `contact.html` | 聯絡資訊與詢價表單 |
| `404.html` | 找不到頁面 |
| `css/style.css` | 全站樣式（品牌色在檔案最上方 `:root`） |
| `js/main.js` | 手機選單 |
| `sitemap.xml`、`robots.txt` | 給 Google 的網站地圖 |
| `images/` | Logo、照片放這裡 |

## 待填內容

頁面中黃底虛線框（`class="todo"`）的地方都是暫代文字，填入真實內容後把 `todo` 拿掉即可。
搜尋 `待填` 或 `TODO` 可以找到所有需要補的地方。

## 上線前檢查（SEO）

- [ ] 確定正式網域，把所有 `https://www.choxing.com.tw` 換成正式網址（`*.html`、`sitemap.xml`、`robots.txt`）
- [ ] 每頁 `<title>` 與 `<meta name="description">` 放入客戶會搜尋的關鍵字
- [ ] 首頁與聯絡頁的 JSON-LD 公司資料（地址、電話）填入真實資訊
- [ ] 詢問表單接上表單服務
- [ ] 換上真實 LINE 官方帳號連結（目前暫用 `@choxing`）、Email
- [ ] 照片換成 `<img src="images/..." alt="說明文字" loading="lazy">`，每張都要有 alt
- [ ] 上線後到 Google Search Console 驗證網站並提交 `sitemap.xml`
- [ ] 申請 Google 商家檔案
