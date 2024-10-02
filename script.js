document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript carregado com sucesso!");

    const imagens = document.querySelectorAll("img");
    imagens.forEach((imagem) => {
        imagem.addEventListener("click", function() {
            alert("Você clicou na imagem: " + this.alt);
        });
    });
});

    console.log("JavaScript carregado com sucesso!");
