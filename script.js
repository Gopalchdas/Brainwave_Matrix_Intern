window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 1) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.add("transparent");
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarUl = document.querySelector("#navbar ul");
  const closeBtn = document.createElement("span");

  closeBtn.classList.add("close-btn");
  closeBtn.innerHTML = "&times;";
  navbarUl.prepend(closeBtn);

  menuToggle.addEventListener("click", function () {
    navbarUl.classList.toggle("show");
  });

  closeBtn.addEventListener("click", function () {
    navbarUl.classList.remove("show");
  });
});
