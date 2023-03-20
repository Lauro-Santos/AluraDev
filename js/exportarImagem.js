var node = document.querySelector('[data-fondo-editor]');
const botaoExportar = document.querySelector("[data-exportar]")

function htmlToImage() {
    domtoimage.toPng(node)
        .then(function (dataUrl) {
            // var img = new Image();
            // img.src = dataUrl;
            // document.body.appendChild(img);
            document.querySelector("[data-imagem]").src = dataUrl
            imgUrl = dataUrl
        })
        .catch(function (error) {
            console.error('Opa, deu algo errado aqui!', error);
        });
}

function imgDownload() {
    var a = document.createElement('a')
    a.href = imgUrl
    a.download = "code.png"
    a.click()
    document.querySelector("[data-poupop]").style.display = "none"
}

botaoExportar.addEventListener("click", () => {
    document.querySelector("[data-poupop]").style.display = "block"
    htmlToImage()
})

document.querySelector("[data-fechar]").addEventListener("click", () => {
    document.querySelector("[data-poupop]").style.display = "none"
})
