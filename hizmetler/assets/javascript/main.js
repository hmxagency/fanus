document.querySelectorAll(".highlight-box h3").forEach((h) => {
  h.addEventListener("click", () => {
    h.parentElement.classList.toggle("active");
  });
});
