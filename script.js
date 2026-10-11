/* Areeba Foods: navigation, product inquiry buttons, and WhatsApp contact form. */
(() => {
  "use strict";

  // Pakistan country code +92 plus the local number without its leading zero.
  // If the business WhatsApp number changes, update it here and in index.html links.
  const WHATSAPP_NUMBER = "923120326822";

  const menuToggle = document.getElementById("menuToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        primaryNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function openWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  document.querySelectorAll("[data-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.getAttribute("data-product") || "a product";
      openWhatsApp(`Assalam-o-Alaikum! I am interested in ${product} from Areeba Foods. Please confirm current availability, pack size, and price.`);
    });
  });

  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const subject = String(formData.get("subject") || "").trim();
      const message = String(formData.get("message") || "").trim();

      if (!name || !subject || !message) {
        formStatus.textContent = "Please complete all required fields.";
        return;
      }

      const whatsappMessage = [
        "Assalam-o-Alaikum Areeba Foods!",
        "",
        `Name: ${name}`,
        phone ? `Phone: ${phone}` : "",
        `Inquiry: ${subject}`,
        `Message: ${message}`,
        "",
        "I sent this inquiry through the Areeba Foods website."
      ].filter(Boolean).join("\n");

      formStatus.textContent = "WhatsApp is opening with your message. Please review it and press Send in WhatsApp.";
      openWhatsApp(whatsappMessage);
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
