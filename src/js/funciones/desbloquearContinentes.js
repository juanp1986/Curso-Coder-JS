export function desbloquearContinentes (respuestasCorrectasContinente, continente) {

    let unlock = localStorage.getItem(respuestasCorrectasContinente);

    if (unlock === null) {

        unlock = "0";

        localStorage.setItem(respuestasCorrectasContinente, "0");
    }

    parseInt(unlock);

    if (unlock >= 6) {

        botonContinente.disabled = false;
    }

    let botonContinente = document.getElementById(continente);

    window.addEventListener ("storage", function(dato) {

        if (dato.key === respuestasCorrectasContinente ) {

            unlock = parseInt (localStorage.getItem(respuestasCorrectasContinente));
            }

            if (unlock >= 6) {

                botonContinente.disabled = false;
                botonContinente.style.cursor = "pointer";

                Swal.fire( {
                    
                    title: "Nuevo continente desbloqueado",
                    imageUrl: "/Curso-Coder-JS/src/assets/images/thumbs-up.gif",
                    imageHeight:"500",
                    background: "transparent",
                    color: "#BFBFBF",
                    confirmButtonText:"Seguir jugando",
                    confirmButtonColor:"gray",
                    backdrop: `rgba(0, 0, 0, 0.9)`
                });
            }
    })
}
