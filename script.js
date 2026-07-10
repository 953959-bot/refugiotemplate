let currentSlide = 0;

function changeSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  
  if (!slides.length) return;
  
  currentSlide += n;
  if (currentSlide >= slides.length) { currentSlide = 0; }
  if (currentSlide < 0) { currentSlide = slides.length - 1; }
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function showSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  if (n >= slides.length) { currentSlide = 0; }
  if (n < 0) { currentSlide = slides.length - 1; }
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (slides[currentSlide]) slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

setInterval(() => {
  changeSlide(1);
}, 7000);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') changeSlide(-1);
  if (e.key === 'ArrowRight') changeSlide(1);
});

document.querySelectorAll('.dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

document.querySelectorAll('.slider-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const isNext = this.classList.contains('next');
    changeSlide(isNext ? 1 : -1);
  });
});