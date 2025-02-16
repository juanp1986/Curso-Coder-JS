let darkMode = document.querySelector(".botonModoClaro");
let body = document.body;

darkMode.classList.remove("botonModoOscuro");
darkMode.textContent = "🌞";

darkMode.addEventListener("click", function() {
    
    body.classList.toggle("dark");

    if (darkMode.textContent === "🌞") {

        darkMode.textContent = "🌙"; 

    } else {

        darkMode.textContent = "🌞";
    }

    darkMode.classList.toggle("botonModoOscuro");

})
