function boundary_hit(event) {
    event.target.classList.add("highlighted");
    alert("You lost");
    stop_game();
}

function end() {
    alert("You won!");
    stop_game();
}

function stop_game() {
    navigation.forEach(boundary => {
        boundary.removeEventListener("mouseover", boundary_hit);
    });
    reached_end.removeEventListener("mouseover", end);

    start_button.addEventListener("click", start);
}
