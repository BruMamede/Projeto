function adicionarTarefa() {
  const titulo = document.getElementById("titulo").value;

  const lista = document.getElementById("lista");

  const li = document.createElement("li");
  li.textContent = titulo;

  lista.appendChild(li);
}