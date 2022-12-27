//キャンバスを取得するためのコード
const canvas = document.getElementById("myCanvas");
//2D描画コンテキスト,実際に絵を描画するためのツール
const ctx = canvas.getContext("2d");

//ボールの半径を指定,計算で指定するため
const ballRadius = 10;

//ボールを跳ね返すパドルを用意する
const paddleHeight = 10;
const paddleWidth = 75;

//パドルのx軸の開始地点を定義している
let paddleX = (canvas.width - paddleWidth) / 2;

//パドルを操作するための記述
let rightPressed = false
let leftPressed = false

//constで試すと壁への衝突時にボールが停止する
//ここでは毎フレーム描画させた時の位置を書いている
//新たに描画されたらその描画されたところを起点に書いていく
//dx,dyはデルタx,デルタyの略称,微小な変化を表す名称らしい
let dx = 2;
let dy = -2;


//ボールを配置する指示 canvas.width / 2 で最大高さを割る2して配置
//canvas,height -30 で中心から下へ配置
//functionより上に記述したほうがいい？
//ここはボールの開始位置を指示
let x = canvas.width / 2;
let y = canvas.height - 30;
function drawBall() {
  ctx.beginPath();
  
  //x,y二はfaunction上部に記述した変数が読み込まれている
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  //clearRect()で古い描画を削除している,これでボールが動いている様に見える
  //四角形の左上端の x、y 座標と四角形の右下端の x、y 座標で削除範囲を指定
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  //もしボールの位置のyの値が0未満だったら、符号反転させた値を設定することで、
  //y軸方向の動きの向きを変える
  //yとdyを足した時にcanvasの高さより大きくなってしまったら-dyを入れて向きを変える
  //y+dyが０より小さくなったら-dyで逆方向にいくので跳ね返りが表現される
  //条件分岐内にballRadiusを入れると玉の中心ではなく境界で反射する
  if(y + dy > canvas.height-ballRadius | y + dy < ballRadius) {
    dy = -dy;
  }
  
  if(x + dx > canvas.width-ballRadius | x + dx < ballRadius) {
    dx = -dx;
  }
  
  //パドル操作
  //rightPressedg押されていた場合+7される
  //&&以降はcanvas内からパドルが出ないように指示している
  if(rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  }
  else if (leftPressed && paddleX > 0){
    paddleX += -7;
  }
  
  
  //+=でdx,dyを足すことによって毎フレーム描画する位置を変えている
  //ここで初めてボールが動き始める
  x += dx;
  y += dy;
}

//setInterval()の上に記述するとのこと
//ここで押したの有無でkeyDownHandlerが実行される、二つ目も同様
document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)



function keyDownHandler(e){
  //e.keyはカラムみたいなもの、RightもしくはArrowRightが押されたら
  //trueを返す、keyUpHandlerも同様
  //キーを押された時、その情報を変数に保存する
  //ArrowRightはキーボードの矢印
  //RightやLeftはIE/Edgeなどに対応するため入れている
  
  if (e.key == "Right" || e.key == "ArrowRight" ){
    rightPressed = true
  }
  else if (e.key == "Left" || e.key == "ArrowLeft" ){
    leftPressed = true
  }
}

function keyUpHandler(e){
  if (e.key == "Right" || e.key == "ArrowRight" ){
    rightPressed = false
  }
  else if (e.key == "Left" || e.key == "ArrowLeft" ){
    leftPressed = false
  }
}

//setInterval()は同じ関数を何度も実行できる
//今回の場合はdrawを10ミリ秒ごとに実行される
//このタイミング関数を使うとdrawが永遠に描き続けられる
//そのため動きを付けないと何重にも書き足されていく
setInterval(draw, 10);
