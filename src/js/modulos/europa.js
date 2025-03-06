import { mostrarLetras } from "../funciones/mostrarLetras.js";
import { recuperarUsuario } from "../funciones/recuperarUsuario.js";

const cardsEuropa = document.getElementById("cardsEuropa")

let paisesEuropa = [];

async function cargarDatos() {

    try {
        const response = await fetch("/Curso-Coder-JS/src/data/continenteEuropa.json");
        paisesEuropa = await response.json();
    
        agregarPaises();
        respuestasContinente();

    } catch (error) {

        console.error("Error al cargar el archivo JSON:", error.message);
    }
}

cargarDatos();

function agregarPaises () {

    let botonesCorrectosEuropa = localStorage.getItem("botonesCorrectosEuropa");

        if (botonesCorrectosEuropa) {
            botonesCorrectosEuropa = JSON.parse(botonesCorrectosEuropa);
        } 
    
        else {
            botonesCorrectosEuropa = {};  
        }

    let botonesIncorrectosEuropa = localStorage.getItem("botonesIncorrectosEuropa")

        if (botonesIncorrectosEuropa) {
            botonesIncorrectosEuropa = JSON.parse(botonesIncorrectosEuropa);
        } 
        
        else {
            botonesIncorrectosEuropa = {};  
        }

    paisesEuropa.forEach ( pais => {

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

        if (botonesCorrectosEuropa[pais.nombre]) {

            let respuestaGuardada = botonesCorrectosEuropa[pais.nombre];

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

        if (botonesIncorrectosEuropa[pais.nombre]) {

            let respuestaGuardada2 = botonesIncorrectosEuropa[pais.nombre];

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

        cardsEuropa.appendChild(bodyCard);
    });
}

function respuestasContinente () {

    let botonesCorrectosEuropa = localStorage.getItem("botonesCorrectosEuropa");

        if (botonesCorrectosEuropa) {
            botonesCorrectosEuropa = JSON.parse(botonesCorrectosEuropa);
        } 
    
        else {
            botonesCorrectosEuropa = {};  
        }
    
    let botonesIncorrectosEuropa = localStorage.getItem("botonesIncorrectosEuropa")

        if (botonesIncorrectosEuropa) {
            botonesIncorrectosEuropa = JSON.parse(botonesIncorrectosEuropa);
        } 
    
        else {
            botonesIncorrectosEuropa = {};  
        }

    let respuestasTotalesEuropa = localStorage.getItem("respuestasTotalesEuropa")

        if (respuestasTotalesEuropa) {
            respuestasTotalesEuropa = JSON.parse(respuestasTotalesEuropa);
        } 
    
        else {
            respuestasTotalesEuropa = 0;  
        }

    let respuestasCorrectasEuropa = localStorage.getItem("respuestasCorrectasEuropa")

        if (respuestasCorrectasEuropa) {
            respuestasCorrectasEuropa = JSON.parse(respuestasCorrectasEuropa);
        } 
    
        else {
            respuestasCorrectasEuropa = 0;  
        }


    let botones = document.querySelectorAll(".boton1 , .boton2, .boton3");

        botones.forEach ( boton=> {

            boton.addEventListener ("click", function () {

            let paisClickeado = boton.pais;

            if  (paisClickeado.capital===boton.textContent) {

                respuestasTotalesEuropa++
                localStorage.setItem("respuestasTotalesEuropa", JSON.stringify(respuestasTotalesEuropa));

                respuestasCorrectasEuropa++
                localStorage.setItem("respuestasCorrectasEuropa", JSON.stringify(respuestasCorrectasEuropa));
            
                boton.className = "botonCorrecto";

                let respuestaCorrecta = document.createElement("button");
                respuestaCorrecta.textContent = "Respuesta Correcta +1";
                respuestaCorrecta.classList.add ("botonAgregado");
                boton.parentElement.appendChild(respuestaCorrecta);

                let botonesDesactivados = boton.parentElement.querySelectorAll("button");
                botonesDesactivados.forEach (b => {

                    b.disabled = true ;
                    b.classList.add ("botonesTransparentes");

                botonesCorrectosEuropa[paisClickeado.nombre] = boton.textContent;
                localStorage.setItem("botonesCorrectosEuropa", JSON.stringify(botonesCorrectosEuropa))
    
            })
        }   

            else {
            
            respuestasTotalesEuropa++
            localStorage.setItem("respuestasTotalesEuropa", JSON.stringify(respuestasTotalesEuropa));

            boton.className = "botonIncorrecto";

            let respuestaIncorrecta = document.createElement("button");
            respuestaIncorrecta.textContent = "Respuesta Incorrecta";
            respuestaIncorrecta.classList.add("botonAgregado");
            boton.parentElement.appendChild(respuestaIncorrecta);

            let botonesDesactivados = boton.parentElement.querySelectorAll("button");
            botonesDesactivados.forEach (b => {

                b.disabled = true ;
                b.classList.add ("botonesTransparentes");

                botonesIncorrectosEuropa[paisClickeado.nombre] = boton.textContent;
                localStorage.setItem("botonesIncorrectosEuropa", JSON.stringify(botonesIncorrectosEuropa))

                })
            }
        
            if (parseInt(respuestasTotalesEuropa)===10) {

                Swal.fire( {
                    
                    title: `Conseguiste ${respuestasCorrectasEuropa} respuestas correctas`,
                    imageUrl: "/Curso-Coder-JS/src/assets/images/imagenPuntaje.png",
                    background: "transparent",
                    color: "#BFBFBF",
                    confirmButtonText:"Continuar",
                    confirmButtonColor:"gray",
                    backdrop: `rgba(0, 0, 0, 0.9)`

                });

                localStorage.removeItem("botonesCorrectosEuropa");
                localStorage.removeItem("botonesIncorrectosEuropa");
                localStorage.removeItem("respuestasTotalesEuropa");
                localStorage.removeItem("respuestasCorrectasEuropa");

            }
        })
    })
}

mostrarLetras("Europa", "europa");
recuperarUsuario();
