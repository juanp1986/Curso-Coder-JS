import { mostrarLetras } from "./funciones/mostrarLetras.js";
import { guardarNombreUsuario } from "./funciones/guardarNombreUsuario.js";
import { desbloquearContinentes } from "./funciones/desbloquearContinentes.js";
import { reglamento } from "./utilidades/reglamento.js";


let America = document.getElementById("america");
let Europa = document.getElementById("europa");
let Asia = document.getElementById("asia");

America.addEventListener("click", function(){
    
    window.open ("../public/america.html", "_blank");
});

Europa.addEventListener("click", function(){

    window.open ("../public/europa.html", "_blank");
});

Asia.addEventListener("click", function(){

    window.open ("../public/asia.html", "_blank");
});

mostrarLetras("Juego De Capitales", "juegoDeCapitales");
guardarNombreUsuario();
desbloquearContinentes("respuestasCorrectasAmerica", "europa");
desbloquearContinentes("respuestasCorrectasEuropa", "asia");
reglamento();