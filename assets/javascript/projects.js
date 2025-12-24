document.querySelectorAll(".project-card").forEach((card) => {
  const video = card.querySelector(".project-video");
  const btn = card.querySelector(".play-btn");

  btn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      btn.textContent = "⏸";
    } else {
      video.pause();
      btn.textContent = "▶";
    }
  });
});