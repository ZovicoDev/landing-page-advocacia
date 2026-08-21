
const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");


if (menuButton && mainNav) {

  const closeMenu = (returnFocus = false) => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    mainNav.classList.remove("is-open");

    if (returnFocus) {
      menuButton.focus();
    }
  };

 
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  
    if (isOpen) {
      closeMenu();
      return;
    }

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Fechar menu");
    mainNav.classList.add("is-open");
  });


  mainNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });


  document.addEventListener("click", (event) => {
    if (!mainNav.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mainNav.classList.contains("is-open")) {
      closeMenu(true);
    }
  });


  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
}