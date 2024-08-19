const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", () => {
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});
