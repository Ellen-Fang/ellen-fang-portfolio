# 部署指南

## 🚀 本機開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```

在瀏覽器打開 http://localhost:5173

## 📦 生產構建

```bash
npm run build
```

生成的 `dist/` 文件夾包含所有優化的生產文件。

---

## 🌐 部署到 Vercel（推薦）

### 最快的部署方式（5分鐘）

1. **將代碼推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

2. **在 Vercel 上部署**
   - 訪問 https://vercel.com
   - 點擊「New Project」
   - 選擇你的 GitHub 倉庫
   - Vercel 會自動檢測 Vite 項目
   - 點擊「Deploy」
   - ✅ 完成！你的網站現在在線了

3. **自動部署**
   - 每次推送到 GitHub 時，Vercel 會自動重新部署
   - 無需額外配置

---

## 📄 部署到 GitHub Pages

### 方式 1：使用 GitHub Actions（推薦，自動化）

1. **更新 vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',  // 替換為你的倉庫名
   })
   ```

2. **推送代碼到 GitHub**
   ```bash
   git add .
   git commit -m "Setup for GitHub Pages"
   git push
   ```

3. **配置 GitHub Pages**
   - 進入倉庫設置 → Pages
   - 選擇「Deploy from a branch」
   - 選擇 `gh-pages` 分支
   - 等待自動部署完成

4. **訪問你的網站**
   - `https://YOUR-USERNAME.github.io/your-repo-name/`

### 方式 2：手動部署

```bash
# 1. 更新 base URL
# 編輯 vite.config.js

# 2. 構建項目
npm run build

# 3. 部署到 gh-pages 分支
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

---

## 📝 部署前檢查清單

- [ ] 更新 `src/components/Hero.jsx` 中的名字
- [ ] 在 `src/components/Contact.jsx` 中填入真實的郵箱和 LinkedIn
- [ ] 更新 `src/components/Projects.jsx` 中的項目信息
- [ ] 確保所有外部鏈接都有效（GitHub、LinkedIn 等）
- [ ] 在本機測試：`npm run dev`
- [ ] 檢查響應式設計（手機、平板、電腦）
- [ ] 添加 `public/resume.pdf` 文件

---

## 🔧 常見問題

**Q: 如何更新部署後的內容？**
A: 編輯代碼 → 提交到 GitHub → 自動重新部署

**Q: 如何更改網站域名？**
A: 
- Vercel：在 Vercel 控制面板設置自定義域名
- GitHub Pages：在倉庫設置中配置自定義域名

**Q: 部署後樣式不正常？**
A: 檢查 `vite.config.js` 中的 `base` 設置是否正確

**Q: 如何添加自定義域名？**
- Vercel：Settings → Domains
- GitHub Pages：Settings → Pages → Custom domain

---

## 🎯 下一步

1. ✅ 本機運行測試：`npm run dev`
2. ✅ 選擇部署平台（Vercel 或 GitHub Pages）
3. ✅ 按照上述步驟部署
4. ✅ 測試所有鏈接和功能
5. ✅ 分享你的新作品集！

祝你部署順利！🚀
