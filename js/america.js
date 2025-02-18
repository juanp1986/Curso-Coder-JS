const cardsAmerica = document.getElementById("cardsAmerica")

const paisesAmerica = [
    
    {
        imagen: "../images/Argentina.webp",
        nombre: "Argentina",
        capital: "Buenos Aires",
        ciudad1: "Rosario",
        ciudad2: "Cordoba"
    },
    {   
        imagen: "../images/brasil.png",
        nombre: "Brasil",
        ciudad1: "Rio de Janeiro",
        capital: "Brasilia",
        ciudad2: "Sao Paulo"
    },
    {   
        imagen: "../images/Colombia.avif",
        nombre: "Colombia",
        ciudad1: "Barranquilla",
        ciudad2: "Medellin",
        capital: "Bogota"
    },
    {   
        imagen:"../images/Chile.jpg",
        nombre: "Chile",
        ciudad1: "Iquique",
        ciudad2: "Punta Arenas",
        capital: "Santiago de Chile"
    },
    {
        imagen:"../images/Mexico.png",
        nombre: "Mexico",
        ciudad1: "Monterrey",
        capital: "Ciudad de Mexico",
        ciudad2: "Guadalajara"
    },
    {
        imagen:"../images/Estados-Unidos.webp",
        nombre: "Estados Unidos",
        capital: "Washington",
        ciudad1: "Nueva York",
        ciudad2: "Los Angeles"
    },
    {
        imagen:"../images/Canada.webp",
        nombre: "Canada",
        ciudad1: "Vancouver",
        ciudad2: "Montreal",
        capital: "Ottawa"
    },
    {
        imagen: "../images/Guatemala.png",
        nombre: "Guatemala",
        ciudad1: "Quetzaltenango",
        capital: "Ciudad de Guatemala",
        ciudad2: "Mixco"
    },
    {
        imagen:"../images/Cuba.svg",
        nombre: "Cuba",
        ciudad1: "Santiago de Cuba",
        ciudad2: "Camaguey",
        capital: "La Habana"
    },
    {
        imagen:"../images/Jamaica.png",
        nombre: "Jamaica",
        capital: "Kingston",
        ciudad1: "Montego Bay",
        ciudad2: "Ocho Rios"
    }
    
]

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

agregarPaises();


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

                let puntajeAmerica = document.createElement("div");
                puntajeAmerica.classList.add("puntajeAmerica");

                let mensaje = document.createElement("p");
                mensaje.textContent = `Tu resultado es de ${respuestasCorrectasAmerica} respuestas correctas`;

                puntajeAmerica.appendChild(mensaje);
                cardsAmerica.appendChild(puntajeAmerica);

                localStorage.removeItem("botonesCorrectosAmerica");
                localStorage.removeItem("botonesIncorrectosAmerica");
                localStorage.removeItem("respuestasTotalesAmerica");
                localStorage.removeItem("respuestasCorrectasAmerica");

            }
        })
    })
}

respuestasContinente();

const titulo = "America";
let index = 0 ;

function mostrarLetras () {

    if (index < titulo.length) {

        document.getElementById("america").textContent += titulo[index];
        index++;
        setTimeout(mostrarLetras,100)
    }
}

mostrarLetras();
