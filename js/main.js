let America = document.getElementById("america");
let Europa = document.getElementById("europa");
let Asia = document.getElementById("asia");

America.addEventListener("click", function(){
    
    window.open ("/Curso-Coder-JS/html/america.html", "_blank");
});

Europa.addEventListener("click", function(){

    window.open ("/Curso-Coder-JS/html/europa.html", "_blank");
});

Asia.addEventListener("click", function(){

    window.open ("/Curso-Coder-JS/html/asia.html", "_blank");
});

const titulo = "Juego de Capitales";
let index = 0 ;

function mostrarLetras () {

    if (index < titulo.length) {

        document.getElementById("juegoDeCapitales").textContent += titulo[index];
        index++;
        setTimeout(mostrarLetras,100)
    }
}

mostrarLetras();
