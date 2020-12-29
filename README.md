## React 實作：Todo List
原本以 JavaScipt 操作 DOM API 為主的 Todo List 練習，轉為用 React 改寫，熟悉「單向資料流」的概念。
- [Demo](https://zoeaeen13.github.io/react-todolist/#/)

![](https://i.imgur.com/LMneWVU.gif)

### Todo List 功能
- 基本功能（新增、編輯、刪除）
- 標記完成/未完成
- 清空已完成 todo
- 篩選 todo 狀態

![](https://i.imgur.com/FuVrSjM.jpg)


---

### 使用技術
- 以 React 為主
- 以 JSX 語法撰寫元件
- 支援 RWD，使用 styled-component 進行排版
- 使用 useState 管理狀態
- 使用 useContext 解決 props 傳遞多層的問題（Props drilling）


### 專案結構
- /src
    - /components
        - App.js
        - FormItem.js
        - TodoItem.js
        - Wrapper.js
    - /constants
        - style.js
    - TypeContext.js
    - index.js
