
//以下のコードはローカルでは機能しない
// new Worker はMSIEのローカルでは機能しない
const worker = new Worker('worker.js');

const sumButton = document.querySelector('#sumButton');
const bgButton = document.querySelector('#bgButton');

sumButton.addEventListener('click', (event) => {
  
  // wokerにメッセージを送信
  worker.postMessage('hello, Woker');
});

// workerからデータ受信したらアラートが作動
worker.onmessage = function (message) {
  
  //message.dataで中身を摘出？
  //consol.logで確認するとdataの中身が確認できる
  alert(`The final sum is ${message.data}`);
};


// ボタン押すと背景色が変化
bgButton.addEventListener('click', event => {
  if(document.body.style.background !== "green")
    document.body.style.background = "green";
  else
  document.body.style.background = "blue";
});