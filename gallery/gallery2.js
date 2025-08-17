const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentStackImages = [];
let currentIndex = 0;

// Function to open modal with selected image
function showModal(stackImages, index) {
  currentStackImages = stackImages;
  currentIndex = index;
  modalImg.src = currentStackImages[currentIndex].src;
  modal.style.display = "flex";
}

// Attach event listeners to each image within each photo-stack
document.querySelectorAll(".photo-stack").forEach((stack) => {
  const stackImages = Array.from(stack.querySelectorAll("img"));

  stackImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      showModal(stackImages, index);
    });
  });
});

// Navigation buttons
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentStackImages.length;
  modalImg.src = currentStackImages[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentStackImages.length) % currentStackImages.length;
  modalImg.src = currentStackImages[currentIndex].src;
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Optional: Close on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
