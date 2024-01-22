const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


const toggleSwitch = document.querySelector(
  '.quotes-switch input[type="checkbox"]'
);

function switchquotes(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-quotes", "dark");
  } else {
    document.documentElement.setAttribute("data-quotes", "light");
  }
}

toggleSwitch.addEventListener("change", switchquotes, false);



function switchquotes(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-quotes", "dark");
    localStorage.setItem("quotes", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-quotes", "light");
    localStorage.setItem("quotes", "light"); //add this
  }
}



const currentquotes = localStorage.getItem("quotes")
  ? localStorage.getItem("quotes")
  : null;

if (currentquotes) {
  document.documentElement.setAttribute("data-quotes", currentquotes);

  if (currentquotes === "dark") {
    toggleSwitch.checked = true;
  }
}