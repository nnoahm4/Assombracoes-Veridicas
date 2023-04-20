/* sangue */
var sangue = document.getElementById("sangue");

for (var i = 0; i < 20; i++) {
	var pingo = document.createElement("div");
	pingo.classList.add("sangue-pingando");
	pingo.style.left = Math.random() * 100 + "%";
	pingo.style.animationDelay = (Math.random() * 2) + "s";
	sangue.appendChild(pingo);
}


/* botão flutuante */
var botao = document.getElementById("btn-opcoes");
var opcoes = document.getElementById("opcoes");

botao.onclick = function() {
    if (opcoes.style.display === "none") {
        opcoes.style.display = "block";
    } else {
        opcoes.style.display = "none";
    }
}