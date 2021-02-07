var iconAnim = document.querySelectorAll(".feature svg"),
  featuCont = document.querySelectorAll(".feature-content");

window.onscroll = function () {
  if (window.scrollY >= 300) {
    iconAnim.forEach((anim) => {
      anim.style.transform = "rotateX(0deg)";
    })
    featuCont.forEach((feat) => {
      feat.style.transform = "scale(1)"
    })
  }
}