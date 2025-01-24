// Animation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    const bannerText = document.querySelector(".banner h1");
    bannerText.style.opacity = "0";
    bannerText.style.transform = "translateY(-20px)";

    setTimeout(() => {
        bannerText.style.transition = "all 1s ease-in-out";
        bannerText.style.opacity = "1";
        bannerText.style.transform = "translateY(0)";
    }, 100);
});

// Effet de survol sur les boutons
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.3s ease";
    });
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

// Révélation des sections au défilement
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight / 1.2;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "all 0.8s ease-in-out";
        }
    });
});

// Défilement fluide vers les sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        // Empêche l'envoi du formulaire par défaut
        event.preventDefault();

        // Récupération des champs
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation des champs
        if (!name) {
            alert("Veuillez entrer votre nom.");
            return;
        }
        if (!validateEmail(email)) {
            alert("Veuillez entrer une adresse email valide.");
            return;
        }
        if (!message) {
            alert("Veuillez entrer votre message.");
            return;
        }

        // Si tout est correct, soumission du formulaire
        alert("Merci pour votre message ! Nous vous répondrons bientôt.");
        form.submit(); // Envoie le formulaire
    });

    // Fonction pour valider l'email
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});

function toggleMenu() {
    const navbarLinks = document.querySelector(".navbar .container ul");
    navbarLinks.classList.toggle("active");
}
