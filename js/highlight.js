const linguagem = document.querySelector('[data-linguagem]')
const areaDoCodigo = document.querySelector('[data-editorDeCodigo]')
const btnHighlight = document.querySelector('[data-aplicarHighlight]')

function aplicarHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `
    <code class="editor hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código">function test(){}</code>
    `
    areaDoCodigo.querySelector('.editor').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('.editor'))
}

btnHighlight.addEventListener('click', () => {
    aplicarHighlight()
})