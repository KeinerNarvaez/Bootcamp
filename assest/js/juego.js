const apiUrl = "http://localhost:8080/Card";

const obtenerCartas = async (image_url,name,st_defense,st_heal,st_inteligence,st_power,st_speed,st_total)=> {
    try{
        const respuesta = await fetch(apiUrl+"/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({image_url,name,st_defense,st_heal,st_inteligence,st_power,st_speed,st_total})
        });
        data = await respuesta.json();
    }catch(Error){
        console.error("hubo un error al registrar los jugadores")
    }
}