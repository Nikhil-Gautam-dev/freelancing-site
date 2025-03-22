document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Optional: Add some subtle animations
  const serviceCards = document.querySelectorAll(".service-card");
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  serviceCards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    observer.observe(card);
  });
  // Add this to the existing script.js file
  document.addEventListener("DOMContentLoaded", () => {
    // ... existing code ...

    // Project cards animation
    const projectCards = document.querySelectorAll(".project-card");
    const projectObserverOptions = {
      threshold: 0.1,
    };

    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, projectObserverOptions);

    projectCards.forEach((card) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(20px)";
      projectObserver.observe(card);
    });
  });
});
