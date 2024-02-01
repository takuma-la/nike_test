import express from 'express';
const app = express();
const port = 3000; // 使用するポート番号

// ルートパスにアクセスがあった場合の処理
app.get('/', (req, res) => {
  // First-Party Cookieを設定
  res.cookie('name', 'value', { maxAge: 900000, httpOnly: true, secure: true, sameSite: 'lax' });
  res.send('First-Party Cookieが設定されました。');
});

// サーバーを起動
app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました。`);
});