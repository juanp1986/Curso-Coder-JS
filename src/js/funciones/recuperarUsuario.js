export function recuperarUsuario () {

    let nombreUsuario = document.getElementById("nombreJugador");
    let nombreJugador = sessionStorage.getItem("jugador");

    if (nombreJugador) {
        
        nombreUsuario.textContent = nombreJugador ;
    } else {

        nombreUsuario.textContent = "te llamaré undefined" ;
    }
}