export function guardarNombreUsuario () {

    let botonGuardarNombre = document.getElementById("guardarNombre");

    botonGuardarNombre.addEventListener("click", function() {

        let inputNombreUsuario = document.getElementById("ingresarNombre");
        let nombreUsuario = inputNombreUsuario.value;

        if (nombreUsuario.trim() === "") {
            nombreUsuario= "te llamaré null";
        }

        document.getElementById("nombreJugador").textContent = nombreUsuario;

        sessionStorage.setItem("jugador", nombreUsuario);

        

    });
}