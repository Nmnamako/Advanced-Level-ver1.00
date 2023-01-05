let minTime = 1;
let secTime = 3;

//タイマー停止用
let interval;


//document.getElementById("test").addEventListener("click", function(){
//  clearInterval(timeId);
//})

function progressMin(){
  document.getElementById("min").textContent = minTime + "分";
}

//progress()に表示するテキストを格納する
function progressSec() {
  document.getElementById("sec").textContent = secTime + "秒";
}

//id="time"のテキストをelapsedTimeの中身を表示する
//これがないと0が表示されない
progressMin();
progressSec();

function start() {
  if (interval == null) {
    interval = setInterval(function(){
      secTime--;
      progressSec();
      if (secTime == -1){
        secTime = 3;
        minTime--;
        progressSec();
        progressMin();
        if (minTime == -1){
          alert("時間です")
          clearInterval(interval);
          reset();
          interval = null;
        };
      };
    },1000);
  };
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  minTime = 25;
  secTime = 0;
  progressSec();
  progressMin();
};

document.getElementById("start").addEventListener("click", function(){
  start();
});

document.getElementById("stop").addEventListener("click", function(){
  stop();
});

//--------------------------------------------------------
//secTimeに1を加算もしくは減少していく関数
//const timeId = setInterval(function(){
  //secTime--;
  
  //secTimeに加算,減少した後に再度描画する指示を出している
  //progressSec();
  
  //if (secTime == -1 ){
    //secTime = 5;
    //minTime--;
    //progressSec();
    //progressMin();
    
    //if (minTime == 0){
      //clearInterval(timeId);
      
      //ページ全体をリロードしてしまう
      //document.location.reload();
    //};
    //加算,減少を停止させる
    //clearInterval(timeId);
  //};
//},1000);
//--------------------------------------------------------