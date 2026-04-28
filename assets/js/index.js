document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const openIcon = document.getElementById("openNav");
    const closeIcon = document.getElementById("closeNav");

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
