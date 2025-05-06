// Background Particles Animation
const bgAnimation = document.getElementById("bgAnimation");
const particlesCount = 50;

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("bg-particle");

  const size = Math.random() * 4 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;

  const animationDuration = Math.random() * 5 + 5;
  particle.style.animation = `move ${animationDuration}s linear infinite`;

  bgAnimation.appendChild(particle);

  setTimeout(() => particle.remove(), animationDuration * 1000);
}

for (let i = 0; i < particlesCount; i++) {
  setTimeout(createParticle, i * 200);
}

// Header Scroll Effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navUl.classList.remove("active");
  });
});

// Navigation Active State
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Intersection Observer for Animations
const animatedElements = document.querySelectorAll(
  ".project-card, .skill-card, .contact-info, .contact-form, .about-content"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

animatedElements.forEach((element) => observer.observe(element));

// Hero Slider
const indicators = document.querySelectorAll(".indicator");
const heroImages = [
  "./images/omar.jpg",
  "./images/Myphoto2Edit.png",
  "./images/Myphoto3.png",
];
let currentSlide = 0;
const heroImage = document.querySelector(".hero-image img");

function updateSlide(index) {
  heroImage.src = heroImages[index];
  indicators.forEach((ind) => ind.classList.remove("active"));
  indicators[index].classList.add("active");
  currentSlide = index;
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => updateSlide(index));
});

// Auto Slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % heroImages.length;
  updateSlide(currentSlide);
}, 5000);

// Form Submission
const contactForm = document.querySelector(".contact-form");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "#ffffff";
      contactForm.reset();
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    formMessage.textContent = "Error sending message. Please try again.";
    formMessage.style.color = "#ff5555";
  }

  formMessage.classList.add("show");
  setTimeout(() => {
    formMessage.classList.remove("show");
  }, 3000);
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Particle Animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes move {
        0% { transform: translate(0, 0); }
        50% { transform: translate(${Math.random() * 20 - 10}px, -50vh); }
        100% { transform: translate(${Math.random() * 20 - 10}px, -100vh); }
    }
`;
document.head.appendChild(styleSheet);
