// let token = document.getElementsByClassName("token")[0];
// let tokensBal = document.getElementsByClassName("tokensBal")[0];
// let NumberOfPages = document.getElementsByClassName("NumberOfPages")[0];
// let paybtn = document.getElementsByClassName("token")[0];

// // let bal = 300 - 1;
// tokensBal.innerHTML = 300;
// let tokensToPay = NumberOfPages.value / 8;

// function PayToken() {
//   if (NumberOfPages.value == 0) {
//     token.innerHTML = "";
//     token.style.display = "none";
//   } else {
//     token.style.display = "block";
//     token.innerHTML = "Pay" + " " + tokensToPay + " " + "Token";
//   }
// }

// paybtn.addEventListener("click", ConfirmPay);

// function ConfirmPay() {
//   if (tokensToPay > bal) {
//     alert("Insufficient Tokens for payment");
//    alert(
//     "Kindly buy more Tokens to complete previous Unsuccesful transactions due to Insufficient Tokens "
//     );
//   }
//   else if (NumberOfPages.value == "") {
//    alert("Input Number Pages to print")
//  }
//   else {
//    alert(NumberOfPages.value / 8 + 
//     ' ' + "Token Payment Succesful");
//   bal - tokensToPay;
//    NumberOfPages.value = " ";
//    // location.reload();
//  }
//  console.log(bal - tokensToPay);
// }

// console.log(tokensBal.innerHTML);