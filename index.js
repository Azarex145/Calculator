const btn = document.querySelectorAll("button");
const screen = document.getElementById("screen");
let screenValue = "";

Array.from(btn).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnText = e.target.innerText;
    if (btnText == "x") {
      btnText = "*";
      screenValue += btnText;
      screen.value = screenValue;
    } else if (btnText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (btnText == "C") {
      screenValue = screenValue.slice(0, -1);
      screen.value = screenValue;
    } else if (btnText == "=") {
      screen.value = eval(screenValue);
      screenValue = screen.value;
    } else {
      screenValue += btnText;
      screen.value = screenValue;
    }
  });
});
