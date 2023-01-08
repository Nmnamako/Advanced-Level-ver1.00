let minTime = 1;
let secTime = 10;

//const element = document.getElementById("test1");
//element.innerHTML = minTime;

let container = document.getElementById("modal")


//タイマー停止用
let interval;

//falseかtrueかで、作業時間と休憩時間を変更する
let changeTime = false;

//document.getElementById("test").addEventListener("click", function(){
//  clearInterval(timeId);
//})

function progressMin(){
  document.getElementById("min").textContent = minTime + "分";
};

//progress()に表示するテキストを格納する
function progressSec() {
  document.getElementById("sec").textContent = secTime + "秒";
};


function modalOpen() {
  
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
        if (minTime == -1 && changeTime == false ){
          
          //休憩時間を設けるためにtureに変更
          changeTime = true;
          clearInterval(interval);
          reset();
          interval = null;
          
          //alertだが、音で知らせてノーストップで時間を進める予定
          alert("休憩時間です");
        } else if (minTime == -1 && changeTime == true) {
          
          //作業時間を設けるためfalseに変更
          changeTime = false;
          clearInterval(interval);
          reset();
          interval = null;
          alert("開始時間です");
        };
      };
    },1000);
  };
};

function stop() {
  clearInterval(interval);
  interval = null;
  test001();
};

//reset()内でchangeTimeの中身次第で作業時間と休憩時間を切り替える
function reset() {
  if (changeTime == true) {
    minTime = 1;
    secTime = 0;
    progressSec();
    progressMin();
  } else {
    minTime = 25;
    secTime = 0;
    progressSec();
    progressMin();
  };
};

document.getElementById("start").addEventListener("click", function(){
  start();
});

document.getElementById("stop").addEventListener("click", function(){
  stop();
});

document.getElementById("modalOpen").addEventListener("click", function(){
  container.classList.add("active");
});

document.getElementById("close").addEventListener("click", function(){
  container.classList.remove("active");
});


function test001(){
  container.classList.add("active");
}

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