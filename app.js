import { changePage } from "./model.js";

const links = document.querySelectorAll("nav a");

function setActiveLink(hash) {
  links.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + hash) {
      link.classList.add("active");
    }
  });
}

function route() {
  let hash = window.location.hash.replace("#", "");

  if (hash === "") {
    hash = "home";
  }

  changePage(hash);
  setActiveLink(hash);
}

// Listen for URL changes
window.addEventListener("hashchange", route);

// Run on page load
route();