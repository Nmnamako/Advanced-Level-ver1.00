
//addEventListener取得した要素を監視する
//addEventListener("動作",実行する処理)
document.getElementById("stopbutton").addEventListener("click",function(){
  //textContentに=を付けると代入できる
  //thisはdocument.getElementById("test")を持ってきている
  this.textContent = "クリックされた";
});

document.getElementById("startbutton").addEventListener("click", function(){
  this.textContent = "クリックされた";
})