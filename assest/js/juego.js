document.addEventListener("DOMContentLoaded", function () {
const apiUrl = "http://localhost:8080/Card";
number=2;
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
const data =localStorage.getItem('jugadores');
const local = JSON.parse(data);
document.getElementById("user1").innerHTML = `<h5>${local[0]}</h5>`;
switch (local.length) {
    case 2:
        document.body.style.backgroundImage = "url('./assest/image/Juego-2.png')";
        break;
    case  3:
        console.log(local);
        
        document.body.style.backgroundImage = "url('./assest/image/Juego-3.png')";
        break;
    case  4:
        document.body.style.backgroundImage = "url('./assest/image/Juego-4.png')";
        break;
    case  5:
        document.body.style.backgroundImage = "url('./assest/image/Juego-5.png')";
        break;      
    case  6:
        document.body.style.backgroundImage = "url('./assest/image/Juego-6.png')";
        break;
    case  7:
        document.body.style.backgroundImage = "url('./assest/image/Juego-7.png')";
        break;
    default:
        break;
}
function numberCard(number) {
    let value= document.createElement("div");
    value.className="numberCard"+number;
    value.innerHTML="<h2>8</h2>";
    document.getElementById("dataCardUser").appendChild(value);
}
for (let index = 1; index < local.length; index++) {
    console.log(local[index]);
    let user= this.createElement("div");
    numberCard(number);
    user.className="user"+number;
    user.innerHTML="<h5>"+local[index]+"</h5>";
    number=number+1;
    document.getElementById("users").appendChild(user);
}
});
