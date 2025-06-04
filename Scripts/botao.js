function abrirFechar() {
    var maisTexto = document.getElementById("mais");
    var botaoTexto = document.getElementById("meuBotao");

    if (maisTexto.style.display === "none") {

        botaoTexto.innerHTML = "Ver Menos";
        maisTexto.style.display = "inline";
    } else {
        botaoTexto.innerHTML = "Ver Mais";
        maisTexto.style.display = "none";
    }
}