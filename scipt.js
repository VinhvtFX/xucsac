// Đi đến các lớp
let bgcum1 = document.querySelector(".cum1");
let bgcum2 = document.querySelector(".cum2");
let rollDice = document.querySelector(".icon-roll");
let dice = document.querySelector(".xucsac");
let lopdiem1 = document.querySelector(".score1");
let lopdiem2 = document.querySelector(".score2");
// Lấy lớp lưu điểm.
let luu1 = document.querySelector(".hold-score-player1");
let luu2 = document.querySelector(".hold-score-player2");
let hold = document.querySelector(".hold");

// Lấy lớp reset GAME
let reset = document.querySelector(".newgame");
// Lấy cúp
let cup1 = document.querySelector(".cup1");
let cup2 = document.querySelector(".cup2");

let score1 = 0;
let score2 = 0;
let thaydoi = true;

// Hàm thay đổi người chơi + background-color thay đổi.
let doinguoichoi = function () {
  if (thaydoi == true) {
    thaydoi = false;
    bgcum1.style.backgroundColor = "#2b110a";
    bgcum2.style.backgroundColor = "#f5e7d4";
    score1 = 0;
    score2 = 0;
    lopdiem1.innerHTML = 0;
    lopdiem2.innerHTML = 0;
  } else {
    thaydoi = true;
    bgcum1.style.backgroundColor = "#f5e7d4";
    bgcum2.style.backgroundColor = "#2b110a";
    score1 = 0;
    score2 = 0;
    lopdiem1.innerHTML = 0;
    lopdiem2.innerHTML = 0;
  }
};
// Lưu điểm đổi người chơi.
let hold1 = 0;
let hold2 = 0;
let luuDiem = hold.addEventListener("click", function () {
  if (hold1 < 10 && hold2 < 10) {
    hold1 += score1;
    luu1.innerHTML = hold1;
    hold2 += score2;
    luu2.innerHTML = hold2;
    doinguoichoi();
  }
  if (hold1 >= 10) {
    bgcum1.style.backgroundColor = "yellow";
    bgcum2.style.backgroundColor = "#2b110a";
    cup1.style.display = "block";
  } else if (hold2 >= 10) {
    bgcum2.style.backgroundColor = "yellow";
    bgcum1.style.backgroundColor = "#2b110a";
    cup2.style.display = "block";
  }
});

// Sự kiện khi click chuột vào roll xuc sắc
rollDice.addEventListener("click", function () {
  let diceRandom = Math.trunc(Math.random() * 6) + 1;
  //Kiểm tra đủ điểm chưa.
  if (hold1 < 10 && hold2 < 10) {
    dice.src = `dice-${diceRandom}.png`;
    dice.classList.remove("hide");
    // Khi điểm khác 1.
    if (diceRandom !== 1) {
      // Cộng điểm cho người đang chơi
      if (thaydoi == true) {
        score1 += diceRandom;
        lopdiem1.innerHTML = score1;
      } else {
        score2 += diceRandom;
        lopdiem2.innerHTML = score2;
      }
    } else {
      doinguoichoi();
    }
  }
});

// Reset Game
reset.addEventListener("click", function () {
  // Reset lưu điểm
  hold1 = 0;
  hold2 = 0;
  luu1.innerHTML = hold1;
  luu2.innerHTML = hold2;
  // Reset về điểm
  score1 = 0;
  score2 = 0;
  lopdiem1.innerHTML = 0;
  lopdiem2.innerHTML = 0;
  // Reset lại màu nền
  bgcum1.style.backgroundColor = "#f5e7d4";
  bgcum2.style.backgroundColor = "#2b110a";
  //Thay đổi biến người chơi
  thaydoi = true;
  // Ẩn xúc sắt
  dice.classList.add("hide");
  //Ẩn cúp
  cup1.style.display = "none";
  cup2.style.display = "none";
});
