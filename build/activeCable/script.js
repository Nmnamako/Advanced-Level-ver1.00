// const colors = new Array(10);
// colors[0] = "yellow";
// colors[1] = "red";
// colors[2] = "blue";
// colors[3] = "green";
// colors[4] = "white";
// colors[5] = "black";
// colors[6] = "orange";
// colors[7] = "gray";
// colors[8] = "purple";
// colors[9] = "skyblue";
// let i = Math.floor(10*random());
// document.bgColor = colors[i];

let obj = document.getElementById("sample");

obj.style.backgroundColor = "#fff";
obj.style.backgroundColor = "white";
obj.style.backgroundColor = "rgb( 255, 255, 255 )";

let colorFlg = 0;

function hoge() {
  // 背景色を変更
  let obj = document.getElementById("sample");
  // colorFlgにより切り替え
  if(colorFlg == 0){
    obj.style.backgroundColor = "#3eb810";
    colorFlg = 1;
  }else{
    obj.style.backgroundColor = "#009688";
    colorFlg = 0;
  }
}




const intervalId = setInterval(() => {
  if(colorFlg == 0){
    obj.style.backgroundColor = "#3eb810";
    colorFlg = 1;
  }else{
    obj.style.backgroundColor = "#009688";
    colorFlg = 0;
  }
}, 1000);