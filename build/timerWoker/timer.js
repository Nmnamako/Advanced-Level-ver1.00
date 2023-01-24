const worker = new Worker('worker.js');

//カウントダウンタイマー関係
//時間格納用
let minTime = 25;
let secTime = "00";

//記録時間
let minRecord = 0;

//タイマー停止用
//let interval;

//falseかtrueかで、作業時間と休憩時間を変更する
//let changeTime = false;


// minとsecにタイマー表示
function progressMin(){
  document.getElementById("min").textContent = minTime.toString().padStart(2, '0');
};

function progressSec() {
  document.getElementById("sec").textContent = secTime.toString().padStart(2, '0');
};

progressMin();
progressSec();



        

function start() {
  worker.onmessage = function (secTime) {
    let test2 = `${secTime.data}`
    console.log(test2)
    document.getElementById("sec").textContent = test2
    if (test2 == -1) {
      minTime --;
      progressMin();
      //worker2.postMessage('job');
      };
    };
  
//  if (interval == null) {
//    interval = setInterval(function() {
//      secTime--;
//      //progressSec();
//      //progressMinRecord();
//      if (secTime == -1) {
//        secTime = 59;
//        minTime--;
//        //progressSec();
//        //progressMin();
//        //audio();
//        if (minTime == -1 && changeTime == false ) {
//          //次の作業のためにtrueに変更
//          //changeTime = true;
//          
//          //作業時間と休憩時間の変更時にタイマーを停止する,現状は不要
//          //clearInterval(interval);
//          //reset();
//          interval = null;
//        } else if (minTime == -1 && changeTime == true) {
//          
//          //次の休憩のためにfalseに変更
//          //changeTime = false;
//          
//          //作業時間と休憩時間の変更時にタイマーを停止する,現状は不要
//          //clearInterval(interval);
//          //reset();
//          interval = null;
//        };
//      };
//    },1000);
//  };
};


//function stop() {
//  clearInterval(interval);
//  interval = null;
//};

//reset()内でchangeTimeの中身次第で作業時間と休憩時間を切り替える
//function reset() {
//  if (changeTime == true) {
//    //休憩時間
//    minTime = 5;
//    secTime = "00";
//    progressSec();
//    progressMin();
//  } else {
//    //作業時間
//    minTime = 25;
//    secTime = "00";
//    progressSec();
//    progressMin();
//  };
//};

document.getElementById("start").addEventListener('click', function(){
  start();
  worker.postMessage('job');
});

//document.getElementById("stop").addEventListener('click', function(){
//  stop();
//});