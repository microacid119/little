# Hello

這是用 Vite寫的項目，還有些生疏。

## 使用方法

- npm install (install node_modules)
- npm run dev

## 架構設計

- HTML -> Pug
- CSS -> Stylus
- 使用Pinia取代傳統Vuex
- 頁面與Router的設計上，盡量以全局Store來控制，能少get就少get

## 在這份專案中你遇到的困難、問題

- add新增書本的api好像有點問題，只能回傳Status 201? 不曉得如果做能變成回傳 Status 200
- 摸索Vue 3語法，在下班時間一邊Google一邊找語法。
- 工作中通常都用Axios串接API，這次使用try catch fetch做。