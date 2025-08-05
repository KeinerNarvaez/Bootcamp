const ApiUrl = "http://127.0.0.1:8080/Player";
let array=[]
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
                etiquetaEntrada.setAttribute("id","inputName"+index)
                etiquetaEntrada.setAttribute("type","text")
                etiquetaEntrada.setAttribute("minlength","6")
                etiquetaEntrada.setAttribute("maxlength","10")
                etiquetaEntrada.setAttribute("placeholder","Ingrese el nombre del jugador ")
                etiquetaEntrada.setAttribute("required","")
                array.push("inputName"+index)
                console.log(array);
                padre.appendChild(etiquetaJugador);
                padre.appendChild(etiquetaEntrada);
            }
        })
    });

const crearJugadores = async (name) => {

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

const obtenerJugadores = async (name) => {
    try {
        const respuesta = await fetch(ApiUrl + "/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name})
        });
        data = await respuesta.json();
    } catch (Error) {
        console.error("hubo un error al obtener a los jugadores")
    }
};
        document.getElementById("jugar").addEventListener("click", function () {
            try {
            let number = document.getElementById("number").value;
            let array = [];
            for (let index = 1; index <= number; index++) {
                let inputName = document.getElementById("inputName" + index).value;
                if (inputName == "") {
                    alert("Por favor, complete todos los campos correctamente.");
                    return;
                }
                array.push(inputName);
            }
            console.log(array);
            const data =JSON.stringify(array);
            localStorage.setItem("jugadores","")
            localStorage.setItem("jugadores",data)
            for (let index = 0; index < array.length; index++) {
                console.log(array[index]);
                crearJugadores(array[index])    
            }
            location.href="../Frontend/juego.html"
            } catch (exception) {
                console.error("Error al crear los jugadores: ", exception);
                alert("Por favor, complete todos los campos correctamente.");
            }
        })