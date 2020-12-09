// ======== VARIABLES =====

const btn = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");



// ======== EVENT LISTENER AND FUNCTIONS =====

// One way to do it

function toggle() {

    btn.addEventListener("click", () => {
        links.classList.toggle("show-links");
    })
}

toggle();


// Another way to do it

// btn.addEventListener("click", () => {

//     (links.classList.contains("show-links"))
//         ? links.classList.remove("show-links")
//         : links.classList.add("show-links");

// })



