(function(window, document) {
  "use strict";

  const btn = document.getElementById("toggle-btn");
  const mainMenu = document.querySelector(".main-menu");

  btn.addEventListener("click", function() {
    mainMenu.classList.toggle("toggle_active");
  });

  window.addEventListener("resize", function() {
    if (window.innerWidth > 1024) {
      offElements();
    }
  });

  function offElements() {
    mainMenu.classList.remove("toggle_active");
  }
})(window, document);
