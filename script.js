document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript carregado com sucesso!");

    setTimeout(function() {
        document.title = "Título Alterado!";
        console.log("Título da página foi alterado.");
    }, 2000);

    const imagens = document.querySelectorAll("img");
    imagens.forEach((imagem) => {
        imagem.addEventListener("click", function() {
            alert("Você clicou na imagem: " + this.alt);
        });
    });
});

    console.log("JavaScript carregado com sucesso!");
