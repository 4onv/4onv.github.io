document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline li");
    const timelineContent = document.getElementById("timeline-content");

    const events = {
        "1800s": {
            title: "Early Colonization",
            description: "The arrival of European settlers marked the beginning of systematic efforts to assimilate Indigenous peoples."
        },
        "1876": {
            title: "Indian Act",
            description: "The Indian Act was enacted to control and assimilate Indigenous populations, laying the groundwork for residential schools."
        },
        "1931": {
            title: "Peak of Residential Schools",
            description: "By this year, over 80 residential schools were operating across Canada, causing irreparable harm to Indigenous communities."
        },
        "1996": {
            title: "Last Residential School Closed",
            description: "The last federally operated residential school, Gordon Indian Residential School, was closed."
        },
        "2008": {
            title: "Government Apology",
            description: "The Canadian government formally apologized for its role in residential schools under Prime Minister Stephen Harper."
        },
        "2021": {
            title: "Discovery of Graves",
            description: "Unmarked graves of Indigenous children were discovered, shedding light on the atrocities of residential schools."
        }
    };

    timelineItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            const year = item.getAttribute("data-year");
            if (events[year]) {
                timelineContent.innerHTML = `
                    <h3>${events[year].title}</h3>
                    <p>${events[year].description}</p>
                `;
            }
        });
    });
});
