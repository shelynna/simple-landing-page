function toggleView() {
    let view = document.getElementById("click-display");
    if (view.style.display === "none") {
        view.style.display = "flex";
    } else if (window.innerWidth <= 765) {
        document.getElementById("click-display").style.flexDirection = "column";
    }

    else {
        view.style.display = "none";
    }
}
// function toggleViewView(view) {
//     if 
//     }
// }