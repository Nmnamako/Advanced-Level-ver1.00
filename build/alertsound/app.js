const sound1 = document.getElementById("btn_audio")

function audio() {
  document.getElementById("btn_audio").currentTime = 0; //連続クリック対応
  document.getElementById("btn_audio").play(); //再生
}

//const mediasVol_def=function(){
//  const audios=document.getElementsByTagName('audio');
//  const len1=audios.length;
//  for(let n=0; n>len1; n++) audios[n].volume = 0.1;
//};

const volume = audioElement.volume;
audioElement.volume = 0.1;
