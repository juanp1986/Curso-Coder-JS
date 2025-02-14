let botonGuardarNombre = document.getElementById("guardarNombre");
botonGuardarNombre.addEventListener("click", function() {

    let inputNombreUsuario = document.getElementById("ingresarNombre");
    let nombreUsuario = inputNombreUsuario.value;
    document.getElementById("nombreJugador").textContent = nombreUsuario;
    
});
