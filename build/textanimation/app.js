//documentはhtml全体の事を指している
//querySelectorAllはcssのセレクタを使ってhtmlを配列に取得する
const animationTargetElements = document.querySelectorAll(".textAnimation");


//文字にspanを自動でつけるためのfor文
//
for (let i = 0; i < animationTargetElements.length; i++) {
  //１回目の処理で文字を取って生きている最初ならTextTestを取ってきている
  const targetElement = animationTargetElements[i],
  //上の記述はタグごと取ってくるが、textContentで文字のみ取ってこれる
    texts = targetElement.textContent,
    textsArray = [];

  //これで取得した文字を一旦消す
  //HTML内にタグはあるがtextContentがない状態
  //一旦消して今度はspanに入れた文字を一つずつ入れていく
  targetElement.textContent = "";

  //これで文字列文for文を回すことができる
  for (let j = 0; j < texts.split("").length; j++) {

    //もし文字の中身が空白だったら
    if (texts.split("")[j] == " " ){

      //空白でtextsArray内に空白を追加,spanを含めない様にするため
      textsArray.push(" ");
    } else {

    //split()内を空にすることで、無条件で一文字を配列に入れることができる
    //split()の使い方は検索して調べること
    //animation-delayでanimationを遅らせてj*.1で掛ける,sで秒指定する
    //((j*.1)+.3)の.3はグーグルテキストなど読み込み時間がある程度必要なら.3を掛けて
    //テキスト表示までの時間を遅らせ読み込みを間に合わせる事もできる
    //今回は特に必要はない
    //内側のspanのstyleを消すだけで、文字の速度を変えることも可能

    textsArray.push('<span><span style="animation-delay: ' + (( j * .1 ) + .3 ) + 's;">' + texts.split("")[j] + '</span></span>');
    //textsArray.push('<span><span>' + texts.split("")[j] + '</span></span>');
    }
  }

  for (let k = 0; k < textsArray.length; k++) {

    //innerHTMLでタグごと反映させる
    targetElement.innerHTML += textsArray[k];
  }
}