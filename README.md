# Bitlyer

[![GitHub last commit](https://img.shields.io/github/last-commit/connectshark/bitly-manager.svg?style=flat)](https://github.com/connectshark/bitly-manager)
![GitHub stars](https://img.shields.io/github/stars/connectshark/bitly-manager.svg?style=social&label=Stars&style=plastic)

![cover](/readme/cover.png)

`Nuxt`專案開發

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

## 目錄
- [專案說明](#專案說明)
- [環境變數](#環境變數)
- [一鍵部署](#一鍵部署)


## 專案說明

- Nuxt
- Tailwindcss
- vueuse

串接[Bitly](https://bitly.com/)官方API，提供使用者瀏覽&操作Bitly上的短連結

### 登入
![](/readme/login.png)
官方提供多種登入方式可選擇，本專案提供`OAuth 2.0`的方式作登入
授權後可登入

### 操作

可查看已轉換過的連結
![](/readme/link.png)

## 環境變數

在根目錄中新增`.env`檔案並且新增以下變數內容
```
.env
NUXT_API_URL=https://api-ssl.bitly.com
NUXT_BITLY_REDIRECT_URL=<NUXT_BITLY_REDIRECT_URL>
NUXT_BITLY_CLIENT_ID=<NUXT_BITLY_CLIENT_ID>
NUXT_BITLY_CLIENT_SECRET=<NUXT_BITLY_CLIENT_SECRET>
```

[參考文章](https://medium.com/nosegates/745a9914c935)

## 一鍵部署
直接在[Render](https://render.com/)上觀看
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)