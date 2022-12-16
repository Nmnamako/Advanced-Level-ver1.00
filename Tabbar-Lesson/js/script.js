//$('要素[属性]')特定の要素だけ取得した時は以下のコード
//$('要素[属性]')
//属性値が特定の値に等しい要素だけを取得したい時は以下のコード
//$('要素[属性 = "値"]')

//今回は初期設定で表示されるのはTAB1コンテンツだけにする
//属性値が特定の値に等しくない要素だけ取得したい時は以下のコード
//$('要素[属性 != "値"]')


//id="tab-contents"の要素のうち、
//class="tab"であり、id="tab1"ではない要素が非表示になる
$('#tab-contents .tab[id != "tab1"]').hide();

//クリックされた時の動作設定
//id="tab-menu"のaタグがクリックされたときに、処理を実行する
$('#tab-menu a').on('click', function(event) {
  
  //id=tab-contentsのどれかのタブがクリックされたら、
  //そのタブ内のコンテンツを一旦非表示にする
  $('#tab-contents .tab').hide();
  
  //.removeClass()は、クラス属性が設定されているHTMLからクラスを削除する
  //ここではactiveが削除対象
  //CSSの#tab-menu .activeの設定では、タブのクラスがactiveの時は、
  //背景は白で文字は黒になるよう設定されている
  //タブの切り替え時は、一旦このCSSを削除しなくてはいけない
  //そのため.removeClass('')にactiveが入れられている
  $('#tab-menu .active').removeClass('active');
  
  //.addClass()は、任意のHTML要素にクラス属性を追加できるメソッド
  //ここではactiveが追加対象
  //追加されるタイミングは、$(this)の時、つまりタブをクリックした時
  $(this).addClass("active");
  
  //.attr()は、HTMLの属性を取得したり設定できるメソッド
  //ここでは、hrefを取得するよう指定
  //.show()は要素を表示するメソッドなので、取得したhrefの中身が表示される
  //表示されるタイミングは、クリックされた時に表示される
  $($(this).attr("href")).show();
  event.preventDefault();
});