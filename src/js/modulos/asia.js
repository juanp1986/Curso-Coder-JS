import { mostrarLetras } from "../funciones/mostrarLetras.js";
import { recuperarUsuario } from "../funciones/recuperarUsuario.js";

const cardsAsia = document.getElementById("cardsAsia")

let paisesAsia = [];

async function cargarDatos() {

    try {
        const response = await fetch("/src/data/continenteAsia.json");
        paisesAsia = await response.json();
    
        agregarPaises();
        respuestasContinente();

    } catch (error) {

        console.error("Error al cargar el archivo JSON:", error.message);
    }
}

cargarDatos();

function agregarPaises () {

    let botonesCorrectosAsia = localStorage.getItem("botonesCorrectosAsia");

        if (botonesCorrectosAsia) {
            botonesCorrectosAsia = JSON.parse(botonesCorrectosAsia);
        } 
    
        else {
            botonesCorrectosAsia = {};  
        }

    let botonesIncorrectosAsia = localStorage.getItem("botonesIncorrectosAsia")

        if (botonesIncorrectosAsia) {
            botonesIncorrectosAsia = JSON.parse(botonesIncorrectosAsia);
        } 
        
        else {
            botonesIncorrectosAsia = {};  
        }

    paisesAsia.forEach ( pais => {

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

        if (botonesCorrectosAsia[pais.nombre]) {

            let respuestaGuardada = botonesCorrectosAsia[pais.nombre];

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

        if (botonesIncorrectosAsia[pais.nombre]) {

            let respuestaGuardada2 = botonesIncorrectosAsia[pais.nombre];

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

        cardsAsia.appendChild(bodyCard);
    });
}

function respuestasContinente () {

    let botonesCorrectosAsia = localStorage.getItem("botonesCorrectosAsia");

        if (botonesCorrectosAsia) {
            botonesCorrectosAsia = JSON.parse(botonesCorrectosAsia);
        } 
    
        else {
            botonesCorrectosAsia = {};  
        }
    
    let botonesIncorrectosAsia = localStorage.getItem("botonesIncorrectosAsia")

        if (botonesIncorrectosAsia) {
            botonesIncorrectosAsia = JSON.parse(botonesIncorrectosAsia);
        } 
    
        else {
            botonesIncorrectosAsia = {};  
        }

    let respuestasTotalesAsia = localStorage.getItem("respuestasTotalesAsia")

        if (respuestasTotalesAsia) {
            respuestasTotalesAsia = JSON.parse(respuestasTotalesAsia);
        } 
    
        else {
            respuestasTotalesAsia = 0;  
        }

    let respuestasCorrectasAsia = localStorage.getItem("respuestasCorrectasAsia")

        if (respuestasCorrectasAsia) {
            respuestasCorrectasAsia = JSON.parse(respuestasCorrectasAsia);
        } 
    
        else {
            respuestasCorrectasAsia = 0;  
        }


    let botones = document.querySelectorAll(".boton1 , .boton2, .boton3");

        botones.forEach ( boton=> {

            boton.addEventListener ("click", function () {

            let paisClickeado = boton.pais;

            if  (paisClickeado.capital===boton.textContent) {

                respuestasTotalesAsia++
                localStorage.setItem("respuestasTotalesAsia", JSON.stringify(respuestasTotalesAsia));

                respuestasCorrectasAsia++
                localStorage.setItem("respuestasCorrectasAsia", JSON.stringify(respuestasCorrectasAsia));
            
                boton.className = "botonCorrecto";

                let respuestaCorrecta = document.createElement("button");
                respuestaCorrecta.textContent = "Respuesta Correcta +1";
                respuestaCorrecta.classList.add ("botonAgregado");
                boton.parentElement.appendChild(respuestaCorrecta);

                let botonesDesactivados = boton.parentElement.querySelectorAll("button");
                botonesDesactivados.forEach (b => {

                    b.disabled = true ;
                    b.classList.add ("botonesTransparentes");

                botonesCorrectosAsia[paisClickeado.nombre] = boton.textContent;
                localStorage.setItem("botonesCorrectosAsia", JSON.stringify(botonesCorrectosAsia))
    
            })
        }   

            else {
            
            respuestasTotalesAsia++
            localStorage.setItem("respuestasTotalesAsia", JSON.stringify(respuestasTotalesAsia));

            boton.className = "botonIncorrecto";

            let respuestaIncorrecta = document.createElement("button");
            respuestaIncorrecta.textContent = "Respuesta Incorrecta";
            respuestaIncorrecta.classList.add("botonAgregado");
            boton.parentElement.appendChild(respuestaIncorrecta);

            let botonesDesactivados = boton.parentElement.querySelectorAll("button");
            botonesDesactivados.forEach (b => {

                b.disabled = true ;
                b.classList.add ("botonesTransparentes");

                botonesIncorrectosAsia[paisClickeado.nombre] = boton.textContent;
                localStorage.setItem("botonesIncorrectosAsia", JSON.stringify(botonesIncorrectosAsia))

                })
            }
        
            if (parseInt(respuestasTotalesAsia)===10) {

                Swal.fire( {
                    
                    title: `Conseguiste ${respuestasCorrectasAsia} respuestas correctas`,
                    imageUrl: "/src/assets/images/imagenPuntaje.png",
                    background: "transparent",
                    color: "#BFBFBF",
                    confirmButtonText:"Continuar",
                    confirmButtonColor:"gray",
                    backdrop: `rgba(0, 0, 0, 0.9)`

                });

                localStorage.removeItem("botonesCorrectosAsia");
                localStorage.removeItem("botonesIncorrectosAsia");
                localStorage.removeItem("respuestasTotalesAsia");
                localStorage.removeItem("respuestasCorrectasAsia");

            }
        })
    })
}

mostrarLetras("Asia", "asia");
recuperarUsuario();
