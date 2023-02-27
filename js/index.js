const tagCor = document.querySelector('[data-seletorDeCor]')
const fundo = document.querySelector('[data-fondoEditor]')

const editor = document.querySelector('[data-editor]')

function alterarCorDeFundo() {
    const cor = tagCor.value
    fundo.style.background = cor
}

tagCor.addEventListener('focusout', () => {
    alterarCorDeFundo()
})
