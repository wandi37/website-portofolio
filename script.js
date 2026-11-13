
// =====================================
// MENU RESPONSIVE
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Tutup menu ketika link diklik
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// =====================================
// TYPING ANIMATION
// =====================================

const typingElement = document.getElementById("typing");

const words = [
    "Siswa RPL",
    "Web Developer",
    "UI/UX Designer",
    "Figma Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {
    const currentWord = words[wordIndex];

    typingElement.textContent = currentWord.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typingEffect, 1200);
            return;
        }
    } else {
        charIndex--;

        if (charIndex < 0) {
            charIndex = 0;
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typingEffect, deleting ? 50 : 100);
}

typingEffect();

// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});

// =====================================
// ACTIVE NAVBAR
// =====================================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// =====================================
// FOOTER YEAR
// =====================================

document.getElementById("year").textContent =
    new Date().getFullYear();

// =====================================
// CONTACT FORM - WHATSAPP
// =====================================

const contactForm = document.getElementById("contactForm");

// GANTI DENGAN NOMOR WHATSAPP KAMU
const whatsappNumber = "083820544078";

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Mohon lengkapi semua formulir!");
        return;
    }

    const text =
        `Halo Wandi!%0A%0A` +
        `Nama: ${encodeURIComponent(name)}%0A` +
        `Email: ${encodeURIComponent(email)}%0A` +
        `Pesan: ${encodeURIComponent(message)}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
});