{
  const open = document.getElementById("modalOpen");
  const container = document.getElementById("modal");
  const mask = document.getElementById("mask");
  const close = document.getElementById("modalClose");

  open.addEventListener("click", () => {

    //classList.addでactiveクラスをHTMLに追加している
    container.classList.add("active");
    mask.classList.add("active");
  });
  close.addEventListener("click", () => {

    //classList.removeでactiveクラスをHTMLから消している
    container.classList.remove("active");
    mask.classList.remove("active");
  });
}