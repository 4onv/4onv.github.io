document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");

    timelineItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Close all other open details
            timelineItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

            // Toggle active state for the clicked item
            item.classList.toggle("active");
        });
    });
});
