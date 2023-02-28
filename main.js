const signs = "+-*/%";
const numbers = "0123456789";

const res = document.getElementById("res");

function collect(val) {
  let last = res.value.at(-1);

  // birinchi belgisi ishora bo'lishini oldini olish
  let isFirstSign = res.value == "" && signs.includes(val);

  // ishoralar ketma-ketl yozlishining oldini olish
  let isSignSequence = signs.includes(last) && signs.includes(val);

  isFirstSign || isSignSequence || (res.value += val);
}

function getResult() {
  if (res.value == "" || signs.includes(res.value.at(-1))) {
    alert("Iltimos to'ldiring !");
  } else {
    res.value = eval(res.value);
  }
}

function clearRes() {
  res.value = "";
}

function back() {
  res.value = res.value.slice(0, -1);
}

window.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    getResult();
  }
  if (e.key == "Backspace") {
    back();
  }
  isAvailable(e.key) && collect(e.key);
});

res.addEventListener("keypress", function (e) {
  isAvailable(e.key) || e.preventDefault();
});

// ruxsat berilgan belgi ekaniga tekshirish
function isAvailable(val) {
  return signs.includes(val) || numbers.includes(val);
}