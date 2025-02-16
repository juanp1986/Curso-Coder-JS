let darkMode = document.querySelector(".botonModoClaro");
let body = document.body;

if (localStorage.getItem ("darkMode") === "true") {

    body.classList.add("dark");
    darkMode.classList.add("botonModoOscuro");
    darkMode.textContent = "🌙"; 
    
} else {
    
    darkMode.classList.remove("botonModoOscuro");
    body.classList.remove("dark");
    darkMode.textContent = "🌞";
}

window.addEventListener("storage", function(event) {

    if (event.newValue === "true") {

        body.classList.add("dark");
        darkMode.classList.add("botonModoOscuro");
        darkMode.textContent = "🌙";
        
    } else {

        body.classList.remove("dark");
        darkMode.classList.remove("botonModoOscuro");
        darkMode.textContent = "🌞";
    }
});

darkMode.addEventListener("click", function() {
    
    body.classList.toggle("dark");
    darkMode.classList.toggle("botonModoOscuro");

    if (darkMode.textContent === "🌞") {

        darkMode.textContent = "🌙"; 

    } else {

        darkMode.textContent = "🌞";
    }

    if (body.className.includes("dark")) {

        localStorage.setItem("darkMode", "true")

    } else {

        localStorage.setItem("darkMode", "false")
    }

})
