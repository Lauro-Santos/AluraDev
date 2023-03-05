const tagCor = document.querySelector('[data-seletorDeCor]')
const fundo = document.querySelector('[data-fondoEditor]')

const exportar = document.querySelector('[data-exportar]')

function alterarCorDeFundo() {
    const cor = tagCor.value
    fundo.style.background = cor
}

tagCor.addEventListener('focusout', () => {
    alterarCorDeFundo()
})

function downloadImageCode() {
    
}

exportar.addEventListener('click', () => {
    //downloadImageCode()
    console.log(exportar.textContent)
})
