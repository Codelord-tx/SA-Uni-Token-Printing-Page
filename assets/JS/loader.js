let loaderbody = document.querySelector(".loaderbody");
let loader = document.querySelector(".loader");
let wholePage = document.querySelector(".wholePage");
let head = document.querySelector(".head");

setTimeout(() => {
 loaderbody.style.transition = "1s";
 loaderbody.style.display = "none";
 loader.style.opacity = "0";
 // wholePage.style.display = "block";
 wholePage.className = "wholePageA";
 head.className="headA"
}, 1000);
