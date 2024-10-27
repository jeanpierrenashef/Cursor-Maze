var start_button = document.getElementById("start");
var navigation = document.querySelectorAll(".boundary");
var reached_end = document.getElementById("end");

start_button.addEventListener("mouseover", start);

function start() {
    navigation.forEach(boundary => {
        boundary.classList.remove("highlighted");
        boundary.addEventListener("mouseover", boundary_hit); 
    });
    reached_end.addEventListener("mouseover", end);
}
