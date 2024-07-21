// Função para verificar o estado do texto_cod e atualizar a visibilidade dos elementos
function verificarEntrada() {
    const inputTexto = document.querySelector('.texto_cod').value;
    const outputTexto = document.querySelector('.texto_decod');
    const btnCopiar = document.querySelector('.btn-copiar');
    const imgApresentacao = document.querySelector('.img_apresentacao');

    if (inputTexto.trim() === '' && outputTexto.value.trim() === '') {
        outputTexto.style.display = 'none';
        btnCopiar.style.display = 'none';
        imgApresentacao.style.display = 'block';
    } else {
        outputTexto.style.display = 'block';
        btnCopiar.style.display = 'block';
        imgApresentacao.style.display = 'none';
    }
}



// Função para codificar o texto
function codificar() {
    const inputTexto = document.querySelector('.texto_cod').value;
    const outputTexto = document.querySelector('.texto_decod');

    const chaves = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoCodificado = inputTexto;
    for (const [letra, substituto] of Object.entries(chaves)) {
        textoCodificado = textoCodificado.replace(new RegExp(letra, 'g'), substituto);
    }

    outputTexto.value = textoCodificado;
    document.querySelector('.texto_cod').value = '';
    verificarEntrada();
}

// Função para decodificar o texto
function decodificar() {
    const inputTexto = document.querySelector('.texto_cod').value;
    const outputTexto = document.querySelector('.texto_decod');

    const chaves = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDecodificado = inputTexto;
    for (const [substituto, letra] of Object.entries(chaves)) {
        textoDecodificado = textoDecodificado.replace(new RegExp(substituto, 'g'), letra);
    }

    outputTexto.value = textoDecodificado;
    document.querySelector('.texto_cod').value = '';
    verificarEntrada();
}

// Função para copiar o texto decodificado
function copiar() {
    const textoDecodificado = document.querySelector('.texto_decod');
    textoDecodificado.select();
    document.execCommand('copy');
   // alert('Texto copiado!');
    textoDecodificado.value = '';
    verificarEntrada();
}

// Adiciona um evento de input para verificar a entrada de texto
document.querySelector('.texto_cod').addEventListener('input', verificarEntrada);

// Inicializa o estado dos elementos
verificarEntrada();




