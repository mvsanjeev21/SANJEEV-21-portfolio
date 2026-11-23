/* =========================================
   SANJEEV M.V. — PORTFOLIO INTERACTIONS
========================================= */

// Typing effect for secondary identity words
const words = ["Developer", "Problem Solver", "Innovator", "Entrepreneur"];
const typingEl = document.getElementById("typing");

let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;

function runTypewriter() {
    if (!typingEl) return;

    const current = words[wordIdx];
    typingEl.textContent = isDeleting
        ? current.slice(0, charIdx - 1)
        : current.slice(0, charIdx + 1);

    charIdx += isDeleting ? -1 : 1;

    let delay = isDeleting ? 55 : 105;

    if (!isDeleting && charIdx === current.length) {
        isDeleting = true;
        delay = 1300;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        delay = 250;
    }

    setTimeout(runTypewriter, delay);
}

runTypewriter();

// Mobile menu toggle
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuButton.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuButton.textContent = "☰";
        });
    });
}

// Highlight active navigation link while scrolling
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
    const scrollPos = window.scrollY + 150;

    sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
            navItems.forEach((a) => {
                a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
            });
        }
    });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });

// Print / Save summary button
const printBtn = document.getElementById("printBiodataBtn");
if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
}

// Contact form feedback
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("senderName");
        const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "there";
        formStatus.textContent = `Thanks, ${name}! Connect a form service (like Formspree) to send messages directly to your inbox.`;
        contactForm.reset();
    });
}