const toggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("cv-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", isDark ? "Activar modo día" : "Activar modo noche");
  localStorage.setItem("cv-theme", theme);
}

setTheme(savedTheme || (prefersDark ? "dark" : "light"));
toggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});
