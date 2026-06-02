
const avatar = document.querySelector(".avatar img");

let swapped = false;

avatar.parentElement.addEventListener("mouseenter", () => {
  if (swapped) return;

  setTimeout(() => {
    const altSrc = avatar.dataset.alt;
    avatar.src = altSrc;
    swapped = true;
  }, 600); 
});

avatar.parentElement.addEventListener("mouseleave", () => {
  setTimeout(() => {
    avatar.src = "me-1.jpg";
    swapped = false;
  }, 200);
});

