const linguagem = document.querySelector('[data-linguagem]')
const areaDoCodigo = document.querySelector('[data-editorDeCodigo]')
const btnHighlight = document.querySelector('[data-aplicarHighlight]')

function aplicarHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `
    <code class="editor hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código">function test(){}</code>
    `
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

btnHighlight.addEventListener('click', () => {
    aplicarHighlight()
})