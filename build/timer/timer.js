function countdown() {
  const now = new Date(); //今の時間
  const tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1); //明日の0:00
  const differ = tomorrow.getTime() -now.getTime(); //明日まであと何ミリ秒か

  const sec = Math.floor(differ/1000)%60; //ミリ秒を秒に直す
  const min = Math.floor(differ/1000/60)%60; //1時間=60分
  const hour = Math.floor(differ/1000/60/60);

  document.getElementById("hour").textContent = String(hour).padStart(2,"0"); //一桁になった時0がつく
  document.getElementById("min").textContent = String(min).padStart(2,"0");
  document.getElementById("sec").textContent = String(sec).padStart(2,"0");
  setTimeout(countdown,1000); //１秒前毎に繰り返す
};
countdown();