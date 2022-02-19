const up = document.querySelector(".up");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 550) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
});
