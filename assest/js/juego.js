const apiUrl = "http://localhost:8080/Card";

const obtenerCartas = async (nombre)=> {
    try{
        const respuesta = await fetch(apiUrl+"/", {
            method: "GET",
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