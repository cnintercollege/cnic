// Get modal, modal image, and close button elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementsByClassName("close")[0];
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Get all frames (thumbnails)
const frames = document.querySelectorAll(".frame");

// Store the index of the current image
let currentIndex = 0;
const images = Array.from(frames);

// Open the modal with the clicked image
frames.forEach((frame, index) => {
  frame.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor link action
    currentIndex = index; // Set the current image index
    const largeImageUrl = this.querySelector("img").src;
    modal.style.display = "flex"; // Show the modal
    modalImg.src = largeImageUrl; // Set the source of the modal image
  });
});

// Close modal when close button is clicked
closeBtn.addEventListener("click", function() {
  modal.style.display = "none"; // Hide the modal
});

// Close modal when clicking anywhere outside the image
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Hide the modal if clicked outside the image
  }
});

// Next button functionality
nextBtn.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
  modalImg.src = images[currentIndex].querySelector("img").src;
});

// Previous button functionality
prevBtn.addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
  modalImg.src = images[currentIndex].querySelector("img").src;
});
