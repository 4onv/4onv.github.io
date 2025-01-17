document.addEventListener("DOMContentLoaded", () => {
    const timelineButtons = document.querySelectorAll(".timeline-btn");

    timelineButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const details = btn.nextElementSibling;
            const isVisible = details.style.display === "block";
            document.querySelectorAll(".timeline-details").forEach((el) => (el.style.display = "none"));
            details.style.display = isVisible ? "none" : "block";
        });
    });
});
