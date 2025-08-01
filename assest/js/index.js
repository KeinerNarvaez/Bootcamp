document.addEventListener("DOMContentLoaded",function () {
    document.getElementById("number").addEventListener("click", function () {
    let numero= this.value;
    let padre=document.getElementById("jugadores");
    padre.innerHTML=""
    console.log("valor: "+numero);   
    for (let index = 1; index <= numero; index++) {
    let etiquetaJugador=document.createElement('h5');
    etiquetaJugador.innerText="jugador "+index;
    let etiquetaEntrada=document.createElement("input");
    padre.appendChild(etiquetaJugador);
    padre.appendChild(etiquetaEntrada); 
    }
})
document.getElementById("jugar").addEventListener("click",function () {
    location.href="../juego.html"
})
})

