

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






// Avatar hover effect
// const avatar = document.querySelector(".avatar img");

// if (avatar) {

//   let swapped = false;

//   avatar.parentElement.addEventListener("mouseenter", () => {

//     if (swapped) return;

//     const altSrc = avatar.dataset.alt;

//     // Only swap if second image exists
//     if (altSrc) {
//       setTimeout(() => {
//         avatar.src = altSrc;
//         swapped = true;
//       }, 600);
//     }
//   });

//   avatar.parentElement.addEventListener("mouseleave", () => {

//     const originalSrc = "me-1.jpeg";

//     setTimeout(() => {
//       avatar.src = originalSrc;
//       swapped = false;
//     }, 200);
//   });
// }


// ── Avatar ring + highlight effect ──
const avatarWrapper = document.querySelector('.avatar');
const ringCircle    = document.querySelector('.ring circle');
const avatar        = document.querySelector('.avatar img');

// Words to highlight in the About section — edit these to match your exact text
const highlightWords = [
  'full-stack development',
  'Artificial Intelligence',
  'Machine Learning',
  'hands-on projects',
  'fundamentals'
];

// Wrap highlight words in <mark> spans on page load
const aboutParagraphs = document.querySelectorAll('#about p');
aboutParagraphs.forEach(p => {
  let html = p.innerHTML;
  highlightWords.forEach(word => {
    // case-insensitive, whole phrase match
    const regex = new RegExp(`(${word})`, 'gi');
    html = html.replace(regex, `<span class="highlight-word">$1</span>`);
  });
  p.innerHTML = html;
});

if (avatarWrapper) {
  let swapped   = false;
  let swapTimer = null;
  let resetTimer = null;

  avatarWrapper.addEventListener('mouseenter', () => {
    clearTimeout(resetTimer);

    // Highlight words with a slight stagger after ring starts
    swapTimer = setTimeout(() => {
      document.querySelectorAll('.highlight-word').forEach((el, i) => {
        setTimeout(() => el.classList.add('lit'), i * 80);
      });
    }, 500); // start after ring is ~halfway

    // Swap photo after ring completes (ring transition is 1s)
    if (!swapped && avatar.dataset.alt) {
      setTimeout(() => {
        avatar.src = avatar.dataset.alt;
        swapped = true;
      }, 600);
    }
  });

  avatarWrapper.addEventListener('mouseleave', () => {
    clearTimeout(swapTimer);

    // Un-highlight words
    resetTimer = setTimeout(() => {
      document.querySelectorAll('.highlight-word').forEach(el => {
        el.classList.remove('lit');
      });
    }, 150);

    // Reset photo
    setTimeout(() => {
      avatar.src = 'me-1.jpeg';
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


