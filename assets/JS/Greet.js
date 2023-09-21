let greeter = document.getElementsByClassName("greeter")[0];



let date = new Date();
let time = date.getHours();

let tinterval = setInterval(() => {
 if (time <= 11) {
  greeter.innerHTML = "Good Morning, Codelordtx";
 } else if (time <= 17) {
  greeter.innerHTML = "Good Afternoon, Codelordtx";
 } else {
  greeter.innerHTML = "Good Evening, Codelordtx";
 }
}, 1000);