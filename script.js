
// Display a welcome message in the browser console
console.log("Welcome to Euginia's Portfolio!");

// Highlight the navigation link for the section being viewed
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color =
            link.getAttribute("href") === `#${currentSection}`
            ? "#9bd0c6"
            : "white";
    });
});
