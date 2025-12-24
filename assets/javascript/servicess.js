const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
