const slides = document.querySelectorAll(".slide");
let counter = 0;
let intervalId;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goNext = () => {
  counter++;
  if (counter === slides.length) {
    counter = 0;
  }
  slideImage();
};

const goPrev = () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const startCarousel = () => {
  intervalId = setInterval(goNext, 3000); 
};

const stopCarousel = () => {
  clearInterval(intervalId);
};

startCarousel(); 