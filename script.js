document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-images img");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Passa para a próxima imagem
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Volta para a imagem anterior
        showImage(currentIndex);
    }

    // Mostra a primeira imagem ao carregar a página
    showImage(currentIndex);

    // Adiciona eventos de clique
    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    // Permite a navegação pelo teclado (setas esquerda/direita)
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            nextImage();
        } else if (event.key === "ArrowLeft") {
            prevImage();
        }
    });

    // Alterna automaticamente as imagens a cada 5 segundos
    setInterval(nextImage, 5000);
});
