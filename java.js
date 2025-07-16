// Gallery image navigation
const rightArrow = document.querySelector('.gallery-arrow.right');
const leftArrow = document.querySelector('.gallery-arrow.left');
const images = document.querySelectorAll('.gallery-image');
let currentIndex = 0;

// Initially, only show the first image
images[currentIndex].classList.add('active');

// Show the next image when the right arrow is clicked
rightArrow.addEventListener('click', () => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;  // Loop back to the first image when at the end
  images[currentIndex].classList.add('active');
  showArrows();
});

// Show the previous image when the left arrow is clicked
leftArrow.addEventListener('click', () => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + images.length) % images.length;  // Loop back to the last image when at the start
  images[currentIndex].classList.add('active');
  showArrows();
});

// Show or hide the left and right arrows depending on which image is shown
function showArrows() {
  // Always show both arrows after the first image
  leftArrow.style.display = 'block';
  rightArrow.style.display = 'block';

  // Hide the left arrow on the first image
  if (currentIndex === 0) {
    leftArrow.style.display = 'none';
  }

  // Hide the right arrow on the last image
  if (currentIndex === images.length - 1) {
    rightArrow.style.display = 'none';
  }
}

showArrows();  // Ensure arrows are displayed based on initial image

window.dispatchEvent(new Event('resize'));  // Trigger resize event on load

console.log("moaz sherif")