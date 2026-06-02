
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

// const avatar = document.querySelector(".avatar img");
// const wrapper = document.querySelector(".avatar-wrapper");
// const progressRing = document.querySelector(".ring-progress");
// const words = document.querySelectorAll(".highlight-word");

// let swapped = false;
// let timeout;

// wrapper.addEventListener("mouseenter", () => {
//   if (swapped) return;

//   // Complete green circle
//   progressRing.style.strokeDashoffset = "0";

//   // Highlight words
//   words.forEach((word, index) => {
//     setTimeout(() => {
//       word.classList.add("highlight-active");
//     }, index * 200);
//   });

//   timeout = setTimeout(() => {
//     avatar.src = avatar.dataset.alt;
//     swapped = true;
//   }, 600);
// });

// wrapper.addEventListener("mouseleave", () => {

//   clearTimeout(timeout);

//   // Reset circle
//   progressRing.style.strokeDashoffset = "754";

//   // Remove highlights
//   words.forEach(word => {
//     word.classList.remove("highlight-active");
//   });

//   setTimeout(() => {
//     avatar.src = "me-1.jpg";
//     swapped = false;
//   }, 200);
// });

