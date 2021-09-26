var darkButton = document.querySelector(".dark")
var body = document.querySelector("body")
var navBar = document.querySelector("nav")
var theme = localStorage.getItem("theme")

darkButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode")
})
