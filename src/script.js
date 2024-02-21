const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const desktopMoon = document.getElementById("desktop-moon");
const desktopSun = document.getElementById("desktop-sun");
const wrapper = document.getElementById("wrapper");

openMenu.addEventListener("click", () => {
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  closeMenu.classList.add("flex");

  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex");
});

closeMenu.addEventListener("click", () => {
  closeMenu.classList.add("hidden");
  openMenu.classList.remove("hidden");
  openMenu.classList.add("flex");

  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("flex");
});

sun.addEventListener("click", () => {
  disableDarkMode();
});

desktopSun.addEventListener("click", () => {
  disableDarkMode();
});

moon.addEventListener("click", () => {
  enableDarkMode();
});

desktopMoon.addEventListener("click", () => {
  enableDarkMode();
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  enableDarkMode();
} else {
  disableDarkMode();
}

function enableDarkMode() {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  moon.classList.add("hidden");
  desktopMoon.classList.add("hidden");
  sun.classList.remove("hidden");
  sun.classList.add("flex");
  desktopSun.classList.remove("hidden");
  desktopSun.classList.add("flex");

  if (window.innerWidth > 1024) {
    wrapper.classList.remove("light-bg");
    wrapper.classList.add("dark-bg");
  }
}

function disableDarkMode() {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
  sun.classList.add("hidden");
  desktopSun.classList.add("hidden");
  moon.classList.remove("hidden");
  moon.classList.add("flex");
  desktopMoon.classList.remove("hidden");
  desktopMoon.classList.add("flex");

  if (window.innerWidth > 1024) {
    wrapper.classList.remove("dark-bg");
    wrapper.classList.add("light-bg");
  }
}

function init() {
  if (window.innerWidth > 1024) {
    if (localStorage.theme === "dark") {
      wrapper.classList.remove("light-bg");
      wrapper.classList.add("dark-bg");
    } else {
      wrapper.classList.remove("dark-bg");
      wrapper.classList.add("light-bg");
    }
  } else {
    wrapper.classList.remove("dark-bg");
    wrapper.classList.remove("light-bg");
  }
}

window.addEventListener("resize", () => {
  init();
});

init();
