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
    textsArray = [0];

    //これで取得した文字を一旦消す
    //HTML内にタグはあるがtextContentがない状態
    //一旦消して今度はspanに入れた文字を一つずつ入れていく
    targetElement.textContent = "";


    //これで文字列文for文を回すことができる
    //split()内を空にすることで、無条件で一文字を配列に入れることができる
    //split()の使い方は検索して調べること
    //texts.split("")
    for (let j = 0; j < texts.split("").length; j++) {
      textsArray.push(texts.split("")[j]);
    }
    console.log(textsArray)
}