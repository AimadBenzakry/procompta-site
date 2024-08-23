import "./bootstrap.js";
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import "./styles/app.css";
import "./styles/styles.scss";
import "./actualite.js";

const next = document.getElementsByClassName("next")[0];
const prev = document.getElementsByClassName("prev")[0];
const bubblesContainer = document.getElementsByClassName("bubbles")[0];
const inner = document.getElementsByClassName("carousel-inner")[0];
const imgs = document.getElementsByTagName("img");
let currentImageIndex = 0;
const width = 600;
let bubbles = [];

for (let i = 0; i < imgs.length; i++) {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  bubblesContainer.appendChild(bubble);
  bubbles.push(bubble);

  bubble.addEventListener("click", () => {
    currentImageIndex = i;
    updateImage();
  });
}

const updateImage = () => {
  inner.style.left = width * -currentImageIndex + "px";
  bubbles.forEach((bubble, i) => {
    i === currentImageIndex
      ? bubble.classList.add("active")
      : bubble.classList.remove("active");
  });
};

next.addEventListener("click", (e) => {
  e.preventDefault();
  currentImageIndex < imgs.length - 1
    ? currentImageIndex++
    : (currentImageIndex = 0);
  updateImage();
});
prev.addEventListener("click", (e) => {
  e.preventDefault();
  currentImageIndex > 0
    ? currentImageIndex--
    : (currentImageIndex = imgs.length - 1);
  updateImage();
});
updateImage();



