$(function() {
  $('#back a').on('click',function(event){  // #back内のaタグがクリックされたときの処理
    $('body, html').animate({  //$('body, html')はページ全体に対して処理を実行したいから//.animateはアニメーション効果を設定するjQueryの関数
      scrollTop:0  //変化対象のプロパティ名:変化値
    }, 800);  //アニメーションの動作時間,slow,normal,fastでもok,800は0.8秒になる。
    event.preventDefault();  //event.preventDefault();は、aタグの機能を無効にする。画面遷移を持っているが今回は不要のため
  });
});