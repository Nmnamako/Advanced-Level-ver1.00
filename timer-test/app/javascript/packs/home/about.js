let elapsedTime = 0;

//progress()に表示するテキストを格納する
function progress() {
  document.getElementById("time").textContent = elapsedTime + "秒経過";
}


//id="time"のテキストをelapsedTimeの中身を表示する
//これがないと0が表示されない
progress();

//
const timeId = setInterval(function(){
  elapsedTime++;
  
  //elapsedTimeに加算した後に再度描画する指示を出している
  progress();
  
  if (elapsedTime == 5 ){
    clearInterval(timeId);
  }
},1000);