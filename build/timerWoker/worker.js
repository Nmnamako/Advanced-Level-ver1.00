
let minTime = 25;
let secTime = "00";
//タイマー停止用
let interval;

let changeTime = false;

self.onmessage = function(message) {
  if (interval == null) {
    interval = setInterval(function() {
      secTime--;
      self.postMessage(secTime);
      //progressSec();
      //progressMinRecord();
      if (secTime == -1) {
        secTime = 59;
        self.postMessage(secTime);
        minTime--;
        //progressSec();
        //progressMin();
        //audio();
        if (minTime == -1 && changeTime == false ) {
          //次の作業のためにtrueに変更
          //changeTime = true;
          
          //作業時間と休憩時間の変更時にタイマーを停止する,現状は不要
          //clearInterval(interval);
          //reset();
          interval = null;
        } else if (minTime == -1 && changeTime == true) {
          
          //次の休憩のためにfalseに変更
          //changeTime = false;
          
          //作業時間と休憩時間の変更時にタイマーを停止する,現状は不要
          //clearInterval(interval);
          //reset();
          interval = null;
        };
      };
    },1000);
  };
    
  //メインに計算値を送信
  //self.postMessage(secTime);
};