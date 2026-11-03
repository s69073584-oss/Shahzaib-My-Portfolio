const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

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

const applyTheme = theme => {
    const isLight = theme === "light";
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute(
        "aria-label",
        `Switch to ${isLight ? "dark" : "light"} mode`
    );
    themeToggle.title = `Switch to ${isLight ? "dark" : "light"} mode`;
    themeToggle.querySelector("span").textContent = isLight ? "☾" : "☼";
};

let savedTheme;
try {
    savedTheme = localStorage.getItem("portfolio-theme");
} catch (error) {
    console.warn("Unable to read the saved theme preference.", error);
}

const initialTheme = savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
applyTheme(initialTheme);

themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light"
        ? "dark"
        : "light";
    applyTheme(nextTheme);

    try {
        localStorage.setItem("portfolio-theme", nextTheme);
    } catch (error) {
        console.warn("Unable to save the theme preference.", error);
    }
});

const revealTargets = document.querySelectorAll(
    ".section > .section-subtitle, " +
    ".section > .section-title, " +
    ".about-content, " +
    ".section-heading-block, " +
    ".skills-grid .skill-card, " +
    ".projects-heading, " +
    ".projects-grid .project-card, " +
    ".experience-layout, " +
    ".contact-container"
);
const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealTargets.forEach(target => {
        target.classList.add("reveal");
        revealObserver.observe(target);
    });
}

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const subjectField = document.getElementById("subject");
const messageField = document.getElementById("message");

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const subject = subjectField.value.trim();
    const message = messageField.value.trim();

    nameField.value = name;
    emailField.value = email;
    subjectField.value = subject;
    messageField.value = message;

    nameField.setCustomValidity(
        name.length < 2 ? "Please enter at least 2 characters for your name." : ""
    );
    subjectField.setCustomValidity(
        subject.length < 2 ? "Please enter a subject of at least 2 characters." : ""
    );
    messageField.setCustomValidity(
        message.length < 10 ? "Please enter a message of at least 10 characters." : ""
    );

    if (!contactForm.reportValidity()) {
        formStatus.textContent = "";
        return;
    }

    const mailtoLink =
        `mailto:shahzaib.ahmed.eng@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
        )}`;

    formStatus.textContent =
        "Opening your email app. Send the message there to complete delivery.";
    window.location.href = mailtoLink;
});

[nameField, emailField, subjectField, messageField].forEach(field => {
    field.addEventListener("input", () => {
        field.setCustomValidity("");
    });
});
