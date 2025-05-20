var elementosDuvida = document.querySelectorAll (".profissional");

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener("click", function () {
        duvida.classList.toggle("ativa");
    });
});