// index.js
import "./styles.css";

const menus = document.querySelectorAll(".menu");

[...menus].forEach((menuItem) => showHideItems(menuItem));

function showHideItems(parent) {
  const child = parent.firstElementChild;
  child.style.display = "none";

  parent.addEventListener("mouseenter", () => {
    child.style.display = "block";
  });

  parent.addEventListener("mouseleave", () => {
    child.style.display = "none";
  });
}
