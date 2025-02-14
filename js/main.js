const cardsAmerica = document.getElementById("cardsAmerica")

const paisesAmerica = [
    
    {
        imagen: "./images/Argentina.webp",
        nombre: "Argentina",
        capital: "Buenos Aires",
        ciudad1: "Rosario",
        ciudad2: "Cordoba"
    },
    {   
        imagen: "./images/brasil.png",
        nombre: "Brasil",
        ciudad1: "Rio de Janeiro",
        capital: "Brasilia",
        ciudad2: "Sao Paulo"
    },
    {   
        imagen: "./images/Colombia.avif",
        nombre: "Colombia",
        ciudad1: "Barranquilla",
        ciudad2: "Medellin",
        capital: "Bogota"
    },
    {   
        imagen:"./images/Chile.jpg",
        nombre: "Chile",
        ciudad1: "Iquique",
        ciudad2: "Punta Arenas",
        capital: "Santiago de Chile"
    },
    {
        imagen:"./images/Mexico.png",
        nombre: "Mexico",
        ciudad1: "Monterrey",
        capital: "Ciudad de Mexico",
        ciudad2: "Guadalajara"
    },
    {
        imagen:"./images/Estados-Unidos.webp",
        nombre: "Estados Unidos",
        capital: "Washington",
        ciudad1: "Nueva York",
        ciudad2: "Los Angeles"
    },
    {
        imagen:"./images/Canada.webp",
        nombre: "Canada",
        ciudad1: "Vancouver",
        ciudad2: "Montreal",
        capital: "Ottawa"
    },
    {
        imagen: "./images/Guatemala.png",
        nombre: "Guatemala",
        ciudad1: "Quetzaltenango",
        capital: "Ciudad de Guatemala",
        ciudad2: "Mixco"
    },
    {
        imagen:"./images/Cuba.svg",
        nombre: "Cuba",
        ciudad1: "Santiago de Cuba",
        ciudad2: "Camaguey",
        capital: "La Habana"
    },
    {
        imagen:"./images/Jamaica.png",
        nombre: "Jamaica",
        capital: "Kingston",
        ciudad1: "Montego Bay",
        ciudad2: "Ocho Rios"
    }
    
]

function agregarPaises () {

    let botonesCorrectosGuardados = localStorage.getItem("botonesCorrectos");

        if (botonesCorrectosGuardados) {
            botonesCorrectosGuardados = JSON.parse(botonesCorrectosGuardados);
        } 
    
        else {
            botonesCorrectosGuardados = {};  
        }

    let botonesIncorrectosGuardados = localStorage.getItem("botonesIncorrectos")

        if (botonesIncorrectosGuardados) {
            botonesIncorrectosGuardados = JSON.parse(botonesIncorrectosGuardados);
        } 
        
        else {
            botonesIncorrectosGuardados = {};  
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

        if (botonesCorrectosGuardados[pais.nombre]) {

            let respuestaGuardada = botonesCorrectosGuardados[pais.nombre];

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

        if (botonesIncorrectosGuardados[pais.nombre]) {

            let respuestaGuardada2 = botonesIncorrectosGuardados[pais.nombre];

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

agregarPaises();


function respuestasContinente () {

    let botonesCorrectosGuardados = localStorage.getItem("botonesCorrectos");

        if (botonesCorrectosGuardados) {
            botonesCorrectosGuardados = JSON.parse(botonesCorrectosGuardados);
        } 
    
        else {
            botonesCorrectosGuardados = {};  
        }
    
    let botonesIncorrectosGuardados = localStorage.getItem("botonesIncorrectos")

        if (botonesIncorrectosGuardados) {
            botonesIncorrectosGuardados = JSON.parse(botonesIncorrectosGuardados);
        } 
    
        else {
            botonesIncorrectosGuardados = {};  
        }

    let respuestasTotalesGuardadas = localStorage.getItem("respuestasTotalesGuardadas")

        if (respuestasTotalesGuardadas) {
            respuestasTotalesGuardadas = JSON.parse(respuestasTotalesGuardadas);
        } 
    
        else {
            respuestasTotalesGuardadas = 0;  
        }

    let respuestasCorrectasGuardadas = localStorage.getItem("respuestasCorrectasGuardadas")

        if (respuestasCorrectasGuardadas) {
            respuestasCorrectasGuardadas = JSON.parse(respuestasCorrectasGuardadas);
        } 
    
        else {
            respuestasCorrectasGuardadas = 0;  
        }


    let botones = document.querySelectorAll(".boton1 , .boton2, .boton3");

        botones.forEach ( boton=> {

            boton.addEventListener ("click", function () {

            let paisClickeado = boton.pais;

            if  (paisClickeado.capital===boton.textContent) {

                respuestasTotalesGuardadas++
                localStorage.setItem("respuestasTotalesGuardadas", JSON.stringify(respuestasTotalesGuardadas));

                respuestasCorrectasGuardadas++
                localStorage.setItem("respuestasCorrectasGuardadas", JSON.stringify(respuestasCorrectasGuardadas));
            
                boton.className = "botonCorrecto";

                let respuestaCorrecta = document.createElement("button");
                respuestaCorrecta.textContent = "Respuesta Correcta +1";
                respuestaCorrecta.classList.add ("botonAgregado");
                boton.parentElement.appendChild(respuestaCorrecta);

                let botonesDesactivados = boton.parentElement.querySelectorAll("button");
                botonesDesactivados.forEach (b => {

                    b.disabled = true ;
                    b.classList.add ("botonesTransparentes");

                botonesCorrectosGuardados[paisClickeado.nombre] = boton.textContent;
                localStorage.setItem("botonesCorrectos", JSON.stringify(botonesCorrectosGuardados))
    
            })
        }   

            else {
            
            respuestasTotalesGuardadas++
            localStorage.setItem("respuestasTotalesGuardadas", JSON.stringify(respuestasTotalesGuardadas));

            boton.className = "botonIncorrecto";

            let respuestaIncorrecta = document.createElement("button");
            respuestaIncorrecta.textContent = "Respuesta Incorrecta";
            respuestaIncorrecta.classList.add("botonAgregado");
            boton.parentElement.appendChild(respuestaIncorrecta);

            let botonesDesactivados = boton.parentElement.querySelectorAll("button");
            botonesDesactivados.forEach (b => {

                b.disabled = true ;
                b.classList.add ("botonesTransparentes");

                botonesIncorrectosGuardados[paisClickeado.nombre] = boton.textContent;
                localStorage.setItem("botonesIncorrectos", JSON.stringify(botonesIncorrectosGuardados))

                })
            }
        
            if (respuestasTotalesGuardadas===10) {

                let puntajeAmerica = document.createElement("div");
                puntajeAmerica.classList.add("puntajeAmerica");

                let mensaje = document.createElement("p");
                mensaje.textContent = `Tu resultado es de ${respuestasCorrectasGuardadas} respuestas correctas`;

                puntajeAmerica.appendChild(mensaje);
                cardsAmerica.appendChild(puntajeAmerica);

                localStorage.removeItem("botonesCorrectos");
                localStorage.removeItem("botonesIncorrectos");
                localStorage.removeItem("respuestasTotalesGuardadas");
                localStorage.removeItem("respuestasCorrectasGuardadas");

            }
        })
    })
}

respuestasContinente();

