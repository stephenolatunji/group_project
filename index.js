window.addEventListener("onscroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset >= 50) {
    navbar.classList.add("stick");
  } else {
    navbar.classList.remove("sticky");
  }
});
