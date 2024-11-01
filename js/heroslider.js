let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel img");
  const thumbnails = document.querySelectorAll(".thumbnails img");
  slides[currentSlide].classList.remove("active");
  thumbnails[currentSlide].classList.remove("selected");
  currentSlide = index;
  slides[currentSlide].classList.add("active");
  thumbnails[currentSlide].classList.add("selected");
}

function selectSlide(index) {
  showSlide(index);
}