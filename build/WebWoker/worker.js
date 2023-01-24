
//メインからメッセージ受信し以下を実行
self.onmessage = function(message) {
  let sum = 0;
  for (let i = 0; i < 10000; i++)
    sum += i;
    
  //メインに計算値を送信
  self.postMessage(sum);
};