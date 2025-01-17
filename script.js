document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const events = {
        "1800s": "Colonization began with settlers forcing Indigenous people off their land.",
        "1876": "The Indian Act passed, formalizing assimilation practices.",
        "1931": "Residential schools peaked, with over 80 institutions.",
        "1996": "The last residential school closed, marking an end to the system."
    };

    timelineItems.forEach((item) => {
        item.addEventListener("click", () => {
            alert(`${item.innerText}: ${events[item.dataset.year]}`);
        });
    });
});
