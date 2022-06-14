const varNavHeight = () => {
  const nav = document.querySelector("nav");
  const navH = nav.offsetHeight;
  const r = document.querySelector(":root");
  r.style.setProperty("--navHeight", navH + "px");
};
varNavHeight();

// Calculation for height of navbar to be used as top offset for dropdown mobile menu

const mobileNavToggle = () => {
  const mobileNav = document.querySelector("#mobile-nav");
  const navButton = document.querySelector("#nav-button");

  navButton.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });
};
mobileNavToggle();

// Toggle between the expanded and collapsed states of the dropdown mobile menu
