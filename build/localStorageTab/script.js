const change1 = 1;
let changeLater = 0;

let tab1 = document.getElementsByClassName('tab_class')[0];
let tab2 = document.getElementsByClassName('tab_class')[1];
let tab3 = document.getElementsByClassName('tab_class')[2];
let tab4 = document.getElementsByClassName('tab_class')[3];

//localStorage.setItem("lstest", changeLater)
//console.log(localStorage.getItem("lstest"))



// document.getElementsByClassName("tab_class")[0].addEventListener('click', function() {
//   if (tab1.inputElement.checked) {
//     localStorage.setItem("check", changeLater);
//   };
// });



// document.getElementById("test1").addEventListener('click', function() {
//   //document.getElementById("change1").textContent = "クリック";
//   //document.getElementById("change1").textContent = localStorage.getItem('lstest');
//   if (document.getElementById("change1").innerHTML == 0) {
//     changeLater = 1;
//     localStorage.setItem("lstest", changeLater);
//     localStorage.saveKey = changeLater;
//     document.getElementById("change1").textContent = localStorage.getItem("lstest");
//     console.log(localStorage.getItem("lstest"));
//   } else {
//     changeLater = 0;
//     localStorage.setItem("lstest", changeLater);
//     localStorage.saveKey = changeLater;
//     document.getElementById("change1").textContent = localStorage.getItem("lstest");
//     console.log(localStorage.getItem("lstest"));
//   };
// });

// document.getElementById("change1").textContent = localStorage.getItem("lstest");



// 使用例
let test1 = document.getElementsByClassName("test")[0];
let test2 = document.getElementsByClassName("test")[1];
let test3 = document.getElementsByClassName("test")[2];

let btnA = document.getElementsByClassName("btnA")[0];
let btnB = document.getElementsByClassName("btnB")[0];
let btnC = document.getElementsByClassName("btnC")[0];

let changeActive = 1;
let myActive = localStorage.getItem("changeActive");

btnA.addEventListener("click", () => {
  changeActive = 1;
  localStorage.setItem("changeActive", changeActive);
  //localStorage.saveKey = changeActive;
});

btnB.addEventListener("click", () => {
  changeActive = 2;
  localStorage.setItem("changeActive", changeActive);
  //localStorage.saveKey = changeActive;
});

btnC.addEventListener("click", () => {
  changeActive = 3;
  localStorage.setItem("changeActive", changeActive);
  //localStorage.saveKey = changeActive;
});

window.onload = () => {
  if (myActive == 1) {
    test1.classList.add("active");
    test2.classList.remove("active");
    test3.classList.remove("active");
  } else if (myActive == 2){
    test1.classList.remove("active");
    test2.classList.add("active");
    test3.classList.remove("active");
  } else if (myActive == 3) {
    test1.classList.remove("active");
    test2.classList.remove("active");
    test3.classList.add("active");
  } else {

  };
};


// console.log(test1);