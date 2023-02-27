const linguagem = document.querySelector('[data-linguagem]')
const areaDoCodigo = document.querySelector('[data-areaDoCodigo]')
const btnHighlight = document.querySelector('[data-aplicarHighlight]')

function aplicarHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `
    <code class="editor hljs ${linguagem}" aria-label="Editor de código" autofocus contenteditable="true" data-editor></code>
    `
    areaDoCodigo.querySelector('code').textContent = codigo
    console.log(areaDoCodigo)
    
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

btnHighlight.addEventListener('click', () => {
    aplicarHighlight()
})
