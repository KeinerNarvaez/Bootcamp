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
        { name: "Alien X", image_url: "./assest/image/aliens/Alien_X_.png", st_heal: 500, st_defense: 400, st_power: 600, st_inteligence: 300, st_speed: 200 },
        { name: "Acuatico", image_url: "./assest/image/aliens/acuatico.png", st_heal: 450, st_defense: 500, st_power: 550, st_inteligence: 250, st_speed: 300 },
        { name: "Diamante", image_url: "./assest/image/aliens/Diamante.png", st_heal: 400, st_defense: 300, st_power: 350, st_inteligence: 500, st_speed: 700 },
        { name: "El peor", image_url: "./assest/image/aliens/El peor.png", st_heal: 400, st_defense: 300, st_power: 350, st_inteligence: 500, st_speed: 700 },
        { name: "Four Arms", image_url: "./assest/image/aliens/bestia.png", st_heal: 450, st_defense: 500, st_power: 550, st_inteligence: 250, st_speed: 300 },
        { name: "Ultra T", image_url: "./assest/image/aliens/Ultra T.png", st_heal: 400, st_defense: 300, st_power: 350, st_inteligence: 500, st_speed: 700 },
        { name: "Alien X", image_url: "./assest/image/aliens/Alien_X_.png", st_heal: 500, st_defense: 400, st_power: 600, st_inteligence: 300, st_speed: 200 },
        { name: "Bestia", image_url: "./assest/image/aliens/bestia.png", st_heal: 450, st_defense: 500, st_power: 550, st_inteligence: 250, st_speed: 300 },
        { name: "XLR8", image_url: "./assest/image/aliens/XLR8OS 1.png", st_heal: 400, st_defense: 300, st_power: 350, st_inteligence: 500, st_speed: 700 },
        { name: "Alien X", image_url: "./assest/image/aliens/Alien_X_.png", st_heal: 500, st_defense: 400, st_power: 600, st_inteligence: 300, st_speed: 200 },
        { name: "Four Arms", image_url: "./assest/image/aliens/bestia.png", st_heal: 450, st_defense: 500, st_power: 550, st_inteligence: 250, st_speed: 300 },  
        { name: "frio", image_url: "./assest/image/aliens/frio.png", st_heal: 450, st_defense: 500, st_power: 550, st_inteligence: 250, st_speed: 300 },
        { name: "Fantasmatico", image_url: "./assest/image/aliens/Fantasmatico.png", st_heal: 400, st_defense: 300, st_power: 350, st_inteligence: 500, st_speed: 700 },
        { name: "Ultra T", image_url: "./assest/image/aliens/Ultra T.png", st_heal: 400, st_defense: 300, st_power: 350, st_inteligence: 500, st_speed: 700 },
        { name: "Diamante", image_url: "./assest/image/aliens/Diamante.png", st_heal: 400, st_defense: 300, st_power: 350, st_inteligence: 500, st_speed: 700 },
        { name: "El peor", image_url: "./assest/image/aliens/El peor.png", st_heal: 400, st_defense: 300, st_power: 350, st_inteligence: 500, st_speed: 700 },
        { name: "Four Arms", image_url: "./assest/image/aliens/bestia.png", st_heal: 450, st_defense: 500, st_power: 550, st_inteligence: 250, st_speed: 300 },
        { name: "Ultra T", image_url: "./assest/image/aliens/Ultra T.png", st_heal: 400, st_defense: 300, st_power: 350, st_inteligence: 500, st_speed: 700 },
        { name: "Alien X", image_url: "./assest/image/aliens/Alien_X_.png", st_heal: 500, st_defense: 400, st_power: 600, st_inteligence: 300, st_speed: 200 },
          
    ];

    // Barajar y repartir cartas
    function repartirCartas(cartas, numJugadores) {
        const baraja = [...cartas].sort(() => Math.random() - 0.5);
        const cartasPorJugador = Math.max(8, Math.floor(baraja.length / numJugadores));
        const mazos = [];

        for (let i = 0; i < numJugadores; i++) {
            const inicio = i * cartasPorJugador;
            mazos.push(baraja.slice(inicio, inicio + cartasPorJugador));
        }

        return mazos;
    }

    const mazos = repartirCartas(todasLasCartas, totalJugadores);

    // Crear UI de jugadores
    for (let i = 1; i < jugadores.length; i++) {
        const number = i + 1;
        const user = document.createElement("div");
        user.className = `user${number}`;
        user.innerHTML = `<h5>${jugadores[i]}</h5>`;
        document.getElementById("users").appendChild(user);

        const count = document.createElement("div");
        count.className = `numberCard${number}`;
        count.innerHTML = `<h2>${mazos[i].length}</h2>`;
        document.getElementById("dataCardUser").appendChild(count);
    }

    function iniciarRonda() {
    mostrarMensaje(`Turno de: ${jugadores[turnoActual]}`);

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
        div.className = "card bg-black border border-white carta-hover";
        div.style.width = "16rem";
        div.style.margin = "10px";

        div.innerHTML = `
            <div class="greenCard">
                <div class="headCard"><p>${carta.name}</p></div>
                <div class="imageCard"><img src="${carta.image_url}" alt="${carta.name}"></div>
                <div class="card-body">
                    <div class="cardBox">
                        <hr>
                        <div class="flow">
                            <p>Vida: ${carta.st_heal}</p>
                            <p>Defensa: ${carta.st_defense}</p>
                            <p>Fuerza: ${carta.st_power}</p>
                            <p>Inteligencia: ${carta.st_inteligence}</p>
                            <p>Velocidad: ${carta.st_speed}</p>
                        </div>
                        <button class="btn btn-success mt-2 seleccionar-carta" data-index="${index}">Seleccionar carta</button>
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
                        <p>Vida: ${carta.st_heal}</p>
                        <p>Defensa: ${carta.st_defense}</p>
                        <p>Fuerza: ${carta.st_power}</p>
                        <p>Inteligencia: ${carta.st_inteligence}</p>
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
            mostrarMensaje(`¡Empate entre ${ganadores.map(i => jugadores[i]).join(", ")}!`);
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
        mensaje.className = "alert alert-dark text-center fs-3 position-fixed top-50 start-50 translate-middle";
        mensaje.innerText = texto;
        document.body.appendChild(mensaje);
        setTimeout(() => mensaje.remove(), 2000);
    }

    iniciarRonda();
});
