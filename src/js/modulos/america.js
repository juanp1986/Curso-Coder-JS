import { mostrarLetras } from "../funciones/mostrarLetras.js";
import { recuperarUsuario } from "../funciones/recuperarUsuario.js";

const cardsAmerica = document.getElementById("cardsAmerica")

let paisesAmerica = [];

async function cargarDatos() {

    try {
        const response = await fetch("/Curso-Coder-JS/src/data/continenteAmerica.json");
        paisesAmerica = await response.json();
    
        agregarPaises();
        respuestasContinente();

    } catch (error) {

        console.error("Error al cargar el archivo JSON:", error.message);
    }
}

cargarDatos();
    
function agregarPaises () {

    let botonesCorrectosAmerica = localStorage.getItem("botonesCorrectosAmerica");

        if (botonesCorrectosAmerica) {
            botonesCorrectosAmerica = JSON.parse(botonesCorrectosAmerica);
        } 
    
        else {
            botonesCorrectosAmerica = {};  
        }

    let botonesIncorrectosAmerica = localStorage.getItem("botonesIncorrectosAmerica")

        if (botonesIncorrectosAmerica) {
            botonesIncorrectosAmerica = JSON.parse(botonesIncorrectosAmerica);
        } 
        
        else {
            botonesIncorrectosAmerica = {};  
        }

    paisesAmerica.forEach ( pais => {

        let bodyCard = document.createElement("div");
        bodyCard.classList.add("bodyCard");
        bodyCard.style.backgroundImage = `url('${pais.imagen}')`;

        let titleCard = document.createElement("div");
        titleCard.classList.add("titleCard");

        let title = document.createElement("p");
        title.textContent = pais.nombre;

        titleCard.appendChild(title);
        bodyCard.appendChild(titleCard);

        let ciudades = [pais.capital, pais.ciudad1, pais.ciudad2];
        ciudades.sort ();

        let boton1 = document.createElement("button");
        boton1.classList.add("boton1");
        boton1.textContent = ciudades[0];
        boton1.pais = pais;
        
        let boton2 = document.createElement("button");
        boton2.classList.add("boton2");
        boton2.textContent = ciudades[1];
        boton2.pais = pais;
        
        let boton3 = document.createElement("button");
        boton3.classList.add("boton3");
        boton3.textContent = ciudades[2];
        boton3.pais = pais;
        
        bodyCard.appendChild(boton1);
        bodyCard.appendChild(boton2);
        bodyCard.appendChild(boton3);

        if (botonesCorrectosAmerica[pais.nombre]) {

            let respuestaGuardada = botonesCorrectosAmerica[pais.nombre];

            let botones = [boton1, boton2, boton3];

            botones.forEach(boton => {

                if (boton.textContent === respuestaGuardada) {
                boton.classList.add("botonCorrecto");

                let botonesDesactivados = boton.parentElement.querySelectorAll("button");
                botonesDesactivados.forEach (b => {

                    b.disabled = true ;
                    b.classList.add ("botonesTransparentes");
                    })

                let respuestaCorrecta = document.createElement("button");
                respuestaCorrecta.textContent = "Respuesta Correcta +1";
                respuestaCorrecta.classList.add ("botonAgregado");
                boton.parentElement.appendChild(respuestaCorrecta); 
                }
            })
        }

        if (botonesIncorrectosAmerica[pais.nombre]) {

            let respuestaGuardada2 = botonesIncorrectosAmerica[pais.nombre];

            let botones = [boton1, boton2, boton3];

            botones.forEach(boton => {

                if (boton.textContent === respuestaGuardada2) {
                boton.classList.add("botonIncorrecto");

                let botonesDesactivados = boton.parentElement.querySelectorAll("button");
                botonesDesactivados.forEach (b => {

                    b.disabled = true ;
                    b.classList.add ("botonesTransparentes");
                    })

                let respuestaIncorrecta = document.createElement("button");
                respuestaIncorrecta.textContent = "Respuesta Incorrecta";
                respuestaIncorrecta.classList.add ("botonAgregado");
                boton.parentElement.appendChild(respuestaIncorrecta); 
                }
            })
        }

        cardsAmerica.appendChild(bodyCard);
    });
}

function respuestasContinente () {

    let botonesCorrectosAmerica = localStorage.getItem("botonesCorrectosAmerica");

        if (botonesCorrectosAmerica) {
            botonesCorrectosAmerica = JSON.parse(botonesCorrectosAmerica);
        } 
    
        else {
            botonesCorrectosAmerica = {};  
        }
    
    let botonesIncorrectosAmerica = localStorage.getItem("botonesIncorrectosAmerica")

        if (botonesIncorrectosAmerica) {
            botonesIncorrectosAmerica = JSON.parse(botonesIncorrectosAmerica);
        } 
    
        else {
            botonesIncorrectosAmerica = {};  
        }

    let respuestasTotalesAmerica = localStorage.getItem("respuestasTotalesAmerica")

        if (respuestasTotalesAmerica) {
            respuestasTotalesAmerica = JSON.parse(respuestasTotalesAmerica);
        } 
    
        else {
            respuestasTotalesAmerica = 0;  
        }

    let respuestasCorrectasAmerica = localStorage.getItem("respuestasCorrectasAmerica")

        if (respuestasCorrectasAmerica) {
            respuestasCorrectasAmerica = JSON.parse(respuestasCorrectasAmerica);
        } 
    
        else {
            respuestasCorrectasAmerica = 0;  
        }


    let botones = document.querySelectorAll(".boton1 , .boton2, .boton3");

        botones.forEach ( boton=> {

            boton.addEventListener ("click", function () {

            let paisClickeado = boton.pais;

            if  (paisClickeado.capital===boton.textContent) {

                respuestasTotalesAmerica++
                localStorage.setItem("respuestasTotalesAmerica", JSON.stringify(respuestasTotalesAmerica));

                respuestasCorrectasAmerica++
                localStorage.setItem("respuestasCorrectasAmerica", JSON.stringify(respuestasCorrectasAmerica));
            
                boton.className = "botonCorrecto";

                let respuestaCorrecta = document.createElement("button");
                respuestaCorrecta.textContent = "Respuesta Correcta +1";
                respuestaCorrecta.classList.add ("botonAgregado");
                boton.parentElement.appendChild(respuestaCorrecta);

                let botonesDesactivados = boton.parentElement.querySelectorAll("button");
                botonesDesactivados.forEach (b => {

                    b.disabled = true ;
                    b.classList.add ("botonesTransparentes");

                botonesCorrectosAmerica[paisClickeado.nombre] = boton.textContent;
                localStorage.setItem("botonesCorrectosAmerica", JSON.stringify(botonesCorrectosAmerica))
    
            })
        }   

            else {
            
            respuestasTotalesAmerica++
            localStorage.setItem("respuestasTotalesAmerica", JSON.stringify(respuestasTotalesAmerica));

            boton.className = "botonIncorrecto";

            let respuestaIncorrecta = document.createElement("button");
            respuestaIncorrecta.textContent = "Respuesta Incorrecta";
            respuestaIncorrecta.classList.add("botonAgregado");
            boton.parentElement.appendChild(respuestaIncorrecta);

            let botonesDesactivados = boton.parentElement.querySelectorAll("button");
            botonesDesactivados.forEach (b => {

                b.disabled = true ;
                b.classList.add ("botonesTransparentes");

                botonesIncorrectosAmerica[paisClickeado.nombre] = boton.textContent;
                localStorage.setItem("botonesIncorrectosAmerica", JSON.stringify(botonesIncorrectosAmerica))

                })
            }
        
            if (parseInt(respuestasTotalesAmerica)===10) {

                Swal.fire( {
                    
                    title: `Conseguiste ${respuestasCorrectasAmerica} respuestas correctas`,
                    imageUrl: "/Curso-Coder-JS/src/assets/images/imagenPuntaje.png",
                    background: "transparent",
                    color: "#BFBFBF",
                    confirmButtonText:"Continuar",
                    confirmButtonColor:"gray",
                    backdrop: `rgba(0, 0, 0, 0.9)`
                    
                });

                localStorage.removeItem("botonesCorrectosAmerica");
                localStorage.removeItem("botonesIncorrectosAmerica");
                localStorage.removeItem("respuestasTotalesAmerica");
                localStorage.removeItem("respuestasCorrectasAmerica");

            }
        })
    })
}

mostrarLetras("América", "america");
recuperarUsuario();

