const slides = document.querySelectorAll(".slide");
let index = 0;
const intervalTime = 4000;

// İlk slide'ı hazırla
slides[0].classList.add("active");
slides[0].style.transform = "translateX(0)";

setInterval(() => {
  const current = slides[index];
  const nextIndex = (index + 1) % slides.length;
  const next = slides[nextIndex];

  // 1. Bir sonraki resmi sağda hazırla
  next.style.transition = "none";
  next.style.transform = "translateX(100%)";
  next.classList.add("active");

  // 2. Animasyonu başlat
  setTimeout(() => {
    next.style.transition = "transform 0.8s ease-in-out";
    current.style.transition = "transform 0.8s ease-in-out";

    current.style.transform = "translateX(-100%)";
    next.style.transform = "translateX(0)";
  }, 50);

  // 3. Geçiş tamamlandığında sınıfları güncelle
  setTimeout(() => {
    current.classList.remove("active");
    index = nextIndex;
  }, 850); // 0.8s animasyon süresinden biraz fazla
}, intervalTime);
