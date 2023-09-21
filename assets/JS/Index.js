let token = document.getElementsByClassName("token")[0];
let tokensBal = document.getElementsByClassName("tokensBal")[0];
let HideTokenBal = document.getElementsByClassName("HideTokenBal")[0];
let NumberOfPages = document.getElementsByClassName("NumberOfPages")[0];
let paybtn = document.getElementsByClassName("token")[0];
let showHide = document.getElementsByClassName("showHide")[0];
let clearData = document.getElementsByClassName("clearData")[0];

let refreshPagebtn = document.querySelector(".refreshPage");

GetBal = JSON.parse(localStorage.getItem("TokenBal"));
let MainBal = parseFloat(GetBal) || 300;

// var bal = 300;

// tokensBal.innerHTML = parseFloat(bal);
tokensBal.innerHTML = MainBal;
let tokensToPay = NumberOfPages.value / 8;
HideTokenBal.style.display = "none";

// JS Program to toggle show and Hide Token Balance
// tokensBal.style.display = "none";
showHide.onclick = function () {
  if (tokensBal.style.display === "block") {
    tokensBal.style.display = "none";
    HideTokenBal.style.display = "block";
    showHide.innerHTML = "Show";
  } else {
    // tokensBal.innerHTML = bal;
    tokensBal.style.display = "block";
    HideTokenBal.style.display = "none";
    showHide.innerHTML = "Hide";
  }
};

// Program to Pay Token from Token Balance on the pay button

function PayToken() {
  if (NumberOfPages.value == 0) {
    token.innerHTML = "";
    token.style.display = "none";
  } else {
    token.style.display = "block";
    token.innerHTML = "Pay" + " " + NumberOfPages.value / 8 + " " + "Token";
  }
}

if (location.reload) {
  NumberOfPages.value = "";
}

//Program below to show an alert box about the payment
paybtn.addEventListener("click", ConfirmPay);

function ConfirmPay() {
  if (NumberOfPages.value / 8 > MainBal) {
    alert(
      "Insufficient Tokens for payment \n Kindly buy more Tokens to complete previous Unsuccesful Printings"
    );
    NumberOfPages.value = " ";
    token.innerHTML = "";
    token.style.display = "none";
  } else if (NumberOfPages.value == "") {
    alert("Input Number Of Pages to print");
  } else if (NumberOfPages.value <= 0) {
    alert("Invalid Input");
  } else if (MainBal <= 0) {
    alert("You have no more Tokens to print");
    tokensBal.style.color = "red";
  } else {
    alert(NumberOfPages.value / 8 + " " + "Token Payment Succesful");
    NumberOfPages.setAttribute("disabled", "true");
    setTimeout(() => {
      MainBal = tokensBal.innerHTML - NumberOfPages.value / 8;
      tokensBal.innerHTML = parseFloat(MainBal);
      NumberOfPages.value = " ";
      // tokensBal.innerHTML = 100;
      // alert("ok")
      NumberOfPages.removeAttribute("disabled", "true");
    }, 500);
    // NumberOfPages.value = " ";
    token.style.display = "none";
    // location.reload();
    setTimeout(() => {
      localStorage.setItem("TokenBal", JSON.stringify(MainBal));
    }, 510);

    // if (tokensBal.innerHTML === 0) {
    //  tokensBal.style.color = "red";
    // }
  }
}

let TokenBalWord = "Token Balance:"
// TokenBalWord.trim();
console.log(TokenBalWord + " " + MainBal);
console.log(typeof MainBal);
// console.log(GetBal);
// console.log(typeof GetBal);

console.log(window.location.pathname);
console.log(window.location.host);
console.log("Screen Height" + " " + screen.height + "px");
console.log("Screen Width" + " " + screen.width + "px");

clearData.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
  // Navigator.vibrate();
})

refreshPagebtn.addEventListener("click", () => {
  location.reload();
  location.toString();
})