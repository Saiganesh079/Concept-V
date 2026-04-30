const videos = document.querySelectorAll(".hover-video");

videos.forEach(video => {
  video.pause();

  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

/* FLOW LINE INTERACTION */
const paths = document.querySelectorAll(".flow-lines path");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;

  paths.forEach((path, i) => {
    const offset = (i + 1) * 30 * x;
    path.style.transform = `translateY(${offset}px)`;
  });
});