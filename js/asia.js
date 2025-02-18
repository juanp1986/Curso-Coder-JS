const cardsAsia = document.getElementById("cardsAsia")

const paisesAsia = [
    
    {
        imagen: "../images/Corea-del-sur.webp",
        nombre: "Corea Del Sur",
        capital: "Seul",
        ciudad1: "Daegu",
        ciudad2: "Busan"
    },
    {   
        imagen: "../images/China.png",
        nombre: "China",
        ciudad1: "Shangai",
        capital: "Pekin",
        ciudad2: "Wuhan"
    },
    {   
        imagen:"../images/India.svg",
        nombre: "India",
        ciudad1: "Calcuta",
        ciudad2: "Mumbai",
        capital: "Delhi" 
    },
    {   
        imagen: "../images/Japon.png",
        nombre: "Japon",
        ciudad1: "Osaka",
        ciudad2: "Kioto",
        capital: "Tokio"
    },
    {
        imagen:"../images/Turquia.svg",
        nombre: "Turquia",
        ciudad1: "Estambul",
        ciudad2: "Bursa",
        capital: "Ankara"
    },
    {
        imagen:"../images/Iraq.png",
        nombre: "Iraq",
        capital: "Bagdad",
        ciudad1: "Erbil",
        ciudad2: "Mosul"
    },
    {
        imagen:"../images/Israel.jpg",
        nombre: "Israel",
        ciudad1: "Tel Aviv",
        capital: "Jerusalen",
        ciudad2: "Haifa"
    },
    {
        imagen: "../images/Qatar.svg",
        nombre: "Qatar",
        ciudad1: "Dukhan",
        capital: "Doha",
        ciudad2: "Al-Wakrah"
    },
    {
        imagen:"../images/Corea-del-norte.png",
        nombre: "Corea Del Norte",
        ciudad1: "Sinuiju",
        ciudad2: "Kaesŏng",
        capital: "Pyongyang"
    },
    {
        imagen:"../images/Siria.svg",
        nombre: "Siria",
        capital: "Damasco",
        ciudad1: "Alepo",
        ciudad2: "Homs"
    }
    
]

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

agregarPaises();


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

                let puntajeAsia = document.createElement("div");
                puntajeAsia.classList.add("puntajeAsia");

                let mensaje = document.createElement("p");
                mensaje.textContent = `Tu resultado es de ${respuestasCorrectasAsia} respuestas correctas`;

                puntajeAsia.appendChild(mensaje);
                cardsAsia.appendChild(puntajeAsia);

                localStorage.removeItem("botonesCorrectosAsia");
                localStorage.removeItem("botonesIncorrectosAsia");
                localStorage.removeItem("respuestasTotalesAsia");
                localStorage.removeItem("respuestasCorrectasAsia");

            }
        })
    })
}

respuestasContinente();

const titulo = "Asia";
let index = 0 ;

function mostrarLetras () {

    if (index < titulo.length) {

        document.getElementById("asia").textContent += titulo[index];
        index++;
        setTimeout(mostrarLetras,100)
    }
}

mostrarLetras();
