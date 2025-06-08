// index.js
import "./styles.css";

const pdts = document.querySelector("#products");
const contact = document.querySelector("#contactus");
const policies = document.querySelector("#policies");
const aboutus = document.querySelector("#aboutus");

showHideItems(pdts);
showHideItems(contact);
showHideItems(policies);
showHideItems(aboutus);

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
