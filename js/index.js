const tagCor = document.querySelector('[data-seletorDeCor]')
const fundo = document.querySelector('[data-fondoEditor]')

function alterarCorDeFundo() {
    const cor = tagCor.value
    fundo.style.background = cor
}

tagCor.addEventListener('focusout', () => {
    alterarCorDeFundo()
})

