export function reglamento (){

    let reglas = document.getElementById("reglamento");

    reglas.addEventListener ("click", () => {

        swal.fire ({

            title: "Acerca del juego",
            color: "#7A1E1E",
            background: "linear-gradient(45deg,beige, #D5B19D)",
            html: ` <ul class="lista-reglas">
            <li> Es un juego sencillo donde tienes que elegir entre 3 opciones, cual es la capital del país. </li>
            <li> Puedes hacer click en el continente América para empezar el juego. </li>
            <li> Cada continente tiene un total de 10 preguntas/países. </li>
            <li> Si respondes 6 o más preguntas de manera correcta desbloquearás el continente Europa. </li>
            <li> Luego si respondes 6 o más preguntas de manera correcta desbloquerás Asia. </li>
            </ul>  `,
            confirmButtonText: "Jugar",
            confirmButtonColor: "#7A1E1E"
        });

    });
}