$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".nav").addClass("stick");
    } else {
      $(".nav").removeClass("stick");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  var typed = new Typed(".typing", {
    strings: ["Programer 😉", "Gammer 😎", "Developer 🧐"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Programer 😉", "Gammer 😎", "Developer 🧐"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });

  $(".button").click(function () {
    alert("The Form has been Submitted.");
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  $(".menu-btn").click(function () {
    $(".nav .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
