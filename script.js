

// /* Avatar */

// const avatar = document.querySelector(".avatar img");

// let swapped = false;

// avatar.parentElement.addEventListener("mouseenter", () => {
//   if (swapped) return;

//   setTimeout(() => {
//     const altSrc = avatar.dataset.alt;
//     avatar.src = altSrc;
//     swapped = true;
//   }, 600); 
// });

// avatar.parentElement.addEventListener("mouseleave", () => {
//   setTimeout(() => {
//     avatar.src = "me-1.jpg";
//     swapped = false;
//   }, 200);
// });


// const avatar = document.querySelector(".avatar img");

// let swapped = false;

// avatar.parentElement.addEventListener("mouseenter", () => {
//   if (swapped) return;

//   setTimeout(() => {
//     const altSrc = avatar.dataset.alt;
//     avatar.src = altSrc;
//     swapped = true;
//   }, 600);
// });

// avatar.parentElement.addEventListener("mouseleave", () => {
//   setTimeout(() => {
//     avatar.src = "me-1.jpg";
//     swapped = false;
//   }, 200);
// });



// /* Achievement Gallery */

// document.querySelectorAll(".timeline-item").forEach(item => {

//   const photos = item.dataset.photos;

//   if (!photos) return;

//   const gallery = document.createElement("div");
//   gallery.className = "timeline-gallery";

//   const grid = document.createElement("div");
//   grid.className = "timeline-gallery-grid";

//   photos.split(",").forEach(src => {

//     const img = document.createElement("img");
//     img.src = src.trim();
//     img.alt = "Achievement";

//     grid.appendChild(img);
//   });

//   gallery.appendChild(grid);

//   item.querySelector(".timeline-body")
//       .appendChild(gallery);

//   item.addEventListener("click", () => {

//     item.classList.toggle("active");

//   });

// });







// Avatar hover effect
const avatar = document.querySelector(".avatar img");

if (avatar) {

  let swapped = false;

  avatar.parentElement.addEventListener("mouseenter", () => {

    if (swapped) return;

    const altSrc = avatar.dataset.alt;

    // Only swap if second image exists
    if (altSrc) {
      setTimeout(() => {
        avatar.src = altSrc;
        swapped = true;
      }, 600);
    }
  });

  avatar.parentElement.addEventListener("mouseleave", () => {

    const originalSrc = "me-1.jpeg";

    setTimeout(() => {
      avatar.src = originalSrc;
      swapped = false;
    }, 200);
  });
}


/* Achievement Expand Gallery */

document.querySelectorAll(".timeline-item").forEach(item => {

  const photos = item.dataset.photos;

  if (!photos) return;

  const gallery = document.createElement("div");
  gallery.className = "timeline-gallery";

  const grid = document.createElement("div");
  grid.className = "timeline-gallery-grid";

  photos.split(",").forEach(src => {

    const img = document.createElement("img");
    img.src = src.trim();
    img.alt = "Achievement";

    grid.appendChild(img);
  });

  gallery.appendChild(grid);

  item.querySelector(".timeline-body")
      .appendChild(gallery);

  item.addEventListener("click", () => {

    item.classList.toggle("active");

  });

});


