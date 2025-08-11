// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let amigoSecreto;
let maximoAmigos = 10;


function agregarAmigo() {
    listaAmigos.push(document.getElementById("amigo").value);
    console.log(listaAmigos);

    document.getElementById("amigo").value = "";
    mostrarAmigos();
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });

    // Solo mostrar el resultado si ya se sorteó
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoSecreto ? `<li>El elegido es ${amigoSecreto}</li>` : "";
}

function textoElemento(elemento, texto) {
    let elementoHtml = document.getElementById(elemento);
    elementoHtml.textContent = texto;
    return;
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        console.log("No hay amigos para sortear.");
        return;
    }

    amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    console.log("El amigo secreto es: " + amigoSecreto);
    mostrarAmigos();
}
