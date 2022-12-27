//キャンバスを取得するためのコード
const canvas = document.getElementById("myCanvas");
//2D描画コンテキスト,実際に絵を描画するためのツール
const ctx = canvas.getContext("2d");






//四角を描画
ctx.beginPath();
ctx.rect(20, 40, 50, 50);  //四角の形状と位置の指定 (X,Y,W,H)
ctx.fillStyle = "#FF0000";  //色を指定
ctx.fill();  //サブパスを塗りつぶす,色指定だけでは塗られない？
ctx.closePath(); //サブパスを閉じている,三角だと線三つ目を閉じる様な感じ

//丸い絵を描画
ctx.beginPath();
//arc(中心x座標, 中心y座標, 半径, 円弧の開始角, 円弧の終了角, 描画の方向)
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

//塗りつぶし四角
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
