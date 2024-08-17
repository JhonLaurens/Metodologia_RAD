// Ejemplo de JavaScript para la línea de tiempo interactiva
const timeline = document.querySelector(".timeline");
const timelineItems = document.querySelectorAll(".timeline-item");

let currentItem = 0;

function showItem(index) {
    timelineItems.forEach(item => item.classList.remove("active"));
    timelineItems[index].classList.add("active");
}

timeline.addEventListener("click", event => {
    if (event.target.classList.contains("timeline-dot")) {
        currentItem = Array.from(timelineItems).indexOf(event.target.parentNode);
        showItem(currentItem);
    }
});