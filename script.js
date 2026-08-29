// ===== Contador =====
let contador = 0;
const contadorEl = document.getElementById('contador');

function incrementar() {
    contador++;
    actualizarContador();
}

function decrementar() {
    contador--;
    actualizarContador();
}

function resetear() {
    contador = 0;
    actualizarContador();
}

function actualizarContador() {
    contadorEl.textContent = contador;
}

// ===== Reloj en tiempo real =====
function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    document.getElementById('reloj').textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();

// ===== Lista de tareas =====
const tareaInput = document.getElementById('tareaInput');
const listaTareas = document.getElementById('listaTareas');

function agregarTarea() {
    const texto = tareaInput.value.trim();
    if (texto === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${texto}</span>
        <button onclick="this.parentElement.remove()">✕</button>
    `;
    listaTareas.appendChild(li);
    tareaInput.value = '';
}

// Permitir agregar con Enter
tareaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') agregarTarea();
});