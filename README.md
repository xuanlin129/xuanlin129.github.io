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

確保您的環境中已安裝 Node.js (推薦 v18+)。

```bash
npm install
```

### 2. 啟動開發服務器

```bash
npm run dev
```

應用程序將在 [http://localhost:5173](http://localhost:5173) 上運行。

### 3. 構建生產版本

```bash
npm run build
```

打包後的檔案將位於 `dist` 目錄中。

### 4. 預覽生產構建

```bash
npm run preview
```

## 📄 授權

此專案僅供個人作品展示使用。
