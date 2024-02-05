import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // ルートコンポーネント
import './index.css'; // アプリケーション全体のスタイルシート

// 必要に応じてその他のライブラリをimport
// import { BrowserRouter as Router } from 'react-router-dom'; // ルーティング用のライブラリ
// import { Provider } from 'react-redux'; // Reduxを使用する場合
// import store from './store'; // Reduxのストア

// アプリケーションのレンダリング
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router>
      <Provider store={store}> */}
        <App />
      {/* </Provider>
    </Router> */}
  </React.StrictMode>,
);