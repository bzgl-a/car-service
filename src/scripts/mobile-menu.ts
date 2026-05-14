export function initMobileMenu(): void {
  const mobileMenu = document.querySelector<HTMLDivElement>(
    ".mobile-overlay__body",
  );
  const burger = document.querySelector<HTMLButtonElement>(".burger__wrapper");

  if (!mobileMenu || !burger) return;

  const closeMenu = () => {
    mobileMenu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = "";
  };

  burger.addEventListener("click", () => {
    const isActive = mobileMenu.classList.toggle("active");
    burger.classList.toggle("active");
    document.body.style.overflow = isActive ? "hidden" : "";
  });

  document.querySelectorAll<HTMLAnchorElement>(".mob-nav").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      if (!targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 50;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }

      closeMenu();
    });
  });

  mobileMenu.addEventListener("click", e => {
    if (e.target === mobileMenu) {
      closeMenu();
    }
  });
}
