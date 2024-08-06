const input = document.querySelector("#input");
const btn = document.querySelector("#crear");
const main = document.querySelector("#main");
const btnBorrar = document.querySelector("#limpiar");

function crear() {
    const tarea = document.createElement("div");
    tarea.classList.add("lista");
    tarea.innerText = input.value;
    main.appendChild(tarea);
    input.value = "";

    const tach = document.createElement("button");
    tach.innerText = "❌";
    tach.classList.add("tach");
    tarea.appendChild(tach);

    const quit = document.createElement("button");
    quit.innerText = "✔️";
    quit.classList.add("quit");
    tarea.appendChild(quit);
}

function BorrarTexto() {
    main.innerHTML = "";
}

function BorrarElemento(e) {
    if (e.target.innerText === "❌") {
        main.removeChild(e.target.parentElement);
    }
}

function tacharTarea(e) {
    if (e.target.innerText === "✔️") {
        e.target.parentElement.style.textDecorationLine = "line-through";
    }
}

btn.addEventListener("click", crear);
btnBorrar.addEventListener("click", BorrarTexto);
main.addEventListener("click", BorrarElemento);
main.addEventListener("click", tacharTarea);
