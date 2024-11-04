document.querySelector("span").onclick = () => {
    document.body.classList.toggle("dark-mode")
}


const galeriaModal = document.querySelector(".galeria-modal")

const imagem = document.querySelector(".galeria-modal img")

function fecharGaleria() {
    galeriaModal.style.display = "none"
    imagem.style.transform = "scale(0)"
}

function abrirGaleria(src) {
    galeriaModal.style.display = "block"
    imagem.style.transform = "scale(1)"
    imagem.src = src
}