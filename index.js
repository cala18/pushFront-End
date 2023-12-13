function toggleMenu() {
    var nav = document.getElementById("main-nav");
    nav.classList.toggle("show");
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.remove('fade');
});

window.addEventListener('beforeunload', function () {
    document.body.classList.add('fade');
});
