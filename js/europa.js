const cardsEuropa = document.getElementById("cardsEuropa")

const paisesEuropa = [
    
    {
        imagen: "../images/Alemania.png",
        nombre: "Alemania",
        capital: "Berlin",
        ciudad1: "Munich",
        ciudad2: "Hamburgo"
    },
    {   
        imagen: "../images/Francia.svg",
        nombre: "Francia",
        ciudad1: "Marsella",
        capital: "Paris",
        ciudad2: "Lyon"
    },
    {   
        imagen:"../images/Paises-Bajos.svg",
        nombre: "Paises Bajos",
        capital: "Amsterdam",
        ciudad1: "Roterdam",
        ciudad2: "Utrecht"
    },
    {   
        imagen:"../images/Portugal.webp",
        nombre: "Portugal",
        ciudad1: "Braga",
        capital: "Lisboa",
        ciudad2: "Oporto"
    },
    {
        imagen:"../images/Italia.png",
        nombre: "Italia",
        ciudad1: "Napoles",
        ciudad2: "Milan",
        capital: "Roma"
    },
    {
        imagen: "../images/España.png",
        nombre: "España",
        ciudad1: "Barcelona",
        ciudad2: "Valencia",
        capital: "Madrid"
    },
    {
        imagen:"../images/Belgica.png",
        nombre: "Belgica",
        ciudad1: "Amberes",
        ciudad2: "Brujas",
        capital: "Bruselas"
    },
    {
        imagen: "../images/Noruega.webp",
        nombre: "Noruega",
        ciudad1: "Trondheim",
        capital: "Oslo",
        ciudad2: "Tromsø"
    },
    {
        imagen:"../images/Polonia.png",
        nombre: "Polonia",
        capital: "Varsovia",
        ciudad1: "Cracovia",
        ciudad2: "Wroclaw"
    },
    {
        imagen:"../images/Bulgaria.svg",
        nombre: "Bulgaria",
        ciudad1: "Plovdiv",
        ciudad2: "Varna",
        capital: "Sofia"
    }
    
]

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

agregarPaises();


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

                let puntajeEuropa = document.createElement("div");
                puntajeEuropa.classList.add("puntajeEuropa");

                let mensaje = document.createElement("p");
                mensaje.textContent = `Tu resultado es de ${respuestasCorrectasEuropa} respuestas correctas`;

                puntajeEuropa.appendChild(mensaje);
                cardsEuropa.appendChild(puntajeEuropa);

                localStorage.removeItem("botonesCorrectosEuropa");
                localStorage.removeItem("botonesIncorrectosEuropa");
                localStorage.removeItem("respuestasTotalesEuropa");
                localStorage.removeItem("respuestasCorrectasEuropa");

            }
        })
    })
}

respuestasContinente();

const titulo = "Europa";
let index = 0 ;

function mostrarLetras () {

    if (index < titulo.length) {

        document.getElementById("europa").textContent += titulo[index];
        index++;
        setTimeout(mostrarLetras,100)
    }
}

mostrarLetras();
