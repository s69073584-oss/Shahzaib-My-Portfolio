
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

document.querySelectorAll(".project-image img").forEach(image => {
    const showPreviewFallback = () => {
        image.closest(".project-image")?.classList.add("has-fallback");
        image.remove();
    };

    image.addEventListener("error", showPreviewFallback, { once: true });

    if (image.complete && !image.naturalWidth) {
        showPreviewFallback();
    }
});

// Mobile Navigation
const setNavigationOpen = isOpen => {
    navLinks.classList.toggle("active", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    menuBtn.querySelector("span").textContent = isOpen ? "✕" : "☰";
};

menuBtn.addEventListener("click", () => {
    setNavigationOpen(!navLinks.classList.contains("active"));
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        setNavigationOpen(false);
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && navLinks.classList.contains("active")) {
        setNavigationOpen(false);
        menuBtn.focus();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && navLinks.classList.contains("active")) {
        setNavigationOpen(false);
    }
});

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailtoLink =
        `mailto:shahzaib.ahmed.eng@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage: " + message
        )}`;

    window.location.href = mailtoLink;
});
