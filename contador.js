var contagem = 0;

function mostrar() {
  document.getElementById("valor").innerText = contagem;
}

function mudar(n) {
  contagem = contagem + n;
  mostrar();
}

function zerar() {
  contagem = 0;
  mostrar();
}
