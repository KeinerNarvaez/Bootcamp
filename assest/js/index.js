
const ApiUrl = "http://127.0.0.1:8080/Player";

const crearJugadores = async () => {
    
    let name = []
    

    try {
        const respuesta = await fetch(ApiUrl + "/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
        });
        data = await respuesta.json();
    } catch (Error) {
        console.error("hubo un error al registrar los jugadores")
    }
};
document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("number").addEventListener("click", function () {
            let numero = this.value;
            let padre = document.getElementById("jugadores");
            padre.innerHTML = ""
            console.log("valor: " + numero);
            for (let index = 1; index <= numero; index++) {
                let etiquetaJugador = document.createElement('h5');
                etiquetaJugador.innerText = "jugador " + index;
                let etiquetaEntrada = document.createElement("input");
                padre.appendChild(etiquetaJugador);
                padre.appendChild(etiquetaEntrada);
            }
        })
    });
const obtenerJugadores = async () => {
    try {
        const respuesta = await fetch(ApiUrl + "/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify({name})
        });
        data = await respuesta.json();
    } catch (Error) {
        console.error("hubo un error al obtener a los jugadores")
    }
};
        document.getElementById("jugar").addEventListener("click", function () {
            crearJugadores()
            // location.href = "../juego.html"
        })
