document.addEventListener("DOMContentLoaded", function () {
// Obtener jugadores desde localStorage
    const jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];
    const totalJugadores = jugadores.length;
    let turnoActual = 0;
    let categoriaSeleccionada = null;
    const cartasGanadas = Array.from({ length: totalJugadores }, () => []);

    // Mostrar nombre del jugador 1
    document.getElementById("user1").innerHTML = `
      <h5>${jugadores[0]}</h5>
      <div id="cartaJugador1" class="carta-seleccionada"></div>
    `;

    // Fondo dinámico según número de jugadores
    if (totalJugadores >= 2 && totalJugadores <= 7) {
        document.body.style.backgroundImage = `url('./assest/image/Juego-${totalJugadores}.png')`;
    }

    // Simulación de todas las cartas disponibles (Datos quemados, debe reemplazar con datos del backend)
    const todasLasCartas = [
{"id_card":"1","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Alien_X_.png?raw=true","name":"Alien-x","st_defense":400,"st_heal":440,"st_intelligence":100,"st_power":450,"st_speed":200,"st_total":1590},
{"id_card":"2","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Amenaza_Acu%C3%A1tica.png?raw=true","name":"Amenaza acuática","st_defense":190,"st_heal":200,"st_intelligence":120,"st_power":300,"st_speed":150,"st_total":960},
{"id_card":"3","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/AmpFibio.png?raw=true","name":"Amphibio","st_defense":260,"st_heal":150,"st_intelligence":101,"st_power":100,"st_speed":202,"st_total":813},
{"id_card":"4","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Arctiguana.png?raw=true","name":"Artiguana","st_defense":300,"st_heal":220,"st_intelligence":123,"st_power":321,"st_speed":122,"st_total":1085},
{"id_card":"5","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Atomix.png?raw=true","name":"Atomix","st_defense":405,"st_heal":404,"st_intelligence":132,"st_power":420,"st_speed":105,"st_total":1466},
{"id_card":"6","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Ball_Weevil.png?raw=true","name":"Ball_Weevil","st_defense":102,"st_heal":151,"st_intelligence":102,"st_power":205,"st_speed":252,"st_total":812},
{"id_card":"7","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Bloxx.png?raw=true","name":"Blitzwolfer","st_defense":301,"st_heal":225,"st_intelligence":103,"st_power":299,"st_speed":245,"st_total":1173},
{"id_card":"8","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Bullfrag.png?raw=true","name":"Bloxx","st_defense":456,"st_heal":198,"st_intelligence":201,"st_power":301,"st_speed":123,"st_total":1279},
{"id_card":"9","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Bullfrag.png?raw=true","name":"Bullfrag","st_defense":120,"st_heal":170,"st_intelligence":115,"st_power":207,"st_speed":300,"st_total":912},
{"id_card":"10","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Cerebron.png?raw=true","name":"Cerebron","st_defense":220,"st_heal":250,"st_intelligence":450,"st_power":250,"st_speed":301,"st_total":1371},
{"id_card":"11","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Clockwork.png?raw=true","name":"Clockwork","st_defense":302,"st_heal":230,"st_intelligence":202,"st_power":302,"st_speed":201,"st_total":1237},
{"id_card":"12","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Crashhopper.png?raw=true","name":"Crashhopper","st_defense":185,"st_heal":199,"st_intelligence":104,"st_power":210,"st_speed":385,"st_total":1083},
{"id_card":"13","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Cuatrobrazos.png?raw=true","name":"Cuatrobrazos","st_defense":212,"st_heal":221,"st_intelligence":105,"st_power":389,"st_speed":230,"st_total":1157},
{"id_card":"14","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Diamante.png?raw=true","name":"Diamante","st_defense":445,"st_heal":265,"st_intelligence":324,"st_power":334,"st_speed":335,"st_total":1703},
{"id_card":"15","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Ditto.png?raw=true","name":"Ditto","st_defense":110,"st_heal":120,"st_intelligence":125,"st_power":120,"st_speed":125,"st_total":600},
{"id_card":"16","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Eatle.png?raw=true","name":"Eatle","st_defense":234,"st_heal":251,"st_intelligence":165,"st_power":322,"st_speed":222,"st_total":1194},
{"id_card":"17","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/El%20peor.png?raw=true","name":"El peor","st_defense":500,"st_heal":185,"st_intelligence":106,"st_power":100,"st_speed":102,"st_total":993},
{"id_card":"18","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Fantasmatico.png?raw=true","name":"Fantasmatico","st_defense":345,"st_heal":234,"st_intelligence":302,"st_power":350,"st_speed":220,"st_total":1451},
{"id_card":"19","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Fasttrack.png?raw=true","name":"Fasttrack","st_defense":210,"st_heal":214,"st_intelligence":215,"st_power":218,"st_speed":321,"st_total":1168},
{"id_card":"20","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Feedback.png?raw=true","name":"Feedback","st_defense":189,"st_heal":256,"st_intelligence":156,"st_power":345,"st_speed":324,"st_total":2070},
{"id_card":"21","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Frankentrueno.png?raw=true","name":"Frankentrueno","st_defense":258,"st_heal":259,"st_intelligence":245,"st_power":254,"st_speed":241,"st_total":1237},
{"id_card":"22","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Fuego.png?raw=true","name":"Fuego","st_defense":312,"st_heal":312,"st_intelligence":322,"st_power":354,"st_speed":235,"st_total":1535},
{"id_card":"23","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Goop.png?raw=true","name":"Goop","st_defense":440,"st_heal":125,"st_intelligence":421,"st_power":125,"st_speed":142,"st_total":1353},
{"id_card":"24","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Gravattack.png?raw=true","name":"Gravattack","st_defense":444,"st_heal":152,"st_intelligence":452,"st_power":452,"st_speed":213,"st_total":1713},
{"id_card":"25","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Gutrot.png?raw=true","name":"Gutrot","st_defense":152,"st_heal":442,"st_intelligence":233,"st_power":324,"st_speed":156,"st_total":1307},
{"id_card":"26","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Insectoide.png?raw=true","name":"Insectoide","st_defense":107,"st_heal":143,"st_intelligence":341,"st_power":221,"st_speed":331,"st_total":1143},
{"id_card":"27","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Jetray_Full.png?raw=true","name":"Jetray Full","st_defense":129,"st_heal":145,"st_intelligence":145,"st_power":325,"st_speed":452,"st_total":1196},
{"id_card":"28","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Jury_Rigg.png?raw=true","name":"Jury Rigg","st_defense":145,"st_heal":440,"st_intelligence":315,"st_power":215,"st_speed":218,"st_total":1333},
{"id_card":"29","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Lodestar.png?raw=true","name":"Lodestar","st_defense":362,"st_heal":365,"st_intelligence":265,"st_power":145,"st_speed":421,"st_total":1553},
{"id_card":"30","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Materia_Gris.png?raw=true","name":"Materia Gris","st_defense":109,"st_heal":108,"st_intelligence":458,"st_power":109,"st_speed":108,"st_total":892},
{"id_card":"31","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Molestache_Omniverse%201.png?raw=true","name":"Molestache","st_defense":265,"st_heal":347,"st_intelligence":305,"st_power":219,"st_speed":475,"st_total":1611},
{"id_card":"32","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Molestolvo%201.png?raw=true","name":"Molestolvo","st_defense":484,"st_heal":471,"st_intelligence":185,"st_power":113,"st_speed":445,"st_total":1698},
{"id_card":"33","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Multi_ojos.png?raw=true","name":"Multi_ojos","st_defense":319,"st_heal":458,"st_intelligence":421,"st_power":486,"st_speed":462,"st_total":2146},
{"id_card":"34","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Nanomech.png?raw=true","name":"Nanomech","st_defense":453,"st_heal":128,"st_intelligence":440,"st_power":219,"st_speed":350,"st_total":1590},
{"id_card":"35","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Piedra.png?raw=true","name":"Piedra","st_defense":171,"st_heal":167,"st_intelligence":421,"st_power":406,"st_speed":160,"st_total":1325},
{"id_card":"36","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Rath.png?raw=true","name":"Rath","st_defense":299,"st_heal":100,"st_intelligence":497,"st_power":289,"st_speed":286,"st_total":1471},
{"id_card":"37","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Shocksquatch.png?raw=true","name":"Shocksquatch","st_defense":297,"st_heal":138,"st_intelligence":118,"st_power":203,"st_speed":246,"st_total":1002},
{"id_card":"38","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Snare-oh.png?raw=true","name":"nare-oh","st_defense":209,"st_heal":119,"st_intelligence":140,"st_power":375,"st_speed":359,"st_total":1202},
{"id_card":"39","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Tortutornado.png?raw=true","name":"Tortutornado","st_defense":288,"st_heal":379,"st_intelligence":157,"st_power":115,"st_speed":393,"st_total":1332},
{"id_card":"40","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Ultra%20T.png?raw=true","name":"UltraT","st_defense":498,"st_heal":490,"st_intelligence":184,"st_power":308,"st_speed":164,"st_total":1644},
{"id_card":"41","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Upchuck.png?raw=true","name":"Upchuck","st_defense":444,"st_heal":314,"st_intelligence":276,"st_power":466,"st_speed":125,"st_total":1625},
{"id_card":"42","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Whampire.png?raw=true","name":"Whampire","st_defense":136,"st_heal":164,"st_intelligence":259,"st_power":301,"st_speed":422,"st_total":1282},
{"id_card":"43","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/Wildvine.png?raw=true","name":"Wildvine","st_defense":327,"st_heal":456,"st_intelligence":454,"st_power":303,"st_speed":463,"st_total":2003},
{"id_card":"44","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/XLR8OS%201.png?raw=true","name":"XLR8","st_defense":469,"st_heal":227,"st_intelligence":167,"st_power":142,"st_speed":204,"st_total":1209},
{"id_card":"45","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/acuatico.png?raw=true","name":"acuatico","st_defense":289,"st_heal":446,"st_intelligence":102,"st_power":433,"st_speed":154,"st_total":1424},
{"id_card":"46","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/armadillo.png?raw=true","name":"armadillo","st_defense":117,"st_heal":231,"st_intelligence":156,"st_power":186,"st_speed":244,"st_total":934},
{"id_card":"47","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/batore.png?raw=true","name":"batore","st_defense":468,"st_heal":247,"st_intelligence":321,"st_power":270,"st_speed":358,"st_total":1664},
{"id_card":"48","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/bestia.png?raw=true","name":"bestia","st_defense":342,"st_heal":178,"st_intelligence":171,"st_power":400,"st_speed":115,"st_total":1206},
{"id_card":"49","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/canomball.png?raw=true","name":"canomball","st_defense":387,"st_heal":208,"st_intelligence":137,"st_power":191,"st_speed":123,"st_total":1046},
{"id_card":"50","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/eco%20eco.png?raw=true","name":"ecoeco","st_defense":117,"st_heal":316,"st_intelligence":461,"st_power":444,"st_speed":130,"st_total":1468},
{"id_card":"51","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/frio.png?raw=true","name":"frio","st_defense":322,"st_heal":237,"st_intelligence":350,"st_power":103,"st_speed":437,"st_total":1449},
{"id_card":"52","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/fuego%20pantanoso.png?raw=true","name":"fuego pantanoso","st_defense":399,"st_heal":443,"st_intelligence":250,"st_power":129,"st_speed":500,"st_total":1721},
{"id_card":"53","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/halcon.png?raw=true","name":"halcon","st_defense":100,"st_heal":435,"st_intelligence":212,"st_power":479,"st_speed":183,"st_total":1409},
{"id_card":"54","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/humungosaurio.png?raw=true","name":"humungosaurio","st_defense":426,"st_heal":455,"st_intelligence":367,"st_power":413,"st_speed":139,"st_total":1800},
{"id_card":"55","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/mono%20ara%C3%B1a.png?raw=true","name":"mono araña","st_defense":168,"st_heal":146,"st_intelligence":192,"st_power":100,"st_speed":150,"st_total":756},
{"id_card":"56","image_url":"https://github.com/KeinerNarvaez/Bootcamp/blob/main/Frontend/assest/image/aliens/muy%20grande.png?raw=true","name":"muy grande","st_defense":195,"st_heal":167,"st_intelligence":179,"st_power":312,"st_speed":479,"st_total":1332}
]

;
    async function getData() {
    const url = "http://127.0.0.1:8080/Card/";
    try {
        fetch(url).then((response)=>response.json())
        .then((data)=>{
            const fetch=data.result;
            fetch.forEach((pokemon)=>{
                console.log(pokemon.name);
            })
        })
    } catch (error) {
        console.error(error.message);
    }

    }
    // Barajar y repartir cartas
    function repartirCartas(cartas, numJugadores) {
        const baraja = [...cartas].sort(() => Math.random() - 0.5);
        const cartasPorJugador = Math.max(8);
        const mazos = [];

        for (let i = 0; i < numJugadores; i++) {
            const inicio = i * cartasPorJugador;
            mazos.push(baraja.slice(inicio, inicio + cartasPorJugador));
        }

        return mazos;
    }

    const mazos = repartirCartas(todasLasCartas, totalJugadores);

    // Crear UI de jugadores
    for (let i = 0; i < jugadores.length; i++) {
        const number = i + 1;
        const user = document.createElement("div");
        user.className = `user${number}`;
        user.setAttribute("id","user"+number)
        user.innerHTML = `<h5>${jugadores[i]}</h5>`;
        document.getElementById("users").appendChild(user);

        const count = document.createElement("div");
        count.className = `numberCard${number}`;
        count.innerHTML = `<h2>${mazos[i].length}</h2>`;
        document.getElementById("dataCardUser").appendChild(count);
    }
    function iniciarRonda() {
    mostrarMensajeTurno(`Turno de: ${jugadores[turnoActual]}`);
    const contenedor = document.getElementById("cartasContainer");
    contenedor.innerHTML = "";

    if (!mazos[turnoActual] || mazos[turnoActual].length === 0) {
        mostrarMensaje(`${jugadores[turnoActual]} no tiene más cartas`);
        return;
    }

    const cartas = mazos[turnoActual];
    const nombreJugador = jugadores[turnoActual];

 
    const nombreSpan = document.getElementById("nombreJugador");
    if (nombreSpan) {
        nombreSpan.innerText = nombreJugador;
    }

    cartas.forEach((carta, index) => {
        const div = document.createElement("div");
        div.className = "card";
        div.style.zIndex=index
        div.style.width = "16rem";
        div.style.margin = "30px";
        div.style.backgroundColor="#46bb4000"
        div.style.border="#46bb4000"
        div.innerHTML = `
            <div class="card bg-black border border-white carta-hover" style="z-index:${index}; ">
            <div class="greenCard">
                <div class="headCard"><p>${carta.name}</p></div>
                <div class="imageCard"><img src="${carta.image_url}" alt="${carta.name}"></div>
                <div class="card-body">
                    <div class="cardBox">
                        <hr>
                        <div class="flow">
                            <p>Vida: ${carta.st_heal}<p>
                         <p>Defensa: ${carta.st_defense}</p>
                           <p>Fuerza: ${carta.st_power}</p>
                            <p>Inteligencia: ${carta.st_intelligence}</p>
                            <p>Velocidad: ${carta.st_speed}</p>
                        </div>
                        <button class="btn btn-success mt-2 seleccionar-carta" data-index="${index}">Seleccionar carta</button>
                    </div>
                </div>
            </div>
        </div>    
        `;
        contenedor.appendChild(div);
    });

    // Solo mostrar modal si es turno del primer jugador
    if (!categoriaSeleccionada && turnoActual === 0) {
        const modal = new bootstrap.Modal(document.getElementById('modalCategorias'));
        modal.show();
    }

    document.querySelectorAll(".seleccionar-carta").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = parseInt(btn.dataset.index);
            const cartaSeleccionada = mazos[turnoActual].splice(index, 1)[0];

            mostrarCartaSeleccionada(`cartaJugador${turnoActual + 1}`, cartaSeleccionada);
            cartasGanadas[turnoActual].push(cartaSeleccionada);

            if (turnoActual + 1 === totalJugadores) {
                verificarGanador();
            } else {
                turnoActual++;
                iniciarRonda();
            }
        });
    });
}


    // Elegir categoría desde modal
    document.querySelectorAll(".btn-categoria").forEach(btn => {
        btn.addEventListener("click", () => {
            categoriaSeleccionada = btn.dataset.categoria;
            mostrarMensaje(`Categoría: ${btn.innerText.toUpperCase()}`);
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalCategorias'));
            modal.hide();
            iniciarRonda();
        });
    });

    function mostrarCartaSeleccionada(id, carta) {
    const contenedor = document.getElementById("cartaSeleccionadaContainer");
    const div = document.createElement("div");

    div.className = "card bg-black border border-white";
    div.style.width = "12rem";

    div.innerHTML = `
        <div class="greenCard">
            <div class="headCard"><p>${carta.name}</p></div>
            <div class="imageCard"><img src="${carta.image_url}" alt="${carta.name}"></div>
            <div class="card-body">
                <div class="cardBox">
                    <hr>
                    <div class="flow">
                        <p>Vida: ${carta.st_heal}<p>
                      p>Defensa: $cara.st_defense</p
                       <p>Fuerza: ${carta.st_power}</p>
                        <p>Inteligencia: ${carta.st_intelligence}</p>
                        <p>Velocidad: ${carta.st_speed}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    contenedor.appendChild(div);
}



    function verificarGanador() {
        const comparaciones = jugadores.map((_, index) => cartasGanadas[index].pop());

        const valores = comparaciones.map(carta => carta[categoriaSeleccionada] || 0);
        const max = Math.max(...valores);
        const ganadores = valores.map((v, i) => (v === max ? i : -1)).filter(i => i !== -1);

        if (ganadores.length === 1) {
            mostrarMensaje(`${jugadores[ganadores[0]]} gana la ronda`);
        } else {
            mostrarMensaje(`¡Empate ${ganadores.map(i => jugadores[i]).join(", ")}!`);
        }

        // Reiniciar para la siguiente ronda
        setTimeout(() => {
            turnoActual = 0;
            categoriaSeleccionada = null;
            iniciarRonda();
        }, 3000);


    }

    function mostrarMensaje(texto) {
        const mensaje = document.createElement("div");
        mensaje.style.display="block"
        mensaje.className = "alert alert-dark text-center fs-3 position-fixed top-50 start-50 translate-middle";
        mensaje.innerText = texto;
        document.body.appendChild(mensaje);
        setTimeout(() => mensaje.remove(), 4000);
    }

    function mostrarMensajeTurno(texto) {
        const mensaje = document.createElement("div");
        mensaje.className = "alert alert-dark text-center fs-3 position-fixed bottom-100 translate-middle";
        mensaje.innerText = texto;

        document.body.appendChild(mensaje);
        setTimeout(() => mensaje.remove(), 4000);
    }
    

    iniciarRonda();

getData()


});
