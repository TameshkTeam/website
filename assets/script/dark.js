/* 
  * (C) 2021 Sina yeganeh  
  *
  * Github: https://github.com/sina-yeganeh
*/

var darkButton = document.querySelector(".dark")
var body = document.querySelector("body")

darkButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode")
})
