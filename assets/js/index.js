document.addEventListener("DOMContentLoaded", () => {
    // ===============
    // MENU RESPONSIVE
    // ===============
    const nav = document.querySelector("nav");
    const openIcon = document.getElementById("openIcon");
    const closeIcon = document.getElementById("closeIcon");

    openIcon.addEventListener("click", () => {
        nav.style.display = "flex";
        closeIcon.style.display = "block";
        openIcon.style.display = "none";
    });

    closeIcon.addEventListener("click", () => {
        nav.style.display = "none";
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
    });
});

// FILTRAGE PROJETS
const buttons = document.querySelectorAll(".buttons-selection button");
const items = Array.from(document.querySelectorAll(".projects .item"));
const showAllBtn = document.getElementById("showAllProjects");
const noProjectsMessage = document.getElementById("noProjectsMessage");

let currentFilter = "all";
let showAll = false;
const MAX_VISIBLE = 3;

function updateProjects() {
    let visibleCount = 0;

    // projets qui correspondent au filtre
    const matchingItems = items.filter(
        (item) =>
            currentFilter === "all" || item.classList.contains(currentFilter),
    );

    // affichage des projets
    items.forEach((item) => {
        const match = matchingItems.includes(item);

        if (match && (showAll || visibleCount < MAX_VISIBLE)) {
            item.style.display = "block";
            visibleCount++;
        } else {
            item.style.display = "none";
        }
    });

    // message "aucun projet"
    noProjectsMessage.style.display =
        matchingItems.length === 0 ? "block" : "none";

    // bouton "voir tous les projets"
    showAllBtn.style.display =
        !showAll && matchingItems.length > MAX_VISIBLE
            ? "inline-block"
            : "none";
}

// clic sur une catégorie
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.add("button2"));
        button.classList.remove("button2");

        currentFilter = button.dataset.filter;
        showAll = false;
        updateProjects();
    });
});

// voir tous les projets
showAllBtn.addEventListener("click", () => {
    showAll = true;
    updateProjects();
});

// état initial
document.querySelector('[data-filter="all"]').click();
