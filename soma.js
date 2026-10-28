function somar() {
  var a = Number(document.getElementById("n1").value);
  var b = Number(document.getElementById("n2").value);
  document.getElementById("resultado").innerText = "Resultado: " + (a + b);
}
