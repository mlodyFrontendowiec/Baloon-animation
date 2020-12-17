document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".anim-bg");
  animBg = new Animbg();
  document.addEventListener("mousemove", animBg.listenCursorMove);
});
