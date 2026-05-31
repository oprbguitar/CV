const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll(".timeline-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".timeline-item");
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen);
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const counter = entry.target;
    const target = Number(counter.dataset.count);
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      counter.textContent = `${current}+`;
      if (current >= target) clearInterval(timer);
    }, 55);
    observer.unobserve(counter);
  });
}, { threshold: 0.8 });

document.querySelectorAll("[data-count]").forEach((counter) => counterObserver.observe(counter));

const sections = [...document.querySelectorAll("main section[id], footer[id]")];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => sectionObserver.observe(section));

const hero = document.querySelector(".hero");
const heroVisual = document.querySelector(".hero-visual");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (heroVisual && !reducedMotion.matches) {
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
    heroVisual.style.setProperty("--shift-x", `${x}px`);
    heroVisual.style.setProperty("--shift-y", `${y}px`);
  });

  hero.addEventListener("pointerleave", () => {
    heroVisual.style.setProperty("--shift-x", "0px");
    heroVisual.style.setProperty("--shift-y", "0px");
  });
}
