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

const apiUrl = "http://localhost:8080/Player";
const UsuariosCreados = async (nombre)=> {
    try{
        const respuesta = await fetch(apiUrl+"/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({nombre})
        });
        data = await respuesta.json();
    }catch(Error){
        console.error("hubo un error al registrar los jugadores")
    }
}

const obtenerUsuarios = async ()=> {
    try{
        const respuesta = await fetch(apiUrl+"/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
    // body: JSON.stringify({nombre})
        });
        data = await respuesta.json();
    }catch(Error){
        console.error("hubo un error al obtener los jugadores")
    }
}