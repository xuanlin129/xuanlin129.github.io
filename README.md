# Xuan Lin - Personal Portfolio

這是一個專為展示個人作品與經歷所打造的現代化前端網站。使用 React + Vite 構建，結合流暢的 GSAP 動畫與直覺的 UI 設計，旨在提供最佳的使用者體驗。

🔗 **線上預覽**: [https://xuanlin129.github.io/](https://xuanlin129.github.io/)

## ✨ 特色功能

- **⚡️ 極速效能**: 基於 Vite 構建，提供秒級的熱更新與打包速度。
- **🎨 現代化設計**: 結合 Ant Design 與 Styled Components，打造乾淨、響應式的介面。
- **🌐 多語系支援**: 完整整合 i18next，支援繁體中文 (zh-TW) 與英文 (en) 切換。
- **🔍 SEO 優化**: 透過 React Helmet Async 管理 Meta 標籤，並包含 Sitemap 與 Robots.txt 配置。
- **✨ 互動動畫**: 使用 GSAP 實現細緻的轉場與互動效果。
- **🔄 狀態管理**: 採用輕量級的 Reconnect.js 進行全域狀態控管 (如 Loading 狀態)。

## 🛠 技術棧

### 核心架構

- **Framework**: [React](https://react.dev/) v18
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Router**: [React Router](https://reactrouter.com/) v7

### UI & 樣式

- **Component Library**: [Ant Design](https://ant.design/)
- **Styling**: [Styled Components](https://styled-components.com/)
- **Icons**: [Styled Icons](https://styled-icons.js.org/)
- **Animations**: [GSAP](https://greensock.com/gsap/)

### 功能整合

- **i18n**: [i18next](https://www.i18next.com/)
- **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async)
- **State Management**: [Reconnect.js](https://github.com/m-reset/reconnect.js)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## 📂 專案結構

```
src/
├── assets/          # 靜態資源 (圖片、字型)
├── components/      # 重用組件 (Layout、SEO Helmet、Spinner 等)
├── config/          # 全域配置 (專案資料、主題色)
├── layouts/         # 頁面佈局 (Header, Footer 整合)
├── locales/         # i18n 翻譯檔 (zh-TW.json, en.json)
├── pages/           # 主要頁面 (Home, About, Portfolio, Contact)
├── plugins/         # 第三方套件配置 (i18n 初始化)
├── router/          # 路由配置
├── stores/          # 全域狀態 (Loading 狀態等)
├── styles/          # 全域樣式 (Reset CSS, Global Styles)
└── utils/           # 工具函數
```

## 🚀 快速開始

### 1. 安裝依賴

確保您的環境中已安裝 Node.js 20.19+ 或 22.12+（Vite 7 的版本需求）。

```bash
npm install
```

### 2. 啟動開發服務器

```bash
npm run dev
```

應用程序將在 [http://localhost:3000](http://localhost:3000) 上運行。

### 3. 構建生產版本

```bash
npm run build
```

此指令分別產生 `dist/client`（瀏覽器資源）與 `dist/server`（SSR 渲染入口）。

### 4. 預覽生產構建

```bash
npm run preview
```

## SSR 與部署

依照 [Vite 官方 SSR 指南](https://vite.dev/guide/ssr) 使用 Vite 原生 SSR API。開發時由 `server.js` 整合 Vite middleware、HTML 轉換與 `ssrLoadModule`；正式環境直接載入建置後的伺服器入口。

- `src/main.js`：建立共用 React 應用。
- `src/entry-client.js`：載入初始頁面後執行 hydration，再套用瀏覽器語系偏好。
- `src/entry-server.js`：每次請求建立獨立路由、語系、Helmet context 與樣式快取，輸出 HTML、標題與樣式。
- `src/router/index.js`：共用一般路徑路由；初始頁面先載入，其餘頁面延遲載入。

SSR 初始語系為 `zh-TW`，確保伺服器與瀏覽器首次渲染一致。首次進站固定繁體中文，不依瀏覽器語系自動切換；hydration 後只恢復使用者已儲存的語系偏好。頁面網址改為 `/about`、`/portfolio`、`/contact`。

### Node.js SSR 部署

```bash
npm ci
npm run build
npm start
```

伺服器預設使用連接埠 3000；可透過 `PORT`、`HOST` 調整。正式部署需包含 `server.js`、`scripts/html.js`、`dist`、`package.json`、`package-lock.json`，並安裝正式依賴。`npm run preview` 同樣啟動正式 SSR 服務。未知頁面回傳 HTTP 404。

### GitHub Pages 靜態部署

```bash
npm run build:static
```

此指令使用相同 SSR 入口預先產生首頁、個人簡介、作品集、聯絡頁與 `404.html`，部署目錄為 `dist/client`。GitHub Pages 工作流程已使用此指令。GitHub Pages 提供建置時產生的 HTML；每次請求執行 SSR 則需部署 Node.js 服務。

使用 `npm run preview:static` 在本機驗證靜態輸出（預設連接埠 4173），支援 `/about` 等無副檔名網址，不會執行 SSR。一般 Python 靜態伺服器不支援這種網址解析。

### 驗證

```bash
npm run lint
npm test
```

測試涵蓋各頁 SSR 內容與標題、樣式擷取、404、並行請求隔離，以及靜態部署輸出。

## SEO 與 AI 搜尋內容

每個正式頁面都有獨立 title、description、canonical、Open Graph 與 Twitter Card，並在預先渲染的 HTML 中輸出。分頁正式網址統一不帶結尾斜線（例如 `/about`），與 canonical 及 sitemap 一致。GitHub Pages 使用 `about.html` 等檔案提供無副檔名網址，不再產生 `about/index.html` 等目錄頁面。

`src/config/site.js` 集中管理正式網址與人物連結；`src/locales` 管理中英文頁面描述。人物、網站、個人簡介與作品列表使用 JSON-LD，資訊取自頁面中的姓名、專業與作品，修改內容時應同步維護。

404 使用 `noindex, follow`；robots.txt 允許爬蟲讀取此規則。英文目前是瀏覽器端語系切換，共用繁體中文網址，沒有獨立英文索引頁或 hreflang。

發布後可在 Google Search Console 提交 `/sitemap.xml`，並檢查四個正式頁面的索引狀態與搜尋字詞。SEO 與 AI 搜尋效果需以實際搜尋曝光、點擊與索引資料觀察。

## 📄 授權

此專案僅供個人作品展示使用。

## 共用 API 設定

後端 API 位於 `xuanlin-website`。在 `.env.local` 設定：

```dotenv
VITE_API_BASE_URL=https://your-xuanlin-website.vercel.app
```

此值是公開 API 來源，不是密鑰。GitHub Pages 請在 repository Settings → Secrets and variables → Actions → Variables 設定同名變數，再重新執行 Deploy。

建置時會取得中英文已發布作品，寫入 `src/config/projects.snapshot.json`，讓預先產生的 HTML 與 SEO 使用 DB 資料。API 讀取失敗會中止建置，避免發布不完整頁面。瀏覽器載入後會再次讀取 API，取得最新內容；失敗時保留建置快照。未設定 API 時沿用既有作品資料。

作品集與工作經歷共用此網址。請先部署後端並建立作品與經歷，再設定此前台變數。後台發布或下架後，瀏覽器讀取會更新；搜尋引擎使用的靜態 HTML 需重新建置部署。請勿把 Blob token 或 MongoDB 連線資訊放入前台環境變數。

### 工作經歷 API

後台 `/admin/experiences` 管理經歷；公開 API `/api/experiences?locale=zh-TW` 僅回傳 `isPublished: true`，依 `startMonth`、ID 由舊到新排列。

沿用上方的 `VITE_API_BASE_URL`，開發與建置會取得中英文經歷快照，瀏覽器也會更新經歷。未設定時保留原有本機內容；API 回傳空陣列時不顯示經歷。API 失敗時保留建置資料；GitHub Pages 的靜態 HTML 需重新建置才會更新。
