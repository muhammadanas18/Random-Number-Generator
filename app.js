let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let num = document.querySelector(".number");
  let randomNum = Math.floor(Math.random() * 100) + 1;

  num.textContent = randomNum;
});
