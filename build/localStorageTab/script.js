const change1 = 1;
let changeLater = 0;


//localStorage.setItem("lstest", changeLater)
//console.log(localStorage.getItem("lstest"))

document.getElementById("test1").addEventListener('click', function() {
  //document.getElementById("change1").textContent = "クリック";
  //document.getElementById("change1").textContent = localStorage.getItem('lstest');
  if (document.getElementById("change1").innerHTML == 0) {
    changeLater = 1;
    localStorage.setItem("lstest", changeLater);
    localStorage.saveKey = changeLater;
    document.getElementById("change1").textContent = localStorage.getItem("lstest");
    console.log(localStorage.getItem("lstest"));
  } else {
    changeLater = 0;
    localStorage.setItem("lstest", changeLater);
    localStorage.saveKey = changeLater;
    document.getElementById("change1").textContent = localStorage.getItem("lstest");
    console.log(localStorage.getItem("lstest"));
  };
});

document.getElementById("change1").textContent = localStorage.getItem("lstest");
