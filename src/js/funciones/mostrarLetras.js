export function mostrarLetras (titulo,elemento,index=0) {

    if (index < titulo.length) {

        document.getElementById(elemento).textContent += titulo[index];
        setTimeout(() => mostrarLetras(titulo,elemento,index+1),100);

    }
}
